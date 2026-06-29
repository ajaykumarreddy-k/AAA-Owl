import "./index.css";
import VerticalDialNav from "./components/VerticalDialNav";
import CustomScrollGrid from "./components/CustomScrollGrid";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import computerImg from '../computer.png';
import doc3dImg from '../Doc-3d.png';
import binImg from '../bin.png';


export function App() {
    const sections = [
        { id: "hero", label: "Overview" },
        { id: "architecture", label: "Architecture & Setup" },
        { id: "gallery", label: "Screenshots" },
    ];

    return (
        <div className="fixed inset-0 bg-[#1a1a1a] p-3 pt-0 pb-12 md:p-6 md:pt-0 md:pb-20 lg:p-8 lg:pt-0 lg:pb-32 flex flex-col overflow-hidden font-sans">
            <LoadingScreen 
                countSpeed={15} 
                swipeDuration={800} 
                countPosition="bottom-right"
            />
            
            {/* Inner App Window Container */}
            <div className="app-container flex-1 w-full bg-paper text-ink rounded-b-[24px] md:rounded-b-[32px] rounded-t-none overflow-hidden relative flex flex-col shadow-2xl border border-white/10 border-t-0">

                {/* Floating Dial Navigation (switched from fixed to absolute) */}
                <div className="absolute right-8 md:right-12 top-32 z-50 h-[400px] w-[240px] pointer-events-auto">
                <VerticalDialNav
                    sections={sections}
                    activeColor="#1a1a1a"
                    alignment="right"
                    itemSpacing={20}
                    dialWidth={240}
                    font={{ fontSize: 13, fontFamily: "var(--font-serif)", letterSpacing: "0.5px" }}
                />
            </div>

            {/* HEADER (Black Background with White Folder Tab) */}
        <div className="flex items-end w-full flex-shrink-0 relative z-30 drop-shadow-sm bg-[#1a1a1a]">
            
            {/* 1. Left High Tab */}
            <div className="w-[300px] h-[70px] bg-white flex items-center px-8 relative z-20 border-b border-ink/5" style={{marginBottom: "-1px"}}>
                <h1 className="font-serif text-[1.25rem] leading-tight text-ink font-bold tracking-tight">
                    Ontology<br />Analysis
                </h1>
            </div>

            {/* 2. The Angled Connector */}
            <div className="w-[30px] h-[70px] relative z-20" style={{marginLeft: "-1px", marginRight: "-1px", marginBottom: "-1px"}}>
                <svg viewBox="0 0 30 70" className="w-full h-full" preserveAspectRatio="none">
                    <polygon points="0,0 30,30 30,75 0,75" fill="#ffffff" />
                    <line x1="0" y1="0" x2="30" y2="30" stroke="#1a1a1a" strokeWidth="1" opacity="0.1" />
                </svg>
            </div>

            {/* 3. Right Lower Navigation Area */}
            <div className="flex-1 h-[40px] bg-white flex items-center justify-end px-6 gap-3 relative z-20 md:pr-12 border-b border-ink/5" style={{marginBottom: "-1px"}}>
                <button className="nav-btn hover:bg-ink/5 transition-colors">Protégé</button>
                <button className="nav-btn hover:bg-ink/5 transition-colors">Python</button>
                <button className="nav-btn dark hover:bg-ink/80 transition-colors">GitHub</button>
            </div>
        </div>

            {/* MAIN BODY (Scrollable) */}
            <div className="flex-1 w-full relative overflow-y-auto overflow-x-hidden flex flex-col z-10 scroll-smooth">

                {/* Fixed Grid Background overlay for texture */}
                <div className="fixed inset-0 grid-bg pointer-events-none"></div>

                {/* Specific Crosshairs (fixed to viewport for premium technical feel) */}
                <div className="bg-crosshair fixed" style={{ top: "25%", left: "55%" }}></div>
                <div className="bg-crosshair fixed" style={{ top: "25%", right: "10%" }}></div>
                <div className="bg-crosshair fixed" style={{ bottom: "15%", left: "55%" }}></div>
                <div className="bg-crosshair fixed" style={{ bottom: "15%", right: "10%" }}></div>
                <div className="bg-crosshair fixed" style={{ bottom: "25%", left: "10%" }}></div>

                {/* SECTION 1: HERO */}
                <div id="hero" className="w-full min-h-screen flex flex-col lg:flex-row relative z-10 pl-12 md:pl-20 pr-24 lg:pr-32 pt-24 pb-16 shrink-0 max-w-[1800px] mx-auto items-center">

                    {/* Left Column (Typography) */}
                    <div className="w-full lg:w-[50%] flex flex-col">
                        {/* Headline */}
                        <h2 className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] mb-6 tracking-tight cursor-blink text-ink font-medium">
                            <span className="highlight text-ink font-bold px-2 inline-block shadow-sm">OWL Ontology</span><br />
                            Analysis Using Protégé
                        </h2>

                        <p className="font-sans text-lg md:text-xl text-ink/70 mb-16 max-w-xl font-medium leading-relaxed tracking-wide">
                            A comprehensive project analysing a large, real-world OWL ontology (Gene Ontology) using Protégé software, with programmatic cross-validation in Python.
                        </p>

                        {/* Sophisticated Glass-over-Paper Box */}
                        <div className="relative w-full max-w-xl mt-auto mb-10 group">
                            {/* Crop Marks (Premium, sharp) */}
                            <div className="crop-mark crop-v -top-6 left-0 transition-transform duration-300 group-hover:-translate-y-2"></div>
                            <div className="crop-mark crop-h top-0 -left-6 transition-transform duration-300 group-hover:-translate-x-2"></div>

                            <div className="crop-mark crop-v -bottom-6 right-0 transition-transform duration-300 group-hover:translate-y-2"></div>
                            <div className="crop-mark crop-h bottom-0 -right-6 transition-transform duration-300 group-hover:translate-x-2"></div>

                            {/* Inner Box with premium blur effect */}
                            <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/50 rounded-lg">
                                <h3 className="font-serif text-[1.2rem] text-ink mb-4 font-bold flex items-center gap-2">
                                    📖 What is happening?
                                </h3>
                                <p className="font-sans text-[15px] leading-[1.7] text-ink/80 mb-8 font-medium">
                                    This project involves a deep-dive analysis of a massive semantic web dataset—the Gene Ontology (GO) (~50,000+ classes). We are using Protégé to load, inspect, reason over, visualize, and document the ontology. Additionally, we are validating our findings programmatically via Python scripts.
                                </p>

                                <h3 className="font-serif text-[1.2rem] text-ink mb-4 font-bold flex items-center gap-2">
                                    🤔 Why are we doing it?
                                </h3>
                                <ul className="font-sans text-[14px] leading-[1.7] text-ink/80 list-none space-y-3 font-medium">
                                    <li className="flex gap-3"><span className="text-highlight font-bold">―</span> <span><strong>Understand Scale:</strong> Learn how to handle massive ontologies that stress-test system memory.</span></li>
                                    <li className="flex gap-3"><span className="text-highlight font-bold">―</span> <span><strong>Ensure Consistency:</strong> Practice formal logic validation by utilizing reasoners.</span></li>
                                    <li className="flex gap-3"><span className="text-highlight font-bold">―</span> <span><strong>Bridge GUI & Code:</strong> Demonstrate reliable semantic data analysis across visual and programmatic pipelines.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (What are we doing pipeline) */}
                    <div className="w-full lg:w-[50%] flex justify-center items-center relative mt-16 lg:mt-0 lg:pl-16">
                        <div className="w-full max-w-lg bg-white/40 backdrop-blur-md p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/50 rounded-xl relative">
                            {/* Decorative background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/20 blur-3xl rounded-full pointer-events-none"></div>

                            <h3 className="font-serif text-2xl font-bold mb-10 text-ink">🚀 The Analytical Pipeline</h3>

                            <div className="space-y-8 relative border-l border-ink/10 pl-8 ml-2">
                                {[
                                    { title: "Exploration", desc: "Loading go.owl in Protégé to explore classes and annotations." },
                                    { title: "Metrics Collection", desc: "Gathering quantitative metrics (class counts, DL expressivity)." },
                                    { title: "Automated Reasoning", desc: "Running HermiT to check logical consistency and infer hierarchy." },
                                    { title: "Visualization", desc: "Generating subgraph visualizations using OntoGraf." },
                                    { title: "Querying", desc: "Performing advanced DL/SPARQL Queries to extract knowledge." },
                                    { title: "Validation", desc: "Python scripts (rdflib, owlready2) for independent validation." }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute w-2.5 h-2.5 bg-paper border-2 border-ink rounded-full -left-[2.4rem] top-1.5 transition-all duration-300 group-hover:bg-highlight group-hover:scale-125"></div>
                                        <h4 className="font-bold text-ink mb-1 text-sm tracking-wide font-sans flex items-center gap-2">
                                            <span className="text-ink/40 text-xs">0{idx + 1}</span>
                                            {step.title}
                                        </h4>
                                        <p className="text-[13px] text-ink/70 leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 2: ARCHITECTURE & SETUP */}
                <div id="architecture" className="w-full min-h-screen relative z-10 pl-12 md:pl-20 pr-24 lg:pr-32 py-24 shrink-0 max-w-[1800px] mx-auto border-t border-ink/5">
                    <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left: Setup & Use Case */}
                        <div className="flex-1">
                            <div className="bg-white/40 backdrop-blur-md p-10 border border-white/50 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] mb-12">
                                <h3 className="font-serif text-3xl font-bold mb-6 text-ink">💡 Use Case</h3>
                                <p className="font-sans text-[15px] text-ink/80 leading-relaxed font-medium">
                                    The skills and methodologies applied here are directly relevant to Bioinformatics, Health Informatics, and Semantic Web Data Integration. By modelling biological domains formally in OWL, researchers can infer new knowledge, identify conflicting data, and query across massive datasets in a standardized way.
                                </p>
                            </div>

                            <h3 className="font-serif text-3xl font-bold mb-6 text-ink pl-2">⚙️ Setup & Installation</h3>
                            <div className="bg-ink text-[#FAFAF7] p-8 rounded-xl font-mono text-[13px] shadow-2xl relative overflow-hidden">
                                {/* Terminal header */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-white/10 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>

                                <div className="mt-8">
                                    <p className="text-highlight mb-2 opacity-80"># 1. Install Python dependencies</p>
                                    <p className="mb-6 text-white">pip install rdflib owlready2</p>

                                    <p className="text-highlight mb-2 opacity-80"># 2. Download the Gene Ontology file</p>
                                    <p className="mb-6 text-white">mkdir -p data<br />curl -L "http://purl.obolibrary.org/obo/go.owl" -o data/go.owl</p>

                                    <p className="text-highlight mb-2 opacity-80"># 3. Run validation scripts</p>
                                    <p className="text-white">python scripts/rdflib_stats.py<br />python scripts/owlready2_reasoning.py</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Architecture & Files */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="mb-16">
                                <h3 className="font-serif text-3xl font-bold mb-6 text-ink pl-2">🏛️ Architecture Workflow</h3>
                                <div className="bg-paper-dark/50 backdrop-blur-md p-8 rounded-xl border border-ink/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                                    <div className="absolute right-[-10%] top-[-10%] opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                                        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                    </div>
                                    <p className="font-mono text-[13px] leading-loose text-ink/90 whitespace-pre relative z-10">
                                        Gene Ontology (go.owl) <br />
                                        <span className="text-ink/40">├──</span> Protégé Desktop GUI<br />
                                        <span className="text-ink/40">│   ├──</span> Ontology Metrics<br />
                                        <span className="text-ink/40">│   ├──</span> HermiT Reasoner<br />
                                        <span className="text-ink/40">│   ├──</span> OntoGraf Visualization<br />
                                        <span className="text-ink/40">│   └──</span> DL/SPARQL Queries<br />
                                        <span className="text-ink/40">│</span><br />
                                        <span className="text-ink/40">└──</span> Python Validation Pipeline<br />
                                        <span className="text-ink/40">    ├──</span> rdflib_stats.py<br />
                                        <span className="text-ink/40">    ├──</span> owlready2_reasoning.py<br />
                                        <span className="text-ink/40">    └──</span> hierarchy_check.py<br /><br />
                                        <span className="text-ink/60 text-xs italic font-sans font-medium">* Python scripts cross-validate Protégé metrics & consistency.</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold mb-6 text-ink pl-2">📂 File Structure</h3>
                                <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                                    <pre className="font-mono text-[13px] leading-loose text-ink/80">
                                        {`SNAProject/
├── Plan.md
├── README.md
├── pyproject.toml
├── data/
│   └── go.owl
├── scripts/
│   ├── rdflib_stats.py
│   ├── owlready2_reasoning.py
│   └── hierarchy_check.py
├── screenshots/
│   └── S1_active_ontology.png
└── output/
    ├── rdflib_output.txt
    └── hierarchy_output.txt`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3: GALLERY */}
                <div id="gallery" className="w-full relative z-10 shrink-0 min-h-screen py-20 pb-32">
                    <CustomScrollGrid />
                </div>

                {/* SECTION 4: TEAM MEMBERS */}
                <div className="w-full relative z-10 shrink-0 py-20 px-8 md:px-16 flex flex-col items-center justify-center bg-paper text-ink border-t border-black/10">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 opacity-40">Team Members</h3>
                    <div className="flex flex-wrap gap-12 md:gap-24 justify-center">
                        <span className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">Ajay</span>
                        <span className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">Aary</span>
                        <span className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">Ashmit</span>
                    </div>
                </div>

                <Footer />
            </div>
            
            </div>
            
            {/* Documentation Label (Bottom Left) */}
            <div 
                className="absolute bottom-4 left-4 md:bottom-6 md:left-8 lg:bottom-6 lg:left-8 z-50 text-white text-3xl md:text-5xl lg:text-[64px] font-bold tracking-[0.1em] uppercase font-mono leading-none pointer-events-none opacity-90"
            >
                DOCUMENTATION
            </div>

            {/* Right Corner Images */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 lg:bottom-6 lg:right-8 z-50 flex items-end gap-4 md:gap-6 lg:gap-8 pointer-events-none opacity-90">
                <img src={binImg} alt="Bin" className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain filter drop-shadow-xl transform translate-y-2 lg:translate-y-4" />
                <img src={computerImg} alt="Computer" className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain filter drop-shadow-xl" />
                <img src={doc3dImg} alt="Doc 3D" className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain filter drop-shadow-xl" />
            </div>
        </div>
    );
}

export default App;
