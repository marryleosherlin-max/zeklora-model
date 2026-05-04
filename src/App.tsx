import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Zap,
  Target,
  Search
} from 'lucide-react';

// --- Types ---
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black-950/90 backdrop-blur-md py-4 border-b border-gold-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <span className="text-gold-500">ZEKLORA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-gold-500 text-black font-semibold text-sm uppercase tracking-widest hover:bg-gold-400 transition-all transform hover:-translate-y-0.5"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-900 border-b border-gold-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-display text-white/80 hover:text-gold-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full py-3 bg-gold-500 text-black text-center font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold-500 uppercase tracking-[0.3em] font-semibold text-sm mb-6 border-b border-gold-500/30 pb-2">
            Zeklora Presence
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-tight mb-8">
            Powering <br />
            <span className="gold-gradient">Relentless Growth</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-10 font-light leading-relaxed">
            Crafting digital excellence through strategic design and high-performance engineering. We scale your brand from momentum to market dominance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#portfolio" 
              className="group px-8 py-4 bg-gold-500 text-black text-lg font-bold uppercase tracking-widest hover:bg-gold-400 transition-all flex items-center gap-2"
            >
              View Portfolio
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-gold-500/30 text-white text-lg font-bold uppercase tracking-widest hover:bg-gold-500/10 transition-all"
            >
              Our Expertise
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 bg-gradient-to-b from-gold-500 to-transparent rounded-full" />
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Brand Strategy",
      description: "Defining your identity and positioning to command industry authority.",
      icon: <Target className="text-gold-500" size={32} />
    },
    {
      id: 2,
      title: "Digital Performance",
      description: "Optimizing every touchpoint for maximum conversion and speed.",
      icon: <Zap className="text-gold-500" size={32} />
    },
    {
      id: 3,
      title: "Growth Advisory",
      description: "Data-driven insights to scale your business relentlessly.",
      icon: <Sparkles className="text-gold-500" size={32} />
    },
    {
      id: 4,
      title: "Market Analysis",
      description: "Deep-hive research to uncover hidden opportunities in your niche.",
      icon: <Search className="text-gold-500" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-black-900 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Expertise built for <span className="text-gold-500 italic">impact</span></h2>
            <p className="text-white/40 text-lg">We don't just build websites; we engineer systems of growth. Each service is tailored to amplify your brand's unique strengths.</p>
          </div>
          <div className="text-8xl font-display font-black text-gold-500/5 leading-none hidden lg:block">SERVICES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="p-8 bg-black-950 border border-gold-500/10 hover:border-gold-500/40 transition-all group"
            >
              <div className="mb-6 p-4 bg-gold-500/5 inline-block rounded-lg group-hover:bg-gold-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects: PortfolioItem[] = [
    {
      id: 1,
      title: "Aurora Venture",
      description: "Fintech scaling platform for high-net-worth investors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Strategic Design", "Scale"]
    },
    {
      id: 2,
      title: "Peak Performance",
      description: "High-octane athlete management system with AI insights.",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800",
      tags: ["Web App", "Analytics"]
    },
    {
      id: 3,
      title: "Lumina Studio",
      description: "Brand overhaul for an international architectural firm.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      tags: ["Identity", "Digital"]
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-gold-500 uppercase tracking-widest font-bold text-sm">Case Studies</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">Selected <span className="gold-gradient italic">Work</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-black-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black-950/40 group-hover:bg-black-950/10 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-gold-500 border border-gold-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-gold-400 transition-colors flex items-center justify-between">
                {project.title}
                <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-white/40">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "The relentless pursuit of market dominance",
      excerpt: "How high-growth companies differentiate their digital presence to command higher premiums.",
      date: "May 12, 2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      category: "Growth"
    },
    {
      id: 2,
      title: "Design for exclusivity: Why less is more",
      excerpt: "The psychology of minimalist luxury design and its impact on conversion rates.",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
      category: "Design"
    },
    {
      id: 3,
      title: "Engineering scale without technical debt",
      excerpt: "Building robust systems that grow as fast as your ambitions without breaking.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      category: "Tech"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-black-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold">Insights & <span className="text-gold-500">Perspective</span></h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-gold-500 uppercase tracking-widest font-bold text-sm hover:gap-4 transition-all">
            All Articles <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="mb-6 relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
                <span className="absolute top-4 left-4 bg-gold-500 text-black px-3 py-1 text-[10px] uppercase font-black tracking-widest">
                  {post.category}
                </span>
              </div>
              <p className="text-gold-500/60 text-xs uppercase tracking-widest font-bold mb-3">{post.date}</p>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-400 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-white/40 mb-6 line-clamp-2">{post.excerpt}</p>
              <a href="#" className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-gold-500 transition-colors">
                Read More <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry sent. Zeklora will contact you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Ready to <br /><span className="gold-gradientitalic italic">evolve?</span></h2>
            <p className="text-xl text-white/50 mb-12 font-light leading-relaxed">
              We selectively partner with clients who share our relentless pursuit of excellence. Drop us a line to discuss your next chapter.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold-500/5 rounded-full text-gold-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-sm">Email Us</h4>
                  <p className="text-white/50">partnerships@zeklora.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold-500/5 rounded-full text-gold-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-sm">Call Us</h4>
                  <p className="text-white/50">+1 (555) POWER-UP</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold-500/5 rounded-full text-gold-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-sm">Global HQ</h4>
                  <p className="text-white/50">Level 88, Sky Tower, Digital Core</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black-900 border border-gold-500/20 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-500/60">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g. Marcus Aurelius"
                    className="w-full bg-black-950 border border-gold-500/10 focus:border-gold-500 outline-none p-4 text-white placeholder:text-white/10 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-500/60">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="E.g. ceo@empire.com"
                    className="w-full bg-black-950 border border-gold-500/10 focus:border-gold-500 outline-none p-4 text-white placeholder:text-white/10 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-500/60">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Market Domination"
                  className="w-full bg-black-950 border border-gold-500/10 focus:border-gold-500 outline-none p-4 text-white placeholder:text-white/10 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-500/60">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we fuel your growth?"
                  className="w-full bg-black-950 border border-gold-500/10 focus:border-gold-500 outline-none p-4 text-white placeholder:text-white/10 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-gold-500 text-black font-black uppercase tracking-[0.25em] hover:bg-gold-400 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-black-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="text-3xl font-display font-black text-gold-500">ZEKLORA</div>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold-500 transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-gold-400">Powering Relentless Growth</h4>
            <p className="text-white/30 max-w-sm leading-relaxed">
              Zeklora is a boutique growth agency for visionaries who refuse to settle for the status quo. We combine aesthetics with aggressive performance strategy.
            </p>
          </div>
          <div>
            <h5 className="text-xs uppercase font-black tracking-widest text-white/60 mb-6">Navigation</h5>
            <ul className="space-y-4 text-sm text-white/30">
              <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold-500 transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-gold-500 transition-colors">Insights</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase font-black tracking-widest text-white/60 mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-white/30">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">
          <p>© 2026 ZEKLORA INTERNATIONAL. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR RELENTLESS GROWTH.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
