import React from 'react';
import ground from '../../assets/images/ground.png';
import bushes from '../../assets/images/bushes.png';
import clouds from '../../assets/images/clouds.png';

import './background.styles.scss';
import Body from '../body/body.component';
import Confetti from '../confetti';

const Background = () => (
    <div className='background'>
        <div className='sky'>
            <img id='clouds' src={clouds} alt='' />
        </div>
        <Body />
        <div className='ground-elements'>
            <img id='bushes' src={bushes} alt='' />
            <img id='ground' src={ground} alt='' />
        </div>
    </div>
);

export default Background;
