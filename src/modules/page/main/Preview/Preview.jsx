import React from 'react';


import img from '../../../../public/img/preview.png'

import './Preview.scss'

export function Preview() {
    return (
        <div class='preview'>
            <img class='preview__img' src={img} alt='превьюшка' />
            <iframe class='preview__video'
                src="https://www.youtube.com/embed/X0jC2UWjoFs"
                title="Огонь. Для медитации. Для снятия стресса. Для сна. Психолог Николай Смирнов"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen='true'
            />
        </div>
    );
};