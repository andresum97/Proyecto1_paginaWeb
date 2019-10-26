import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import  VacationsButtons  from '../components/VacationsButtons';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../styles/main.css';

const stories = storiesOf('Buttons of vacations', module);
stories.addDecorator(withKnobs);

export default {
    component: VacationsButtons,
    title: 'Buttons of vacations'
};



stories.add('Sin parametros', () => 
    <div class="travel">
        <div class="travelButtonArea">
            <VacationsButtons icon="fa fa-child" text={text("labelnoparametros","")} ></VacationsButtons>
        </div>
    </div>
);

stories.add('Con parametros', () => 
<div class="travel">
    <div class="travelButtonArea">
        <VacationsButtons  icon="fa fa-child" text={text("labelnoparametros","Family")} ></VacationsButtons>
    </div>
</div>
);
stories.add('multiples botones', () => 
<div class="travel">
    <div class="travelButtonArea">
        <VacationsButtons  icon="fa fa-child" text={text("label1","Family")} ></VacationsButtons>
        <VacationsButtons  icon="fa fa-child" text={text("label2","Micky")} ></VacationsButtons>
        <VacationsButtons  icon="fa fa-child" text={text("label3","Adults")} ></VacationsButtons>
    </div>
</div>
);