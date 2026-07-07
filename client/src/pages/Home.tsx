import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Zap, Globe, BarChart3, CheckCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

/**
 * Talentkey Home Page
 * Design System: Modern Corporate Minimalism with Accent Dynamics
 * Colors: Deep Slate Blue (#1E3A5F) + Vibrant Teal (#00D9FF)
 * Typography: Poppins (display) + Inter (body)
 */

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="accent-badge" style={{ width: "40px", height: "40px" }}>
              T
            </div>
            <h1 className="text-xl font-bold text-primary">Talentkey</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#features" className="text-foreground hover:text-accent transition-colors">Features</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="accent-bar-v h-12"></div>
                <span className="text-accent font-semibold">Workforce Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Transform Your Talent Strategy
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Talentkey empowers enterprises across Asia with intelligent contingent workforce management and recruitment solutions. Scale your team with agility and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover-lift">
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 hover-lift">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192121492/8P9CTKqAmgKZAk2M4qoX53/talentkey-hero-workforce-YLZeEJ295LTF4dDEVds7gb.webp"
                alt="Professional team collaborating"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg">500K+</p>
                <p className="text-sm font-medium">Talent Placements Across Asia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-bar-v h-10"></div>
              <span className="text-accent font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Comprehensive Workforce Solutions
            </h2>
            <p className="text-lg text-foreground/70">
              From contingent staffing to permanent placements, we deliver tailored solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="p-8 hover-lift border-0 shadow-md hover:shadow-lg bg-white">
              <div className="accent-badge mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Contingent Workforce</h3>
              <p className="text-foreground/70 mb-4">
                Flexible staffing solutions for temporary, contract, and project-based roles across all industries.
              </p>
              <a href="#" className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-8 hover-lift border-0 shadow-md hover:shadow-lg bg-white">
              <div className="accent-badge mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Direct Placement</h3>
              <p className="text-foreground/70 mb-4">
                Permanent recruitment services connecting top talent with organizations seeking long-term team members.
              </p>
              <a href="#" className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-8 hover-lift border-0 shadow-md hover:shadow-lg bg-white">
              <div className="accent-badge mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">RPO Services</h3>
              <p className="text-foreground/70 mb-4">
                Recruitment Process Outsourcing to streamline hiring and reduce time-to-hire across your organization.
              </p>
              <a href="#" className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section with Image */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192121492/8P9CTKqAmgKZAk2M4qoX53/talentkey-recruitment-process-atCZDJZuYtPMGgW5Jcszdk.webp"
                alt="Recruitment process workflow"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Right: Features List */}
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="accent-bar-v h-10"></div>
                  <span className="text-accent font-semibold">Why Talentkey</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Intelligent Workforce Management
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { title: "AI-Powered Matching", desc: "Advanced algorithms match candidates with roles for optimal fit" },
                  { title: "Real-Time Analytics", desc: "Track metrics and optimize your workforce strategy in real-time" },
                  { title: "Compliance Management", desc: "Ensure full compliance with local labor laws across Asia" },
                  { title: "24/7 Support", desc: "Dedicated support team available round-the-clock" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-foreground/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asia Market Coverage */}
      <section className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-bar-h w-12"></div>
              <span className="text-accent font-semibold">Global Reach</span>
              <div className="accent-bar-h w-12"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Serving Asia-Pacific Markets
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              With operations across major Asian markets, we understand local talent dynamics and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192121492/8P9CTKqAmgKZAk2M4qoX53/talentkey-asia-market-HbKmPqgVKk5opXgksb9zLo.webp"
              alt="Asia-Pacific market coverage map"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 mb-6">
                With our headquarters in Shanghai and strategic operations across the Asia-Pacific region, Talentkey serves enterprise clients throughout major Asian markets. Our deep understanding of local labor markets, regulatory requirements, and business cultures enables us to deliver tailored workforce solutions that drive measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Regional Expertise</h4>
                    <p className="text-foreground/70">Comprehensive coverage across Asia-Pacific markets with local market knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Compliance & Regulations</h4>
                    <p className="text-foreground/70">Expert navigation of diverse labor laws and employment regulations across regions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Cultural Alignment</h4>
                    <p className="text-foreground/70">Deep understanding of regional business practices and organizational cultures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "50K+", label: "Active Placements" },
              { number: "500+", label: "Enterprise Clients" },
              { number: "8", label: "Countries Served" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">{stat.number}</div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="accent-bar-h w-12"></div>
                <span className="text-accent font-semibold">Get In Touch</span>
                <div className="accent-bar-h w-12"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Let's Talk About Your Talent Needs
              </h2>
              <p className="text-lg text-foreground/70">
                Our team is ready to discuss how Talentkey can support your workforce strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-semibold text-primary mb-1">Email</p>
                <a href="mailto:info@talentkey.com" className="text-foreground/70 hover:text-accent transition-colors">
                  info@talentkey.com
                </a>
              </div>
              <div className="text-center p-6">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-semibold text-primary mb-1">Phone</p>
                <a href="tel:+8613611717817" className="text-foreground/70 hover:text-accent transition-colors">
                  +86 136 1171 7817
                </a>
              </div>
              <div className="text-center p-6">
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-semibold text-primary mb-1">Headquarters</p>
                <p className="text-foreground/70">Shanghai, China</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="bg-blue-50 p-8 rounded-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your workforce needs..."
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white hover-lift">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Talentkey</h3>
              <p className="text-white/70 text-sm">Transforming workforce management across Asia-Pacific. Headquartered in Shanghai, China.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Contingent Workforce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Direct Placement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RPO Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Talentkey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
