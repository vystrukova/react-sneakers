

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png"/>
            <div>
                <h3 className="text-uppercase">NFT Sneakers</h3>
                <p className="opacity-5">make steps</p>
            </div>
        </div>
          <ul className="headerRight d-flex">
              <li className="mr-30">
                  <img width={18} height={18} src="/img/cart.svg"/>
                  <span>10000 руб.</span>
              </li>
              <li>
                  <img width={20} height={20} src="/img/user.png"/>

              </li>
          </ul>
      </header>

        <div className="content p-40">
            <h1 className="mb-40">Кроссовки</h1>

            <div className="d-flex">

                <div className="card">
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


                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/walker.svg" alt="Sneakers"/>
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

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/runner.svg" alt="Sneakers"/>
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

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/trainer.svg" alt="Sneakers"/>
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

            </div>

        </div>

    </div>
  );
}

export default App;
