import { FaUsers } from "react-icons/fa";

export default function MissionVisionWork() {
  return (
    <section className="mvw">
      <div className="mvw-item bg-white">
        <FaUsers className="mvw-icon" />
        <h2>Mission</h2>
        <p>
          Our mission is to empower communities across Africa with sustainable
          solutions that drive growth and opportunity.
        </p>
      </div>

      <div className="mvw-item bg-gray">
        <FaUsers className="mvw-icon" />
        <h2>Vision</h2>
        <p>
          Our vision is a thriving Africa where families flourish and
          generations benefit from long-lasting impact.
        </p>
      </div>

      <div className="mvw-item bg-white">
        <FaUsers className="mvw-icon" />
        <h2>Work Statement</h2>
        <p>
          We focus on health, education, and economic empowerment programs that
          create real change.
        </p>
      </div>
    </section>
  );
}

  