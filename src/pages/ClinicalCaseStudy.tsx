import { Link } from "react-router-dom";

const ClinicalCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-[800px] mx-auto px-8 py-5">
          <div className="flex items-center gap-8 text-sm">
            <Link to="/" className="font-serif font-semibold text-xl text-foreground hover:text-primary transition-colors">
              Avyukt
            </Link>
            <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="/#research" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Research
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="/#publications" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Publications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="/#people" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                People
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-[800px] mx-auto px-8 py-16">
        {/* Article Header */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link to="/#publications" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Publications
            </Link>
          </div>

          <h1 className="font-serif text-5xl font-bold mb-6 leading-tight tracking-tight">
            A Critical Case Study of Interpretability in Clinical Systems
          </h1>

          <h3 className="text-xl text-muted-foreground font-normal mb-8 leading-relaxed">
            An analysis examining the practical limitations of current interpretability methods when applied to medical decision support systems, with focus on emergency triage scenarios.
          </h3>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
            <time>22 August 2025</time>
          </div>

          {/* Abstract */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Abstract</h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              This single‑case observational study reconstructs an emergency department (ED) triage event in which a machine‑learning–based clinical decision support (CDS) alert for sepsis produced an early positive signal that did not translate into timely clinical action. We analyze model telemetry, alert routing, human‑factors context, and post‑hoc explanation artifacts. The objective is <strong>descriptive</strong>: to show how prevailing interpretability methods—feature attributions, saliency overlays, and counterfactuals—behaved in situ, and why their current forms were operationally insufficient for time‑critical care. The study uses terminology consistent with SaMD (software as a medical device), ISO 14971 risk management, and Good Machine Learning Practice (GMLP). We do <strong>not</strong> make recommendations; we document observations of where a real‑time, interpretable agent could have created legibility without prescribing clinical actions.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Case Overview */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Case Overview</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li><strong>Setting:</strong> Urban academic ED during respiratory‑season surge.</li>
              <li><strong>Patient:</strong> Adult male, 58, febrile with hypotension at triage, suspected urinary source.</li>
              <li><strong>System Under Observation:</strong> EHR‑integrated sepsis CDS comprised of (1) a black‑box risk model (gradient‑boosted ensemble), (2) an alerting service with batching and rate‑limits, and (3) dashboards exposing weekly metrics and offline explanation plots (global SHAP, partial dependence).</li>
              <li><strong>Governance Lens:</strong> Treated internally under SaMD‑like controls—defined intended use; hazard register per ISO 14971; internal post‑market surveillance; ad‑hoc change control for thresholds.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Clinical Timeline */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Clinical Timeline (minutes since ED arrival)</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className="bg-accent/20 p-6 rounded border border-border">
                <p><strong>T+00–07 (Triage):</strong> Fever (39.1 °C), HR 118, SBP 92 mmHg. Free‑text note: "rigors, confusion." Labs ordered. Model score <strong>0.61</strong> (&lt; paging threshold <strong>0.65</strong>). No alert.</p>
              </div>
              <div className="bg-accent/20 p-6 rounded border border-border">
                <p><strong>T+18:</strong> Lactate <strong>2.4 mmol/L</strong> posted; MAP trending down. Model score <strong>0.66</strong> (≥ threshold). Alert enters a queue (14 notifications pending) due to <strong>batching + rate‑limit</strong>. No clinician saw an alert in this window.</p>
              </div>
              <div className="bg-accent/20 p-6 rounded border border-border">
                <p><strong>T+30:</strong> Fluid bolus completed; SBP 88, HR 124. Model score <strong>0.70</strong>. Page delivered to charge nurse; primary nurse device in medication‑scan <strong>DND</strong> mode.</p>
              </div>
              <div className="bg-accent/20 p-6 rounded border border-border">
                <p><strong>T+37:</strong> First human acknowledgment recorded.</p>
              </div>
              <div className="bg-accent/20 p-6 rounded border border-border">
                <p><strong>T+42:</strong> Physician review; antibiotics ordered. <strong>Time‑to‑antibiotics (TTA): 44 min.</strong></p>
              </div>
            </div>
            <div className="mt-6 bg-primary/10 p-6 rounded border-l-4 border-primary">
              <p className="text-foreground font-medium"><strong>Index Observation:</strong> The earliest model‑positive state occurred at <strong>T+18</strong>; the first acknowledgment was at <strong>T+37</strong>—a <strong>12‑minute gap</strong> attributable to operational factors (queueing, device states) and limited interpretability at the point of care.</p>
            </div>
          </section>

          <hr className="my-12 border-border" />

          {/* System Architecture */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">System Architecture (as deployed)</h2>
            <ol className="space-y-4 list-decimal list-inside text-lg leading-relaxed">
              <li className="pl-2">
                <strong>Risk Model:</strong> Gradient‑boosted trees trained on multi‑site EHR features (vitals, labs, orders, note embeddings). Internal AUROC <strong>0.82</strong> at deployment; no site‑local recalibration in preceding 90 days. Output: continuous score [0,1]; static cutoff <strong>0.65</strong>.
              </li>
              <li className="pl-2">
                <strong>Alerting Layer:</strong> Secure‑messaging microservice; FIFO queue; 60‑s batching; per‑recipient throttle. Escalation policy: charge nurse → primary nurse → ED physician.
              </li>
              <li className="pl-2">
                <strong>Explainability Artifacts (offline):</strong>
                <ul className="ml-8 mt-2 space-y-2 list-disc list-outside">
                  <li>Global SHAP bar plots (top 20 features, weekly refresh)</li>
                  <li>Partial dependence charts for lactate, MAP, temperature</li>
                  <li>No contemporaneous case‑level rationale aligned to protocol criteria</li>
                </ul>
              </li>
              <li className="pl-2">
                <strong>Observability:</strong> Weekly PPV/sensitivity and <strong>alerts per 100 patient‑hours</strong>, visible to quality teams; no real‑time <strong>calibration curve</strong> or workload indicator for frontline staff.
              </li>
            </ol>
          </section>

          <hr className="my-12 border-border" />

          {/* Interpretability Methods */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">
              Interpretability Methods Encountered — Practical Limitations in This Case
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">1) Local Feature Attributions (e.g., SHAP)</h3>
                <ul className="space-y-2 text-lg leading-relaxed ml-6 list-disc">
                  <li><strong>Availability:</strong> Generated offline; not accessible at the moment of alert.</li>
                  <li><strong>Limitation Observed:</strong> Attribution vectors highlighted plausible drivers (lactate, hypotension, suspected infection) <strong>after the fact</strong>, but did not map to the ED's sepsis protocol checklist (e.g., SOFA deltas, time‑bounded hypotension). In practice, this offered <strong>post‑hoc plausibility</strong> rather than <strong>actionable justification</strong>.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">2) Global Importance & Partial Dependence</h3>
                <ul className="space-y-2 text-lg leading-relaxed ml-6 list-disc">
                  <li><strong>Availability:</strong> Supervisory dashboard, weekly cadence.</li>
                  <li><strong>Limitation Observed:</strong> Provided <strong>model understanding</strong> for stewards but not <strong>decision support</strong> for clinicians under time pressure. Did not surface <strong>current‑shift calibration</strong> or <strong>effective alert burden</strong>, which directly influence attention and trust during a surge.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">3) Saliency/Heatmaps for Note Embeddings</h3>
                <ul className="space-y-2 text-lg leading-relaxed ml-6 list-disc">
                  <li><strong>Availability:</strong> Prototype only; not validated with "sanity checks" for stability under parameter randomization.</li>
                  <li><strong>Limitation Observed:</strong> Risk of <strong>explanation artifacts</strong>; the team avoided surfacing them live. Their absence left the bedside without any <strong>contextual rationale</strong>.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">4) Counterfactual Explanations</h3>
                <ul className="space-y-2 text-lg leading-relaxed ml-6 list-disc">
                  <li><strong>Availability:</strong> Not present at runtime.</li>
                  <li><strong>Limitation Observed:</strong> Clinicians lacked a <strong>decision boundary view</strong> (e.g., "if MAP &gt; 65 for 10 min, risk downgrades"), which could have clarified whether immediate escalation was warranted while labs were pending. Counterfactuals were not designed; hence <strong>no boundary intuition</strong> was available.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="my-12 border-border" />

          {/* Telemetry and Human-Factors */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Telemetry and Human‑Factors Findings</h2>
            <ul className="space-y-3 text-lg leading-relaxed ml-6 list-disc">
              <li><strong>Prospective Calibration Drift:</strong> At the <strong>0.65–0.70</strong> score band, observed event probability during the prior week was ~0.40, driving <strong>alert volume</strong> at the chosen cutoff and contributing to <strong>alert fatigue</strong>.</li>
              <li><strong>Composite Operational Threshold:</strong> The effective trigger depended on model cutoff <strong>and</strong> queue state <strong>and</strong> device status. This <strong>implicit thresholding</strong> was opaque to users, explaining inconsistent alert visibility.</li>
              <li><strong>Attention Ecology:</strong> Non‑sepsis pages shared the same 60‑s batch. Under surge, clinically heterogeneous alerts competed for attention, diluting signal salience.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Safety/Quality Framing */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Safety/Quality Framing (Standards Language)</h2>
            <ul className="space-y-4 text-lg leading-relaxed ml-6 list-disc">
              <li><strong>Intended Use & Indications:</strong> Early identification of suspected sepsis to support timely review; not a substitute for clinician judgment.</li>
              <li>
                <strong>Hazards (ISO 14971 concepts):</strong>
                <ul className="ml-6 mt-2 space-y-1 list-circle list-inside">
                  <li>H1: Delayed notification due to batching/throttling</li>
                  <li>H2: Alert fatigue from low PPV at selected cutoff</li>
                  <li>H3: Misalignment of explanation with protocol artifacts</li>
                </ul>
              </li>
              <li><strong>Controls in Place:</strong> Governance committee review; weekly performance surveillance; change‑control for thresholds. No bedside <strong>calibration display</strong>; no explainability QA gate for live artifacts.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Where an Interpretable Agent Could Have Helped */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">
              Where a Real‑Time, Interpretable Agent <em>Could</em> Have Created Legibility (Observations Only)
            </h2>
            <div className="bg-accent/20 p-6 rounded border-l-4 border-primary mb-6">
              <p className="text-foreground/90 italic">
                The following are <strong>observations</strong>, not design prescriptions or recommendations.
              </p>
            </div>
            <ol className="space-y-4 list-decimal list-inside text-lg leading-relaxed">
              <li className="pl-2">
                <strong>At T+18 (First Positive Score):</strong> A bedside view that cross‑walks the model state to <strong>protocol criteria</strong> (e.g., hypotension + lactate &gt; 2 + suspected source) <strong>and</strong> reveals the alert's <strong>queue position/recipient</strong> could have clarified system intent without advising treatment.
              </li>
              <li className="pl-2">
                <strong>Between T+18 and T+30:</strong> Lightweight <strong>counterfactual boundaries</strong> (e.g., "if MAP &gt; 65 for 10 min, priority downgrades; if lactate ≥ 4, escalates") could have provided a <strong>decision contour</strong> while awaiting labs.
              </li>
              <li className="pl-2">
                <strong>At Acknowledgment (T+37):</strong> A concise, single‑screen rationale stating <strong>which protocol items are met/pending</strong> may have reduced time spent reconciling the alert with local pathways.
              </li>
            </ol>
          </section>

          <hr className="my-12 border-border" />

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Limitations</h2>
            <ul className="space-y-2 text-lg leading-relaxed ml-6 list-disc">
              <li>Single‑site, single‑episode; not generalizable without caution.</li>
              <li>Some operational states (device DND windows, exact queue depth) are reconstructed from logs.</li>
              <li>No contemporaneous capture of clinician cognitive load or qualitative perceptions.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Key Observations */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Key Observations (Non‑Prescriptive)</h2>
            <ol className="space-y-4 list-decimal list-inside text-lg leading-relaxed">
              <li className="pl-2">In time‑critical settings, <strong>interpretability that is not co‑extensive with protocol artifacts</strong> fails to support action, even if it is statistically sound.</li>
              <li className="pl-2">The <strong>effective alert threshold</strong> is socio‑technical (model × queue × device). Lack of visibility into this composite threshold produces perceived inconsistency.</li>
              <li className="pl-2"><strong>Prospective calibration</strong> at the point of care—and disclosure of current alert burden—modulates trust and attention more than global feature rankings.</li>
              <li className="pl-2">In this case, a <strong>12‑minute gap</strong> emerged between the first model‑positive state and acknowledgment; interpretability artifacts did not mitigate the gap.</li>
            </ol>
          </section>

          <hr className="my-12 border-border" />

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Conclusion</h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              This case demonstrates that widely used interpretability techniques can be orthogonal to what emergency clinicians need in the moment: clarity about <strong>why now</strong>, <strong>what criterion is satisfied</strong>, and <strong>how close</strong> the patient is to decision boundaries. Without that legibility, operational factors dominate outcomes, and black‑box CDS can be effectively silent despite firing. This observational account is provided to inform clinical governance, safety case reviews, and future audits of ED decision support; it does not prescribe design changes or clinical actions.
            </p>
          </section>

          {/* Back to Top */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/#publications" className="text-primary hover:underline">
              ← Back to Publications
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-16">
        <div className="max-w-[800px] mx-auto px-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Avyukt Research Collective
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ClinicalCaseStudy;
