import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Clock, Target, ShieldAlert } from 'lucide-react';
import { transformationsData } from '../data/transformations';

export const Transformations: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const activeTrans = transformationsData[activeIdx];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section id="results" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                08 — VERIFIED TRANSFORMATION SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              THE WORK <span className="text-accent">SHOWS.</span>
            </h2>
          </div>

          {/* Template Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 bg-dark-card border border-dark-border px-4 py-2 text-xs font-mono text-light-muted">
            <ShieldAlert className="w-4 h-4 text-accent" />
            <span>TEMPLATE DEMO DATA // REPLACE WITH CLIENT OUTCOMES</span>
          </div>
        </div>

        {/* Interactive Before / After Slider Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Draggable Image Comparison Box */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-dark-card border border-dark-border cursor-ew-resize select-none"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              data-cursor="DRAG"
            >
              {/* AFTER IMAGE (Right Side Base Layer) */}
              <img
                src={activeTrans.afterImage}
                alt={`${activeTrans.memberName} After`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <span className="absolute bottom-4 right-4 bg-accent text-light font-display font-extrabold text-xs px-3 py-1 uppercase tracking-wider z-10">
                AFTER
              </span>

              {/* BEFORE IMAGE (Left Side Clipped Overlay Layer - Stationary) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={activeTrans.beforeImage}
                  alt={`${activeTrans.memberName} Before`}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125"
                />
                <span className="absolute bottom-4 left-4 bg-dark-bg border border-dark-border text-light font-display font-extrabold text-xs px-3 py-1 uppercase tracking-wider z-10 pointer-events-auto">
                  BEFORE
                </span>
              </div>

              {/* Drag Handle Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent z-20 shadow-[0_0_15px_#E10600]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-light flex items-center justify-center shadow-lg">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <p className="text-[11px] font-mono text-center text-light-muted mt-3">
              DRAG SLIDER HORIZONTALLY TO COMPARE BEFORE & AFTER
            </p>
          </div>

          {/* Member Outcome Story & Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {transformationsData.map((trans, idx) => (
                  <button
                    key={trans.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setSliderPos(50);
                    }}
                    className={`px-4 py-2 font-mono text-xs font-bold transition-all border ${
                      activeIdx === idx
                        ? 'bg-accent text-light border-accent font-extrabold'
                        : 'bg-dark-surface text-light-muted border-dark-border hover:border-light-muted'
                    }`}
                  >
                    CASE 0{idx + 1}
                  </button>
                ))}
              </div>

              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                {activeTrans.memberName}
              </span>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-light uppercase mb-6">
                {activeTrans.result}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-dark-surface border border-dark-border">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>TIMEFRAME</span>
                  </div>
                  <span className="font-display font-extrabold text-lg text-light">
                    {activeTrans.period}
                  </span>
                </div>

                <div className="p-4 bg-dark-surface border border-dark-border">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>GOAL</span>
                  </div>
                  <span className="font-display font-extrabold text-lg text-light">
                    {activeTrans.goal}
                  </span>
                </div>
              </div>

              <div className="p-5 bg-dark-card border border-dark-border mb-6">
                <span className="text-[10px] font-mono text-light-muted uppercase block mb-2">
                  CLIENT STORY & PROTOCOL
                </span>
                <p className="text-sm text-light-muted leading-relaxed italic">
                  {activeTrans.story}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
