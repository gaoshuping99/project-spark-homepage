import React, { useState } from 'react';
import { 
  ChevronRight, 
  Target, 
  ShieldCheck, 
  Users, 
  Calendar, 
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Partner Value', href: '#value' },
    { name: 'Activities', href: '#events' },
    { name: 'Success Stories', href: '#cases' }
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10 text-[#0070b1] stroke-[1.5]" />,
      title: "Market Autonomy",
      description: "Gain full autonomy to drive sales and delivery in high-growth segments without internal competition."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#0070b1] stroke-[1.5]" />,
      title: "\"Safe Harbor\" Protection",
      description: "Distinct territory definitions that prevent low-price internal competition and protect your margins."
    },
    {
      icon: <Users className="w-10 h-10 text-[#0070b1] stroke-[1.5]" />,
      title: "1-on-1 Industry Coaching",
      description: "Get direct support from SAP industry experts to refine your demos and sharpen your market strategy."
    },
    {
      icon: <Award className="w-10 h-10 text-[#0070b1] stroke-[1.5]" />,
      title: "High-Level Visibility",
      description: "Showcase your success directly to SAP global leadership through quarterly QBRs and industry workshops."
    }
  ];

  const events = [
    {
      date: "Q1 2026",
      title: "Quarterly Spotlight Report",
      location: "SAP Global Visibility",
      description: "Your success cases reported directly to SAP global leadership, showcasing industry excellence."
    },
    {
      date: "March 2026",
      title: "Pioneer Partner Workshop",
      location: "Hybrid / 1-on-1 Coaching",
      description: "Deep dive with SAP Industry Experts (IBU/IA) to refine your Go-to-Market strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SAP Logo" className="h-8" />
            <div className="w-[1px] h-6 bg-gray-300 mx-2" />
            <span className="text-xl font-bold text-sap-deep tracking-tight">Project Spark</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-semibold text-gray-700 hover:text-sap-blue transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="#register" className="sap-button-primary text-sm py-2">
              Register Now
            </a>
          </nav>
        </div>
      </header>

      <section id="overview" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-sap-cyan/5 rounded-full blur-[120px]" />
          <div className="absolute right-[10%] top-[20%] w-[400px] h-[400px] bg-sap-blue/10 rounded-full blur-[100px]" />
          <svg className="absolute right-0 bottom-0 h-[300px] w-auto text-gray-50 opacity-40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0 100 C 20 0, 50 0, 100 100 Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-sap-orange text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Strategic Growth Initiative
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-sap-deep leading-[1.1] mb-8">
              Igniting Innovation in <span className="text-sap-blue">ProServ & EC&O</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              SAP's premier initiative to empower industry-leading partners to lead the next wave of mid-market digital transformation through an Indirect-by-Default model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="sap-button-primary flex items-center justify-center gap-2">
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#value" className="sap-button-secondary flex items-center justify-center">
                Explore Partner Value
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-sap-blue">2X</div>
            <div className="text-sm text-gray-500 font-medium leading-tight">Faster Market <br />Expansion Potential</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-sap-blue">Pioneer</div>
            <div className="text-sm text-gray-500 font-medium leading-tight">Direct Path to <br />Market Leadership</div>
          </div>
        </div>
      </section>

      <section id="value" className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-sap-deep mb-8">Why ProServ & EC&O?</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                The Professional Services and Engineering, Construction & Operations industries are at a critical digital turning point. Generalized ERP solutions are no longer enough.
              </p>
              <p>
                Project Spark partners provide the <strong>Industry Depth</strong> required to handle complex project lifecycles, resource management, and high-stakes bidding—empowering you to outcompete niche vendors with the full strength of the SAP ecosystem.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-sap-blue bg-gray-50">
                  <div className="font-bold text-sap-deep">85%</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Partner-Driven Corporate Business by 2028</div>
                </div>
                <div className="p-4 border-l-4 border-sap-orange bg-gray-50">
                  <div className="font-bold text-sap-deep">Strategic</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Priority GTM Industry Piloting</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-sap-deep p-8 rounded-2xl text-white">
              <h4 className="font-bold mb-4">GTM Weapon Kit</h4>
              <ul className="text-sm space-y-3 opacity-80">
                <li className="flex gap-2"><span>•</span> Global Sales Plays</li>
                <li className="flex gap-2"><span>•</span> Demo Instances</li>
                <li className="flex gap-2"><span>•</span> Industry Battlecards</li>
                <li className="flex gap-2"><span>•</span> Partner Learning Classes</li>
              </ul>
            </div>
            <div className="bg-sap-grey p-8 rounded-2xl flex flex-col justify-end">
              <div className="text-sap-blue font-bold text-lg mb-2">Pioneer First</div>
              <p className="text-sm text-gray-500 italic font-medium leading-relaxed">"Join the first industries defining the future of partner-driven success."</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-sap-deep mb-6">Elevate Your Partnership</h2>
            <p className="text-lg text-gray-600">
              Project Spark isn't just a program—it's a strategic shift that puts you in the driver's seat of the high-growth mid-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={v.title}
                className="p-8 rounded-2xl border sap-card-hover shadow-sm"
              >
                <div className="mb-6 p-3 bg-sap-blue/5 inline-block rounded-xl">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-sap-deep mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-sap-deep mb-4">Stay Engaged</h2>
              <p className="text-lg text-gray-600">
                Join our regular activities designed to keep you at the forefront of industry innovation and SAP strategy.
              </p>
            </div>
            <a href="#" className="text-sap-blue font-bold flex items-center gap-2 hover:underline">
              View All Events <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((e) => (
              <div key={e.title} className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6 group hover:border-sap-blue/30 transition-all">
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-sap-deep text-white rounded-xl group-hover:bg-sap-blue transition-colors">
                  <span className="text-xs font-bold uppercase opacity-80">Activity</span>
                  <span className="text-lg font-bold text-center leading-tight mt-1">{e.date.includes(' ') ? e.date.split(' ')[0] : e.date}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sap-deep mb-2">{e.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-sap-cyan font-semibold mb-3">
                    <Calendar className="w-4 h-4" /> {e.location}
                  </div>
                  <p className="text-gray-600">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-sap-deep mb-4">Pioneering Success</h2>
            <p className="text-lg text-gray-600">See how our industry partners are defining the future of ProServ and EC&O.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-3xl h-96">
              <div className="absolute inset-0 bg-sap-deep/70 group-hover:bg-sap-deep/50 transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Accenture Pilot" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-10 z-20">
                <span className="px-3 py-1 bg-sap-cyan text-white text-xs font-bold rounded-full mb-4 inline-block tracking-widest uppercase">Pioneer Spotlight</span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Accenture: Redefining Partner-Managed Learning</h3>
                <p className="text-white/80 mb-6 max-w-md">As our global pilot partner, Accenture is leading the new partner-managed SAP Learning Class model.</p>
                <button className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all border-b border-white/30 pb-1">
                  Read Success Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96">
              <div className="absolute inset-0 bg-sap-blue/70 group-hover:bg-sap-blue/50 transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                alt="EC&O Excellence" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-10 z-20">
                <span className="px-3 py-1 bg-sap-deep text-white text-xs font-bold rounded-full mb-4 inline-block tracking-widest uppercase">Industry Depth</span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Digitalizing the Construction Value Chain</h3>
                <p className="text-white/80 mb-6 max-w-md">Winning against niche competitors like CMiC through end-to-end integration excellence.</p>
                <button className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all border-b border-white/30 pb-1">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="section-padding bg-sap-deep text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Become a Spark Partner</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Ready to take the lead? Join a select group of partners redefining the mid-market. Fill out the form, and our industry leads will reach out within 48 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sap-orange rounded-lg"><Mail className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50">Email Us</div>
                  <div className="font-bold">spark.initiative@sap.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg"><Globe className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50">Region</div>
                  <div className="font-bold">Global Strategic Pilot</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-sap-deep mb-4">Registration Received</h3>
                <p className="text-gray-600">Thank you for your interest in Project Spark. One of our experts will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sap-blue/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sap-blue/20 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Email</label>
                  <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sap-blue/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sap-blue/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industry Focus</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sap-blue/20 transition-all appearance-none">
                    <option>Professional Services (ProServ)</option>
                    <option>Engineering, Construction & Operations (EC&O)</option>
                    <option>Both</option>
                  </select>
                </div>
                <button type="submit" className="w-full sap-button-primary mt-4 flex items-center justify-center gap-2">
                  Submit Registration <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-bold text-sap-deep mb-2">Have questions?</h3>
            <p className="text-gray-600 text-sm">Our Project Spark leads are here to help you navigate your journey.</p>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <div className="font-bold text-sap-blue">Alex Johnson</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">GTM Strategy Lead</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-sap-blue">Sarah Chen</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Partner Enablement</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-sap-grey text-[#333] pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-sm">
              <img src={logo} alt="SAP Logo" className="h-8 mb-6" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                SAP Project Spark is a strategic initiative dedicated to fostering industry-specific ecosystems and driving digital transformation in the mid-market.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-sap-blue hover:text-sap-blue transition-all"><Phone className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-sap-blue hover:text-sap-blue transition-all"><Mail className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-sap-blue hover:text-sap-blue transition-all"><Globe className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Quick Links</h4>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><a href="#overview" className="hover:text-sap-blue transition-colors">Overview</a></li>
                  <li><a href="#value" className="hover:text-sap-blue transition-colors">Partner Value</a></li>
                  <li><a href="#events" className="hover:text-sap-blue transition-colors">Activities</a></li>
                  <li><a href="#cases" className="hover:text-sap-blue transition-colors">Success Stories</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Trending</h4>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><a href="#" className="hover:text-sap-blue transition-colors">SAP Business AI</a></li>
                  <li><a href="#" className="hover:text-sap-blue transition-colors">Sustainability</a></li>
                  <li><a href="#" className="hover:text-sap-blue transition-colors">Cloud ERP</a></li>
                </ul>
              </div>

              <div className="hidden sm:block">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">About SAP</h4>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><a href="#" className="hover:text-sap-blue transition-colors">Company Info</a></li>
                  <li><a href="#" className="hover:text-sap-blue transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-sap-blue transition-colors">News & Press</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
            <div className="flex gap-6 items-center">
              <span>© 2026 SAP SE or an SAP affiliate company.</span>
              <a href="#" className="hover:text-sap-blue">Privacy</a>
              <a href="#" className="hover:text-sap-blue">Terms of Use</a>
              <a href="#" className="hover:text-sap-blue">Legal Disclosure</a>
              <a href="#" className="hover:text-sap-blue">Copyright</a>
              <a href="#" className="hover:text-sap-blue">Trademark</a>
              <a href="#" className="hover:text-sap-blue">Cookie Statement</a>
            </div>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 hover:text-sap-blue transition-colors">
              Back to top <ChevronRight className="w-3 h-3 -rotate-90" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
