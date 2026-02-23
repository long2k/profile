"use client";
import React from "react";
import BagIcon from "@/common/svg/BagIcon";
import { MY_SKILL } from "@/common/constant/data";
import { SkillIntefece } from "@/common/interface/DataInterface";

/* ─────────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────────── */

/** Labelled header for each major section */
const SectionHeader = ({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) => (
  <div className="text-center mb-10 pt-14">
    <p className="text-primary-yellow text-[10px] font-bold uppercase tracking-[0.28em] mb-3">
      {eyebrow}
    </p>
    <h2 className="text-4xl font-black uppercase text-white">
      {title} <span className="section-title text-primary-yellow">{accent}</span>
    </h2>
    <div className="w-10 h-[2px] bg-primary-yellow mx-auto mt-4 opacity-50 rounded-full" />
  </div>
);

/** Single personal info card with icon */
const InfoField = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="info-field group flex items-center gap-3 bg-[#161616] border border-[#252525] rounded-xl px-4 py-3">
    {/* Icon box */}
    <div className="info-field-icon flex-shrink-0 w-9 h-9 rounded-lg bg-[#1f1f1f] border border-white/6 flex items-center justify-center text-white/30">
      {icon}
    </div>
    {/* Text */}
    <div className="flex flex-col gap-[3px] min-w-0">
      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
        {label}
      </span>
      <div className="text-[13px] font-semibold text-white leading-snug truncate">
        {children}
      </div>
    </div>
  </div>
);

/** Animated stat card with icon */
const StatCard = ({
  value,
  line1,
  line2,
  icon,
}: {
  value: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}) => (
  <div className="stat-card border border-[#252525] rounded-xl p-5 bg-[#1a1a1a] flex flex-col gap-1 relative overflow-hidden">
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-yellow/0 via-primary-yellow/60 to-primary-yellow/0" />
    {/* Icon */}
    <div className="stat-card-icon mb-2 w-8 h-8 rounded-lg bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-primary-yellow">
      {icon}
    </div>
    <span className="stat-number text-3xl font-black text-primary-yellow leading-none">
      {value}
    </span>
    <span className="text-[10px] uppercase text-white/55 tracking-widest mt-1">{line1}</span>
    <span className="text-[10px] uppercase text-white/55 tracking-widest">{line2}</span>
  </div>
);

/** Horizontal animated skill bar */
const SkillBar = ({ title, percentage }: SkillIntefece) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs font-semibold text-white/60 uppercase tracking-wide group-hover:text-white transition-colors duration-200">
        {title}
      </span>
      <span className="text-xs font-bold text-primary-yellow">{percentage}%</span>
    </div>
    <div className="h-1 bg-white/8 rounded-full overflow-hidden">
      <div
        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#ffb400] to-amber-300"
        style={{ "--skill-pct": `${percentage}%` } as React.CSSProperties}
      />
    </div>
  </div>
);

/** Timeline entry — work or education */
const TimelineItem = ({
  period,
  title,
  subtitle,
  description,
  aosDelay = 0,
}: {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  aosDelay?: number;
}) => (
  <div
    className="relative pl-9 pb-10 last:pb-0"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    {/* Vertical connector */}
    <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-primary-yellow/40 to-transparent" />
    {/* Icon dot */}
    <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-primary-yellow flex items-center justify-center shadow-[0_0_14px_rgba(255,180,0,0.45)]">
      <BagIcon width="11" height="11" style="fill-white" />
    </div>
    {/* Period badge */}
    <span className="inline-block text-[11px] font-semibold bg-[#1e1e1e] border border-white/10 text-white/60 rounded-full px-3 py-[3px] mb-2">
      {period}
    </span>
    <h3 className="text-base font-bold uppercase tracking-wide mb-0.5">{title}</h3>
    <p className="timeline-subtitle">{subtitle}</p>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </div>
);

