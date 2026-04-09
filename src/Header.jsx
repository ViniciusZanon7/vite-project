import "./Header.css";
import Img991Bebidas from "/assets/991Bebidas.png";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import { useState } from "react";

export default function Header() {
  const [spinner, setSpinner] = useState(true);

  return (
    <div className="header">
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

      <div className="icons">
        <a
          href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5541999474299%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn0-1aZCfeSeaLaxilkTb8iL7wrwDl2x9Q4APoT8vlihFpEB-Oa2oBnWYLC4M_aem_JosDmvZhtCkd5x2QdIjiRw&e=AT5w1IskGPWHMBl1pRPtKJhfVMZoV3Sx0k8QnryE1TNitFa153ufgMLSAZ1bVr2sjccwXKVbGl_udx2_W_bTK33gjZ-iCIFUrFWDbhBPWkPE6QlQIwSRVCEk4Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiWhatsappLogoLight />
        </a>
        <a href="https://www.instagram.com/991bebidas?igsh=bG51cWZoNzVtd3hp">
          <CiInstagram />
        </a>
        <a href="tel:+5541999474299">
          <CiPhone />
        </a>
        <a
          href="https://maps.app.goo.gl/gkpBExzHA1tUwVbP9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapLocationDot />
        </a>
        <a
          href="https://www.ifood.com.br/delivery/curitiba-pr/991-bebidas-e-conveniencia-portao/d8e8dbc9-f527-4eb1-afae-236f6e7329c7?UTM_Medium=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiIfood />
        </a>
      </div>
    </div>
  );
}
