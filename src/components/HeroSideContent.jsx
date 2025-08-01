import { useEffect, useState } from "react";
import lirio from "../assets/lirio.png";
import ket from "../assets/ket.jpg";
import eu from "../assets/eu.jpg";

const slides = [
  {
    type: "image",
    src: lirio,
    alt: "Lírio",
  },
  {
    type: "textImage",
    text: "Ketily, às vezes não sou tão bom com palavras, mas queria te demonstrar meu amor da melhor forma possível.",
    src: eu,
    alt: "Nós dois",
  },
  {
    type: "textImage",
    text: "Sei que sou falho e queria fazer algo especial para minha garota. Você é minha maior conquista, e o lírio te representa bem.",
    src: ket,
    alt: "Ketily",
  },
  {
    type: "text",
    text: "Quero dividir meu futuro com a pessoa que amo. Quero dividir meu futuro com você, amor. 💖",
  },
  {
    type: "text",
    text: "Obrigado por estar ao meu lado. Cada momento contigo é um presente. 💌",
  },
  {
    type: "text",
    text: "Eu te amo muito, meu amor, e prometo que nunca vou te abandonar. Eu quero você na minha vida pra sempre. 💞",
  },
];

export default function HeroSideContent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-black shadow-lg text-white h-96 flex items-center justify-center transition-all duration-500">
      {slide.type === "image" && (
        <img
          src={slide.src}
          alt={slide.alt}
          className="max-h-full max-w-full rounded-xl object-contain"
        />
      )}

      {slide.type === "textImage" && (
        <div className="space-y-4 text-white">
          <p className="text-base md:text-lg">{slide.text}</p>
          <img
            src={slide.src}
            alt={slide.alt}
            className="max-h-48 max-w-full mx-auto rounded-lg object-cover"
          />
        </div>
      )}

      {slide.type === "text" && (
        <p className="text-lg md:text-xl font-medium px-2">{slide.text}</p>
      )}
    </div>
  );
}
