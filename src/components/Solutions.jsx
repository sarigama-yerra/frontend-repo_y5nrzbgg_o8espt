import React from 'react';
import { Plug, LineChart, Settings2, Cloud } from 'lucide-react';

const solutions = [
  {
    title: 'Integrations that click',
    desc: 'Seamless connectors for email, telephony, WhatsApp, accounting, marketing automation and data warehouses.',
    icon: Plug
  },
  {
    title: 'Insights that matter',
    desc: 'Unified dashboards with KPIs, cohort analysis and forecasting to keep teams aligned.',
    icon: LineChart
  },
  {
    title: 'Automation that scales',
    desc: 'Workflow builders, rules engines and event-driven jobs cut manual ops and boost throughput.',
    icon: Settings2
  },
  {
    title: 'Cloud-first by design',
    desc: 'Multi-tenant and single-tenant deployments with solid backup, monitoring and observability.',
    icon: Cloud
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Solutions that fit like a glove</h2>
            <p className="mt-3 text-slate-600 max-w-prose">We build platforms that adapt to your business, not the other way around. Start with core modules and extend as you grow.</p>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
