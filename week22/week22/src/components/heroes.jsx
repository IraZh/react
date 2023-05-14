import './heroes.css';

function Hero(props) {
    return (
        <div className="superheroes_card">
            <h2 className="name">{props.name}</h2>
            <div className="hero_image"><img className="image" src={props.url} alt="superheroImage"/></div>
            <div className="universe"><span>Вселенная:</span> {props.universe}</div>
            <div className="alterego"><span>Альтер эго:</span> {props.alterego}</div>
            <div className="occupation"><span>Род деятельности:</span> {props.occupation}</div>
            <div className="friends"><span>Друзья:</span> {props.friends}</div>
            <div className="superpowers"><span>Суперсилы:</span> {props.superpowers}</div>
            <div className="info">{props.info}</div>
        </div>
    );
}

export default Hero;