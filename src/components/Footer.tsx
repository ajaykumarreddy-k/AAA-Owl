import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] min-h-screen text-[#EBE7DB] relative overflow-hidden p-6 md:p-8 flex flex-col justify-between z-20">
      
      {/* Top Section: Logo and Nav */}
      <div className="relative w-full flex-1">
        
        {/* Massive Logo */}
        <div 
          className="font-sans font-black uppercase select-none"
          style={{ 
            fontSize: 'clamp(80px, 15vw, 220px)', 
            lineHeight: 0.8,
            letterSpacing: '-0.05em', // Responsive alternative to -10px
            marginLeft: '-0.02em' // visually align left edge
          }}
        >
          AAA-OWL
        </div>

        {/* Center Nav (Responsive positioned to emulate the absolute layout) */}
        <div className="md:absolute md:left-[255px] md:top-[165px] mt-16 md:mt-0">
          <ul className="list-none space-y-1">
            <li className="text-[10px] font-bold uppercase leading-tight tracking-[0.4px]">ABOUT</li>
            <li className="text-[10px] font-bold uppercase leading-tight tracking-[0.4px]">SOLUTIONS</li>
            <li className="text-[10px] font-bold uppercase leading-tight tracking-[0.4px]">WRITING</li>
            <li className="text-[10px] font-bold uppercase leading-tight tracking-[0.4px]">RESEARCH</li>
            <li className="text-[10px] font-bold uppercase leading-tight tracking-[0.4px]">CAREERS</li>
          </ul>

          <div className="flex gap-4 mt-5 text-xs">
            <a href="https://github.com/Not-Buddy/SNAProject" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            </a>
          </div>
        </div>

        {/* Let's Talk */}
        <a 
          href="https://github.com/Not-Buddy/SNAProject"
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-0 right-0 md:top-[165px] md:right-8 text-xs font-bold uppercase hover:text-white transition-colors flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
          LET'S TALK ↗
        </a>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-24">
        
        <div className="text-[10px] uppercase">
          <p className="mb-3">© 2026 AAA-OWL PROJECT CORP.</p>
          <div className="space-x-4 flex flex-wrap gap-y-2">
            <a href="#" className="underline hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="underline hover:text-white transition-colors">TERMS & CONDITIONS</a>
          </div>
        </div>

        <div className="w-full md:w-[280px]">
          <h4 className="text-[11px] leading-[1.2] uppercase font-bold mb-4">
            SIGN UP FOR THE LATEST<br/>NEWS & INSIGHTS
          </h4>
          <label className="block text-[10px] uppercase mb-1.5 opacity-80">EMAIL ADDRESS</label>
          <div className="flex border-b border-[#EBE7DB]/40 focus-within:border-[#EBE7DB] transition-colors pb-1">
            <input 
              type="email" 
              className="w-full bg-transparent text-[#EBE7DB] outline-none text-xs"
              placeholder=""
            />
            <button className="bg-none border-none text-[#EBE7DB] text-[10px] font-bold uppercase cursor-pointer whitespace-nowrap hover:text-white ml-3">
              SUBMIT ↗
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
