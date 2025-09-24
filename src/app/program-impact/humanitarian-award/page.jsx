import Image from "next/image";
import Link from "next/link";
import award1 from "../../assets/humanitarian1.jpeg";
import award2 from "../../assets/humanitarian2.jpeg";

export default function StoryOne() {
    
    return (
      <main className= "article-content" style={{ padding: "2rem" }} >
        <h1>George Kithi Foundation Wins Humanitarian Group Award at East African Super Woman Awards 2025..</h1>
        <Image src={award1}
        alt='Receiving award'
        width={500}
        height={450}/>
        <p>
        The George Kithi Foundation received the Humanitarian Group of the Year 2025 at the prestigious East African Super Woman Awards, cementing its place as one of the region's leading organizations in social transformation and community empowerment. 
        </p>
        <p>
        Receiving the award on behalf of the foundation, the patron was overjoyed with appreciation, describing the honor as a robust validation of the vision and ideals that continue to motivate the organization.
        </p>
        <p>This prize affirms our commitment to impactful, human-centered interventions. It speaks volumes about the quality of work we have accomplished in leadership, governance, humanitarian response, and advancing the women's cause in education, media, and content creation," said the patron.</p>
        <p>The George Kithi Foundation has been in the limelight for years for its efforts to increase access to education in Kilifi County. Its bursary scheme, which has been hailed as a model of success, has helped hundreds of students from poor backgrounds advance their education and break the poverty chain. The scheme was identified as one of the key projects that made the foundation shine in this year's awards.</p>
        <p>"Education remains the most effective antidote to poverty and the strongest tool to empower generations yet to come," the patron restated. "This award is not just an honor but also a reminder to continue serving."</p>
        <p>The foundation's involvement extends beyond education, with inclusive and sustainable involvement in social welfare and community building. It has built over the years partnerships that expand its reach and create lasting effects, especially in marginalized areas.</p>
        <Image src={award2} 
        alt="patron receiving award"
        width={500}
        height={450}/>
        <p>Among other change-makers in East Africa who are being honored, the foundation said that it is now more determined than ever to scale its programmes. </p>
        <p>"Our resolve is strengthened by this award," the patron also added. "We are prepared to step up, help, and lead with purpose and heart in every sphere where intervention is most urgently needed.".</p>
        <p>East African Super Woman Awards are annually hosted to recognize outstanding contributions by individuals and institutions fostering leadership, humanitarianism, and empowerment in the region.

        With this award, the George Kithi Foundation has further cemented its place as a force of hope and transformation in Kilifi and beyond.</p>
        {/* ✅ Donate Button */}
        <div className="donate-cta">
        <Link href="/donate" className="donate-article-btn">
            Donate Now
        </Link>
        </div>
      </main>
    );
  }
  