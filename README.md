# ui-react

Components library for react projects

Current version 1.3.15

## Installation

```bash
yarn add @starladder/ui-react
npm i -D @starladder/ui-react
```

## To run local
```bash
yarn install
yarn storybook
```

## Usage

####Quick start
```jsx harmony
import React from 'react';
import { Grid } from '@starladder/ui-react';

function MyComponentWithGrid() {
  return <Grid>Grid content</Grid>;
}

export default MyComponentWithGrid;
```

####CSS Base

```jsx harmony
import '@starladder/ui-react/dist/base.css';
```

base.css consist of
- normalize
- text classes
- css-variables
- simple-text
- google font (Roboto) as --main-font

####Basic CSS-modules styles for each component

```jsx harmony
import React from 'react';
import { Grid } from '@starladder/ui-react';
import style from '@starladder/ui-react/dist/styles/GridStyle.module.css';

function MyComponentWithGrid() {
  return <Grid style={style}>Grid content</Grid>;
}

export default MyComponentWithGrid;
```

