import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import  AnimatedBack  from '../components/AnimatedBack';
import '../styles/main.css';

const stories = storiesOf('Animated Background', module);

export default {
    component: AnimatedBack,
    title: 'AnimatedBack'
};

stories.add('Sin parametros', () => 
    <AnimatedBack  emphazed="" text="" text2="" text3="" ></AnimatedBack>
);

stories.add('Con parametros', () => 
    <AnimatedBack emphazed="Star Wars" text=": Galaxy's Edge Is Now Open at Disney's Hollywood Studios" text2="Play Full Video  " text3="Learn More  " ></AnimatedBack>
);