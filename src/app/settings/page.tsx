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
                {/* OpenWeather */}
                <tr className="group hover:bg-surface-container-highest/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#EB6E4B]/10 flex items-center justify-center text-[#EB6E4B] flex-shrink-0">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_queue</span>
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="font-bold text-on-surface">OpenWeather</p>
                        <p className="text-xs text-slate-500">v3.0.1 Global Model</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-semibold text-emerald-400">Operational</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '94%' }}></div>
                      </div>
                      <span className="text-xs font-bold">94%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-body text-slate-400">142ms</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="relative inline-block w-10 h-5 transition duration-200 ease-in-out">
                      <input defaultChecked className="peer absolute w-10 h-5 opacity-0 cursor-pointer z-10" type="checkbox"/>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors"></div>
                      <div className="absolute top-1 left-1 w-3 h-3 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-on-primary"></div>
                    </div>
                  </td>
                </tr>
                {/* AccuWeather */}
                <tr className="group hover:bg-surface-container-highest/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="font-bold text-on-surface">AccuWeather</p>
                        <p className="text-xs text-slate-500">Pro-Level Precision</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-semibold text-emerald-400">Operational</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '98%' }}></div>
                      </div>
                      <span className="text-xs font-bold">98%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-body text-slate-400">88ms</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="relative inline-block w-10 h-5 transition duration-200 ease-in-out">
                      <input defaultChecked className="peer absolute w-10 h-5 opacity-0 cursor-pointer z-10" type="checkbox"/>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors"></div>
                      <div className="absolute top-1 left-1 w-3 h-3 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-on-primary"></div>
                    </div>
                  </td>
                </tr>
                {/* Weatherbit */}
                <tr className="group hover:bg-surface-container-highest/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="font-bold text-on-surface">Weatherbit</p>
                        <p className="text-xs text-slate-500">High Resolution Radar</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <span className="text-xs font-semibold text-tertiary">Degraded</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-tertiary">72%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-body text-slate-400">412ms</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="relative inline-block w-10 h-5 transition duration-200 ease-in-out">
                      <input className="peer absolute w-10 h-5 opacity-0 cursor-pointer z-10" type="checkbox"/>
                      <div className="w-10 h-5 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors"></div>
                      <div className="absolute top-1 left-1 w-3 h-3 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-on-primary"></div>
                    </div>
                  </td>
                </tr>
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
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                <input defaultChecked className="peer absolute w-12 h-6 opacity-0 cursor-pointer z-10" type="checkbox"/>
                <div className="w-12 h-6 bg-surface-container-highest rounded-full peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary-container transition-all"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Historical Bias</span>
                  <span className="text-primary">65%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Live Sensor Feed</span>
                  <span className="text-primary">25%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>ML Projection</span>
                  <span className="text-primary">10%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '10%' }}></div>
                </div>
              </div>
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
          <div className="bg-surface-container-highest/40 p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-surface-container-highest transition-all border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all flex-shrink-0">
              <span className="material-symbols-outlined">vpn_key</span>
            </div>
            <div>
              <h4 className="font-bold">Credential Vault</h4>
              <p className="text-xs text-on-surface-variant">Manage 4 secure API keys</p>
            </div>
          </div>
          <div className="bg-surface-container-highest/40 p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-surface-container-highest transition-all border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all flex-shrink-0">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div>
              <h4 className="font-bold">Usage Quotas</h4>
              <p className="text-xs text-on-surface-variant">82% of monthly limit used</p>
            </div>
          </div>
          <div className="bg-surface-container-highest/40 p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-surface-container-highest transition-all border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all flex-shrink-0">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <div>
              <h4 className="font-bold">Developer Logs</h4>
              <p className="text-xs text-on-surface-variant">View raw JSON data stream</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
