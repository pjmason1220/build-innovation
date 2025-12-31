import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Approach & Methodology | BUILD Innovation",
  description:
    "Proven methodology for building innovation capabilities: Design Thinking, strategic planning, internalization strategy, and measured outcomes.",
};

export default function Approach() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Approach
            </h1>
            <p className="text-xl text-gray-600">
              Proven methodology for building innovation capabilities that drive
              sustainable growth—based on real experience, not theory.
            </p>
          </div>
        </Section>

        {/* Core Philosophy */}
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Philosophy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Build, Don't Buy
                </h3>
                <p className="text-gray-600">
                  Sustainable competitive advantage comes from building internal
                  capabilities, not renting them from agencies. External
                  partners have their place, but true differentiation requires
                  internalization.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Outcomes, Not Activity
                </h3>
                <p className="text-gray-600">
                  Innovation isn't measured by workshops run or whiteboards
                  filled. It's measured by business results: revenue growth,
                  market share, customer satisfaction, competitive advantage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategy Drives Process
                </h3>
                <p className="text-gray-600">
                  Don't implement innovation processes just because "that's what
                  everyone does." Start with your strategic objectives, then
                  build capabilities that deliver against them.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  People + Process + Tools
                </h3>
                <p className="text-gray-600">
                  Capability building requires all three in balance. Great
                  people with poor processes fail. Great processes with wrong
                  tools frustrate. Success requires thoughtful integration.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Methodology */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              The Capability Building Methodology
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              This framework guided the build of P&amp;G's Digital Design
              Capability and has been refined through years of execution.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
                <div className="flex items-start">
                  <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      Strategic Alignment
                    </h3>
                    <p className="text-gray-100 mb-4">
                      Before building any capability, we must understand why
                      you need it and what success looks like.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">
                          Business Context
                        </h4>
                        <p className="text-sm text-gray-200">
                          What are your strategic growth objectives and how does
                          innovation capability support them?
                        </p>
                      </div>
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Current State</h4>
                        <p className="text-sm text-gray-200">
                          Where are you today in terms of innovation
                          capabilities, gaps, and constraints?
                        </p>
                      </div>
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Success Metrics</h4>
                        <p className="text-sm text-gray-200">
                          How will we measure success? What outcomes matter to
                          your business?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Capability Design
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Design the specific capabilities you need—not generic
                      "best practices" but capabilities tailored to your
                      strategy, culture, and constraints.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-primary mb-3">
                          People Strategy
                        </h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li>• What roles and skills do you need?</li>
                          <li>• Build internal vs. use external partners?</li>
                          <li>• Recruit vs. develop existing talent?</li>
                          <li>• Organizational structure and reporting?</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-3">
                          Process Design
                        </h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li>• Innovation process gates and milestones</li>
                          <li>• Decision-making frameworks</li>
                          <li>• Cross-functional collaboration models</li>
                          <li>• Quality standards and review processes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-3">
                          Tools & Infrastructure
                        </h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li>• Design and collaboration tools</li>
                          <li>• Project management systems</li>
                          <li>• Knowledge management platforms</li>
                          <li>• Measurement and reporting systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-3">
                          Governance Model
                        </h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li>• Portfolio management approach</li>
                          <li>• Resource allocation framework</li>
                          <li>• Performance measurement</li>
                          <li>• Continuous improvement mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-lg p-8">
                <div className="flex items-start">
                  <div className="bg-white text-secondary rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      Phased Implementation
                    </h3>
                    <p className="text-gray-100 mb-4">
                      Build capabilities in thoughtful phases—proving value
                      early while building toward the full vision.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Foundation</h4>
                        <p className="text-sm text-gray-200">
                          Core team, processes, tools. Establish fundamentals.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Pilot</h4>
                        <p className="text-sm text-gray-200">
                          Deploy on selected projects. Prove capability, refine
                          approach.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Scale</h4>
                        <p className="text-sm text-gray-200">
                          Expand team, broaden deployment. Build momentum and
                          results.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded p-4">
                        <h4 className="font-semibold mb-2">Sustain</h4>
                        <p className="text-sm text-gray-200">
                          Handoff to internal ownership. Continuous improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Change Management
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Building capabilities isn't just about processes and
                      tools—it's about people and culture. Change management is
                      critical to success.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Stakeholder Engagement
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Secure and maintain leadership support. Engage key
                          stakeholders throughout the journey.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Communication
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Clear, consistent communication about why, what, and
                          how. Celebrate wins, address concerns.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Training & Support
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Equip people with skills and tools they need. Provide
                          ongoing support and coaching.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gradient-to-r from-gold to-yellow-600 text-white rounded-lg p-8">
                <div className="flex items-start">
                  <div className="bg-white text-gold rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      Measurement & Iteration
                    </h3>
                    <p className="text-gray-100 mb-4">
                      Track progress against success metrics. Learn, adapt, and
                      continuously improve.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Leading Indicators</h4>
                        <ul className="space-y-1 text-sm text-gray-200">
                          <li>• Team capability development</li>
                          <li>• Process adoption and compliance</li>
                          <li>• Project velocity and quality</li>
                          <li>• Stakeholder satisfaction</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Business Outcomes</h4>
                        <ul className="space-y-1 text-sm text-gray-200">
                          <li>• Revenue growth from innovation</li>
                          <li>• Time-to-market improvement</li>
                          <li>• Cost efficiency gains</li>
                          <li>• Competitive advantage metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Design Thinking Application */}
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Design Thinking for Industrial Contexts
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Design Thinking isn't just for product design—it's a powerful
              approach for solving complex organizational challenges like
              capability building.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Empathize
                </h3>
                <p className="text-gray-600 mb-3">
                  Deeply understand the current state, challenges, and
                  constraints of your organization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stakeholder interviews and workshops</li>
                  <li>• Observation of current processes</li>
                  <li>• Understanding organizational culture</li>
                  <li>• Identifying pain points and opportunities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Define</h3>
                <p className="text-gray-600 mb-3">
                  Frame the capability challenge in terms of specific,
                  actionable problem statements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Clear problem definition</li>
                  <li>• Success criteria and constraints</li>
                  <li>• Stakeholder alignment on objectives</li>
                  <li>• Prioritization of opportunities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Ideate</h3>
                <p className="text-gray-600 mb-3">
                  Generate multiple approaches to capability building, drawing
                  on best practices and creative thinking.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Explore multiple capability models</li>
                  <li>• Consider build vs. buy options</li>
                  <li>• Evaluate organizational approaches</li>
                  <li>• Assess resource strategies</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Prototype
                </h3>
                <p className="text-gray-600 mb-3">
                  Test capability approaches on pilot projects before full-scale
                  implementation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pilot team and process deployment</li>
                  <li>• Selected project application</li>
                  <li>• Gather feedback and learnings</li>
                  <li>• Refine before scaling</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-primary mb-4">Test & Iterate</h3>
                <p className="text-gray-600 mb-3">
                  Continuously measure, learn, and improve capabilities based on
                  real-world results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Measure
                    </h4>
                    <p className="text-sm text-gray-600">
                      Track both leading indicators and business outcomes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Learn
                    </h4>
                    <p className="text-sm text-gray-600">
                      Analyze what's working and what needs adjustment
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Improve
                    </h4>
                    <p className="text-sm text-gray-600">
                      Continuously refine processes, tools, and approaches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Internal vs External Strategy */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Internal vs. External Resource Strategy
            </h2>

            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">The Strategic Question</h3>
              <p className="text-gray-100 text-lg">
                One of the most important decisions in capability building: What
                do you build internally vs. what do you source externally? This
                isn't an either/or decision—it's about finding the right
                strategic mix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Build Internal When:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Capability is core to competitive advantage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      You need deep organizational knowledge
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Volume justifies internal team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      IP and confidentiality are critical
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Long-term cost efficiency favors internal
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Use External When:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Need specialized expertise periodically
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Volume doesn't justify full-time team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Want fresh, external perspectives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Need capacity flexibility (peaks/valleys)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Testing capability before full commitment
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">The Reality:</h3>
              <p className="text-gray-100">
                Most successful organizations use a strategic mix—building
                internal capabilities for core competencies while partnering
                with external specialists for specific needs. The key is making
                this decision strategically, not by default.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Apply This Approach?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              This methodology is proven, practical, and adaptable to your
              specific context. Let's discuss how it can work for your
              organization.
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
