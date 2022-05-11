import React from 'react';
import IcoAllergy from '../../assets/order-sale-promotion/ico-allergy.png';
import TopBanner from '../../assets/order-sale-promotion/img-top-banner.png';
import GoHome from '../../assets/order-sale-promotion/ico-gohome.png';
import LanEn from '../../assets/order-sale-promotion/ico-lan-eng.png';
import PromotionBox from '../../assets/order-sale-promotion/ico-promotion.png';
import HeaderBar from '../../assets/order-sale-promotion/img-bar-yellow.png';
import './sale-promotion-header-id.scss';
import './sale-promotion-header-class.scss'
import '../../styles/flex.scss';

function Sale_promotion_header() {
    return (
        <div>
            <div>
                <div id='promotion-banner-divbox'>
                    <div id='promotion-TopBanner-ico' className='flex-right'>
                            <img src={IcoAllergy} alt="Allergy" id='Top-ico-margin' />
                            <img src={LanEn} alt="LanEnglish" id='Top-ico-margin'/>
                            <img src={GoHome} alt="Gohome" id='Top-ico-margin'/>
                    </div>
                    <img src={TopBanner} alt="TopBanner" />
                </div>

                <div id='promotion-header-list' className='flex-center'>
                    <div className='promotion-header-list-margin'>
                        <img className='promotion-header-img-size' src={PromotionBox} alt="PromotionBox" />
                        <p className='promotion-header-fontsize'>테스트</p>
                        <img id="headerbar-width" src={HeaderBar} alt="Headerbar" />
                    </div>
                    
                </div>
                    <div id='promotion-select-bar' ></div>
            </div>
        </div>
    );
}

export default Sale_promotion_header;