import Link from "next/link";

export default function ProgramImpact() {
  const articles = [
    {
      slug: "humanitarian-award",
      title: "George Kithi Foundation Wins Humanitarian Group Award at East African Super Woman Awards 2025..",
      preview: "The George Kithi Foundation received the Humanitarian Group of the Year 2025 at the prestigious East African Super Woman Awards.",
    },
    {
      slug: "education-funding",
      title: "Bright Needy Students in Ganze Get Lifeline Through Our Bursary Program",
      preview: "More than 100 students in Ganze Constituency have received bursaries from the George Kithi Foundation.",
    },
    {
        slug: "africa-humanitarian-award",
        title: "George Kithi Foundation Wins Africa's 2025 Humanitarian Award of the Year",
        preview: "More than 100 students in Ganze Constituency have received bursaries from the George Kithi Foundation.",
      },
      {
        slug: "hisa-zipo",
        title: "HISA ZIPO CBO Gets Ksh 500,000 Support as It Transitions Into a SACCO",
        preview: "The Foundation has funded grassroots empowerment in Kilifi County with a Ksh 500,000 donation to HISA ZIPO CBO",
      },
      {
        slug: "student-support",
        title: "Jila Community, George Kithi Foundation Partner to Secure Student’s Future",
        preview: "We commended the people of Jila for uniting to ensure Asman Ndoro Hamisi reported to Shimo la Tewa High School.",
      },
  ];

  return (
    <main className="impact-page">
      <h1 className="impact-heading">Program Impact</h1>

      <div className="impact-list">
        {articles.map((article) => (
          <div key={article.slug} className="impact-item">
            <Link href={`/program-impact/${article.slug}`} className="impact-link">
              <h2>{article.title}</h2>
            </Link>
            <p>{article.preview}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
