import React from 'react';
import data from '../../assets/data/data';

import Facebook from '../../assets/svgs/facebook';
import Twitter from '../../assets/svgs/twitter';
import Instagram from '../../assets/svgs/instagram';

import './socials.styles.scss';

const Socials = () => (
    <div className='social-links'>
        {data.map(link => {
            if (link.type === 'social') {
                return (
                    <a
                        key={link.name}
                        href={link.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {link.name === 'Facebook' ? (
                            <Facebook />
                        ) : link.name === 'Twitter' ? (
                            <Twitter />
                        ) : (
                            <Instagram />
                        )}
                    </a>
                );
            }
        })}
    </div>
);

export default Socials;
