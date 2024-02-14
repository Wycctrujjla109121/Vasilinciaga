import React from 'react';

import './Cookie.scss'

export function Cookie() {
    return (
        <div class='cookie'>
            <p class='cookie__text'>Мы используем файлы cookie</p>
            <div class='cookie__buttons'>
                <button class='cookie__button'>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="19" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9288 12.7112C26.1055 12.5345 26.1055 12.2481 25.9288 12.0714C25.7521 11.8947 25.4657 11.8947 25.289 12.0714L19.0001 18.3604L12.7111 12.0714C12.5344 11.8947 12.248 11.8947 12.0713 12.0714C11.8947 12.2481 11.8947 12.5345 12.0713 12.7112L18.3603 19.0001L12.0713 25.2891C11.8947 25.4658 11.8947 25.7522 12.0713 25.9289C12.248 26.1055 12.5344 26.1055 12.7111 25.9289L19.0001 19.6399L25.289 25.9289C25.4657 26.1055 25.7521 26.1055 25.9288 25.9289C26.1055 25.7522 26.1055 25.4658 25.9288 25.2891L19.6398 19.0001L25.9288 12.7112Z" fill="black" />
                    </svg>
                </button>
                <button class='cookie__button'>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="19" fill="black" />
                        <path d="M26.2382 13.5714L16.2858 23.5238L11.762 19" stroke="white" stroke-width="0.904762" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};