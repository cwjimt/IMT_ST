import React , {useMemo} from 'react';
import '../../components/Sale_order_main/Order_select_page.scss';
import Data from'../../components/global/data';


function Order_select_page() {

    const Promotion =[
    
        {
            id: 1,
            name : '참치콤보',
            subtitle : '참치 2스쿱, 치즈 2장, 음료',
            price : '5,100',
            Promotion_DT : '09.01~10.31',
            count : 10
        },
        {
            id: 2,
            name : '참치콤보2',
            subtitle : '참치 2스쿱, 치즈 2장, 음료',
            price : '5,700',
            Promotion_DT : '09.01~10.31',
            count : 10
        },
        {
            id: 3,
            name : '참치콤보3',
            subtitle : '참치 2스쿱, 치즈 2장, 음료',
            price : '5,1100',
            Promotion_DT : '09.01~10.31',
            count : 10
        }
        ,
        {
            id: 4,
            name : '참치콤보4',
            subtitle : '참치 2스쿱, 치즈 2장, 음료',
            price : '5,1100',
            Promotion_DT : '09.01~10.31',
            count : 10
        }
    ]


    return (
        <div>
            <div className='main-div-size'>
                <div className='select-div-size'>
                    {Promotion.map( Promotion => (
                        <Data Promotion={Promotion}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

/*
                    <KeyData Promotion={Promotion[0]}/>
                    <KeyData Promotion={Promotion[1]}/>
                    <KeyData Promotion={Promotion[2]}/>

                        <img src={SandWich} alt="food" />
                        <p className='Select-Main-name'>참치 콤보</p>
                        <p className='Select-Main-detail'>참치 2스쿱, 치즈 2장, 음료</p>
                        <p className='Select-Main-price'>5,100</p>
                        <p className='Select-Main-PromotionDate'>09.01 ~ 10.31</p>
*/

export default Order_select_page;