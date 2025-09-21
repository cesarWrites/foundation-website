import { FaUsers } from "react-icons/fa";

export default function MissionVisionWork() {
  return (
    <section className="mvw">
      <div className="mvw-item bg-white">
        <FaUsers className="mvw-icon" />
        <h2>Mission</h2>
        <p>
        Our mission is to empower communities through education, healthcare, and social programs that raise lives, reduce inequality, and boost resilience, leading to long-term growth and dignity for the next generation.
        </p>
      </div>

      <div className="mvw-item bg-gray">
        <FaUsers className="mvw-icon" />
        <h2>Vision</h2>
        <p>
        We envision a new society where all children are educated, families have improved livelihoods, and communities live in dignity, harmony, and self-sufficiency. 
        </p>
      </div>

      <div className="mvw-item bg-white">
        <FaUsers className="mvw-icon" />
        <h2>Our Commitment</h2>
        <p>
        George Kithi Foundation is committed to maintaining its efforts towards a better existence. 
        We continue to work with members of the community, leaders, and strategic partners in order to reach more individuals with our programs and create a difference that will last.
        We share a vision that investing in people will make communities better, help people realize their potential, and create a future full of hope, dignity, and opportunity for all.
        </p>
      </div>
    </section>
  );
}

  