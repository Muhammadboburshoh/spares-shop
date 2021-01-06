import "./Header.css"

function Header () {

  return (
    <section className="site-header">
      <div className="container">
        <div className="site-header__top">
          <ul className="top-navmenu">
            <li className="top-navmenu__item">
              <a href="#" className="top-navmenu__link">Магазины</a>
            </li>
            <li className="top-navmenu__item">
              <a href="#" className="top-navmenu__link">Акции</a>
            </li>
            <li className="top-navmenu__item">
              <a href="#" className="top-navmenu__link">Доставка и оплата</a>
            </li>
          </ul>

          <a href="index.html">
            <img className="site-header__logo" src="./img/Logo.png" alt="Logo img" width="101" height="51" />
          </a>

          <div className="site-header__user-conciseness">
            <span className="site-header__address">Санкт-Петербург, ул <br/>Большая Конюшенная, д 19</span>

            <div className="site-header__user-purchase">
              <a href="#">
                <img src="./img/heart.svg"  width="25" height="22" alt="a"/>
              </a>

              <a href="#">
                <img src="./img/admin-logo.svg"  width="22" height="22" alt="a"/>
              </a>  

              <a href="#">
                <img src="./img/basket.svg"  width="29" height="25" alt="a"/>
                <span>1</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header