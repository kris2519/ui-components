// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Table from 'components/table/Table';
import TableHeader from 'components/table/header/TableHeader';
import TableRow from 'components/table//row/TableRow';
import TableMarkdown from 'components/table/TableMarkdown.md';
import style from 'styles/modules/TableStyle.module.css';
import Accordion from 'components/accordion/Accordion';

const stories = storiesOf('UI|Table', module);

stories
  .add(
    'Table',
    () => (
      <Table style={style}>
        {null}
        <TableHeader
          row={
            (0,
            '',
            [
              {
                isHighlighted: boolean('isHighlighted', true),
                isMediaFixed: boolean('isMediaFixed', true),
                hasCustomHtml: boolean('hasCustomHtml', true),
                cellClassName: text('cellClassName', 'custom-class')
              },
              {}
            ])
          }
        >
          <span>1</span>
          {0}
          <span>0</span>
          <span>2</span>
          <span>Without table header cell text wrapper</span>
          {null}
        </TableHeader>
        <TableRow
          row={[
            {
              isHighlighted: boolean('isHighlighted', true),
              isMediaFixed: boolean('isMediaFixed', true),
              hasCustomHtml: boolean('hasCustomHtml', true),
              cellClassName: text('cellClassName', 'custom-class')
            }
          ]}
        >
          <span>1</span>
          {null}
          <span>2</span>
          <span>0</span>
          {0}
          {''}
          <span>Without table cell text wrapper</span>
          {null}
        </TableRow>
      </Table>
    ),
    {
      readme: {
        sidebar: TableMarkdown
      }
    }
  )
  .add('Table Header', () => (
    <TableHeader
      style={style}
      row={[
        {
          isHighlighted: boolean('isHighlighted', true),
          isMediaFixed: boolean('isMediaFixed', true),
          hasCustomHtml: boolean('hasCustomHtml', true),
          cellClassName: text('cellClassName', 'custom-class')
        }
      ]}
    >
      <span>1</span>
      <span>2</span>
      <span>Without table header cell text wrapper</span>
    </TableHeader>
  ))
  .add('Table Row', () => (
    <TableRow
      style={style}
      row={[
        {
          isHighlighted: boolean('isHighlighted', true),
          isMediaFixed: boolean('isMediaFixed', true),
          hasCustomHtml: boolean('hasCustomHtml', true),
          cellClassName: text('cellClassName', 'custom-class')
        }
      ]}
    >
      <span>1</span>
      <span>2</span>
      <span>Without table cell text wrapper</span>
    </TableRow>
  ));
