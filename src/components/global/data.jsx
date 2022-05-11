import SandWich from '../../assets/order-sale-promotion/food/img-com-tuna.png';

function Data({Promotion}){

    
    return(
        
    <div className='MainSelect-FlexWrap'>
        <img src={SandWich} alt="food" />
        <p className='Select-Main-name'>{Promotion.name}</p>
        <p className='Select-Main-detail'>{Promotion.subtitle}</p>
        <p className='Select-Main-price'>{Promotion.price}</p>
        <p className='Select-Main-PromotionDate'>{Promotion.Promotion_DT}</p>
    </div>
    );
}

export default Data;