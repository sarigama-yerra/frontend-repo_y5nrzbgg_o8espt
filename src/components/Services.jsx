import React from 'react';
import { Cog, Workflow, Contact, Database, Layers, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Custom CRM Development',
    desc: 'Design CRM workflows tailored for sales, support and success teams with role-based automation and insights.'
  },
  {
    icon: Layers,
    title: 'Modular ERP Systems',
    desc: 'Finance, inventory, procurement and HR modules that integrate cleanly with your existing stack.'
  },
  {
    icon: Database,
    title: 'Lead Management Engines',
    desc: 'Capture, score and route leads in real time with omnichannel integrations and analytics.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    desc: 'Single sign-on, audit trails and data governance built in from day one.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services we offer</h2>
          <p className="mt-3 text-slate-600">From discovery to deployment, we turn your unique workflows into scalable systems.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 text-white flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
