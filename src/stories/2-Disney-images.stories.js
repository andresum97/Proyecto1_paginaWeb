import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import  DisneyImage  from '../components/DisneyImage';
import imageFile from '../images/MickeyBirthday.png';
import imageFile2 from '../images/MickeyHalloween.png';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../styles/main.css';

const stories = storiesOf('Disney Image', module);
stories.addDecorator(withKnobs);

export default {
    component: DisneyImage,
    title: 'Disney Images'
};
//export const Imagen1 = () => <DisneyImage  text="Mickey & Minnie's Surprise Celebration - Join the fun before the party ends September 30,2019" image={ imageFile } color="2" textsize="1.4" />;


stories.add('Sin parametros', () => 
    <div class="promotions">
        <DisneyImage  text={text("labelnoparametros","")}  image={ imageFile } color="2" textsize="1.4"></DisneyImage>
    </div>
);

stories.add('Con parametros', () => 
    <div class="promotions">
        <DisneyImage  text={text("labelparametros","Disney New Experience in Parks")}  image={ imageFile } color={text("color","1")} textsize="1.4"></DisneyImage>
    </div>
);

stories.add('Con parametros y tamaño diferente', () => 
    <div class="promotions">
        <DisneyImage  text={text("labelparametros","Disney New Experience in Parks")}  image={ imageFile } color={text("color","2")} textsize={text("size","2")}></DisneyImage>
    </div>
);
stories.add('Con parametros y color diferente', () => 
    <div class="promotions">
        <DisneyImage  text={text("labelparametros","Disney New Experience in Parks")}  image={ imageFile2 } color={text("color","1")} textsize={text("size","2")}></DisneyImage>
    </div>
);



  