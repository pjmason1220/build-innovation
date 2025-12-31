import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">
              BUILD Innovation
            </h3>
            <p className="text-sm mb-4">
              Building world-class innovation capabilities for mid-market
              companies. From P&amp;G's first Digital Design Capability to your
              competitive advantage.
            </p>
            <p className="text-sm">
              <strong>Location:</strong> Greater Cincinnati Area
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="hover:text-white transition-colors"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className="hover:text-white transition-colors"
                >
                  Approach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:pjmason1220@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  pjmason1220@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15132828775"
                  className="hover:text-white transition-colors"
                >
                  513-282-8775
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Schedule a Conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} BUILD Innovation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
