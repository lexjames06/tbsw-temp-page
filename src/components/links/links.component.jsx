import React from 'react';
import data from '../../assets/data/data';

import './links.styles.scss';

const Links = () => (
    <form className='links' target='_blank'>
        {data.map(link => {
            if (link.type === 'button') {
                return (
                    <button
                        key={link.name}
                        className='link'
                        type='submit'
                        formaction={link.link}
                    >
                        <h2>{link.name}</h2>
                    </button>
                );
            }
        })}
    </form>
);

export default Links;
