import React from 'react';
import data from '../../assets/data/data';
import spotify from '../../assets/icons/spotify.png'
import youtube from '../../assets/icons/youtube.png'
import apple from '../../assets/icons/apple.png'

import './links.styles.scss';

const Links = () => (
    <div className='links'>
        {data.map(link => {
            if (link.type === 'button') {
                return (
                    <a  className='link' key={link.name} href={link.link} target='_blank' rel="noopener noreferrer">
                        <img id='one' src={getLinkIcon(link)} alt='' />
                        <h2>{link.name}</h2>
                        <img id='two' src={getLinkIcon(link)} alt='' />
                    </a>
                );
            }
        })}
    </div>
);

function getLinkIcon(link) {
    return link.name === 'Apple Podcast' ?
        apple :
        link.name === 'YouTube' ?
            youtube :
            spotify;
}

export default Links;
