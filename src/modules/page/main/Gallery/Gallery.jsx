import React from 'react';

import './Gallery.scss'

import img from '../../../../public/img/galleryItem.png'

export function Gallery() {
    return (
        <div class='gallery'>
            <h2 className='gallery__title'>Коллекции</h2>
            <div className='gallery__list'>
                <a href="#" className='item'>
                    <img className='item__img' src={img} alt="картинка" />
                    <h3 className='item__text'>Barbie</h3>
                </a>

                <a href="#" className='item'>
                    <img className='item__img' src={img} alt="картинка" />
                    <h3 className='item__text'>Barbie</h3>
                </a>

                <a href="#" className='item'>
                    <img className='item__img' src={img} alt="картинка" />
                    <h3 className='item__text'>Barbie</h3>
                </a>
            </div>
        </div>
    );
};