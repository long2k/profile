"use client";
import { PORTPOLIO_SHOW, TAB_VALUE } from "@/common/constant/data";
import { ProjectInterface, TabValueInterface } from "@/common/interface/DataInterface";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import ProjectDialog from "./shared/ProjectDialog";

const PortFolio = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => PORTPOLIO_SHOW.filter((p: ProjectInterface) => filter === "ALL" || p.type === filter),
    [filter]
  );

  return (
    <section className="text-white w-full container mx-auto px-4 pb-24">

      {/* ══ SECTION TITLE ═══════════════════════════════════════════════ */}
      <div className="text-center mb-10 pt-14">
        <p className="text-primary-yellow text-[10px] font-bold uppercase tracking-[0.28em] mb-3">
          What I&apos;ve Built
        </p>
        <h2 className="text-4xl font-black uppercase text-white">
          My <span className="section-title text-primary-yellow">Portfolio</span>
        </h2>
        <div className="w-10 h-[2px] bg-primary-yellow mx-auto mt-4 opacity-50 rounded-full" />
      </div>

      {/* ══ FILTER TABS (only shown when more than one category) ════════ */}
      {TAB_VALUE.length > 1 && (
        <div className="flex justify-center items-center gap-8 mb-10">
          {TAB_VALUE.map((tab: TabValueInterface) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`filter-btn text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                filter === tab.key ? "text-primary-yellow active" : "text-white/50 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      )}

      {/* ══ PROJECT GRID ════════════════════════════════════════════════ */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {filtered.map((data: ProjectInterface, i: number) => (
          <div
            key={`project-${i}`}
            className="project-card cursor-pointer rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#252525]"
            onClick={() => setSelectedIndex(i)}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={data.src}
                alt={data.detail.project}
                fill
                className="project-card-img object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="project-card-overlay absolute inset-0 flex flex-col justify-end p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-yellow/80 mb-1">
                  {data.detail.role}
                </p>
                <h3 className="text-base font-black uppercase text-white mb-3 leading-tight">
                  {data.detail.project}
                </h3>
                <span className="card-cta-btn self-start">
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Yellow accent bar */}
            <div className="project-card-accent" />

            {/* Card footer */}
            <div className="px-4 py-3">
              <p className="text-[11px] font-semibold text-white/40 truncate tracking-wide">
                {data.detail.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ══ DIALOG ══════════════════════════════════════════════════════ */}
      {selectedIndex !== null && (
        <ProjectDialog
          projects={filtered}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
};

export default PortFolio;
