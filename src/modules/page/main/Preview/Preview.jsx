import React from 'react';

import s from './Preview.module.scss'

import img from '../../../../public/img/preview.png'

export function Preview() {
    return (
        <div className={s.preview}>
            <img className={s.preview__img} src={img} alt='превьюшка' />
            <iframe className={s.preview__video}
                src="https://www.youtube.com/embed/X0jC2UWjoFs"
                title="Огонь. Для медитации. Для снятия стресса. Для сна. Психолог Николай Смирнов"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};