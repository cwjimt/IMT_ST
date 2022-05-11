import React, { Component } from 'react';
import '../styles/reset.scss';
import '../styles/flex.scss';
import '../styles/main.scss';
import "react-router-dom";
import { Link, Route } from 'react-router-dom';
import Select1 from './select1';
import ToggleKr from '../assets/images/toggle-kor.png';

// history.push
// 이미지 import 하는 법
// HTML 구조 변경
// component 분리
// component, 함수, class -> 네이밍 신경쓰기
// 


// functional component

// hook
// useState, useEffect
// useMemo, useCallback memo -> 메모이제이션
// useContext

// redux


class main extends Component {
    render() {
        return (
            <div>
                <div id='back-color'>
                    <div className='flex-left' id='main-logo'><img src="contents/mainpage/logo-main.png" alt="SUBWAY_LOGO" /></div>
                    
                    <div className='flex-right' id='header-right'>
                        
                        <img src="contents/mainpage/btn-help.png" alt="HELP" />
                    </div>
                    <div className='flex-right' id='header-right'>
                        <img src={ToggleKr} alt="TOGGLE-KOR" />
                        
                    </div>
                </div>
                <div>
                    <img src="contents/mainpage/main-visual-02.png" alt="main-visual" />
                </div>

                //a
                <div className='footer-font'>
                    <div className='flex-col' id='main-text1'>
                        <div>
                            <div>키오스크 결제</div>
                            <div className='footer-margin'>카운터 결제</div>
                        </div>
                        
                    </div>
                    <div className='flex-col' id='main-text2' >
                        <div>
                            <div>신용카드/모바일상품권/써브카드/포인트/카카오페이/페이코/네이버페이</div>
                            <div className='footer-margin'>현금 결제,  매장 할인 행사메뉴 구매,  5개 이상 메뉴 주문</div>
                        </div>
                    </div>
                </div>


                <div id='back-color'>
                    <div className='flex-center main-footer'>
                        <div id='footer-click'>
                            <h1 id='footer-order-deco'><Link to="/Select1">주문하기</Link></h1> // history.push
                            <h1 id='footer-click-second'>ORDER</h1>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default main;