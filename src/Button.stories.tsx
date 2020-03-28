import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';


import { button } from '@storybook/addon-knobs';

const label = 'Do Something';
const handler = () => console.log('foobar');
const groupId = 'GROUP-ID1';



storiesOf('Button', module)
    .add('simple button', () => (
        <div>
            <Button text="Click me twice" />
            {button(label, handler, groupId)}
        </div>
    ));