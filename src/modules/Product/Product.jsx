import React from 'react';

import s from './Product.module.scss'

export function Product({ img, name, priceOld, priceNew, sizes }) {
    return (
        <div className={s.product}>
            <div className={s.preview}>
                <img className={s.preview__img} src={img} alt={name} />
                <div className={s.preview__list}>
                    {sizes?.map(i => <p key={i} className={s.preview__item}>{i}</p>)}
                </div>
            </div>

            <div className={s.info}>
                <h2 className={s.info__title}>{name}</h2>
                <div className={s.info__prices}>
                    {
                        priceOld && <p className={s.info__price}>{priceOld}</p>
                    }
                    <p className={s.info__price + ' ' + s.info__price_new}>{priceNew}</p>
                </div>
            </div>
        </div>
    );
};