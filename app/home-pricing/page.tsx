import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8 pb-16 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="BUILD Innovation"
                  width={400}
                  height={100}
                  className="h-20 w-auto"
                  priority
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Build World-Class Innovation Capabilities That Drive Growth
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I built P&amp;G's first Digital Design Capability from
                scratch—from external resources to fully internalized teams
                deployed against our biggest consumer opportunities. My programs
                delivered{" "}
                <span className="font-bold text-primary">
                  $100M+ in topline growth
                </span>{" "}
                across Oral Care and Smart Products.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                I now help mid-market companies build world-class innovation
                capabilities that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg">Schedule a Conversation</CTAButton>
                <CTAButton href="/services" variant="secondary" size="lg">
                  Explore Services
                </CTAButton>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  The Rare Combination You Need
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-3 text-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Built it myself:</strong> Most consultants advise;
                      I've actually built capabilities from scratch
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-3 text-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Strategic + Hands-on:</strong> Harvard-trained
                      strategy combined with execution expertise
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-3 text-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Proven results:</strong> Award-winning products,
                      global team management, measurable growth
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section background="gray">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Results speak louder than promises. Here's what I've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                $100M+
              </div>
              <div className="text-gray-600 font-medium">
                Topline Growth Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">
                Years Industry Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                4
              </div>
              <div className="text-gray-600 font-medium">
                Major Design Awards
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                3
              </div>
              <div className="text-gray-600 font-medium">
                Continents of Team Management
              </div>
            </div>
          </div>
        </Section>

        {/* Services Overview */}
        <Section background="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Three Ways We Can Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a diagnostic, full capability build, or ongoing
              strategic leadership, I have a solution that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="text-secondary text-4xl mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Innovation Capability Assessment
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">$30K</div>
              <p className="text-gray-600 mb-6">
                6-8 week diagnostic of your current innovation capability with
                actionable roadmap for improvement.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Current state analysis
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Gap identification
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Prioritized roadmap
                </li>
              </ul>
              <CTAButton href="/services" variant="secondary">
                Learn More
              </CTAButton>
            </div>

            {/* Service 2 - Highlighted */}
            <div className="bg-primary rounded-lg shadow-xl p-8 text-white transform lg:scale-105 border-2 border-gold">
              <div className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-sm font-semibold mb-4">
                Most Comprehensive
              </div>
              <div className="text-gold text-4xl mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Capability Build Programs
              </h3>
              <div className="text-3xl font-bold text-white mb-4">
                $200-225K
              </div>
              <p className="text-gray-100 mb-6">
                12-18 month engagement to build and internalize world-class
                innovation capabilities.
              </p>
              <ul className="space-y-2 text-gray-100 mb-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Team building & training
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Process implementation
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Tools & infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Measured outcomes
                </li>
              </ul>
              <CTAButton
                href="/services"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Learn More
              </CTAButton>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="text-secondary text-4xl mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Fractional Chief Design Officer
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                $15K/mo
              </div>
              <p className="text-gray-600 mb-6">
                Ongoing strategic design leadership without the full-time
                commitment. Retainer-based engagement.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Strategic leadership
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Team coaching
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Project oversight
                </li>
              </ul>
              <CTAButton href="/services" variant="secondary">
                Learn More
              </CTAButton>
            </div>
          </div>
        </Section>

        {/* Credentials Section */}
        <Section background="gray">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Credentials That Open Doors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The credibility to engage at the C-suite level, backed by real
              execution experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    P&amp;G Senior Director
                  </h3>
                  <p className="text-gray-600">
                    14+ years at Procter &amp; Gamble, 25+ years total industry
                    experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Harvard Business School
                  </h3>
                  <p className="text-gray-600">
                    Executive Education graduate (2x programs)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <div className="bg-gold rounded-lg p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Award-Winning Products
                  </h3>
                  <p className="text-gray-600">
                    Oral-B iO: German Design Award Gold, iF Design Award, Red
                    Dot, CES Innovation Award
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Global Leadership
                  </h3>
                  <p className="text-gray-600">
                    Managed design teams across 3 continents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="primary">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Innovation Capability?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's have a conversation about where you are and where you want
              to be. No pressure, just a discussion about what's possible.
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
