import "./ProductGrid.css";

export default function ProductGrid() {
  const produtos = [
    { id: 1, nome: "Amarula", preco: 99.9, img: "/assets/IMG_Amarula.jpg" },
    { id: 2, nome: "Ballena", preco: 169.9, img: "/assets/IMG_Ballena.jpg" },
    {
      id: 3,
      nome: "Jack Daniel's Honey",
      preco: 139.9,
      img: "/assets/IMG_JackDaniels.jpg",
    },
    {
      id: 4,
      nome: "Jack Daniel's",
      preco: 89.9,
      img: "/assets/IMG_JackDaniels2.jpg",
    },
    {
      id: 5,
      nome: "Jack Daniel's Apple",
      preco: 99.9,
      img: "/assets/IMG_JackDanielsApple.jpg",
    },
    {
      id: 6,
      nome: "Jack Daniel's Fire",
      preco: 139.9,
      img: "/assets/IMG_JackDanielsFire.jpg",
    },
  ];

  return (
    <section className="product-section">
      <h2 className="section-title">Produtos</h2>

      <div className="product-grid">
        {produtos.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.nome} />

            <h3>{item.nome}</h3>

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
          </div>
        ))}
      </div>
    </section>
  );
}
