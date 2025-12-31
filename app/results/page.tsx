import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Results & Case Studies | BUILD Innovation",
  description:
    "Proven results: $100M+ growth, award-winning Oral-B iO platform, P&G's first Digital Design Capability built from scratch.",
};

export default function Results() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Results & Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Proven track record of building innovation capabilities and
              delivering measurable business results.
            </p>
          </div>
        </Section>

        {/* Impact Overview */}
        <Section background="gray">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              By the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary mb-3">$100M+</div>
              <div className="text-gray-600 font-medium">
                Topline Growth Delivered
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Across Oral Care and Smart Products platforms
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-gold mb-3">4</div>
              <div className="text-gray-600 font-medium">
                Major Design Awards
              </div>
              <p className="text-sm text-gray-500 mt-2">
                German Design Gold, iF, Red Dot, CES Innovation
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary mb-3">1st</div>
              <div className="text-gray-600 font-medium">
                P&amp;G Digital Design Capability
              </div>
              <p className="text-sm text-gray-500 mt-2">
                First-in-company capability built from scratch
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-primary mb-3">3</div>
              <div className="text-gray-600 font-medium">
                Continents
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Global teams managed across Asia, Europe, Americas
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study 1: Oral-B iO */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Case Study
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Oral-B iO: Award-Winning Innovation Platform
              </h2>
              <p className="text-xl text-gray-600">
                Leading the design of P&amp;G's most significant oral care
                innovation, delivering exceptional consumer experience and
                measurable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-600 mb-4">
                  P&amp;G needed to reinvent the electric toothbrush category
                  with a breakthrough innovation that would combine superior
                  brushing technology with an exceptional user experience,
                  setting a new standard for oral care.
                </p>
                <p className="text-gray-600 mb-6">
                  The challenge required integrating advanced brushing
                  technology, smart connectivity, intuitive industrial design,
                  and seamless digital experience—all while meeting P&amp;G's
                  rigorous standards for quality, manufacturability, and
                  consumer delight.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Approach
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">→</span>
                    <span>
                      Led cross-functional design teams across multiple continents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">→</span>
                    <span>
                      Integrated industrial design, UI/UX, and digital experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">→</span>
                    <span>
                      Collaborated closely with engineering and marketing teams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">→</span>
                    <span>
                      Applied Design Thinking methodology to complex technical
                      challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">→</span>
                    <span>
                      Managed design through prototyping, testing, and
                      refinement to production
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Results
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-gold to-yellow-600 text-white rounded-lg p-6">
                    <h4 className="font-bold text-xl mb-2">
                      German Design Award – Gold Winner
                    </h4>
                    <p className="text-sm text-gray-100">
                      Prestigious international recognition for excellence in
                      product design
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6">
                    <h4 className="font-bold text-xl mb-2">
                      iF Design Award
                    </h4>
                    <p className="text-sm text-gray-100">
                      One of the world's most celebrated design competitions
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-6">
                    <h4 className="font-bold text-xl mb-2">Red Dot Award</h4>
                    <p className="text-sm text-gray-100">
                      Product Design category excellence recognition
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg p-6">
                    <h4 className="font-bold text-xl mb-2">
                      CES Innovation Award
                    </h4>
                    <p className="text-sm text-gray-100">
                      Recognition for technology and design innovation
                    </p>
                  </div>
                </div>

                <div className="bg-primary text-white rounded-lg p-6">
                  <h4 className="font-bold text-xl mb-3">Business Impact</h4>
                  <ul className="space-y-2 text-gray-100">
                    <li>• Platform contributed significantly to $100M+ growth</li>
                    <li>• Elevated P&amp;G's position in premium oral care</li>
                    <li>• Established new category standard for smart oral care</li>
                    <li>• Demonstrated value of integrated design approach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Learnings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Integrated Design Wins
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Success came from seamlessly integrating industrial design,
                    digital experience, and engineering—not treating them as
                    separate workstreams.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Global Collaboration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Managing teams across continents requires clear processes,
                    strong communication, and cultural awareness.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Consumer-Centricity
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Every design decision was validated against consumer needs
                    and preferences through rigorous testing.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Excellence at Scale
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Award-winning design is possible even within large
                    organization constraints—with the right capability and
                    leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Study 2: Digital Design Capability Build */}
        <Section background="gray">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Capability Building Case Study
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Building P&amp;G's First Digital Design Capability
              </h2>
              <p className="text-xl text-gray-600">
                From zero to fully internalized digital design capability
                deployed across global innovation priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-600 mb-4">
                  P&amp;G recognized that digital experiences were becoming
                  critical to product success, but they had no internal digital
                  design capability. Everything was outsourced to agencies and
                  external partners.
                </p>
                <p className="text-gray-600 mb-6">
                  The challenge: Build a world-class internal digital design
                  capability from scratch that could deliver against P&amp;G's
                  biggest innovation opportunities while maintaining the
                  quality, speed, and cost-effectiveness the company demanded.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Approach
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-primary mb-2">
                      Phase 1: Assessment &amp; Strategy
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Analyzed current state and gaps</li>
                      <li>• Developed capability building roadmap</li>
                      <li>• Secured leadership commitment and budget</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-primary mb-2">
                      Phase 2: Foundation Building
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Recruited core team members</li>
                      <li>• Developed processes and standards</li>
                      <li>• Selected tools and infrastructure</li>
                      <li>• Established agency partnerships for scale</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-primary mb-2">
                      Phase 3: Deployment &amp; Scale
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Deployed teams against key projects</li>
                      <li>• Expanded team across continents</li>
                      <li>• Internalized critical capabilities</li>
                      <li>• Developed internal talent</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-primary mb-2">
                      Phase 4: Optimization
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Refined processes based on learnings</li>
                      <li>• Enhanced tools and infrastructure</li>
                      <li>• Built centers of excellence</li>
                      <li>• Established sustainability model</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Results
                </h3>

                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-2xl mb-4">
                    First-in-Company Achievement
                  </h4>
                  <p className="text-gray-100 mb-4">
                    Successfully built P&amp;G's first Digital Design Capability,
                    setting the standard for how the company approaches digital
                    experiences in product innovation.
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm text-gray-100">
                      This capability became the model for other capability
                      builds across the organization.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Team Growth
                    </h4>
                    <p className="text-gray-600 mb-2">
                      From 0 → fully staffed teams across 3 continents
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      Global Scale
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Capability Internalization
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Transitioned from 100% external to strategic mix of
                      internal + external
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      Sustainable Model
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Business Impact
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Deployed against biggest opportunities in Oral Care and
                      Smart Products
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      $100M+ Growth
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Cost Efficiency
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Reduced external agency costs while improving quality and
                      speed
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      ROI Positive
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white border-2 border-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why This Matters for Your Company
              </h3>
              <p className="text-gray-600 mb-6">
                This capability build demonstrates exactly what I bring to
                mid-market companies: I've actually done this before, at one of
                the world's most demanding companies, and I know how to make it
                work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary mb-1">Not Theory</h4>
                  <p className="text-sm text-gray-600">
                    This isn't consulting frameworks—it's proven methodology
                    from actual experience.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary mb-1">Scalable</h4>
                  <p className="text-sm text-gray-600">
                    Approaches that worked at P&amp;G can be adapted for
                    mid-market scale and resources.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary mb-1">Sustainable</h4>
                  <p className="text-sm text-gray-600">
                    Built to last beyond the engagement—this is about building
                    your capability, not dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Additional Results */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Multi-Continental Team Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Successfully managed design teams across Asia, Europe, and
                  Americas, developing processes and communication systems that
                  enabled effective collaboration across time zones and cultures.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Global Leadership Experience
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Process Innovation
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed and implemented design processes that balanced
                  creativity with efficiency, enabling faster time-to-market
                  without compromising quality.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Operational Excellence
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Talent Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Recruited, trained, and developed design professionals who
                  went on to lead their own teams and projects within P&amp;G
                  and beyond.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Building People & Capabilities
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Strategic Partnerships
                </h3>
                <p className="text-gray-600 mb-4">
                  Established and managed strategic partnerships with design
                  agencies and technology providers, optimizing the mix of
                  internal and external resources.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Strategic Resource Management
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              These results came from proven methodologies, disciplined
              execution, and deep expertise. Let's discuss how we can deliver
              similar results for your organization.
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
