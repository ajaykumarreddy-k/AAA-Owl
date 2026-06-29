import { motion } from 'framer-motion';
import s1 from "../../../screenshots/S1_active_ontology.png";
import s2 from "../../../screenshots/S2_class_hierarchy_asserted.png";
import s3 from "../../../screenshots/S3_ontology_metrics.png";
import s4 from "../../../screenshots/S4_reasoner_output.png";
import s5 from "../../../screenshots/S5_class_hierarchy_inferred.png";
import s6 from "../../../screenshots/S6_ontograf_visualization.png";
import s7 from "../../../screenshots/S7_dl_query_results.png";
import arc1 from "../../Architecture.png";
import arc2 from "../../Architecture2.png";

const screenshots = [
  { src: s1, alt: "Active Ontology & Expressivity" },
  { src: s2, alt: "Asserted Class Hierarchy" },
  { src: s3, alt: "Ontology Metrics" },
  { src: s4, alt: "HermiT Reasoner Output" },
  { src: s5, alt: "Inferred Class Hierarchy" },
  { src: s6, alt: "OntoGraf Visualization" },
  { src: s7, alt: "DL Query Results" }
];

const architectureImages = [
  { src: arc1, alt: "Project Architecture Flow" },
  { src: arc2, alt: "Validation Pipeline Setup" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function ScreenshotTiles() {
  return (
    <div className="w-full h-full text-ink">
      <div className="w-full px-6 md:px-16 lg:px-24 py-16 max-w-[1600px] mx-auto">
        
        {/* 1. Architecture Images Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-ink mb-2">
              Architecture Diagrams
            </h2>
            <p className="font-sans text-sm font-medium text-ink/60 uppercase tracking-widest">
              System Design & Flow
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {architectureImages.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="flex flex-col bg-[#d4d4d4] rounded-xl border-[3px] border-[#1a1a1a] p-3 shadow-[4px_4px_0px_#1a1a1a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1a1a1a]"
              >
                {/* Inner Image Container */}
                <div className="w-full rounded-lg border-[3px] border-[#1a1a1a] overflow-hidden bg-[#FAFAF7] mb-3">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                
                {/* Bottom Section */}
                <div className="flex items-center justify-between px-1 pb-1">
                  <h3 className="font-sans text-xl font-bold text-[#1a1a1a] tracking-tight">
                    {item.alt}
                  </h3>
                  <a 
                    href={item.src} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-1.5 rounded-full border-[3px] border-[#1a1a1a] font-sans font-bold text-lg text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAFAF7] transition-colors"
                  >
                    Open
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 2. Analysis Screenshots Section */}
        <div>
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-ink mb-2">
              Analysis Screenshots
            </h2>
            <p className="font-sans text-sm font-medium text-ink/60 uppercase tracking-widest">
              Protégé Visual Evidence
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {screenshots.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="flex flex-col bg-[#d4d4d4] rounded-xl border-[3px] border-[#1a1a1a] p-3 shadow-[4px_4px_0px_#1a1a1a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1a1a1a]"
              >
                {/* Inner Image Container */}
                <div className="w-full rounded-lg border-[3px] border-[#1a1a1a] overflow-hidden bg-[#FAFAF7] mb-3">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                
                {/* Bottom Section */}
                <div className="flex items-center justify-between px-1 pb-1">
                  <h3 className="font-sans text-xl font-bold text-[#1a1a1a] tracking-tight truncate mr-4">
                    {item.alt}
                  </h3>
                  <a 
                    href={item.src} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-1.5 rounded-full border-[3px] border-[#1a1a1a] font-sans font-bold text-lg text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAFAF7] transition-colors flex-shrink-0"
                  >
                    Open
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
