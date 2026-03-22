export default function Maps() {
  return (
    <div className="relative mt-16 h-[calc(100vh-64px)] w-full overflow-hidden">
      {/* Floating City Search Bar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-xl px-4">
        <div className="glass-card ghost-border rounded-2xl flex items-center gap-3 p-2 shadow-2xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#00D2FF]/50 border border-outline-variant/20">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00D2FF]/10 text-[#00D2FF]">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex-1 bg-transparent border-none text-on-surface placeholder-slate-500 focus:ring-0 text-sm font-manrope font-medium outline-none" placeholder="Search city, region or coordinates..." type="text"/>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl glass-card text-[#00D2FF] hover:bg-[#00D2FF]/10 transition-colors" title="My Location">
            <span className="material-symbols-outlined">my_location</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#00D2FF] text-[#060e20] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#00D2FF]/90 transition-colors shadow-lg shadow-[#00D2FF]/20">
            Go
          </button>
        </div>
      </div>

      {/* Background Map Layer */}
      <div className="absolute inset-0 bg-[#060e20]">
        <img alt="World Map Dark" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1f9_NNjwR0lEqNo7M9tE-LPc5An8DVWzTU4gWuk4DyI89oPeO5Do_htp4TC5SxW2CB9Bq00yA_lOSC-yProptghLfZ8x4Sn1T56qzVqUY8WbVr4HKwFtSokQjBn8Fzo4JMNgnTqD-qEJA9hCE9KFUHmA0V6UD2GGav1s7YiyMcAeVtn1psVaDxe1Wo-6qy_yhCTKEylbUoky9s9M2QqlT9Jg13cnLp86ksz8lZQn2jPAGvBLRRe5cjc3FcmWFKpXu6BeCo8LoiOMG"/>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/5 mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Overlay UI Components */}
      {/* Map Control: Layer Switcher (Top Right) */}
      <div className="absolute top-8 right-28 flex flex-col gap-3 z-30 hidden md:flex">
        <div className="glass-card p-2 rounded-2xl flex flex-col gap-1 border border-outline-variant/20">
          <button className="p-3 rounded-xl bg-primary/20 text-primary border border-primary/30 flex flex-col items-center gap-1 transition-all hover:bg-primary/30" title="Radar Layer">
            <span className="material-symbols-outlined text-xl">radar</span>
            <span className="text-[9px] font-bold uppercase tracking-tight">Radar</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1" title="Temperature Layer">
            <span className="material-symbols-outlined text-xl">device_thermostat</span>
            <span className="text-[9px] font-bold uppercase tracking-tight">Temp</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1" title="Wind Layer">
            <span className="material-symbols-outlined text-xl">airwave</span>
            <span className="text-[9px] font-bold uppercase tracking-tight">Wind</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1" title="Cloud Cover Layer">
            <span className="material-symbols-outlined text-xl">filter_drama</span>
            <span className="text-[9px] font-bold uppercase tracking-tight">Clouds</span>
          </button>
        </div>
      </div>

      <div className="absolute top-8 right-8 flex flex-col gap-3 z-30 hidden sm:flex">
        <div className="glass-card p-2 rounded-2xl flex flex-col gap-1 border border-outline-variant/20">
          <button className="p-3 rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 flex flex-col items-center gap-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rainy</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Rain</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1">
            <span className="material-symbols-outlined">cloud</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Clouds</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1">
            <span className="material-symbols-outlined">air</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Wind</span>
          </button>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors flex flex-col items-center gap-1">
            <span className="material-symbols-outlined">thermostat</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Temp</span>
          </button>
        </div>
        <div className="glass-card p-2 rounded-2xl flex flex-col gap-1 border border-outline-variant/20">
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
          <div className="h-[1px] mx-2 bg-outline-variant/20"></div>
          <button className="p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">remove</span>
          </button>
        </div>
      </div>

      {/* Location Marker Tooltip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse blur-xl"></div>
          <div className="relative bg-primary text-on-primary w-4 h-4 rounded-full border-4 border-white shadow-xl cursor-pointer"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 glass-card rounded-xl p-4 shadow-2xl transition-all duration-300 border border-outline-variant/20">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Active Cell</span>
              <span className="text-[10px] text-on-surface-variant">12m ago</span>
            </div>
            <h3 className="font-headline font-extrabold text-xl text-on-surface leading-none">Reykjavík</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-on-surface-variant">Intense Rain</span>
              <span className="text-sm font-bold text-on-surface">42mm/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Radar Forecast Timeline */}
      <div className="absolute bottom-10 left-4 right-4 md:left-8 md:right-8 z-30">
        <div className="glass-card p-6 rounded-[2rem] shadow-2xl border border-outline-variant/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-105 transition-transform flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Radar Forecast</h4>
                <p className="text-xs text-on-surface-variant">Timeline: Next 24 Hours</p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-8">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Selected Time</span>
                <span className="text-sm font-headline font-black text-primary">14:00 PM (GMT)</span>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-primary">LIVE</div>
                <div className="px-3 py-1 bg-outline-variant/20 rounded-full text-[10px] font-bold text-on-surface-variant">SATELLITE</div>
              </div>
            </div>
          </div>

          <div className="relative h-12 flex items-center hidden sm:flex">
            <div className="absolute inset-x-0 h-1 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-error/40 w-full"></div>
            </div>
            <div className="absolute inset-x-0 flex justify-between px-1">
              {['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00'].map((time, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-[2px] h-3 ${time === '16:00' ? 'bg-primary' : 'bg-outline-variant/50'}`}></div>
                  <span className={`text-[10px] ${time === '16:00' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{time}</span>
                </div>
              ))}
            </div>
            <div className="absolute left-[33%] -translate-x-1/2 flex flex-col items-center hidden sm:flex">
              <div className="w-1 h-12 bg-primary shadow-[0_0_15px_rgba(55,188,247,0.5)]"></div>
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-surface shadow-lg mt-[-6px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bento Floating (Bottom Left) */}
      <div className="absolute bottom-40 left-8 flex flex-col gap-4 max-w-xs pointer-events-none hidden lg:flex z-30">
        <div className="glass-card p-5 rounded-2xl pointer-events-auto border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">speed</span>
            <h5 className="text-sm font-headline font-bold text-on-surface">Atmospheric Pressure</h5>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-headline font-black text-on-surface">1013.2</span>
            <span className="text-on-surface-variant text-sm">hPa</span>
          </div>
          <div className="mt-4 h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%]"></div>
          </div>
        </div>
        <div className="glass-card p-5 rounded-2xl pointer-events-auto border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-tertiary">water_drop</span>
            <h5 className="text-sm font-headline font-bold text-on-surface">Avg. Humidity</h5>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-headline font-black text-on-surface">82</span>
            <span className="text-on-surface-variant text-sm">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
