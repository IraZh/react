import './tariff.scss';
function Tariff(props) {
    const {titleColor, priceColor, price, isSelected, speed} = props;
    let cardClass = '';
    if (isSelected) cardClass='selected';
    return (
<div className={`card ${cardClass}`}>
        <div className={`card_title ${titleColor}`}>Безлимитный <span>{price}</span></div>
        <div className={`card_price ${priceColor}`}>
            <div className="card__tariff-rub">руб</div>
            <div className="card__tariff-month"><span className="card__tariff-price">{price}</span> /мес</div>
        </div>
        <div className="card__volume">до {speed} Мбит/сек</div>
        <div className="card__text">Объем включенного трафика не ограничен</div>
</div>
    );
}
export default Tariff;