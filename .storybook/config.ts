//import 'storybook-addon-specifications/register';
//import * as enzyme from 'enzyme';
//import * as Adapter from 'enzyme-adapter-react-16';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


// automatically import all files ending in *.stories.tsx in src/components
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(withKnobs);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

//enzyme.configure({ adapter: new Adapter() });