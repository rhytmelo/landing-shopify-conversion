import { ArrowRight, CheckCircle2, Zap, TrendingUp, ShoppingCart, Smartphone, Clock, Star, ChevronDown, Menu, X, MessageCircleMore } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToCTA = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scheduleCall = () => {
    window.open("https://rhytmelo.com/call", "_blank");
  };

  const customProposal = () => {
    window.open("https://rhytmelo.com/inquiry", "_blank");
  };
  const proofOfConcept = () => {
    document.getElementById('proof-of-concept')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.rhytmelo.com/public/brand/logos/logo-final/pngs/rhytmelo-logo-black.png"
                alt="Rhytmelo Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
              <a href="#difference" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Why Us</a>
              <a href="#faq" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">FAQ</a>
              <button
                onClick={scrollToCTA}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                Get Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-200 space-y-3">
              <a href="#services" className="block text-slate-600 hover:text-slate-900 font-medium py-2">Services</a>
              <a href="#difference" className="block text-slate-600 hover:text-slate-900 font-medium py-2">Why Us</a>
              <a href="#faq" className="block text-slate-600 hover:text-slate-900 font-medium py-2">FAQ</a>
              <button
                onClick={() => {
                  scrollToCTA();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Get Free Audit
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-20">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAxNmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTE2IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Trusted by Growing D2C Brands</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Turn Instagram Traffic Into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Real Revenue
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
                Shopify Conversion & Performance Studio for Instagram-First D2C Brands
              </p>

              <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
                We help lifestyle, home, decor, food & women-centric D2C brands transform social traffic into consistent sales with fast, conversion-driven Shopify experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.3s'}}>
                <button
                  onClick={scrollToCTA}
                  className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 flex items-center gap-2"
                >
                  Get a Free Shopify Store Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToCTA}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
                >
                  Book a Strategy Call
                </button>
              </div>

              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Mobile-First Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Trusted by Growing D2C Brands Across Categories
                </h2>
                <p className="text-lg text-slate-600">
                  Artisanal food, candles, gifting, decor & lifestyle products
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg mb-4 leading-relaxed">
                    "Rhytmelo redesigned our store and increased checkout conversions by 28% in 60 days."
                  </p>
                  <p className="font-semibold text-slate-900">— Founder, Home Decor Brand</p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg mb-4 leading-relaxed">
                    "Fast turnaround, smart UX decisions, and measurable revenue gains."
                  </p>
                  <p className="font-semibold text-slate-900">— Founder, Food Brand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

          <div className="container mx-auto px-6" id='proof-of-concept'>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">Live Projects</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Proof of Concept
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Real stores we've redesigned that are now converting at higher rates. Hover to explore each project.
                </p>
              </div>

              {/* Project Tiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  { image: 'Kristore-sull-page-screenshot.png', name: 'Kristore', category: 'Fashion & Accessories', url: 'https://kristore.in' },
                  { image: 'bacf-org-in-full-page-screenshot.png', name: 'BACF', category: 'Organization', url: 'https://bacf.org.in' },
                  { image: 'beebliss-full-page-screenshot.png', name: 'Bee Bliss', category: 'Wellness & Honey', url: 'https://beebliss.co.in' },
                  { image: 'hansagro-full-page-screenshot.png', name: 'HansAgro', category: 'Agriculture', url: 'https://web.archive.org/web/20241004004606/https://hansagro.in/' },
                  { image: 'nutricrop-co-in-fullscreenshot.png', name: 'NutriCrop', category: 'Health & Nutrition', url: 'https://nutricrop.co.in' },
                  { image: 'sm-plastic-full-screenshot.png', name: 'SM Plastic', category: 'Industrial', url: 'https://smplastic.in' }
                ].map((project, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-105 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-400/50 will-change-transform"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {/* Scrolling Container */}
                    <div className="relative w-full h-96 overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 animate-scroll-vertical group-hover:animation-pause">
                        <img
                          src={`https://cdn.rhytmelo.com/project-snapshots/pictures/${project.image}`}
                          alt={project.name}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800"%3E%3Crect fill="%23f1f5f9" width="400" height="800"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2364748b" font-family="system-ui" font-size="16"%3EProject Screenshot%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>

                      {/* Gradient overlays */}
                      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.category}
                      </div>
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-end justify-end p-6 z-30 pointer-events-none group-hover:pointer-events-auto">
                      <div className="w-full">
                        <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                        <p className="text-slate-300 text-sm mb-4">{project.category}</p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors duration-300 pointer-events-auto"
                        >
                          View Live <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Play indicator badge */}
                    <div className="absolute top-4 right-4 z-10 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-emerald-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Auto Scroll
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-400/20 rounded-2xl p-8 md:p-12 text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Join These Success Stories?</h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  See how we're helping D2C brands convert more traffic into revenue
                </p>
                <button
                  onClick={scrollToCTA}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 inline-flex items-center gap-2 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Every Brand Has Traffic<br />
                  <span className="text-red-400">But Most Lose Sales Before Checkout</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-red-400">70%</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Abandoned Carts</h3>
                      <p className="text-slate-300">Without optimized checkout and flow, most carts never convert</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-orange-500/10 p-6 rounded-xl border border-orange-500/20">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Slow Mobile Pages</h3>
                      <p className="text-slate-300">Visitors drop away on friction-filled mobile journeys</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6">Rhytmelo Solves This:</h3>
                  <div className="space-y-4">
                    {[
                      'Conversion-first layouts',
                      'Fast, mobile-ready performance',
                      'Frictionless checkout & payment flows',
                      'Integration strategies that work with your Instagram funnel'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={scrollToCTA}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 inline-flex items-center gap-2 hover:scale-105"
                >
                  See Your Store's Conversion Score
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Our Core Expertise
                </h2>
                <p className="text-xl text-slate-600">Services Built for D2C Growth</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <ShoppingCart className="w-8 h-8" />,
                    title: 'Shopify Store Setup & Redesign',
                    description: 'Complete store builds and redesigns focused on conversion optimization'
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: 'Conversion Design',
                    description: 'Homepage & product pages engineered to turn visitors into buyers'
                  },
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: 'Mobile & Speed Optimization',
                    description: 'Lightning-fast mobile experiences that prevent revenue leaks'
                  },
                  {
                    icon: <CheckCircle2 className="w-8 h-8" />,
                    title: 'Checkout Optimization',
                    description: 'Streamlined checkout flows, COD & app integrations'
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: 'Instagram Integration',
                    description: 'Seamless connection from social traffic to store conversions'
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: 'Ongoing Growth Support',
                    description: 'Continuous optimization and support for sustained growth'
                  }
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={customProposal}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  Request a Custom Proposal
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="difference" className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  What Makes Rhytmelo Different
                </h2>
                <p className="text-xl text-slate-600">
                  We don't just design stores — we build revenue-optimized experiences
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Data-Informed UX Decisions',
                    description: 'Every design choice backed by user behavior analytics and conversion data',
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    title: 'Buying Psychology Integration',
                    description: 'Deep understanding of customer psychology and purchase triggers',
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    title: 'Performance-First Approach',
                    description: 'Speed and functionality prioritized alongside beautiful aesthetics',
                    icon: <Smartphone className="w-6 h-6" />
                  },
                  {
                    title: 'Fast Turnarounds',
                    description: 'Hands-on collaboration with quick delivery and iteration cycles',
                    icon: <Clock className="w-6 h-6" />
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={scheduleCall}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 inline-flex items-center gap-2 hover:scale-105"
                >
                  Talk to a Conversion Specialist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Indicators</h2>
                <p className="text-xl text-slate-300">Proof of Impact</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { label: 'Conversion Rate Lifts', icon: <TrendingUp className="w-8 h-8" />, metric: '+28%' },
                  { label: 'Page Speed Improvements', icon: <Zap className="w-8 h-8" />, metric: '3x Faster' },
                  { label: 'Lower Cart Abandonment', icon: <ShoppingCart className="w-8 h-8" />, metric: '-42%' },
                  { label: 'Checkout Completion', icon: <CheckCircle2 className="w-8 h-8" />, metric: '+35%' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.metric}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={proofOfConcept}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
                >
                  Show Me the Impact
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
                Why D2C Leaders Choose Us
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Built for Instagram-First Funnels',
                    description: 'Seamless transition from social to shop with optimized landing experiences'
                  },
                  {
                    title: 'Specialized Shopify Expertise',
                    description: 'Not a generic agency — we live and breathe Shopify conversion optimization'
                  },
                  {
                    title: 'Performance & UX Focused',
                    description: 'Design that drives real sales, not just pretty visuals'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl border-l-4 border-emerald-500">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    question: 'Do you integrate with Instagram Shopping & WhatsApp?',
                    answer: 'Yes — we build stores that sync seamlessly with your social channels and optimize for conversions from Instagram, WhatsApp, and other social platforms.'
                  },
                  {
                    question: 'How fast can you launch a new store?',
                    answer: 'Typically within weeks — optimized for speed, performance & testing. We prioritize getting your store live quickly while ensuring it\'s fully optimized for conversions.'
                  },
                  {
                    question: 'What makes your approach different from other Shopify agencies?',
                    answer: 'We focus exclusively on conversion optimization and performance for Instagram-first D2C brands. Every design decision is backed by data and buying psychology, not just aesthetics.'
                  },
                  {
                    question: 'Do you provide ongoing support after launch?',
                    answer: 'Yes, we offer ongoing growth support to continuously optimize your store based on real performance data and user behavior insights.'
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="audit-form" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAxNmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTE2IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Turn More Traffic into Sales?
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                Get your free Shopify store audit and discover exactly where you're losing revenue
              </p>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submission would go here!'); }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="https://yourstore.com or Instagram Profile"
                      className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your biggest challenge (optional)"
                      rows={4}
                      className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get My Free Store Audit
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-sm text-slate-400">
                    Limited free audits available weekly • No credit card required
                  </p>
                </form>
              </div>

              <div className="mt-12">
                <p className="text-slate-400 mb-4">Or schedule a call directly:</p>
                <button
                  onClick={scheduleCall}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 inline-flex items-center gap-2"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-slate-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm">© 2024 Rhytmelo Designs. All rights reserved.</p>
            <p className="text-xs mt-2">Shopify Conversion & Performance Studio for D2C Brands</p>
          </div>
        </footer>

        <a
          href="https://wa.me/919899885363?text=Hi%20Rhytmelo%2C%20I%27m%20interested%20in%20improving%20my%20Shopify%20store%20conversions."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 group bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 will-change-transform"
        >
          <MessageCircleMore className="w-6 h-6 animate-bounce-slow" />
          <div className="absolute bottom-full right-0 mb-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Chat with us on WhatsApp
          </div>
        </a>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scroll-vertical {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-100%);
            }
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
            }
            50% {
              box-shadow: 0 0 30px rgba(34, 197, 94, 0.8);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
            will-change: opacity;
          }

          .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
            animation-fill-mode: both;
            will-change: opacity, transform;
          }

          .animate-scroll-vertical {
            animation: scroll-vertical 20s linear infinite;
            will-change: transform;
          }

          .animate-bounce-slow {
            animation: bounce-slow 2.5s ease-in-out infinite;
            will-change: transform;
          }

          /* GPU acceleration for smooth transitions */
          button, a {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          /* Smooth transitions */
          * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          }

          /* Disable transitions on animations */
          .animate-slide-up,
          .animate-fade-in,
          .animate-scroll-vertical,
          .animate-bounce-slow {
            transition: none;
          }

          /* Pause animation on hover */
          .group-hover\\:animation-pause:hover {
            animation-play-state: paused;
          }

          /* Smooth link transitions */
          a {
            transition: color 0.3s ease, text-decoration 0.3s ease;
          }

          /* Prevent layout shift on scale */
          img {
            will-change: transform;
          }
        `}</style>
      </div>
    </div>
  );
}

export default App;