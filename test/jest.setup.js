import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

registerRequireContextHook();
initStoryshots({
    suite: 'Storyshots',
    test: imageSnapshot({
            storybookUrl: 'http://localhost:3001',
        }),
});