import React from 'react';

import './Form.scss'

import img from '../../../../public/img/form.png'
import { Privacy } from '../../../../components';

export function Form() {
    return (
        <div class='form'>
            <div class='info'>
                <h2 class='info__title'>Пишем о самом важном</h2>
                <p class='info__text'>Подписывайтесь, чтобы узнавать о новых коллекциях, поступлениях и всем-всем-всем раньше всех-всех-всех!</p>

                <ul class='list'>
                    <li class='list__item'>Новые коллекции</li>
                    <li class='list__item'>Дропы</li>
                    <li class='list__item'>Линейки</li>
                </ul>

                <Privacy />

                <a class='info__link' href="#" target='_blank'>
                    <span class='info__link_span'>
                        а еще наш телеграм
                    </span>
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1" width="25" height="25" rx="12.5" stroke="black" stroke-opacity="0.3" />
                        <path d="M8.74453 9.24512V9.24512C11.4367 9.61318 14.1654 9.62958 16.8618 9.29389L17.2536 9.24512M17.2536 9.24512L8.74453 17.7542M17.2536 9.24512L17.1391 10.3191C16.9137 12.4335 16.9137 14.5658 17.1391 16.6802L17.2536 17.7542" stroke="black" stroke-linecap="square" />
                    </svg>
                </a>
            </div>

            <img class='form__img' src={img} alt="картинка" />
        </div>
    );
};