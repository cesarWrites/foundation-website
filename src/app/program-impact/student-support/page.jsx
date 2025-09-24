import Image from "next/image";
import Link from "next/link";
import bursary from "../../assets/bursary.jpeg";
import bursary2 from "../../assets/bursary2.jpeg";

export default function StoryFive() {
    return (
        <main className= "article-content" style={{ padding: "2rem" }}>
            <h1>Jila Community, George Kithi Foundation Partner to Secure Student’s Future</h1>
            <p>We commended the people of Jila for uniting to ensure Asman Ndoro Hamisi reported to Shimo la Tewa High School. The effort, which was marked by peace and a sense of shared responsibility, highlights the essential contributions of local communities in making education accessible to needy students.</p>
            <Image src={bursary} 
            alt="Jila Community"
            width={500}
            height={450}/>
            <p>By community effort, the residents of Jila came to the rescue of Asman, a good student who was at risk of skipping school due to economic hardship. Their actions have been praised as a powerful example of grassroots solidarity, and how, if people come together, they can change the course of a child's life.</p>
            <p>In a statement, the George Kithi Foundation reaffirmed its commitment to keep walking alongside communities to invest in education and other sectors that improve livelihoods. "We are proud of the Jila community for demonstrating what it means to stand for one of their own. As a foundation, we will continue to support such initiatives because education remains the most powerful tool to break the poverty cycle," the statement read.</p>
            <p>The foundation once again emphasized the importance of community-based solutions, especially at a time when some young learners are still kept at home due to a lack of school fees. Local communities and organizations, through partnerships, can address gaps that cannot be addressed completely by state funds.</p>
            <p>Education stakeholders commended both the Jila community and the foundation for the intervention, noting that the case of Asman reflects the story of many students in Kilifi County. They went on to state that such partnerships between individuals and organizations within the community are essential in keeping children in schools and preparing them for a brighter future.</p>
            <Image src={bursary2} 
            alt="Jila Community"
            width={500}
            height={450}/>
            <p>Parents and residents who participated in the initiative appreciated the foundation for encouraging their efforts. They indicated that the award has motivated them to continue developing ways of supporting education and addressing social issues within the community.</p>
            <p>As Asman begins his new life at Shimo la Tewa High School, the collaboration of the George Kithi Foundation and the people of Jila is a shining example of how shared responsibility can transform lives. With such partnerships, leaders say, the dream of an educated and empowered Kilifi is still within reach.</p>
            {/* ✅ Donate Button */}
            <div className="donate-cta">
            <Link href="/donate" className="donate-article-btn">
                Donate Now
            </Link>
            </div>
        </main>
    )}