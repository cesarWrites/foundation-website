
import Image from "next/image";
import Link from "next/link";
import student from "../../assets/student-support1.jpeg";
import student1 from "../../assets/student-support2.jpeg";

export default function StoryTwo() {
    return (
      <main style={{ padding: "3rem" }}>
        <h1>Bright Needy Students in Ganze Get Lifeline Through Our Bursary Program</h1>
        <p>More than 100 students in Ganze Constituency have received bursaries from the George Kithi Foundation in its latest effort to raise education levels in Kilifi County. The beneficiaries each received Ksh 5,000, a timely gesture that will keep poor but brilliant students in school and on track to further their studies.</p>
        <Image src={student} 
        alt="students in Ganze receiving bursary cheques" 
        width={500}
        height={450}/>
        <p>The ceremony to distribute the bursaries took place at Petanguo Secondary School, where students from various schools in Ganze had converged. For the majority of the beneficiaries, the bursaries were timely when parents were struggling to pay school balances. With the money now available, students will be able to remain in school without suffering disruptions that normally come with being sent home for failure to pay fees. School administrators, as per the school administrators, not only remove financial burdens but also restore confidence in students writing national exams.</p>
        <p>The representatives of the foundations explained that the bursaries fall under a broader scheme to uplift the youth in Kilifi. "We are committed to ensuring no child is denied an education for the simple reason that their family cannot afford," a representative said. "This is a direct investment in the future of Ganze's and Kilifi County at large. Education is the most effective way of breaking the poverty cycle, and we intend to expand this program year after year." </p>
        <p>Parents who attended the ceremony were grateful for the help. A majority of them admitted that the rising cost of living had made it increasingly difficult to raise school fees, with some parents having been forced to take loans or send children home earlier than usual. "This bursary has been a great relief for me and most parents," said Sarah Umazi Mwarabu, a parent of three secondary school children. The George Kithi Foundation has given our children an opportunity to focus on their studies without the constant fear of being sent home for expulsion." </p>
        <p>The students themselves remarked that the bursaries acted as a motivation to work harder. One Form Four candidate had this to say: "When I received the bursary, I felt as though a great weight was lifted off my shoulders.". I can now focus more on my studies and write exams without stress. I hope to excel and, one day, sponsor other students as I have been sponsored today." Several other beneficiaries echoed the same sentiments, pointing out that the support has given them greater determination to excel.</p>
        <Image src={student1}
         alt="students receiving bursary cheques"
         width={500}
         height={450}/>
        <p>All education stakeholders in Ganze praised the foundation for its commitment to filling gaps that cannot be filled by government funding. The stakeholders noted that Ganze, like the majority of constituencies in Kilifi, has high dropout rates due to poverty. "Every student kept in school is a step towards a stronger community," one of the local education officers said. "The George Kithi Foundation's intervention directly reduces dropout rates and consolidates the future workforce of this county.".</p>
        <p>Outside Ganze, the George Kithi Foundation has extended to the rest of the Coast region by paying tuition fees for students in universities and providing mentorship opportunities for the youth. The foundation's leadership has reiterated its long-term commitment to promoting inclusive and sustainable opportunities for education. As the Petanguo event drew to a close, the message was clear: by helping to keep over 100 students in school, the foundation is not just giving out bursaries—it's investing in a better tomorrow for Kilifi County and beyond.</p>
           {/* ✅ Donate Button */}
           <div className="donate-cta">
            <Link href="/donate" className="donate-article-btn">
                Donate Now
            </Link>
        </div>
      </main>
    )}