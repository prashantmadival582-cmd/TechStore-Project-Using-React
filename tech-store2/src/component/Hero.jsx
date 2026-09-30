import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.avif";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const slides = [
  {
    image: hero1,
    tag: "NEW COLLECTION",
    title: "iPhone 17 Series",
    desc: "Power. Performance. Premium Design.",
  },
  {
    image: hero2,
    tag: "LIMITED OFFER",
    title: "Ultra Thin Laptops",
    desc: "Work faster with next-generation performance.",
  },
  {
    image: hero3,
    tag: "SMART LIFESTYLE",
    title: "Premium Smart Watches",
    desc: "Track your health and stay connected in style.",
  },
  {
    image: hero4,
    tag: "IMMERSIVE SOUND",
    title: "Premium Smart Earbuds",
    desc: "Experience crystal-clear sound wherever you go.",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // =========================
  // NEXT SLIDE
  // =========================

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % slides.length
    );
  };

  // =========================
  // PREVIOUS SLIDE
  // =========================

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + slides.length) %
        slides.length
    );
  };

  // =========================
  // AUTOMATIC SLIDE
  // =========================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // =========================
  // UI
  // =========================

  return (
    <section className="hero-carousel">

      {/* =========================
          SLIDES
      ========================= */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            index === current
              ? "hero-slide active"
              : "hero-slide"
          }
        >
          <img
            src={slide.image}
            alt={slide.title}
          />

          <div className="hero-overlay">

            <p>
              {slide.tag}
            </p>

            <h1>
              {slide.title}
            </h1>

            <span>
              {slide.desc}
            </span>

            <a
              href="#products"
              className="hero-btn"
            >
              Shop Now
            </a>

          </div>
        </div>
      ))}

      {/* =========================
          PREVIOUS BUTTON
      ========================= */}

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      {/* =========================
          NEXT BUTTON
      ========================= */}

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* =========================
          DOTS
      ========================= */}

      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={
              current === index
                ? "dot active"
                : "dot"
            }
            onClick={() =>
              setCurrent(index)
            }
            aria-label={`Go to slide ${
              index + 1
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;