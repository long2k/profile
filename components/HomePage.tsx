"use client";
import React, { useState, useEffect } from "react";
import ArrowCircleIcon from "@/common/svg/ArrowCircleIcon";

type SetTabType = React.Dispatch<React.SetStateAction<number>>;

const ROLES = ["WEB DEVELOPER", "FULL-STACK DEVELOPER", "PROBLEM SOLVER"];

/* ─── Social icon link ──────────────────────────────────────────────── */
const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="social-link w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-primary-yellow hover:border-primary-yellow"
  >
    {children}
  </a>
);

/* ─── Main component ────────────────────────────────────────────────── */
const HomePage = ({ setTab }: { setTab: SetTabType }) => {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting,  setDeleting]    = useState(false);

  /* Typewriter effect */
  useEffect(() => {
    const role = ROLES[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < role.length) {
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 85);
      } else {
        timer = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="w-full h-screen overflow-hidden relative">

      {/* ── Animated yellow BG (desktop) ──────────────────── */}
      <div className="hero-bg bg-[#ffb400] fixed lg:block hidden h-[200%] w-[100%] left-[-83%] rotate-[-15deg] top-[-50%]" />

      {/* ── Ambient glow particles ────────────────────────── */}
      <div className="hero-particle pointer-events-none absolute w-[520px] h-[520px] rounded-full bg-[#ffb400]/5 blur-[100px] -top-[10%] right-[8%]" />
      <div className="hero-particle-2 pointer-events-none absolute w-[320px] h-[320px] rounded-full bg-[#ffb400]/8 blur-[80px] bottom-[5%] right-[22%]" />

      {/* ── Desktop avatar (fixed left panel) ─────────────── */}
      <div className="fixed top-[40px] left-[40px] z-50 lg:block hidden h-[90%] w-[30%]">
        {/* Spinning dashed ring */}
        <div className="avatar-ring absolute inset-[-14px] rounded-[42px] border-[1.5px] border-dashed border-primary-yellow/30" />
        {/* Glow behind card */}
        <div className="absolute inset-0 rounded-[30px] bg-primary-yellow/8 blur-[28px] scale-95" />
        {/* Avatar image */}
        <div className="box avatar-float rounded-[30px] h-full w-full bg-avatar bg-top bg-no-repeat bg-cover relative z-10" />
      </div>

      {/* ── Right content ─────────────────────────────────── */}
      <div className="flex justify-center lg:justify-end items-center h-screen w-full pr-0 lg:pr-[10%]">
        <div className="max-w-[600px] w-full px-5 lg:pl-[70px]">

          {/* Mobile avatar */}
          <div className="w-full lg:hidden mb-3 sm:mb-6 flex justify-center">
            <div className="relative">
              <div className="avatar-ring absolute inset-[-10px] rounded-full border-[1.5px] border-dashed border-primary-yellow/40" />
              <div className="absolute inset-0 rounded-full bg-primary-yellow/12 blur-[20px]" />
              <div className="avatar-float relative z-10 bg-avatar bg-cover bg-center bg-no-repeat border-[4px] border-[#252525] rounded-full w-[140px] h-[140px] sm:w-[190px] sm:h-[190px]" />
            </div>
          </div>

          {/* Greeting */}
          <div className="hero-text-1 uppercase lg:text-left text-center text-primary-yellow text-3xl sm:text-4xl leading-tight font-bold mb-1">
            <span className="lg:inline hidden mr-2 opacity-60">—</span>I&apos;m Darius.
          </div>

          {/* Typewriter role */}
          <div className="hero-text-2 lg:text-left text-center mb-3 sm:mb-5 min-h-[38px] sm:min-h-[52px] flex items-center lg:justify-start justify-center">
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide">
              {displayed}
            </span>
            <span className="typewriter-cursor h-[28px] sm:h-[34px]" />
          </div>

          {/* Description */}
          <p className="hero-text-3 text-sm leading-[26px] sm:leading-[32px] lg:text-left text-center text-gray-400 mb-3 sm:mb-6">
            Full-stack Web Developer focused on crafting clean &amp; user-friendly
            experiences. Passionate about building excellent software that improves
            the lives of those around me.
          </p>

          {/* Social links */}
          <div className="hero-text-4 flex items-center gap-3 lg:justify-start justify-center mb-4 sm:mb-7">
            <SocialLink href="https://github.com/long2k" label="GitHub">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/tr%C6%B0%C6%A1ng-quang-long-960618165/" label="LinkedIn">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>

            <SocialLink href="mailto:truongquanglong777@gmail.com" label="Email">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </SocialLink>

            {/* Divider */}
            <div className="w-px h-6 bg-white/15 mx-1" />

            {/* Available badge */}
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-green-400 bg-green-400/10 border border-green-400/25 rounded-full px-3 py-1">
              <span className="available-dot !m-0" />
              Available
            </span>
          </div>

          {/* CTA button */}
          <div className="hero-text-5 flex lg:justify-start justify-center">
            <button
              onClick={() => setTab(1)}
              className="btn-glow text-[15px] font-semibold bg-transparent rounded-[25px] leading-[1.4] py-3 px-6 border-2 border-amber-500 active:scale-95"
            >
              <div className="flex gap-x-3 items-center">
                <span className="font-bold tracking-wide">More About Me</span>
                <ArrowCircleIcon width="22" height="22" style="fill-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
