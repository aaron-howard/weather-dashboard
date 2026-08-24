import DataStreamRow, { DATA_STREAMS } from "@/components/DataStreamRow";
import Toggle from "@/components/Toggle";

const FUSION_WEIGHTS = [
  { label: "Historical Bias", value: 65 },
  { label: "Live Sensor Feed", value: 25 },
  { label: "ML Projection", value: 10 },
];

const SHORTCUTS = [
  { icon: "vpn_key", title: "Credential Vault", subtitle: "Manage 4 secure API keys" },
  { icon: "analytics", title: "Usage Quotas", subtitle: "82% of monthly limit used" },
  { icon: "terminal", title: "Developer Logs", subtitle: "View raw JSON data stream" },
];

export default function Settings() {
  return (
    <div className="pt-24 pb-12 px-4 md:px-12 relative">
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-tertiary/10 blur-[100px]"></div>
      </div>

      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface mb-2">Data Integrity</h2>
        <p className="text-on-surface-variant font-body max-w-2xl">Configure atmospheric data nodes and algorithmic weightings to refine your weather observation model.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Sources Table Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10">
          <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="font-headline text-xl font-bold">Active Data Streams</h3>
            <div className="flex gap-2">
              <button className="bg-surface-container-high px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-primary hover:bg-surface-container-highest transition-colors">Refresh All</button>
            </div>
          </div>
          <div className="p-0 overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-highest/30">
                  <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Source</th>
                  <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Status</th>
                  <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Accuracy Index</th>
                  <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Latency</th>
                  <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Power</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {DATA_STREAMS.map((stream) => (
                  <DataStreamRow key={stream.name} stream={stream} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weighting Logic Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Fusion Logic Engine */}
          <div className="bg-surface-container-high glass-card rounded-2xl p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-headline text-lg font-bold">Fusion Logic</h3>
                <p className="text-xs text-on-surface-variant">Weighted Average Engine</p>
              </div>
              <Toggle defaultChecked size="md" aria-label="Fusion logic" />
            </div>
            <div className="space-y-6">
              {FUSION_WEIGHTS.map((weight) => (
                <div key={weight.label} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                    <span>{weight.label}</span>
                    <span className="text-primary">{weight.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: `${weight.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Health Card */}
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold mb-6">Synchronization</h3>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-[spin_3s_linear_infinite] flex items-center justify-center relative">
                <span className="material-symbols-outlined text-primary text-2xl">sync</span>
              </div>
              <div>
                <p className="text-2xl font-bold font-headline tracking-tighter">0.82<span className="text-sm font-normal text-slate-500 ml-1">Hz</span></p>
                <p className="text-xs text-on-surface-variant">Last successful sync: 4s ago</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex gap-4">
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Packets</p>
                <p className="text-sm font-bold">12,402 / min</p>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Downtime</p>
                <p className="text-sm font-bold text-emerald-400">0.02%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: API Key Management */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHORTCUTS.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-highest/40 p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-surface-container-highest transition-all border border-outline-variant/10"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all flex-shrink-0">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-xs text-on-surface-variant">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
