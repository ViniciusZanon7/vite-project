import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Banner.css";
import { products } from "./products";

export default function Banner() {
  const destilados = products.destilados;
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const next = () => {
    setIndex((prev) => (prev + 1) % destilados.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + destilados.length) % destilados.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    if (autoPlay) return;

    const timeout = setTimeout(() => {
      setAutoPlay(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [autoPlay]);

  return (
    <div className="banner">
      <h1>Os Queiridinhos os Mais Vendidos!</h1>

      <div className="carousel">
        {destilados.map((item, i) => {
          const isActive = i === index;

          return (
            <motion.div
              key={item.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  setAutoPlay(false);
                  next();
                } else if (info.offset.x > 50) {
                  setAutoPlay(false);
                  prev();
                }
              }}
              animate={{
                scale: i === index ? 1 : 0.75,
                opacity: Math.abs(i - index) > 2 ? 0 : i === index ? 1 : 0.2,
                x: (i - index) * (window.innerWidth < 768 ? 160 : 220),
                rotate: i === index ? 0 : i < index ? -8 : 8,
                zIndex: i === index ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className={`card ${isActive ? "active" : ""}`}
            >
              <img src={item.img} alt={item.nome} />

              <h2>{item.nome}</h2>

              <p className="price">R$ {item.preco.toFixed(2)}</p>

              <button
                className="btn"
                onClick={() => {
                  const mensagem =
                    "Olá! Fiquei interessado no(a) " +
                    item.nome +
                    " no valor de R$ " +
                    item.preco.toFixed(2) +
                    '"';
                  window.open(
                    `https://wa.me/5541999474299?text=${encodeURIComponent(mensagem)}`,
                  );
                }}
              >
                Comprar
              </button>
            </motion.div>
          );
        })}
        <button
          className="carousel-arrow left"
          onClick={() => {
            setAutoPlay(false);
            prev();
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="carousel-arrow right"
          onClick={() => {
            setAutoPlay(false);
            next();
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
