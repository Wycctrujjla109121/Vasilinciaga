import React from 'react';

import './Sorted.scss'

export function Sorted() {
    return (
        <div className='sorted'>
            <div className='sorted__list'>
                <h2 className='sorted__title'>разделы</h2>
                <div className='sorted__info'>
                    <a href="#" className='sorted__section'>
                        new drop
                        <svg className='sorted__arrow' xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                            <path d="M1 0.727272L7.54545 0.727272M7.54545 0.727272L7.54545 7.27273M7.54545 0.727272L1 7.27272" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className='sorted__section sorted__section_red'>
                        sale
                        <svg className='sorted__arrow sorted__arrow_red' xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                            <path d="M1 0.727272L7.54545 0.727272M7.54545 0.727272L7.54545 7.27273M7.54545 0.727272L1 7.27272" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className='sorted__list'>
                <h2 className='sorted__title'>Линейки</h2>
                <div className='sorted__info'>
                    <div>
                        <input id='ruler_1' className='sorted__ruler_radio' defaultChecked name='ruler' type='radio' />
                        <label htmlFor='ruler_1' className='sorted__ruler'>все</label>
                    </div>
                    <div>
                        <input id='ruler_2' className='sorted__ruler_radio' name='ruler' type='radio' />
                        <label htmlFor='ruler_2' className='sorted__ruler'>VASILINCIAGA</label>
                    </div>
                    <div>
                        <input id='ruler_3' className='sorted__ruler_radio' name='ruler' type='radio' />
                        <label htmlFor='ruler_3' className='sorted__ruler'>Minimalism</label>
                    </div>
                </div>
            </div>

            <div className='sorted__list'>
                <h2 className='sorted__title'>категории</h2>
                <div className='sorted__info'>
                    <div className='sorted__category'>
                        <input id='category_1' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_1' className='sorted__category_label'>Футболки</label>
                    </div>
                    <div className='sorted__category'>
                        <input id='category_2' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_2' className='sorted__category_label'>Лонгсливы</label>
                    </div>
                    <div className='sorted__category'>
                        <input id='category_3' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_3' className='sorted__category_label'>Свитшоты</label>
                    </div>
                    <div className='sorted__category'>
                        <input id='category_4' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_4' className='sorted__category_label'>Худи</label>
                    </div>
                    <div className='sorted__category'>
                        <input id='category_5' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_5' className='sorted__category_label'>Брюки</label>
                    </div>
                    <div className='sorted__category'>
                        <input id='category_6' className='sorted__category_checkbox' type='checkbox' />
                        <label htmlFor='category_6' className='sorted__category_label'>Аксессуары</label>
                    </div>
                </div>
            </div>
        </div>
    );
};