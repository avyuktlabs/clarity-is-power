const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-[750px] mx-auto px-6 py-6">
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="font-serif font-semibold text-base text-foreground hover:no-underline">
              Avyukt
            </a>
            <a href="#about" className="text-primary hover:underline">
              About
            </a>
            <a href="#research" className="text-primary hover:underline">
              Research
            </a>
            <a href="#people" className="text-primary hover:underline">
              People
            </a>
            <a href="#contact" className="text-primary hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[750px] mx-auto px-6">
        {/* Hero */}
        <section className="pt-24 pb-16">
          <h1 className="font-serif text-5xl font-semibold mb-8 leading-tight">
            Avyukt
          </h1>
          <p className="text-xl leading-relaxed mb-6">
            A student-run research collective investigating AI interpretability for high-stakes systems.
          </p>
          <p className="text-muted-foreground">
            Est. 2025, Bangalore
          </p>
        </section>

        {/* Mission */}
        <section id="about" className="py-16 border-t border-border">
          <h2 className="font-serif text-3xl font-semibold mb-12">
            Our Mission
          </h2>
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              We are focused on a single critical problem: AI models are "black boxes."
            </p>
            <p>
              This lack of transparency is unacceptable in high-stakes environments like emergency medicine, 
              where a model's error can have irreversible consequences.
            </p>
            <p>
              Our mission is to conduct foundational research into <em>why</em> models make the decisions they do. 
              We aim to move from "AI that works" to "AI that is understood," developing methods to make systems 
              auditable, reliable, and trustworthy under pressure.
            </p>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="py-16 border-t border-border">
          <h2 className="font-serif text-3xl font-semibold mb-12">
            Research Agenda
          </h2>
          <div className="space-y-12">
            <p className="text-base leading-relaxed">
              Our work is not about building new models, but dissecting existing ones. We are currently focused 
              on two primary lines of inquiry:
            </p>

            {/* Research Area 1 */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                1. Mechanistic Interpretability in Critical Contexts
              </h3>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  We use techniques like causal tracing and feature attribution to identify the exact internal 
                  mechanisms a model uses to process high-stakes data.
                </p>
                <p className="pl-6 border-l-2 border-muted italic">
                  <strong>Key Question:</strong> Can we pinpoint the specific "circuit" within a model that 
                  activates when processing an emergency triage report?
                </p>
              </div>
            </div>

            {/* Research Area 2 */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                2. Failure Mode Characterization
              </h3>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  We analyze how and why models fail when given the noisy, incomplete, and high-stress data 
                  typical of emergency scenarios.
                </p>
                <p className="pl-6 border-l-2 border-muted italic">
                  <strong>Key Question:</strong> Do models develop predictable, systemic biases when data is sparse, 
                  and can we detect these failure modes before they occur in a live environment?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* People */}
        <section id="people" className="py-16 border-t border-border">
          <h2 className="font-serif text-3xl font-semibold mb-12">
            People
          </h2>
          <p className="text-base leading-relaxed mb-8">
            Avyukt is a student-run research collective.
          </p>
          <div className="space-y-2 text-base">
            <p>Joyce Malik</p>
            <p>V.L. Rishank</p>
            <p>Afreen</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-border mb-24">
          <h2 className="font-serif text-3xl font-semibold mb-12">
            Contact
          </h2>
          <p className="text-base leading-relaxed mb-8">
            We are actively seeking to collaborate with fellow researchers and domain experts in medicine 
            and critical systems.
          </p>
          <div className="space-y-2 text-base">
            <p>
              <a href="mailto:joycemalik14@gmail.com" className="text-primary hover:underline">
                joycemalik14@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:vlvrishank@gmail.com" className="text-primary hover:underline">
                vlvrishank@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:afreen@gmail.com" className="text-primary hover:underline">
                afreen@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
