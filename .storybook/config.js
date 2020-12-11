import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { addReadme } from 'storybook-readme';

import 'styles/import.css';
import 'styles/fonts.css';
// load our stories
function loadStories() {
  require('./stories');
}

// withInfo settings
addDecorator(
  withInfo({
    inline: false,
    header: false
  })
);

addDecorator(withKnobs);
addDecorator(addReadme);

//configure storybook module
configure(loadStories, module);
