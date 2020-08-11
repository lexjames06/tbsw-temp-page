import React from 'react';
import Title from '../title/title.component';
import Links from '../links/links.component';
import Socials from '../socials/socials.component';

import './body.styles.scss';

const Body = () => (
    <div className='body'>
        <Title />
        <Links />
        <Socials />
    </div>
);

export default Body;