import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Shield, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top navigation */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">A</div>
            <span className="text-xl font-semibold tracking-tight">Ameya Innovex</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#solutions" className="hover:text-slate-900 transition">Solutions</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 font-medium shadow-sm hover:bg-slate-800 transition">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative">
        {/* subtle background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(56,189,248,0.15)_0%,rgba(15,23,42,0)_60%)]" />

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 lg:pt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 mb-5">
              <Shield className="h-3.5 w-3.5 text-emerald-500" />
              Enterprise-grade, tailored to your workflow
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Build powerful CRMs, ERPs & Lead Engines
              <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">with Ameya Innovex</span>
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
              We design, build, and implement custom business systems — from modular CRMs and ERPs to end-to-end lead management platforms — that scale with your operations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition">
                Get Started <Rocket className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium border border-slate-200 hover:bg-slate-50 transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-sky-500" />
                <span>Cloud-native and on-prem options</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span>Security-first architecture</span>
              </div>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden ring-1 ring-slate-200/60 bg-white/40 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft gradient overlay to blend edges, allow interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
