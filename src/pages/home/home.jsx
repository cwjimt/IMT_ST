import React, { Component } from 'react';
import "./home-id.scss";
import "./home-class.scss"
import SubwayLogo from '../../assets/images/home/logo-main.png';
import BtnHelp from '../../assets/images/home/btn-help.png';
import MainVisual from '../../assets/images/home/main-visual-02.png';
import ToggleKor from '../../assets/images/home/toggle-kor.png';
import {Link} from 'react-router-dom';

class home extends Component {
    render() {
/*
        let navigate = useNavigate();

        function HandleClick() {
            navigate("/Promotion_home");
        }
*/
        return (
            <div>
                <div id='home-flex-col'>
                    <div id='home-header-divbox'>
                        <div id='home-header-flexleft'>
                            <img src={SubwayLogo} alt="SubwayLogo" />
                        </div>
                        <div id='home-header-flexright'>
                            <div><img src={ToggleKor} alt="ToggleKor" /></div>
                            <div><img src={BtnHelp} alt="BtnHelp" /></div>
                        </div>
                    </div>
                    <div>
                        <img src={MainVisual} alt="MainArt" />
                    </div>
                    <div id='home-footer-text_divbox'>
                        <div className='home-footer-fontsize-kiosk'>
                            <p id='home-footer-kiosk_text'>키오스크 결제</p>
                            <p>신용카드/모바일상품권/써브카드/포인트/카카오페이/페이코/네이버페이</p>
                        </div>
                        <div className='home-footer-fontsize-counter'>
                            <p id='home-footer-counter_text'>카운터 결제</p>
                            <p id='home-footer-counter-detail_text'>현금 결제,  매장 할인 행사메뉴 구매,  5개 이상 메뉴 주문</p>
                        </div>
                    </div>
                    <div>
                        <div id='home-footer-order'>
                            <div>
                                <p id='home-order-text-kr'><Link to="/Sale_order_home">주문하기</Link></p>
                                <p id='home-order-text-en'>ORDER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;