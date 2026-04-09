import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO / NOME */}
        <div className="footer-section">
          <h2 className="logo">991 Bebidas</h2>
          <p>Sua loja premium de bebidas.</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>Início</li>
            <li>Produtos</li>
            <li>Promoções</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>
            <FaWhatsapp /> (41) 99999-9999
          </p>
          <p>
            <FaInstagram /> @991bebidas
          </p>
          <p>
            <FaMapMarkerAlt /> Curitiba - PR
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 991 Bebidas - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
