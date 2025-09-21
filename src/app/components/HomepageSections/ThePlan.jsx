import Image from "next/image";
import kids from "../../assets/kids.jpg"
import bursary from "../../assets/bursary.jpeg";

export default function ThePlan() {
  return (
    <section className="the-plan">
      <div className="plan-text">
        <h2>The Plan</h2>
        <p>
          Our plan is to expand our reach by supporting bright needy students in Ganze get lifeline through Our Bursary Program. 
          More than 100 students in Ganze Constituency have received bursaries from the George Kithi Foundation in its latest effort to raise education levels in Kilifi County. The beneficiaries each received Ksh 5,000, a timely gesture that will keep poor but brilliant students in school and on track to further their studies
        </p>
      </div>
      <div className="plan-image">
        <Image src={bursary} alt="The Plan" width={500} height={450} />
      </div>
    </section>
  );
}
