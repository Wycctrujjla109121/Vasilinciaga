import React from 'react';

import './Sorted.scss'

export function Sorted() {
    return (
        <div class='sorted'>
            <div class='sorted__list'>
                <h2 class='sorted__title'>разделы</h2>
                <div class='sorted__info'>
                    <a href="#" class='sorted__section'>
                        new drop
                        <svg class='sorted__arrow' xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                            <path d="M1 0.727272L7.54545 0.727272M7.54545 0.727272L7.54545 7.27273M7.54545 0.727272L1 7.27272" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#" class='sorted__section sorted__section_red'>
                        sale
                        <svg class='sorted__arrow sorted__arrow_red' xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                            <path d="M1 0.727272L7.54545 0.727272M7.54545 0.727272L7.54545 7.27273M7.54545 0.727272L1 7.27272" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class='sorted__list'>
                <h2 class='sorted__title'>Линейки</h2>
                <div class='sorted__info'>
                    <div>
                        <input id='ruler_1' class='sorted__ruler_radio' defaultChecked name='ruler' type='radio' />
                        <label htmlFor='ruler_1' class='sorted__ruler'>все</label>
                    </div>
                    <div>
                        <input id='ruler_2' class='sorted__ruler_radio' name='ruler' type='radio' />
                        <label htmlFor='ruler_2' class='sorted__ruler'>VASILINCIAGA</label>
                    </div>
                    <div>
                        <input id='ruler_3' class='sorted__ruler_radio' name='ruler' type='radio' />
                        <label htmlFor='ruler_3' class='sorted__ruler'>Minimalism</label>
                    </div>
                </div>
            </div>

            <div class='sorted__list'>
                <h2 class='sorted__title'>категории</h2>
                <div class='sorted__info'>
                    <div class='sorted__category'>
                        <input id='category_1' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_1' class='sorted__category_label'>Футболки</label>
                    </div>
                    <div class='sorted__category'>
                        <input id='category_2' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_2' class='sorted__category_label'>Лонгсливы</label>
                    </div>
                    <div class='sorted__category'>
                        <input id='category_3' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_3' class='sorted__category_label'>Свитшоты</label>
                    </div>
                    <div class='sorted__category'>
                        <input id='category_4' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_4' class='sorted__category_label'>Худи</label>
                    </div>
                    <div class='sorted__category'>
                        <input id='category_5' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_5' class='sorted__category_label'>Брюки</label>
                    </div>
                    <div class='sorted__category'>
                        <input id='category_6' class='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_6' class='sorted__category_label'>Аксессуары</label>
                    </div>
                </div>
            </div>
        </div>
    );
};