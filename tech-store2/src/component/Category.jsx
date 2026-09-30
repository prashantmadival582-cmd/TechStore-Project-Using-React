import mobile from "../assets/mobile.webp";
import laptop from "../assets/laptop.webp";
import watch from "../assets/watch.webp";

function Category({ onExplore }) {
  const items = [
    {
      image: mobile,
      title: "Smartphones",
      desc: "Apple • Samsung • Google",
      category: "Smartphone",
    },
    {
      image: laptop,
      title: "Laptops",
      desc: "MacBook • Dell • ASUS",
      category: "Laptop",
    },
    {
      image: watch,
      title: "Smart Watches",
      desc: "Apple • Samsung • Fitbit",
      category: "Watch",
    },
  ];

  return (
    <section className="category-section" id="categories">

      <div className="section-title">
        <p className="small-title">
          COLLECTION
        </p>

        <h2>
          Featured Categories
        </h2>

        <p>
          Explore our premium technology lineup
        </p>
      </div>

      <div className="category-grid">

        {items.map((item) => (
          <div
            className="category-card"
            key={item.title}
          >

            <img
              src={item.image}
              alt={item.title}
              className="category-img"
            />

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <button
              className="category-btn"
              onClick={() => onExplore(item.category)}
            >
              Explore
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Category;