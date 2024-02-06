import React from 'react';

import s from './Preview.module.scss'

import img from '../../../../public/img/preview.png'

export function Preview() {
    return (
        <img className={s.img} src={img} alt='превьюшка' />
    );
};