import Image from "next/image";
import Link from "next/link";
import hisa from "../../assets/hisa.jpeg";
import hisa1 from "../../assets/hisa2.jpeg";


export default function StoryFour() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>HISA ZIPO CBO Gets Ksh 500,000 Support as It Transitions Into a SACCO</h1>
            <p>The Foundation has funded grassroots empowerment in Kilifi County with a Ksh 500,000 donation to HISA ZIPO CBO, a community-based organization with more than 1,500 members drawn from Ganze, Kaloleni, Rabai, and Kilifi North. The donation aims to support the process of the group in being a registered Savings and Credit Cooperative (SACCO).</p>
            <Image src={hisa} 
            alt="foundation funding"
            width={500}
            height={450}
            />
            <p>HISA ZIPO was born out of a selfless dream of collective strength in which community members came together and saved for and assisted one another. For over forty years, it has been a model in which members have been supporting small scale businesses, saving, and empowering families through shared responsibility. As it grew more and more steadily, its members promised to elevate the CBO into a SACCO that can deliver structured financial services to the wider community.</p>
            <p>Addressing the donation handover, George Kithi Foundation officials praised the members for being visionary and determined. They further stated that the status of a SACCO is a leap of a giant kind which requires unity, accountability, and strong governance structure to succeed</p>
            <p>The organization also urged HISA ZIPO members to be disciplined and stick to principles of openness and inclusiveness. "This gift is not aid—it's an investment in your determination to change Kilifi's economic story. If you remain disciplined and united, this program will benefit future generations," a representative said.</p>
            <p>The Ksh 500,000 donation will enable the organization to enhance its capacity to offer savings and loans to members, promote financial literacy in communities, and offer credit to small businesses at low rates. The members believe that the services will end poverty and reliance in the county.</p>
            <p>Leaders from the community who attended the event commended the foundation for being at the side of grassroots organizations that address real issues facing normal families. They pointed out that strengthening small business groups like HISA ZIPO is the most appropriate method to achieve long-term economic transformation in Kilifi.</p>
            <p>For the members, the contribution was a wake-up call in their lives. The majority of them had hopes that the transition to SACCO would open up new channels for them to develop financially, send their children to school, and start income-generating ventures. "We started small, but today we are seeing our dream materialize. With this contribution, now we are able to make larger steps to empower our community," stated one member.</p>
           <Image src={hisa1} 
           alt="HISA ZIPO sacco funding"
           width={500}
           height={450}/>
            <p>The George Kithi Foundation has remained committed to the development of education, healthcare, and empowerment initiatives across Kilifi. By the aid of HISA ZIPO, the foundation reaffirmed its belief that change begins with ideas emanating from communities and nurtured into institutions of change.</p>
            <p>While HISA ZIPO prepares for its new life as a SACCO, the partnership with the George Kithi Foundation is setting the stage for more collaboration between leaders and grassroots organizations. They wish, collectively, to leave a legacy of empowerment, financial independence, and resilience in Ganze, Kaloleni, Rabai, and Kilifi North.</p>
            {/* ✅ Donate Button */}
            <div className="donate-cta">
            <Link href="/donate" className="donate-article-btn">
                Donate Now
            </Link>
            </div>
            </main>
    )
    }