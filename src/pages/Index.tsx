import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import SectionCard from "@/components/SectionCard";
import HighlightBox from "@/components/HighlightBox";
import InfoList from "@/components/InfoList";
import {
  AlertTriangle,
  Bot,
  Brain,
  CloudRain,
  Cpu,
  FileText,
  Lightbulb,
  BookOpen,
  Sprout,
  Shield,
} from "lucide-react";

const tableOfContents = [
  "Problem Analysis",
  "Solution Approach",
  "Key Research Points",
  "AI Techniques & Tools",
  "Future Innovations",
  "References",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Aerial view of green farmland"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-75" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center text-primary-foreground"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Sprout className="h-4 w-4" />
            Research Project
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Crop Insurance
            <br />
            <span className="opacity-80">AI Agents</span>
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
            A comprehensive study on using artificial intelligence to
            revolutionize crop damage detection, claim assessment, and fraud
            prevention in agricultural insurance.
          </p>
        </motion.div>
      </header>

      {/* Table of Contents */}
      <nav className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2 text-sm">
          {tableOfContents.map((item, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              className="whitespace-nowrap rounded-md px-3 py-1.5 font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {i + 1}. {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-4xl space-y-10 px-4 py-12 md:py-16">
        {/* 1. Problem Analysis */}
        <div id="section-0">
          <SectionCard icon={<AlertTriangle className="h-5 w-5" />} title="1. Problem Analysis" index={0}>
            <p>
              Farmers worldwide face significant challenges from <strong>unpredictable weather events</strong>, pest infestations, and climate change. These risks lead to substantial crop losses that threaten livelihoods and food security.
            </p>
            <HighlightBox>
              💡 <strong>Key Insight:</strong> According to the FAO, natural disasters cause approximately <strong>$5 billion</strong> in agricultural losses annually in developing countries alone.
            </HighlightBox>

            <h3 className="text-lg font-semibold text-foreground pt-2">Major Challenges</h3>
            <InfoList
              items={[
                "Crop damage from drought, floods, hailstorms, and unseasonal rainfall is difficult to predict and prevent.",
                "Traditional crop insurance relies on slow, manual field inspections — delaying payouts when farmers need them most.",
                "Fraudulent claims and inaccurate damage assessments inflate costs and erode trust in insurance systems.",
                "Smallholder farmers in developing regions often lack access to affordable insurance products.",
                "Climate change is increasing the frequency and severity of extreme weather, making historical data less reliable.",
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground pt-2">The Claims Gap</h3>
            <p>
              The typical crop insurance claim process takes <strong>30–90 days</strong> to resolve. Manual field surveys are expensive, subjective, and limited in scale. This creates a critical gap between when damage occurs and when farmers receive compensation.
            </p>
          </SectionCard>
        </div>

        {/* 2. Solution Approach */}
        <div id="section-1">
          <SectionCard icon={<Bot className="h-5 w-5" />} title="2. Solution Approach" index={1}>
            <p>
              AI-powered crop insurance agents can transform the industry by automating damage detection, streamlining claims, and enhancing fraud prevention through data-driven decision-making.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {[
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "Automated Damage Detection",
                  desc: "Satellite imagery and drone data analyzed by computer vision models to detect crop damage in near real-time.",
                },
                {
                  icon: <CloudRain className="h-5 w-5" />,
                  title: "Weather-Indexed Insurance",
                  desc: "Automated payouts triggered by weather data thresholds — no manual inspection needed.",
                },
                {
                  icon: <Brain className="h-5 w-5" />,
                  title: "Predictive Risk Assessment",
                  desc: "Machine learning models predict crop yield and risk levels based on historical and real-time data.",
                },
                {
                  icon: <FileText className="h-5 w-5" />,
                  title: "Smart Claims Processing",
                  desc: "NLP and decision-rule engines automate claim validation, reducing processing time from weeks to hours.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-muted/50 p-4"
                >
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    {item.icon}
                    <span className="font-semibold text-foreground text-sm">{item.title}</span>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <HighlightBox variant="accent">
              🚀 <strong>Impact:</strong> AI-driven crop insurance can reduce claim processing time by up to <strong>80%</strong> and improve fraud detection accuracy by <strong>60%</strong>.
            </HighlightBox>
          </SectionCard>
        </div>

        {/* 3. Key Research Points */}
        <div id="section-2">
          <SectionCard icon={<Sprout className="h-5 w-5" />} title="3. Key Research Points" index={2}>
            <h3 className="text-lg font-semibold text-foreground">3.1 Crop Types & Environmental Risks</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted text-foreground">
                    <th className="px-4 py-2 text-left font-semibold">Crop Category</th>
                    <th className="px-4 py-2 text-left font-semibold">Examples</th>
                    <th className="px-4 py-2 text-left font-semibold">Key Risks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Cereals", "Wheat, Rice, Maize", "Drought, floods, heat stress"],
                    ["Cash Crops", "Cotton, Sugarcane, Tobacco", "Pest attacks, hailstorms"],
                    ["Pulses", "Lentils, Chickpeas", "Waterlogging, frost damage"],
                    ["Horticulture", "Fruits, Vegetables", "Unseasonal rain, disease"],
                    ["Oilseeds", "Soybean, Mustard", "Temperature extremes, drought"],
                  ].map(([cat, ex, risk], i) => (
                    <tr key={i} className="hover:bg-muted/50 transition">
                      <td className="px-4 py-2 font-medium text-foreground">{cat}</td>
                      <td className="px-4 py-2">{ex}</td>
                      <td className="px-4 py-2">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground pt-4">3.2 Weather Data Impact</h3>
            <InfoList
              items={[
                "Rainfall: Excess or deficit directly impacts crop yield. Index-based insurance uses rainfall thresholds for automatic payouts.",
                "Temperature: Extreme heat or cold during critical growth stages can devastate crops.",
                "Drought: Prolonged dry spells cause the highest percentage of insured losses globally.",
                "Floods: Sudden flooding destroys standing crops and contaminates soil, affecting future seasons.",
                "Wind & Hail: Localized but severe; difficult to verify without remote sensing technology.",
              ]}
            />

            <h3 className="text-lg font-semibold text-foreground pt-4">3.3 Insurance Claim Trends & Issues</h3>
            <InfoList
              items={[
                "Claim volumes spike after major weather events, overwhelming manual processing capacity.",
                "Moral hazard: Farmers may neglect crop management knowing insurance will cover losses.",
                "Adverse selection: High-risk farmers disproportionately purchase insurance, skewing risk pools.",
                "Basis risk in index insurance: Payouts may not match actual farm-level losses.",
                "Documentation gaps: Many smallholder farmers lack records needed for traditional claims.",
              ]}
            />
          </SectionCard>
        </div>

        {/* 4. AI Techniques and Tools */}
        <div id="section-3">
          <SectionCard icon={<Cpu className="h-5 w-5" />} title="4. AI Techniques & Tools" index={3}>
            <h3 className="text-lg font-semibold text-foreground">AI Methods</h3>
            <div className="grid gap-3 sm:grid-cols-2 pt-1">
              {[
                {
                  method: "Computer Vision (CNN/ViT)",
                  use: "Analyze satellite & drone imagery to classify crop health and detect damage patterns.",
                },
                {
                  method: "Time-Series Forecasting",
                  use: "Predict yield and weather anomalies using LSTM, Prophet, or Transformer models.",
                },
                {
                  method: "Decision Trees & Rule Engines",
                  use: "Automate claim eligibility checks and payout calculations based on policy rules.",
                },
                {
                  method: "NLP & Document AI",
                  use: "Extract information from claim forms, reports, and policy documents automatically.",
                },
                {
                  method: "Anomaly Detection",
                  use: "Flag suspicious claims using unsupervised learning (Isolation Forest, Autoencoders).",
                },
                {
                  method: "Reinforcement Learning",
                  use: "Optimize insurance pricing and risk pool management dynamically.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-semibold text-foreground text-sm">{item.method}</p>
                  <p className="text-sm mt-1">{item.use}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground pt-4">Recommended Tools & Datasets</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted text-foreground">
                    <th className="px-4 py-2 text-left font-semibold">Category</th>
                    <th className="px-4 py-2 text-left font-semibold">Tools / Resources</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["ML Frameworks", "TensorFlow, PyTorch, Scikit-learn, XGBoost"],
                    ["Computer Vision", "OpenCV, Rasterio, Google Earth Engine"],
                    ["NLP", "spaCy, Hugging Face Transformers, LangChain"],
                    ["Data Processing", "Pandas, NumPy, Dask, Apache Spark"],
                    ["Visualization", "Matplotlib, Folium, Plotly, Streamlit"],
                    ["Datasets", "Sentinel-2 (ESA), NOAA Climate Data, USDA Crop Data, Kaggle agriculture datasets"],
                  ].map(([cat, tools], i) => (
                    <tr key={i} className="hover:bg-muted/50 transition">
                      <td className="px-4 py-2 font-medium text-foreground">{cat}</td>
                      <td className="px-4 py-2">{tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>

        {/* 5. Future Innovations */}
        <div id="section-4">
          <SectionCard icon={<Lightbulb className="h-5 w-5" />} title="5. Future Innovations" index={4}>
            <p>
              The intersection of AI, blockchain, and privacy-preserving technologies opens exciting possibilities for the future of crop insurance.
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  title: "🔗 Blockchain-Powered Smart Contracts",
                  desc: "Immutable, transparent insurance policies that automatically execute payouts when predefined conditions (e.g., weather thresholds) are met. Eliminates intermediaries and reduces fraud.",
                },
                {
                  title: "🔐 Zero-Knowledge Proofs (ZKPs)",
                  desc: "Allow farmers to prove claim eligibility without revealing sensitive personal or financial data. Enhances privacy while maintaining verifiability for insurers.",
                },
                {
                  title: "🛰️ Real-Time Satellite Monitoring",
                  desc: "Continuous monitoring with high-resolution satellites (Planet Labs, Sentinel) combined with edge AI for instant damage alerts and automated claim initiation.",
                },
                {
                  title: "🤖 Multi-Agent AI Systems",
                  desc: "Collaborative AI agents — one for weather analysis, one for damage assessment, one for fraud detection — working together for end-to-end claim automation.",
                },
                {
                  title: "📱 Mobile-First Micro-Insurance",
                  desc: "AI-powered mobile apps enabling smallholder farmers to purchase affordable, customized insurance and file claims with just a smartphone photo.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-secondary/50 p-5">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <HighlightBox>
              🌍 <strong>Vision:</strong> By 2030, AI-driven parametric insurance could protect over <strong>500 million</strong> smallholder farmers who currently have no crop insurance coverage.
            </HighlightBox>
          </SectionCard>
        </div>

        {/* 6. References */}
        <div id="section-5">
          <SectionCard icon={<BookOpen className="h-5 w-5" />} title="6. References & Sources" index={5}>
            <p>Credible sources for further reading and research:</p>
            <ol className="list-decimal list-inside space-y-3 pt-2">
              {[
                {
                  title: "FAO — The Impact of Disasters on Agriculture and Food Security",
                  url: "https://www.fao.org/resources",
                },
                {
                  title: "World Bank — Agricultural Insurance for Developing Countries",
                  url: "https://www.worldbank.org/en/topic/financialsector/brief/agricultural-insurance",
                },
                {
                  title: "USDA Risk Management Agency — Crop Insurance Data",
                  url: "https://www.rma.usda.gov",
                },
                {
                  title: "European Space Agency — Sentinel-2 Satellite Data for Agriculture",
                  url: "https://sentinel.esa.int",
                },
                {
                  title: "NOAA National Centers for Environmental Information — Climate Data",
                  url: "https://www.ncei.noaa.gov",
                },
                {
                  title: "CGIAR Research Program on Climate Change — Agriculture & Food Security",
                  url: "https://ccafs.cgiar.org",
                },
                {
                  title: "IEEE / ACM Journals — AI in Agriculture (search on Google Scholar)",
                  url: "https://scholar.google.com",
                },
                {
                  title: "Kaggle Datasets — Agricultural and Climate Datasets",
                  url: "https://www.kaggle.com/datasets",
                },
              ].map((ref, i) => (
                <li key={i}>
                  <span className="font-medium text-foreground">{ref.title}</span>
                  <br />
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:opacity-80 text-sm"
                  >
                    {ref.url}
                  </a>
                </li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8 text-center text-sm text-muted-foreground">
        <p>Crop Insurance AI Agents — Research Project Report</p>
        <p className="mt-1 opacity-60">Prepared for academic and presentation purposes</p>
      </footer>
    </div>
  );
};

export default Index;
