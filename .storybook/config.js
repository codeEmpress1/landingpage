import { configure,addDecorator ,addParameters} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';


// should only be added once
// best place is in config.js
addDecorator(withA11y)
addParameters()
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
