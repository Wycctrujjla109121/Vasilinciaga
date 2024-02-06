import React from 'react';

import './Product.scss'

import img from '../../public/img/product.png'

export function Product() {
    return (
        <div class='product'>
            <div class='preview'>
                <img class='preview__img' src={img} alt='Лонгслив Moto' />
                <div class='preview__list'>
                    <p class='preview__item'>s-m</p>
                    <p class='preview__item'>l-xl</p>
                </div>
            </div>

            <div class='info'>
                <h2 class='info__title'>Лонгслив Moto</h2>
                <div class='info__prices'>
                    <p class='info__price'>5 700 руб.</p>
                    <p class='info__price info__price_new'>4 200 руб.</p>
                </div>
            </div>
        </div>
    );
};