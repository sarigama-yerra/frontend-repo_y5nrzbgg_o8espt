import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s architect your next system</h2>
            <p className="mt-3 text-slate-300 max-w-prose">Tell us about your workflows and goals. We’ll propose the right mix of modules, integrations and customizations — then deliver it end-to-end.</p>
          </div>
          <form className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your name" />
              <input type="email" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Work email" />
            </div>
            <input className="mt-3 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Company" />
            <textarea rows={4} className="mt-3 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="What do you want to build?" />
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition">
              Request a proposal <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 text-sm text-slate-400 flex items-center gap-2">
          <Mail className="h-4 w-4" /> contact@ameyainnovex.com
        </div>
      </div>
    </section>
  );
}
