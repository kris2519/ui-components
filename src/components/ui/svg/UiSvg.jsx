import React from 'react';
import classNames from 'classnames';
import style from './UiSvg.css';
const UiSvg = ({klassName, icon}) => <svg className={classNames(klassName, "ui-svg", style.svgIco, style.svgIcoNestedTest)} ><use xlinkHref={`sprite.svg#${icon}`} /></svg>;
export default UiSvg;