/* ─────────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────────── */
const About = () => (
  <section className="text-white w-full container mx-auto px-4 pb-24">

    {/* ══ SECTION TITLE ═══════════════════════════════════════════════ */}
    <SectionHeader eyebrow="Who am I?" title="About" accent="Me" />

    {/* ══ PERSONAL INFO ═══════════════════════════════════════════════ */}
    <div
      className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-14"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      {/* Avatar column */}
      <div className="lg:col-span-2 flex flex-col items-center gap-4">
        <div className="relative">
          {/* Spinning ring */}
          <div className="avatar-ring absolute inset-[-12px] rounded-[24px] border-[1.5px] border-dashed border-primary-yellow/30" />
          {/* Glow */}
          <div className="absolute inset-0 rounded-[20px] bg-primary-yellow/6 blur-[22px]" />
          {/* Photo */}
          <div className="relative z-10 bg-avatar bg-cover bg-top bg-no-repeat rounded-[20px] w-[200px] h-[260px] sm:w-[230px] sm:h-[290px] border-2 border-[#252525] shadow-xl" />
        </div>

        {/* Name & role */}
        <div className="text-center">
          <p className="text-base font-black uppercase tracking-widest text-white">Darius Truong</p>
          <p className="text-[10px] font-bold text-primary-yellow/80 uppercase tracking-[0.22em] mt-1">
            Full-Stack Developer
          </p>
        </div>

        {/* Available badge */}
        <span className="flex items-center gap-2 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/25 rounded-full px-4 py-2">
          <span className="available-dot !m-0" />
          Open to Work
        </span>

        {/* Download CV */}
        <a href="/assets/cv.pdf" download className="cv-download-btn">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Info fields */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
        <InfoField label="First Name" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }>Darius</InfoField>

        <InfoField label="Last Name" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }>Truong</InfoField>

        <InfoField label="Age" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }>24 Years</InfoField>

        <InfoField label="Nationality" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }>Vietnam</InfoField>

        <InfoField label="Address" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }>Ha Noi</InfoField>

        <InfoField label="Phone" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        }>+84 332 477 490</InfoField>

        <InfoField label="Skype" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        }>truongquanglong777</InfoField>

        <InfoField label="Languages" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        }>Vietnamese, English</InfoField>

        {/* Full-width fields */}
        <InfoField label="Email" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }>
          <a
            href="mailto:truongquanglong777@gmail.com"
            className="hover:text-primary-yellow transition-colors duration-200 truncate block"
          >
            truongquanglong777@gmail.com
          </a>
        </InfoField>

        <InfoField label="Freelance" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }>
          <span className="flex items-center gap-1.5 text-green-400 font-semibold">
            <span className="available-dot !m-0" />
            Available
          </span>
        </InfoField>
      </div>
    </div>

    {/* ══ STATS ═══════════════════════════════════════════════════════ */}
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <StatCard
        value="2.5"
        line1="Years of"
        line2="Experience"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />
      <StatCard
        value="10"
        line1="Completed"
        line2="Projects"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        }
      />
      <StatCard
        value="6"
        line1="Happy"
        line2="Customers"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <StatCard
        value="5"
        line1="Awards"
        line2="Won"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        }
      />
    </div>

    {/* ══ DIVIDER ═════════════════════════════════════════════════════ */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent mb-16" />

    {/* ══ SKILLS ══════════════════════════════════════════════════════ */}
    <div className="mb-16" data-aos="fade-up">
      <p className="text-primary-yellow text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
        What I Can Do
      </p>
      <h2 className="text-2xl font-black uppercase mb-10">
        My <span className="text-primary-yellow">Skills</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5">
        {MY_SKILL.map((item: SkillIntefece, i: number) => (
          <div key={item.title} data-aos="fade-left" data-aos-delay={i * 60}>
            <SkillBar title={item.title} percentage={item.percentage} />
          </div>
        ))}
      </div>
    </div>

    {/* ══ DIVIDER ═════════════════════════════════════════════════════ */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent mb-16" />

    {/* ══ EXPERIENCE & EDUCATION ══════════════════════════════════════ */}
    <div data-aos="fade-up">
      <p className="text-primary-yellow text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
        My Journey
      </p>
      <h2 className="text-2xl font-black uppercase mb-10">
        Experience &amp; <span className="text-primary-yellow">Education</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
        {/* Work */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-white/20" />
            Work Experience
          </p>
          <TimelineItem
            period="2021 – 2022"
            title="Backend Developer"
            subtitle="Meey Land"
            description="Built admin systems and a real-time chat application using NodeJS, Socket.io and Kafka."
            aosDelay={100}
          />
          <TimelineItem
            period="2022 – Present"
            title="Full-Stack Developer"
            subtitle="AHT Tech Company"
            description="Developing web applications for clients across both front-end and back-end stacks."
            aosDelay={200}
          />
        </div>

        {/* Education */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-white/20" />
            Education
          </p>
          <TimelineItem
            period="2018 – 2023"
            title="Information Systems"
            subtitle="PTIT — Posts & Telecommunications Institute of Technology"
            description="Graduated majoring in Information Systems."
            aosDelay={150}
          />
        </div>
      </div>
    </div>

  </section>
);

export default About;
