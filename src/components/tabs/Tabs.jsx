// @flow

import React, { createContext, useState, useContext, useEffect } from 'react';
import classNames from 'classnames';

const TabContext = createContext();

export function TabsProvider({
  initialValue,
  children,
  style = {},
  forceValue = null,
  onTabChange = () => {}
}: {
  initialValue: string | number,
  children: any,
  style: {},
  forceValue: string | number,
  onTabChange: (string | number) => void
}) {
  const [activeTab, changeTab] = useState(initialValue);
  const tabProviderValue = { activeTab, changeTab, style };

  useEffect(() => {
    if (forceValue != null) {
      changeTab(forceValue);
      if (typeof onTabChange === 'function') {
        onTabChange(forceValue);
      }
    }
  }, [forceValue]);

  return <TabContext.Provider value={tabProviderValue}>{children}</TabContext.Provider>;
}

export function Tabs({ style = {}, children }: { style: {}, children: any }) {
  return (
    <div className={style.tabsHolder}>
      <ul className={style.tabs}>
        {React.Children.map(
          children,
          item =>
            item != null &&
            React.cloneElement(
              <li className={style.tab} key={item.value}>
                {item}
              </li>,
              { value: item.value, key: item.value }
            )
        )}
      </ul>
    </div>
  );
}

export function TabButton({
  value,
  style = {},
  onClick = () => {},
  children
}: {
  value: string | number,
  style: {},
  onClick: (string | number) => void,
  children: any
}) {
  const tabContext = useContext(TabContext);

  const handleClick = () => {
    tabContext.changeTab(value);
    onClick(value);
  };

  return (
    <button
      type="button"
      className={classNames(style.tabButton, { [style.isActive]: tabContext.activeTab === value })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, style = {}, children }: { value: string | number, style: {}, children: any }) {
  const tabContext = useContext(TabContext);
  return tabContext.activeTab === value && <div className={style.tabPanel}>{children}</div>;
}
