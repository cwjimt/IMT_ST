import React, { Component } from 'react';
import '../styles/reset.scss';
import '../styles/flex.scss';
import '../styles/main.scss';
import "react-router-dom";
import { Link, Route } from 'react-router-dom';
import Header from './header';

class main extends Component {
    render() {
        function click(e) {
            e.preventDefault();
            console.log(1);
            <Route path="/header">
                <Header/>
            </Route>
        }
        return (   
            <div>
                <div id='back-color'>
                    <div className='flex-left' id='main-logo'><img src="contents/mainpage/logo-main.png" alt="SUBWAY_LOGO" /></div>
                    
                    <div className='flex-right' id='header-right'>
                        
                        <img src="contents/mainpage/btn-help.png" alt="HELP" />
                    </div>
                    <div className='flex-right' id='header-right'>
                        <img src="contents/mainpage/toggle-kor.png" alt="TOGGLE-KOR" />
                        
                    </div>
                </div>
                <div>
                    <img src="contents/mainpage/main-visual-02.png" alt="main-visual" />
                </div>
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
                            <h1 onClick={click}>주문하기</h1>
                            <h1 id='footer-click-second'>ORDER</h1>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default main;