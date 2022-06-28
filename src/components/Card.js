function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="img/heart-unliked.svg" alt="Unliked" />
            </div>

            <img width={133} height={112} src="/img/sneakers/green.svg" alt="Sneakers"/>
            <h5>OWN MORE SNEAKERS UwU</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg"/>
                </button>
            </div>
        </div>
    );
}

export default Card;