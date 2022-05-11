import React from 'react';
import './sale-order-list-css.scss';
import '../../styles/reset.scss'
import { Link } from 'react-router-dom';
import '../../styles/_variables.scss';


function Sale_order_list() {
    return (


        

        <div>
            <div id='sale-order-footer'>
                <div>
                    <div id='sale-order-result'>
                    </div>
                    <div className='flex-left'>
                        <div id='sale-order-list-form'>
                        </div>
                        <div id='sale-order-submit'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sale_order_list;