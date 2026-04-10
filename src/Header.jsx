import "./Header.css";
import Img991Bebidas from "/assets/991Bebidas.png";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [spinner, setSpinner] = useState(true);

  return (
    <>
      <div className="header">
        <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
          <FaBars />
        </div>
        {/* Logo IMG */}
        <div className="logo">
          <img
            src={Img991Bebidas}
            alt="991Bebidas"
            onClick={() => setSpinner(!spinner)}
            className={spinner ? "spinner" : ""}
          />
        </div>

        {/*Menu de navegação*/}
        <div className="menu">
          {/* Sobre nós */}
          <div className="menu-item">
            Sobre nós <span className="arrow">▾</span>
            <div className="dropdown">
              <p>Quem somos</p>
              <p>Missão</p>
              <p>Cultura</p>
            </div>
          </div>
          {/* Produtos */}
          <div className="menu-item">
            Produtos <span className="arrow">▾</span>
            <div className="dropdown">
              <p>Cervejas</p>
              <p>Vinhos</p>
              <p>Destilados</p>
              <p>Refrigerantes</p>
              <p>Águas</p>
              <p>Energéticos</p>
              <p>Diversos</p>
            </div>
          </div>
          {/*Marcas*/}
          <div className="menu-item">
            Marcas <span className="arrow">▾</span>
            <div className="dropdown">
              <p>Ambev</p>
              <p>Coca-Cola FEMSA</p>
              <p>Heineken Brasil</p>
              <p>Grupo Petrólis</p>
              <p>Diageo</p>
              <p>Vinhos Importados</p>
              <p>Vinhos Nacionais</p>
              <p>Diversos</p>
            </div>
          </div>
          {/*Ofertas*/}
          <div className="menu-item">
            Ofertas <span className="arrow">▾</span>
            <div className="dropdown">
              <p>Promoções</p>
              <p>Novidades</p>
              <p>Mais Vendidos</p>
              <p>Kit Presente</p>
              <p>Combos</p>
            </div>
          </div>
          {/*Carreira*/}
          <div className="menu-item">
            Carreira <span className="arrow">▾</span>
            <div className="dropdown">
              <p>Trabalhe Conosco</p>
            </div>
          </div>
        </div>
        {/*Ícones*/}
        <div className="icons">
          <a href="https://wa.me/5541999474299">
            <PiWhatsappLogoLight />
          </a>
          <a href="https://www.instagram.com/991bebidas?igsh=bG51cWZoNzVtd3hp">
            <CiInstagram />
          </a>
          <a href="tel:+5541999474299">
            <CiPhone />
          </a>
          <a href="https://maps.app.goo.gl/gkpBExzHA1tUwVbP9">
            <FaMapLocationDot />
          </a>
          <a href="https://www.ifood.com.br/delivery/curitiba-pr/991-bebidas-e-conveniencia-portao/d8e8dbc9-f527-4eb1-afae-236f6e7329c7?UTM_Medium=share">
            <SiIfood />
          </a>
        </div>
      </div>
      {/* Menu Mobile */}
      <div
        className={`overlay ${openMenu ? "show" : ""}`}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={`drawer ${openMenu ? "open" : ""}`}>
        <button className="close" onClick={() => setOpenMenu(false)}>
          ✕
        </button>
        <div className="drawer-section">
          <p>Sobre nós</p>
          <span>Quem somos</span>
          <span>Missão</span>
          <span>Cultura</span>
        </div>

        <div className="drawer-section">
          <p>Produtos</p>
          <span>Cervejas</span>
          <span>Vinhos</span>
          <span>Destilados</span>
          <span>Refrigerantes</span>
          <span>Águas</span>
          <span>Energéticos</span>
          <span>Diversos</span>
        </div>

        <div className="drawer-section">
          <p>Marcas</p>
          <span>Ambev</span>
          <span>Coca-Cola FEMSA</span>
          <span>Heineken Brasil</span>
        </div>

        <div className="drawer-section">
          <p>Ofertas</p>
          <span>Promoções</span>
          <span>Novidades</span>
          <span>Mais Vendidos</span>
        </div>

        <div className="drawer-section">
          <p>Carreira</p>
          <span>Trabalhe Conosco</span>
        </div>

        <hr />

        <div className="mobile-icons">
          <a href="https://wa.me/5541999474299">
            <PiWhatsappLogoLight />
          </a>
          <a href="https://www.instagram.com/991bebidas?igsh=bG51cWZoNzVtd3hp">
            <CiInstagram />
          </a>
          <a href="tel:+5541999474299">
            <CiPhone />
          </a>
          <a href="https://maps.app.goo.gl/gkpBExzHA1tUwVbP9">
            <FaMapLocationDot />
          </a>
          <a href="https://www.ifood.com.br/delivery/curitiba-pr/991-bebidas-e-conveniencia-portao/d8e8dbc9-f527-4eb1-afae-236f6e7329c7?UTM_Medium=share">
            <SiIfood />
          </a>
        </div>
      </div>
    </>
  );
}
