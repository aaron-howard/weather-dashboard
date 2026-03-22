export default function Dashboard() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-8">
      <div className="grid grid-cols-12 gap-10">
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-10">
        <div className="relative overflow-hidden rounded-3xl p-10 min-h-[400px] flex flex-col justify-between group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background -z-10"></div>
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-primary/20 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-700"></div>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">San Francisco, CA</h2>
              <p className="text-on-surface-variant font-label text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-xs" data-icon="calendar_today">calendar_today</span>
                Monday, 24 October
              </p>
            </div>
            <div className="glass-card px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              LIVE SATELLITE
            </div>
          </div>
          <div className="flex items-end gap-12">
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-[10rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">68</span>
              <span className="font-headline text-5xl font-light text-primary">°</span>
            </div>
            <div className="pb-6 space-y-1">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="cloud" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                <span className="font-headline text-2xl font-bold">Mostly Cloudy</span>
              </div>
              <p className="text-on-surface-variant text-sm pl-1">Feels like 64° • Sunset 18:24</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-headline text-xl font-bold">Hourly Forecast</h3>
            <span className="text-xs font-label text-primary uppercase tracking-widest cursor-pointer hover:opacity-70">Next 24 Hours</span>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { time: "Now", icon: "cloud", temp: "68°", active: false },
              { time: "15:00", icon: "partly_cloudy_day", temp: "70°", active: true },
              { time: "16:00", icon: "wb_sunny", temp: "72°", active: false },
              { time: "17:00", icon: "wb_sunny", temp: "71°", active: false },
              { time: "18:00", icon: "nights_stay", temp: "66°", active: false, dim: true },
              { time: "19:00", icon: "nights_stay", temp: "64°", active: false, dim: true },
              { time: "20:00", icon: "nights_stay", temp: "62°", active: false, dim: true },
            ].map((hour, i) => (
              <div key={i} className={`glass-card min-w-[100px] flex-shrink-0 p-6 rounded-2xl flex flex-col items-center gap-4 transition-transform hover:scale-105 ${hour.active ? 'border-t-2 border-primary/40' : ''}`}>
                <span className="text-xs font-label text-on-surface-variant">{hour.time}</span>
                <span className={`material-symbols-outlined ${hour.dim ? 'text-slate-400' : 'text-primary'}`} data-icon={hour.icon} style={{ fontVariationSettings: "'FILL' 1" }}>{hour.icon}</span>
                <span className="font-headline text-lg font-bold">{hour.temp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center gap-2 text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-lg" data-icon="wb_sunny">wb_sunny</span>
              <span className="text-xs font-label uppercase tracking-widest">UV Index</span>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-headline font-extrabold">4 <span className="text-sm font-medium text-on-surface-variant">Moderate</span></p>
              <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-gradient-to-r from-tertiary to-primary"></div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center gap-2 text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-lg" data-icon="humidity_low">humidity_low</span>
              <span className="text-xs font-label uppercase tracking-widest">Humidity</span>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-headline font-extrabold">64<span className="text-sm font-medium text-on-surface-variant">%</span></p>
              <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full w-[64%] bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center gap-2 text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span>
              <span className="text-xs font-label uppercase tracking-widest">Visibility</span>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-headline font-extrabold">10 <span className="text-sm font-medium text-on-surface-variant">mi</span></p>
              <p className="text-[10px] text-on-surface-variant leading-tight">Crystal clear view from the horizon.</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center gap-2 text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-lg" data-icon="air">air</span>
              <span className="text-xs font-label uppercase tracking-widest">Wind Speed</span>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-headline font-extrabold">12 <span className="text-sm font-medium text-on-surface-variant">mph</span></p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary -rotate-45" data-icon="navigation">navigation</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">North West</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low/50 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-headline font-bold mb-1">Ethereal Sync Engines</h4>
            <p className="text-xs text-on-surface-variant">Aggregating real-time data from 4 global nodes</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="cloud_sync" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant">NOAA</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="storm" style={{ fontVariationSettings: "'FILL' 1" }}>storm</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant">ECMWF</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="satellite_alt" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant">METEO</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/20 opacity-40">
                <span className="material-symbols-outlined text-slate-400 text-xl" data-icon="refresh">refresh</span>
              </div>
              <span className="text-[10px] font-label text-slate-500">GRIB</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="col-span-12 lg:col-span-4 space-y-8">
        <div className="glass-card rounded-3xl p-8 flex flex-col gap-8 h-full">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl font-bold">7-Day Forecast</h3>
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="event_note">event_note</span>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { day: "Today", icon: "cloud", label: "Cloudy", hi: "68°", lo: "54°" },
              { day: "Tue", icon: "partly_cloudy_day", label: "Partial", hi: "71°", lo: "56°" },
              { day: "Wed", icon: "wb_sunny", label: "Sunny", hi: "74°", lo: "59°" },
              { day: "Thu", icon: "wb_sunny", label: "Sunny", hi: "76°", lo: "60°" },
              { day: "Fri", icon: "water_drop", label: "Showers", hi: "62°", lo: "50°" },
              { day: "Sat", icon: "thunderstorm", label: "Storm", hi: "58°", lo: "48°" },
              { day: "Sun", icon: "cloud", label: "Cloudy", hi: "60°", lo: "50°" }
            ].map((d, i) => (
              <div key={i}>
                {i > 0 && <div className="h-px bg-outline-variant/10 mb-6"></div>}
                <div className="flex items-center justify-between group cursor-default">
                  <span className="w-12 text-sm font-medium text-on-surface-variant">{d.day}</span>
                  <div className="flex items-center gap-4 flex-1 justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon={d.icon} style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                    <span className="text-xs font-label text-on-surface-variant w-16">{d.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold">{d.hi}</span>
                    <span className="text-xs text-slate-500">{d.lo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">Localized Pressure Map</p>
            <div className="w-full h-40 rounded-2xl overflow-hidden relative border border-outline-variant/20">
              <img alt="Local Map" className="w-full h-full object-cover" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb2GMK_MwY6M4ruBOQJLi7CafqWV0z9F13bBIbUgz7W18RK9gvWK5tGlCaneyTlfxlO0J3zRXKylUGWPGJ-1kv6nu2M2ly0hn_80190vBhLgHDiburPCgK-VlOQtSSfRxyrqxuONwI7IXCzqy1cXGp7FKvLd7DI34aGE0brH4z7QZwriJNvdXv_EYy6d0rUZrC7RmPv_1E2fHu0j4wWmHtpmOeK4uq4D8wgatn8wtFA6n9rdYLe_pIr7QERI7bP_A462hxPDACcHf7" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_#37bcf7]"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    </div>
  );
}
