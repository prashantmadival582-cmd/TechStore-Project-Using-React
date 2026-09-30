import mobile from "../assets/mobile.webp";
import laptop from "../assets/laptop.webp";
import watch from "../assets/watch.webp";
import powerbank from "../assets/powerbank.webp";
import airpods from "../assets/airpods33.webp";

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
    {
      image: powerbank,
      title: "Powerbank",
      desc: "Portable charging",
      category: "Powerbank",
    },
    {
      image: airpods,
      title: "AirPods",
      desc: "Apple wireless earbuds",
      category: "Airpods",
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

      <div className="category-marquee">
        <div className="category-track">
          {[0, 1].map((copy) => (
            <div
              className="category-group"
              key={copy}
              aria-hidden={copy === 1}
              inert={copy === 1}
            >
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

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <button
                    className="category-btn"
                    onClick={() => onExplore(item.category)}
                  >
                    Explore
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Category;