import Image from "next/image";
import Link from "next/link";
import africaaward from "../../assets/africa-humanitarian.jpeg";
import africaaward1 from "../../assets/africa-humanitarian1.jpeg"

export default function StoryThree() {
    return (
        <main className= "article-content" style={{ padding: "3rem" }}>
            <h1>George Kithi Foundation Wins Africa's 2025 Humanitarian Award of the Year</h1>
            <p>The George Kithi Foundation has won the award for Humanitarian Foundation of the Year 2025 in Africa at a prestigious continental event in Dar es Salaam, Tanzania. The award is a recognition of the foundation's transformative interventions in some of the most pressing issues facing communities in Kilifi County, Kenya, through education, health, and empowerment programs.</p>
            <Image src={africaaward} 
            alt="team receiving humanitarian awar"
            width={500}
            height={450}/>
            <p>The Dar es Salaam ceremony brought together leading humanitarian organizations from across Africa, recognizing projects that have made a measurable difference in the lives of people. Among the leading stories was that of the George Kithi Foundation, which has grown steadily into one of the most successful grassroots organizations on the continent. Its recognition underscores the value of homegrown solutions to Africa's socio-economic challenges.</p>
            <p>In the field of education, the foundation has provided hundreds of bursaries to economically disadvantaged but bright students across Kilifi. The majority of the beneficiaries had, prior to the intervention, been on the verge of being withdrawn from school due to non-payment of school fees. By providing regular financial support, the foundation has helped students to not only remain in class but also pursue their academic goals with greater confidence. Both parents and educators have hailed this intervention as a lifeline that has changed the academic fate of many families.</p>
            <p>Healthcare has also been another area where the George Kithi Foundation has left an indelible mark. The foundation, through medical camps in communities, has offered free consultation and treatment to thousands of residents, especially in rural areas where hospitals are scarce. The camps have focused on diagnosing and treating common diseases, offering health education, and in some cases, giving referrals for specialized care. For the majority of the families, the camps represent the only hope for timely medical attention.</p>
            <p>The foundation's commitment to the empowerment of women and the youth has also received much acclaim. By investing in mentorship programs, vocational skills development, and income-generating activities, the foundation has helped vulnerable communities chart a path towards self-reliance. Women, in particular, have been able to benefit from skills development and small business promotion, while the youth have had access to mentorship programs that broaden their vision and prepare them for future leadership roles.</p>
            <p>During the award ceremony in Dar es Salaam, organizers praised the George Kithi Foundation for combining compassion with concrete outcomes. "The foundation has demonstrated that targeted aid in education, healthcare, and empowerment can transform communities and mobilize lasting change," one of the judges remarked. This award, they continued, was a testament to the power of community-driven humanitarian work.
            </p>
            <p>In accepting the award, the patron, George Kithi, credited the people of Kilifi and the partners who have supported its cause. "The award is for the people that we serve and for everyone who believes in our dream. It is an indication to us that we have only begun and must keep doors of opportunity opening for the poor," the statement read. The foundation pledged to accept the recognition as motivation to expand its presence into other regions.</p>
            <Image 
            src={africaaward1} 
            alt="Team receiving award"  
            width={500}
            height={300}/>
            <p>Kilifi local authorities praised the foundation for venturing into fields where government funds have often fallen short. They explained that by addressing school dropout rates, access to health, and economic empowerment, the George Kithi Foundation has directly contributed to a reduction in poverty and the development of community resilience. "Every child kept in school, every patient cured, and every woman or youth empowered is a building block toward a stronger Kilifi," said one education officer.</p>
            <p>As the applause subsided in Dar es Salaam, one thing was clear: the George Kithi Foundation is not just a local entity, but a continental leader in humanitarian work. Its win at the 2025 African Humanitarian Awards makes it a model for organizations across the continent, demonstrating that with dedication and focus, even small actions can have life-changing impacts. Looking toward the future, the foundation has pledged to continue its expansion and be a source of inspiration for generations to come.</p>
              {/* ✅ Donate Button */}
            <div className="donate-cta">
            <Link href="/donate" className="donate-article-btn">
                Donate Now
            </Link>
            </div>
            </main>
            )}