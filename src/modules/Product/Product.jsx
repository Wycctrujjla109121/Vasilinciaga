import React from 'react';

import './Product.scss'

import img from '../../public/img/product.png'

export function Product() {
    return (
        <div class='product'>
            <img class='product__img' src={img} alt='Лонгслив Moto' />

            <div class='info'>
                <div className='info__list'>
                    <h2 class='info__title'>Лонгслив Moto</h2>
                    <div class='info__prices'>
                        <p class='info__price'>5 700 руб.</p>
                        <p class='info__price info__price_new'>4 200 руб.</p>
                    </div>
                </div>
                <div className='info__sizes'>
                    <p className='info__size'>XS</p>
                    <p className='info__size'>S–M</p>
                    <p className='info__size info__size_disable'>L–XL</p>
                </div>
            </div>
        </div>
    );
};