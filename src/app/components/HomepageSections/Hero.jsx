import Image from "next/image";
import "../../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Transforming lives in Africa</h1>
        <p>Five million families impacted</p>
      </div>
    </section>
  );
}
