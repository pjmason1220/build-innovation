import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About PJ Mason | BUILD Innovation",
  description:
    "P&G Senior Director with 25+ years of experience building world-class innovation capabilities. Harvard Business School educated. Led award-winning products.",
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About PJ Mason
            </h1>
            <p className="text-xl text-gray-600">
              Former P&amp;G Senior Director | Innovation Capability Builder |
              Award-Winning Product Leader
            </p>
          </div>
        </Section>

        {/* Main Story */}
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Rare Combination: Strategy + Execution
              </h2>

              <p className="text-gray-600 mb-6">
                Most innovation consultants have either done it or taught it.
                I've done both—and that's what makes the difference.
              </p>

              <p className="text-gray-600 mb-6">
                Over 25+ years in industrial design and product development,
                with 14+ years at Procter &amp; Gamble, I've learned that
                building innovation capabilities isn't about fancy frameworks or
                consultant-speak. It's about rolling up your sleeves, building
                teams, implementing processes, and delivering results.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Built P&amp;G's First Digital Design Capability
              </h3>

              <p className="text-gray-600 mb-6">
                When P&amp;G decided they needed a Digital Design Capability,
                they didn't have one. So I built it from scratch. Not from a
                PowerPoint deck or strategic plan—I actually built it.
              </p>

              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>
                  Started with external resources and agency partners, then
                  systematically internalized capabilities
                </li>
                <li>
                  Recruited, trained, and deployed teams across multiple
                  continents
                </li>
                <li>
                  Developed processes, tools, and infrastructure that scaled
                </li>
                <li>
                  Deployed these teams against P&amp;G's biggest consumer
                  opportunities in Oral Care and Smart Products
                </li>
                <li>
                  Delivered $100M+ in measurable topline growth through
                  award-winning products
                </li>
              </ul>

              <p className="text-gray-600 mb-6">
                That's the experience I bring to mid-market companies: I know
                what it takes to build capabilities because I've actually done
                it at scale.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Award-Winning Product Leadership
              </h3>

              <p className="text-gray-600 mb-6">
                Leading the design of Oral-B iO—P&amp;G's most significant oral
                care innovation platform in decades—taught me that great
                innovation requires both strategic vision and flawless execution
                across design, engineering, and consumer experience.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  Oral-B iO Recognition:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold mr-2 text-xl">★</span>
                    <span>
                      <strong>German Design Award</strong> – Gold Winner
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 text-xl">★</span>
                    <span>
                      <strong>iF Design Award</strong> – International
                      recognition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 text-xl">★</span>
                    <span>
                      <strong>Red Dot Award</strong> – Product Design excellence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2 text-xl">★</span>
                    <span>
                      <strong>CES Innovation Award</strong> – Technology
                      innovation
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Harvard-Trained Strategic Thinking
              </h3>

              <p className="text-gray-600 mb-6">
                Two Harvard Business School Executive Education programs gave me
                the strategic frameworks to complement my hands-on execution
                experience. This combination—strategic thinking plus operational
                excellence—is rare and powerful.
              </p>

              <p className="text-gray-600 mb-6">
                I can engage at the C-suite level on innovation strategy, then
                roll up my sleeves and help you actually build it. That's the
                difference between most consultants and someone who's done it.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Why Work With Me?
              </h3>

              <p className="text-gray-600 mb-4">
                Three reasons companies choose to work with me:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">
                    1. I've Built It Myself
                  </h4>
                  <p className="text-gray-600">
                    Most consultants advise on capability building. I've
                    actually built capabilities from scratch at one of the
                    world's most demanding companies. I know what works because
                    I've done it.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">
                    2. Strategic + Hands-On Execution
                  </h4>
                  <p className="text-gray-600">
                    Harvard Business School strategy combined with P&amp;G
                    execution discipline. I don't just give you a plan—I help
                    you execute it and build sustainable capabilities.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">
                    3. Proven, Measurable Results
                  </h4>
                  <p className="text-gray-600">
                    $100M+ in delivered growth. Award-winning products. Global
                    team management. Not promises—proven track record.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              My Philosophy on Capability Building
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Internalization Over Outsourcing
                </h3>
                <p className="text-gray-600">
                  External resources have their place, but sustainable
                  competitive advantage comes from building internal
                  capabilities. I'll help you know when to use external
                  partners—and when to bring capabilities in-house.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Measured Outcomes, Not Activity
                </h3>
                <p className="text-gray-600">
                  Innovation isn't about running workshops or filling
                  whiteboards. It's about delivering growth. Every capability I
                  help you build is tied to measurable business outcomes.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Process Follows Strategy
                </h3>
                <p className="text-gray-600">
                  Too many companies implement innovation processes without
                  understanding their strategic context. I start with what
                  you're trying to achieve, then build the capabilities that get
                  you there.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Change Management is Critical
                </h3>
                <p className="text-gray-600">
                  Building capabilities isn't just about processes and
                  tools—it's about people and culture. I've managed change
                  across global teams and know how to bring organizations along.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Credentials Grid */}
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Credentials & Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  P&amp;G Senior Director
                </h3>
                <p className="text-gray-600 text-sm">
                  14+ years at Procter &amp; Gamble leading design and
                  innovation teams
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Harvard Business School
                </h3>
                <p className="text-gray-600 text-sm">
                  Executive Education graduate (2 programs)
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-gold text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">4 Major Design Awards</h3>
                <p className="text-gray-600 text-sm">
                  German Design Award Gold, iF, Red Dot, CES Innovation Award
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">$100M+ Growth</h3>
                <p className="text-gray-600 text-sm">
                  Delivered measurable topline growth across Oral Care and Smart
                  Products
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Global Leadership</h3>
                <p className="text-gray-600 text-sm">
                  Managed design teams across 3 continents
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-3xl mb-3">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">First-in-Company</h3>
                <p className="text-gray-600 text-sm">
                  Built P&amp;G's first Digital Design Capability from scratch
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Talk About Your Innovation Capability
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Whether you're just starting to think about building internal
              capabilities or ready to make the investment, I'd be happy to have
              a conversation about what's possible for your organization.
            </p>
            <CTAButton
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Schedule a Conversation
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
