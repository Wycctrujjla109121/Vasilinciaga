import React from 'react';

import './Collection.scss'

import { Product } from '../../../Product/Product';

import collectionImg from '../../../../public/img/collection.png'

export function Collection() {
    return (
        <div class='collection'>
            <a class='collection__link' href="#">
                MAIN
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="1" width="25" height="25" rx="12.5" stroke="black" strokeOpacity="0.3" />
                    <path d="M8.74454 9.24561V9.24561C11.4368 9.61367 14.1654 9.63007 16.8619 9.29438L17.2536 9.24561M17.2536 9.24561L8.74454 17.7547M17.2536 9.24561L17.1391 10.3196C16.9137 12.434 16.9137 14.5663 17.1391 16.6807L17.2536 17.7547" stroke="black" strokeLinecap="square" />
                </svg>
            </a>
            <div class='collection__info'>
                <div class='collection__preview'>
                    {/* 
                    тут условие должно быть
                        <img class={s.preview__img + `${reverse ? ' ' + s.preview__img_reverse : ''}`} src={collectionImg} alt={title} /> 
                    */}
                    <img class='collection__preview__img' src={collectionImg} alt='MAIN' />
                    <Product />
                    <Product />
                </div>

                <div class='collection__list'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};