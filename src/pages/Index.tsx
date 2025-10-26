import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-[800px] mx-auto px-8 py-5">
          <div className="flex items-center gap-8 text-sm">
            <Link to="/" className="font-serif font-semibold text-xl text-foreground hover:text-primary transition-colors">
              Avyukt
            </Link>
            <a href="#publications" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Publications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#research" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Research
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-8">
        {/* Hero */}
        <section className="pt-32 pb-24 relative">
          {/* Geometric accent background */}
          <div className="absolute top-24 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-32 left-0 w-48 h-48 bg-accent/30 rounded-full blur-2xl -z-10"></div>
          
          {/* Accent line decoration */}
          <div className="absolute left-0 top-28 w-16 h-1 bg-gradient-to-r from-primary to-transparent mb-8"></div>
          
          <h1 className="font-serif text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
            Avyukt
          </h1>
          <p className="text-lg italic text-muted-foreground mb-10 font-light tracking-wide">
            Making the invisible, visible
          </p>
          <p className="text-2xl leading-relaxed mb-8 text-foreground/90 max-w-[680px]">
            A student-run research collective investigating AI interpretability for high-stakes systems.
          </p>
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            Est. 15 Aug 2025 • Bangalore
          </p>
        </section>

        {/* Publications */}
        <section id="publications" className="py-20 border-t border-border">
          <h2 className="font-serif text-4xl font-bold mb-16 tracking-tight">
            Publications & Notes
          </h2>
          <div className="space-y-8 max-w-[680px]">
            <article className="group">
              <div className="flex items-baseline gap-4 mb-3">
                <time className="text-sm font-mono text-muted-foreground tracking-wide">
                  Aug 2025
                </time>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                <Link to="/clinical-case-study" className="hover:underline">
                  A Critical Case Study of Interpretability in Clinical Systems
                </Link>
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                An analysis examining the practical limitations of current interpretability methods when applied 
                to medical decision support systems, with focus on emergency triage scenarios.
              </p>
            </article>
          </div>
        </section>

        {/* Mission */}
        <section id="about" className="py-20 border-t border-border">
          <h2 className="font-serif text-4xl font-bold mb-16 tracking-tight">
            Our Mission
          </h2>
          <div className="space-y-8 text-lg leading-relaxed max-w-[680px]">
            <p className="text-foreground/90">
              We are focused on a single critical problem: AI models are "black boxes."
            </p>
            <p className="text-foreground/90">
              This lack of transparency is unacceptable in high-stakes environments like emergency medicine, 
              where a model's error can have irreversible consequences.
            </p>
            <p className="text-foreground/90">
              Our mission is to conduct foundational research into <em className="font-serif">why</em> models make the decisions they do. 
              We aim to move from "AI that works" to "AI that is understood," developing methods to make systems 
              auditable, reliable, and trustworthy under pressure.
            </p>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="py-20 border-t border-border">
          <h2 className="font-serif text-4xl font-bold mb-16 tracking-tight">
            Research Agenda
          </h2>
          <div className="space-y-16 max-w-[680px]">
            <p className="text-lg leading-relaxed text-foreground/90">
              Our work is not about building new models, but dissecting existing ones. We are currently focused 
              on two primary lines of inquiry:
            </p>

            {/* Research Area 1 */}
            <div className="bg-accent/30 border-l-4 border-primary p-8 rounded-r">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                1. Mechanistic Interpretability in Critical Contexts
              </h3>
              <div className="space-y-6 text-base leading-relaxed">
                <p className="text-foreground/90">
                  We use techniques like causal tracing and feature attribution to identify the exact internal 
                  mechanisms a model uses to process high-stakes data.
                </p>
                <div className="bg-background/50 p-6 rounded border border-border">
                  <p className="italic text-foreground/80">
                    <strong className="font-semibold text-foreground">Key Question:</strong> Can we pinpoint the specific "circuit" within a model that 
                    activates when processing an emergency triage report?
                  </p>
                </div>
              </div>
            </div>

            {/* Research Area 2 */}
            <div className="bg-accent/30 border-l-4 border-primary p-8 rounded-r">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                2. Failure Mode Characterization
              </h3>
              <div className="space-y-6 text-base leading-relaxed">
                <p className="text-foreground/90">
                  We analyze how and why models fail when given the noisy, incomplete, and high-stress data 
                  typical of emergency scenarios.
                </p>
                <div className="bg-background/50 p-6 rounded border border-border">
                  <p className="italic text-foreground/80">
                    <strong className="font-semibold text-foreground">Key Question:</strong> Do models develop predictable, systemic biases when data is sparse, 
                    and can we detect these failure modes before they occur in a live environment?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Contact */}
        <section id="contact" className="py-20 border-t border-border mb-32">
          <h2 className="font-serif text-4xl font-bold mb-16 tracking-tight">
            Contact
          </h2>
          <p className="text-lg leading-relaxed mb-12 text-foreground/90 max-w-[680px]">
            We are actively seeking to collaborate with fellow researchers and domain experts in medicine 
            and critical systems.
          </p>
          <div className="space-y-6 max-w-[680px]">
            <p className="text-lg text-foreground/90">
              Please reach out at:
            </p>
            <div className="flex items-center gap-4 p-6 bg-accent/20 rounded-lg border border-border hover:border-primary transition-colors">
              <a href="mailto:23f2001747@ds.study.iitm.ac.in" className="text-xl text-primary hover:underline font-medium">
                23f2001747@ds.study.iitm.ac.in
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-[800px] mx-auto px-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Avyukt Research Collective
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
