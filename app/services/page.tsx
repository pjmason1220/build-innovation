import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Services | BUILD Innovation",
  description:
    "Innovation capability assessment, capability build programs, and fractional Chief Design Officer services. Proven methodologies from P&G's innovation leader.",
};

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Three ways we can work together to build your innovation
              capability—from diagnostic assessment to full capability build to
              ongoing strategic leadership.
            </p>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="gray">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              title="Innovation Capability Assessment"
              price="$30,000"
              duration="6-8 weeks"
              description="Comprehensive diagnostic of your current innovation capability with actionable roadmap for improvement."
              features={[
                "Current state analysis across people, process, and technology",
                "Gap identification against best practices",
                "Stakeholder interviews and workshops",
                "Prioritized roadmap with clear next steps",
                "Executive presentation and recommendations",
              ]}
            />

            <ServiceCard
              title="Capability Build Programs"
              price="$200-225K"
              duration="12-18 months"
              description="Full engagement to build and internalize world-class innovation capabilities that drive sustainable growth."
              features={[
                "Talent recruitment and team building",
                "Comprehensive training programs",
                "Process design and implementation",
                "Tools and infrastructure setup",
                "Change management and adoption",
                "Measured outcomes and ROI tracking",
              ]}
              highlighted={true}
            />

            <ServiceCard
              title="Fractional Chief Design Officer"
              price="$15K/month"
              duration="Retainer basis"
              description="Ongoing strategic design leadership without the full-time executive commitment. Perfect for companies needing experienced guidance."
              features={[
                "Strategic innovation leadership",
                "Team coaching and mentorship",
                "Project oversight and direction",
                "Capability maintenance and growth",
                "Flexible engagement model",
              ]}
            />
          </div>
        </Section>

        {/* Service 1 Details */}
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Innovation Capability Assessment
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Before you can build world-class innovation capabilities, you
                  need to know where you stand. This 6-8 week diagnostic gives
                  you a clear, actionable understanding of your current state
                  and a roadmap to get where you want to be.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Unlike generic assessments, this diagnostic is based on proven
                  frameworks from building P&amp;G's Digital Design
                  Capability—adapted specifically for mid-market companies.
                </p>

                <div className="bg-primary text-white rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-xl mb-3">Investment: $30,000</h3>
                  <p className="text-gray-100 mb-2">Timeline: 6-8 weeks</p>
                  <p className="text-gray-100">
                    Deliverable: Comprehensive assessment report + executive
                    presentation + prioritized roadmap
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Current State Analysis
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Deep dive into your existing capabilities across people,
                        processes, tools, and culture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Stakeholder Engagement
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Interviews with key leaders and team members to
                        understand challenges and opportunities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">Gap Analysis</strong>
                      <p className="text-gray-600 mt-1">
                        Identify specific gaps between current state and
                        best-in-class innovation capabilities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Prioritized Roadmap
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Clear, sequenced plan for building capabilities with
                        estimated timelines and resources
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Executive Presentation
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Present findings and recommendations to leadership team
                        with Q&amp;A
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Who This Is For:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Companies considering building internal innovation capabilities</li>
                    <li>• Organizations struggling with innovation effectiveness</li>
                    <li>• Leadership teams wanting objective assessment before major investment</li>
                    <li>• Companies using too many external resources and wanting to internalize</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Service 2 Details */}
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Program Phases:
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      Phase 1: Foundation (Months 1-3)
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Strategy alignment and capability definition</li>
                      <li>• Talent assessment and recruitment planning</li>
                      <li>• Process design and documentation</li>
                      <li>• Tool evaluation and selection</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      Phase 2: Build (Months 4-9)
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Team recruitment and onboarding</li>
                      <li>• Training program delivery</li>
                      <li>• Process implementation and refinement</li>
                      <li>• Infrastructure setup</li>
                      <li>• Pilot projects for capability validation</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      Phase 3: Deploy (Months 10-15)
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Full-scale capability deployment</li>
                      <li>• Project execution against business objectives</li>
                      <li>• Continuous improvement and optimization</li>
                      <li>• Leadership development</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      Phase 4: Sustain (Months 16-18)
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Capability handoff and documentation</li>
                      <li>• Results measurement and ROI analysis</li>
                      <li>• Sustainment planning</li>
                      <li>• Final reporting and recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Capability Build Programs
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  This is the comprehensive engagement for companies ready to
                  make the investment in building world-class innovation
                  capabilities. Based on the same methodology I used to build
                  P&amp;G's Digital Design Capability, this 12-18 month program
                  takes you from current state to fully internalized,
                  sustainable innovation capability.
                </p>

                <div className="bg-primary text-white rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-xl mb-3">
                    Investment: $200-225K
                  </h3>
                  <p className="text-gray-100 mb-2">Timeline: 12-18 months</p>
                  <p className="text-gray-100 mb-4">
                    Deliverable: Fully built and deployed innovation capability
                    with measured outcomes
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="text-sm text-gray-100">
                      <strong>ROI Expectation:</strong> Based on P&amp;G
                      results, expect 3-5x return through improved innovation
                      success rates, reduced time-to-market, and sustainable
                      competitive advantage.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Who This Is For:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Mid-market companies ($50M-$500M) ready to invest in
                      innovation
                    </li>
                    <li>
                      • Organizations committed to building internal capabilities
                    </li>
                    <li>
                      • Leadership teams aligned on innovation as competitive
                      advantage
                    </li>
                    <li>
                      • Companies frustrated with external agency dependency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Service 3 Details */}
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fractional Chief Design Officer
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Not every company needs—or can afford—a full-time Chief Design
                  Officer. But you still need strategic design leadership,
                  someone who can guide your innovation efforts, coach your
                  teams, and ensure you're building the right capabilities the
                  right way.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  That's where a Fractional CDO engagement makes sense. You get
                  senior-level strategic leadership on a retainer basis, with
                  the flexibility to scale up or down based on your needs.
                </p>

                <div className="bg-primary text-white rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-xl mb-3">
                    Investment: $15,000/month
                  </h3>
                  <p className="text-gray-100 mb-2">
                    Engagement: Retainer-based, typically 12+ months
                  </p>
                  <p className="text-gray-100">
                    Commitment: Approximately 2-3 days per month, flexible
                    scheduling
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Engagement Model:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monthly on-site strategic sessions</li>
                    <li>• Virtual team coaching and reviews</li>
                    <li>• Project oversight and direction</li>
                    <li>• Available for critical decisions and escalations</li>
                    <li>• Quarterly capability assessments</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What You Get:
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Strategic Leadership
                      </strong>
                      <p className="text-gray-600 mt-1">
                        C-suite level strategic guidance on innovation
                        direction, capability building, and resource allocation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Team Development
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Coaching for design and innovation team leaders,
                        capability building, and skill development
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">Project Oversight</strong>
                      <p className="text-gray-600 mt-1">
                        Strategic review and direction on key innovation
                        projects, ensuring quality and alignment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">
                        Capability Maintenance
                      </strong>
                      <p className="text-gray-600 mt-1">
                        Ongoing assessment and improvement of innovation
                        capabilities, processes, and tools
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1"
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
                    <div>
                      <strong className="text-gray-900">Flexible Access</strong>
                      <p className="text-gray-600 mt-1">
                        Available for urgent questions, critical decisions, and
                        strategic discussions as needed
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Who This Is For:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Companies with existing innovation teams needing
                      strategic guidance
                    </li>
                    <li>
                      • Organizations that have built some capability but need
                      senior leadership
                    </li>
                    <li>
                      • Companies not ready for full capability build but need
                      expert direction
                    </li>
                    <li>
                      • Leadership teams wanting to validate and improve
                      innovation approaches
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* How to Choose */}
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Which Service is Right for You?
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-secondary">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Start with the Assessment if...
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • You're not sure what innovation capabilities you need
                  </li>
                  <li>
                    • You want objective analysis before making major investment
                  </li>
                  <li>
                    • You need to build the business case for capability
                    building
                  </li>
                  <li>• You're exploring options and want expert guidance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Choose the Capability Build if...
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • You're committed to building internal innovation
                    capabilities
                  </li>
                  <li>
                    • You have leadership alignment and budget approval
                  </li>
                  <li>
                    • You're ready for a comprehensive 12-18 month engagement
                  </li>
                  <li>
                    • You want measurable results and sustainable competitive
                    advantage
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Choose Fractional CDO if...
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • You have some innovation capability but need strategic
                    leadership
                  </li>
                  <li>
                    • You want ongoing guidance without full-time executive
                    commitment
                  </li>
                  <li>
                    • You need help coaching and developing your innovation
                    teams
                  </li>
                  <li>
                    • You want flexible, scalable access to senior expertise
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Not sure which option is right for you? Let's have a
                conversation.
              </p>
              <CTAButton size="lg">Schedule a Conversation</CTAButton>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Every engagement starts with a conversation. No pressure, just a
              discussion about where you are and where you want to be.
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
