# ui-components

Components library for react projects

Current version 1.3.15

## To run local
```bash
yarn install
yarn storybook
```

## Usage

####Quick start
```jsx harmony
import React from 'react';
import { Grid } from 'ui-components';

function MyComponentWithGrid() {
  return <Grid>Grid content</Grid>;
}

export default MyComponentWithGrid;
```

####CSS Base

```jsx harmony
import 'ui-components/dist/base.css';
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
import { Grid } from 'ui-components';
import style from 'ui-components/dist/styles/GridStyle.module.css';

function MyComponentWithGrid() {
  return <Grid style={style}>Grid content</Grid>;
}

export default MyComponentWithGrid;
```

