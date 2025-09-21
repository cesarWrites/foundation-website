import Image from "next/image";
import "../../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Empowering communities through education, healthcare, and social programs </h1>
        <p>Thousands of students impacted through bursaries.</p>
      </div>
    </section>
  );
}

