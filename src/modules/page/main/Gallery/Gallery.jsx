import React from 'react';

import './Gallery.scss'

import img from '../../../../public/img/galleryItem.png'

export function Gallery() {
    return (
        <div class='gallery'>
            <h2 class='gallery__title'>Коллекции</h2>
            <div class='gallery__list'>
                <a href="#" class='item'>
                    <img class='item__img' src={img} alt="картинка" />
                    <h3 class='item__text'>Barbie</h3>
                </a>

                <a href="#" class='item'>
                    <img class='item__img' src={img} alt="картинка" />
                    <h3 class='item__text'>Barbie</h3>
                </a>

                <a href="#" class='item'>
                    <img class='item__img' src={img} alt="картинка" />
                    <h3 class='item__text'>Barbie</h3>
                </a>
            </div>
        </div>
    );
};