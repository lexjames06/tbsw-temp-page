import React from 'react';
import ground from '../../assets/images/ground.png';
import bushes from '../../assets/images/bushes.png';
import clouds from '../../assets/images/clouds.png';
import Facebook from '../../assets/svgs/facebook';
import Twitter from '../../assets/svgs/twitter';
import Instagram from '../../assets/svgs/instagram';

import './background.styles.scss';

const Background = () => (
    <div className='background'>
        <div className='sky'>
            <img id='clouds' src={clouds} alt='' />
        </div>
        <div className='body'>
            <h1>
                The{' '}
                <span>
                    B<span id='dash'>-</span>Side Word
                </span>{' '}
                Podcast
            </h1>
            <form className='links' target='_blank'>
                <button className='link' type='submit' formaction='https://podcasts.apple.com/us/podcast/the-b-side-word-podcast/id1445499910'>
                    <h2>Apple Podcast</h2>
                </button>
                <button className='link' type='submit' formaction='https://open.spotify.com/show/0aTwuWytdDYL9rpPjvFS2J'>
                    <h2>Spotify</h2>
                </button>
                <button className='link' type='submit' formaction='https://www.youtube.com/channel/UCA3toQ2QZauF7BJowLniLgQ'>
                    <h2>YouTube</h2>
                </button>
            </form>
            <div className='social-links'>
                <a
                    href='https://www.facebook.com/thebsideword/'
                    target='_blank'
                >
                    <Facebook />
                </a>
                <a href='https://twitter.com/TheBSideWord' target='_blank'>
                    <Twitter />
                </a>
                <a
                    href='https://www.instagram.com/thebsideword/'
                    target='_blank'
                >
                    <Instagram />
                </a>
            </div>
        </div>
        <div className='ground-elements'>
            <img id='bushes' src={bushes} alt='' />
            <img id='ground' src={ground} alt='' />
        </div>
    </div>
);

export default Background;
