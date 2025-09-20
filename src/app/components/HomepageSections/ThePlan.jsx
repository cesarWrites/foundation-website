import Image from "next/image";
import kids from "../../assets/kids.jpg"

export default function ThePlan() {
  return (
    <section className="the-plan">
      <div className="plan-text">
        <h2>The Plan</h2>
        <p>
          Our plan is to expand our reach by partnering with local organizations
          and leveraging technology to amplify our impact. Together, we aim to
          support millions more families across Africa.
        </p>
      </div>
      <div className="plan-image">
        <Image src={kids} alt="The Plan" width={500} height={300} />
      </div>
    </section>
  );
}
