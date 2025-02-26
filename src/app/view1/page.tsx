"use client"
import type React from "react"
import Image from "next/image"

const SafeProLandingPage: React.FC = () => {
  return (
    <div className="dark-theme">
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <div className="logo-icon">S</div>
              SafePro
            </a>
            <div className="nav-links">
              <a href="#">Products</a>
              <a href="#">Safety</a>
              <a href="#">Research</a>
              <a href="#">About Us</a>
            </div>
            <a href="#" className="cta-button">
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate">
              <h1 className="hero-headline">Premium Protection, Guaranteed Safety</h1>
              <p className="hero-subheadline">
                Experience our globally-certified products designed with your well-being in mind. Backed by rigorous
                scientific research and compliance with international safety standards.
              </p>
              <a href="#" className="primary-button">
                Discover Our Range
              </a>

              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="trust-badge-icon">✓</span>
                  <span>FDA Approved</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-badge-icon">✓</span>
                  <span>EU Certified</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-badge-icon">✓</span>
                  <span>100% Secure</span>
                </div>
              </div>
            </div>

            <div className="hero-image animate">
              <Image src="/placeholder.svg" alt="Product Image" width={500} height={400} className="product-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose SafePro?</h2>

          <div className="features-grid">
            {[
              {
                icon: "S",
                title: "Safety Guaranteed",
                description:
                  "Every product undergoes rigorous testing and certification processes to ensure it meets the highest safety standards globally.",
              },
              {
                icon: "P",
                title: "Premium Quality",
                description:
                  "We source only the finest ingredients and materials, creating products that deliver exceptional performance without compromising safety.",
              },
              {
                icon: "T",
                title: "Transparent Process",
                description:
                  "Full ingredient disclosure and comprehensive safety data for every product gives you complete peace of mind.",
              },
              {
                icon: "R",
                title: "Research-Backed",
                description:
                  "Our team of scientists continuously researches and develops innovative solutions that prioritize your safety.",
              },
              {
                icon: "E",
                title: "Expert Support",
                description:
                  "Our dedicated team of experts is available 24/7 to address your concerns and provide personalized assistance.",
              },
              {
                icon: "G",
                title: "Global Standards",
                description:
                  "We adhere to and exceed international safety regulations, ensuring our products are safe for use worldwide.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card animate">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance">
        <div className="container">
          <h2 className="section-title">Global Compliance & Certifications</h2>

          <div className="compliance-grid">
            {[
              {
                logo: "/placeholder.svg",
                title: "FDA Approved",
                description: "Meets all US Food and Drug Administration safety standards.",
              },
              {
                logo: "/placeholder.svg",
                title: "EU Certified",
                description: "Compliant with European Union health and safety regulations.",
              },
              {
                logo: "/placeholder.svg",
                title: "ISO 9001:2015",
                description: "Internationally recognized quality management system.",
              },
              {
                logo: "/placeholder.svg",
                title: "GMP Certified",
                description: "Follows Good Manufacturing Practice guidelines.",
              },
            ].map((cert, index) => (
              <div key={index} className="compliance-card animate">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.title} Logo`}
                  width={120}
                  height={60}
                  className="compliance-logo"
                />
                <h3 className="compliance-title">{cert.title}</h3>
                <p className="compliance-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>

          <div className="testimonials-container">
            <div className="testimonial-card animate">
              <p className="testimonial-quote">
                SafePro has completely transformed my approach to product safety. Their transparency and commitment to
                quality give me complete confidence in every purchase. The detailed safety information provided is
                exceptional.
              </p>

              <div className="testimonial-author">
                <Image src="/placeholder.svg" alt="Customer Avatar" width={60} height={60} className="author-avatar" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Experience Safety Without Compromise</h2>
          <p className="cta-description">
            Join thousands of satisfied customers who prioritize safety without sacrificing quality or performance.
          </p>
          <a href="#" className="primary-button">
            Shop Now
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <a href="#" className="footer-logo">
                SafePro
              </a>
              <p className="footer-description">
                We`&apos;re dedicated to providing premium products with uncompromising safety standards, backed by science
                and global certifications.
              </p>

              <div className="social-links">
                <a href="#" className="social-link">
                  F
                </a>
                <a href="#" className="social-link">
                  T
                </a>
                <a href="#" className="social-link">
                  I
                </a>
                <a href="#" className="social-link">
                  L
                </a>
              </div>
            </div>

            {[
              {
                title: "Products",
                links: ["Premium Line", "Essential Collection", "Professional Series", "New Arrivals"],
              },
              { title: "Company", links: ["About Us", "Our Research", "Safety Standards", "Careers"] },
              { title: "Support", links: ["Contact Us", "FAQs", "Shipping Policy", "Returns & Refunds"] },
            ].map((column, index) => (
              <div key={index} className="footer-column">
                <h3 className="footer-title">{column.title}</h3>
                <ul className="footer-links">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 SafePro. All rights reserved.</p>

            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="chatbot-trigger">?</div>

      <style jsx>{`
        :root {
          --indigo-600: #4f46e5;
          --indigo-500: #6366f1;
          --purple-500: #a855f7;
          --pink-500: #ec4899;
          --dark-bg: #121212;
          --dark-surface: #1e1e1e;
          --dark-text: #e0e0e0;
          --dark-text-muted: #a0a0a0;
        }

        .dark-theme {
          background-color: var(--dark-bg);
          color: var(--dark-text);
        }

        header {
          background: linear-gradient(90deg, var(--indigo-600), var(--purple-500));
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .logo-icon {
          background-color: white;
          color: var(--indigo-600);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-weight: 800;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .cta-button {
          background-color: white;
          color: var(--indigo-600);
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: var(--indigo-600);
          color: white;
        }

        .hero {
          padding: 6rem 0 4rem;
          background: linear-gradient(180deg, #1a1a1a 0%, var(--dark-bg) 100%);
        }

        .hero-content {
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .hero-text {
          flex: 1;
        }

        .hero-headline {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, var(--indigo-600), var(--pink-500));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subheadline {
          font-size: 1.25rem;
          color: var(--dark-text-muted);
          margin-bottom: 2rem;
        }

        .primary-button {
          background-color: var(--indigo-600);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .primary-button:hover {
          background-color: var(--indigo-500);
        }

        .trust-badges {
          display: flex;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--dark-surface);
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          color: var(--dark-text);
        }

        .features, .compliance, .testimonials {
          padding: 5rem 0;
          background-color: var(--dark-bg);
        }

        .section-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: var(--dark-text);
        }

        .features-grid, .compliance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card, .compliance-card, .testimonial-card {
          background-color: var(--dark-surface);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .feature-icon {
          background: linear-gradient(135deg, var(--indigo-500), var(--purple-500));
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .feature-title, .compliance-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--dark-text);
        }

        .feature-description, .compliance-description {
          color: var(--dark-text-muted);
        }

        .testimonial-quote {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--dark-text);
          font-style: italic;
          margin-bottom: 2rem;
        }

        .author-info h4 {
          color: var(--dark-text);
        }

        .author-info p {
          color: var(--dark-text-muted);
        }

        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, var(--indigo-600), var(--purple-500));
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        footer {
          padding: 4rem 0;
          background-color: var(--dark-surface);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-text);
          text-decoration: none;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .footer-description {
          color: var(--dark-text-muted);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          background-color: rgba(255, 255, 255, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-text);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: var(--indigo-500);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--dark-text);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--dark-text-muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--dark-text);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright {
          color: var(--dark-text-muted);
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: var(--dark-text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .footer-legal a:hover {
          color: var(--dark-text);
        }

        .chatbot-trigger {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--indigo-600), var(--purple-500));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          z-index: 999;
          transition: all 0.3s ease;
        }

        .chatbot-trigger:hover {
          transform: scale(1.1);
        }

        @media (max-width: 992px) {
          .hero-content {
            flex-direction: column;
            gap: 3rem;
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.5rem;
          }

          .features-grid, .compliance-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default SafeProLandingPage

