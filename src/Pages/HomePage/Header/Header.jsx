import "./Header.css"

import  About  from "../../AboutPage/AboutHader/AboutHader.jsx"

import Logo from "../../../img/Logo.png"
import heart from "../../../img/heart.svg"
import admin_logo from "../../../img/admin-logo.svg"
import basket from "../../../img/basket.svg"

function Header () {


  return (
    <section className="site-header">

      <div className="site-header__open-menu">
        <ul className="site-header-open-list">
          <li className="site-header__open-item open-menu-first-img">
            <a href="#" className="site-header__open-link">Войти</a>
          </li>
          <li className="site-header__open-item open-menu-first-second">
            <a href="#" className="site-header__open-link">Регистрация</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Избранное</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Магазины</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Акции</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Доставка 
и оплата</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Каталог запчастей</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Каталог ТО</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Шины </a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Диски</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Аккумуляторы</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Автомасла</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Автолампы</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Аксессуары</a>
          </li>
          <li className="site-header__open-item">
            <a href="#" className="site-header__open-link">Санкт-Петербург, ул Большая Конюшенная, д 19</a>
          </li>
        </ul>
      </div>

      <div className="container">

        <div className="site-header__top">

          <div className="menu-wrapper">
            <button className="hamburgaer-menu"></button>
          </div>

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
            <img className="site-header__logo" src={Logo} alt="Logo img" width="101" height="51" />
          </a>

          <div className="site-header__user-conciseness">
            <span className="site-header__address">Санкт-Петербург, ул <br/>Большая Конюшенная, д 19</span>

            <div className="site-header__user-purchase">
              <a className="site-header__user-conciseness-link" href="#">
                <img src={heart} width="25" height="22" alt="a"/>
              </a>

              <a className="site-header__user-conciseness-link" href="#">
                <img src={admin_logo} width="22" height="22" alt="a" />
              </a>  

              <a className="site-header__user-conciseness-link" href="#">
                <img src={basket} width="29" height="25" alt="a"/>
                <span className="shopping">1</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="site-header__bottom">
        <div className="container header__container">
          <ul className="site-header__bottom-list">
            <li className="site-header__bottom-item">
              <a onClick to="#" className="site-header_bottom-link">Каталог запчастей</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Каталог ТО</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link header-bootom-link-active">Шины</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Диски</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Аккумуляторы</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Автомасла</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Автолампы</a>
            </li>
            <li className="site-header__bottom-item">
              <a onClick href="#" className="site-header_bottom-link">Аксессуары</a>
            </li>
          </ul>
          <span className="navbar-overflow"></span>
        </div>
      </div>

    </section>
  )
}

export default Header