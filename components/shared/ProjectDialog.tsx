"use client";
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { ProjectInterface } from "@/common/interface/DataInterface";
import Image from "next/image";

const ProjectDialog = ({
  projects,
  index,
  onClose,
}: {
  projects: ProjectInterface[];
  index: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(index);
  const project = projects[current];

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(projects.length - 1, c + 1)),
    [projects.length]
  );

  /* Lock background scroll while dialog is open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* ESC closes, arrow keys navigate */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const techTags = project.detail.tech.split(",").map((t) => t.trim());

  return ReactDOM.createPortal(
    /* Backdrop — rendered into document.body, immune to parent transforms */
    (<div
      className="dialog-backdrop fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
      onClick={onClose}
    >
      <div
        className="dialog-panel relative bg-[#181818] border border-[#2a2a2a] rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Universal close button ───────────────────────────────── */}
        <button
          className="dialog-close-btn absolute top-3 right-3 z-20 text-white/60 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ══ LEFT — image panel ══════════════════════════════════════ */}
        <div className="relative w-full md:w-[45%] h-32 sm:h-40 md:h-auto flex-shrink-0 overflow-hidden bg-[#111]">
          <Image
            src={project.src}
            alt={project.detail.project}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent to-[#181818]/60" />

          {/* Counter */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/55 border border-white/10 rounded-full px-2.5 py-0.5">
            <span className="text-primary-yellow font-black text-[11px]">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/25 text-[11px]">/</span>
            <span className="text-white/40 text-[11px]">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Title overlay — mobile only */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-yellow mb-0.5">
              {project.detail.role}
            </p>
            <h2 className="text-sm font-black uppercase text-white leading-tight">
              {project.detail.project}
            </h2>
          </div>
        </div>

        {/* ══ RIGHT — info panel (no scroll) ══════════════════════════ */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* Header — desktop only */}
          <div className="hidden md:flex items-start justify-between gap-3 px-5 pt-5 pb-4 border-b border-white/6 flex-shrink-0">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-yellow bg-primary-yellow/10 border border-primary-yellow/20 rounded-full px-3 py-[4px] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-yellow flex-shrink-0" />
                {project.detail.role}
              </span>
              <h2 className="text-base font-black uppercase text-white leading-tight tracking-wide">
                {project.detail.project}
              </h2>
            </div>
          </div>

          {/* Body — no overflow, content clips to available space */}
          <div className="flex-1 overflow-hidden px-4 md:px-5 py-3 md:py-4 flex flex-col gap-3">

            {/* Overview */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-1.5">
                Overview
              </p>
              <p className="text-[12px] text-gray-400 leading-relaxed">
                {project.detail.description}
              </p>
            </div>

            {/* Responsibilities */}
            {project.detail.responsible && project.detail.responsible.length > 0 && (
              <div>
                <div className="w-full h-px bg-white/6 mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-2">
                  Responsibilities
                </p>
                <ul className="flex flex-col gap-1.5">
                  {project.detail.responsible.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-gray-400 leading-snug">
                      <span className="flex-shrink-0 mt-[5px] w-1 h-1 rounded-full bg-primary-yellow/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <div className="w-full h-px bg-white/6 mb-3" />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techTags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Live link — only if provided */}
            {project.detail.link && (
              <a
                href={project.detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] bg-primary-yellow hover:bg-amber-400 text-black rounded-xl px-4 py-2 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live
              </a>
            )}
          </div>

          {/* Navigation footer */}
          <div className="flex-shrink-0 px-4 md:px-5 py-3 border-t border-white/6 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Project ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-1.5 bg-primary-yellow"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button onClick={prev} disabled={current === 0} className="dialog-nav-btn" aria-label="Previous">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next} disabled={current === projects.length - 1} className="dialog-nav-btn" aria-label="Next">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>),
    document.body
  );
};

export default ProjectDialog;
