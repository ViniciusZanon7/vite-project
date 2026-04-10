import "./Footer.css";
import img991Bebidas from "/assets/991Bebidas.png";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo">
            <img src={img991Bebidas} alt="991 Bebidas" />
          </div>
          <p>Sua loja premium de bebidas.</p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>Início</li>
            <li>Produtos</li>
            <li>Promoções</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>
            <a href="https://wa.me/5541999474299">
              <FaWhatsapp /> (41) 99947-4299
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/991bebidas?igsh=bG51cWZoNzVtd3hp">
              <FaInstagram /> @991bebidas
            </a>
          </p>
          <p>
            <a href="https://maps.app.goo.gl/gkpBExzHA1tUwVbP9">
              <FaMapMarkerAlt /> Curitiba - PR
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 991 Bebidas - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
