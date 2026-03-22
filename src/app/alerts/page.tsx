export default function Alerts() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column: Alerts List */}
        <div className="xl:col-span-4 space-y-6">
          <header>
            <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Active Alerts</h1>
            <p className="text-on-surface-variant text-sm mt-1">3 active warnings in your monitored areas</p>
          </header>
          <div className="space-y-4">
            {/* High Priority Alert */}
            <div className="glass-card p-6 rounded-xl border-l-4 border-error shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 bg-error/20 text-error text-[10px] font-bold rounded uppercase tracking-widest">Immediate</span>
                <span className="text-on-surface-variant text-xs">2m ago</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface">Tornado Warning</h3>
              <p className="text-on-surface-variant text-xs mt-1">North Ridge, Silver Creek</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-error font-medium text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">emergency_home</span>
                  Take Shelter
                </span>
                <button className="text-primary text-xs font-bold hover:underline">View Details</button>
              </div>
            </div>
            {/* Medium Priority Alert */}
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold rounded uppercase tracking-widest">Expected</span>
                <span className="text-on-surface-variant text-xs">15m ago</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface">Severe Thunderstorm</h3>
              <p className="text-on-surface-variant text-xs mt-1">Metro Area, East Basin</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-tertiary font-medium text-xs">60mph Winds, Hail</span>
                <button className="text-primary text-xs font-bold hover:underline">View Details</button>
              </div>
            </div>
            {/* Advisory */}
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-outline">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 bg-outline/20 text-on-surface-variant text-[10px] font-bold rounded uppercase tracking-widest">Monitor</span>
                <span className="text-on-surface-variant text-xs">1h ago</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface">Flood Watch</h3>
              <p className="text-on-surface-variant text-xs mt-1">Valley District</p>
            </div>
          </div>
          {/* Subscription Settings */}
          <div className="glass-card p-6 rounded-xl mt-8 border border-outline-variant/20">
            <h4 className="font-headline font-bold text-sm text-cyan-400 mb-4 uppercase tracking-widest">Notification Channels</h4>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">sms</span>
                  <span className="text-sm">SMS Alerts</span>
                </span>
                <input defaultChecked className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded" type="checkbox"/>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">mail</span>
                  <span className="text-sm">Email Digest</span>
                </span>
                <input defaultChecked className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded" type="checkbox"/>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">notifications_active</span>
                  <span className="text-sm">App Push</span>
                </span>
                <input defaultChecked className="form-checkbox bg-surface-container-high border-outline-variant text-primary rounded" type="checkbox"/>
              </label>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-3 tracking-tighter">Threshold Level</p>
              <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
              <div className="flex justify-between text-[10px] text-on-surface-variant mt-2 font-medium">
                <span>Advisory</span>
                <span>Warning</span>
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Detailed View */}
        <div className="xl:col-span-8 space-y-8">
          {/* Bento Grid Layout for Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Impact Map */}
            <div className="bg-surface-container-low rounded-2xl overflow-hidden h-[340px] relative group border border-outline-variant/20">
              <div className="absolute inset-0 z-0">
                <img alt="Weather radar map" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfJqgDIKdHhim07AU8UwOZP3m-LFB1biWzTtwaM6TlmAhlkaAHVGWwRA-yJwIFxRdAfrunxpwV-EsPfZn1LrlZX3G0O9tbRrAXD8rFT6cBhUqbrSTOGHId17QrDc1aTgZUGIpitLLZDDKRkPY4jldyM10Si-0NGvENaQ5HIEWDaIEI006t8U_yLI7QdUBRhnjnzpdJillEzq4r9m6bD-ErknxWLDLfQDVkdoA66qhpICy5RjWQOlHrKkYV0WPN0VKbMu_BOPWCZELi"/>
              </div>
              <div className="absolute top-4 left-4 z-10 glass-card px-3 py-1 rounded-full text-[10px] font-bold text-error flex items-center gap-2">
                <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
                LIVE RADAR
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 glass-card p-4 rounded-xl border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant">Affected Area</p>
                    <p className="text-sm font-bold">42.5 sq miles</p>
                  </div>
                  <span className="material-symbols-outlined text-cyan-400">fullscreen</span>
                </div>
              </div>
            </div>
            {/* Safety Recommendations */}
            <div className="glass-card p-8 rounded-2xl flex flex-col border border-outline-variant/20">
              <h3 className="font-headline font-extrabold text-xl text-on-surface mb-6">Safety Protocol</h3>
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center text-error shrink-0">
                    <span className="material-symbols-outlined">night_shelter</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Seek Immediate Shelter</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Move to a basement or an interior room on the lowest floor of a sturdy building.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">window</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Avoid Windows</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Stay away from glass windows and doors to avoid flying debris.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined">charging_station</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Power Preparedness</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Ensure mobile devices are charged. Have a flashlight and batteries ready.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Detailed Description */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20">
            <h3 className="font-headline font-extrabold text-xl text-on-surface mb-4">Meteorological Context</h3>
            <div className="prose prose-invert max-w-none text-on-surface-variant text-sm leading-relaxed">
              <p>At 4:42 PM CDT, a severe thunderstorm capable of producing a tornado was located over Silver Creek, moving northeast at 35 mph. This is a highly unstable air mass with significant low-level shear. Radar indicates strong rotation within the storm cell.</p>
              <p className="mt-4">Hazard... Tornado and quarter size hail. Source... Radar indicated rotation. Impact... Flying debris will be dangerous to those caught without shelter. Mobile homes will be damaged or destroyed. Damage to roofs, windows, and vehicles will occur. Tree damage is likely.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Wind Speed</p>
                <p className="text-lg font-headline font-bold text-primary">72 MPH</p>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Hail Size</p>
                <p className="text-lg font-headline font-bold text-tertiary">1.25 IN</p>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Humidity</p>
                <p className="text-lg font-headline font-bold text-cyan-400">88%</p>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Visibility</p>
                <p className="text-lg font-headline font-bold text-on-surface">0.5 MI</p>
              </div>
            </div>
          </div>
          {/* Alert Timeline */}
          <div className="glass-card p-8 rounded-2xl border border-outline-variant/20">
            <h3 className="font-headline font-extrabold text-xl text-on-surface mb-8">Event Timeline</h3>
            <div className="relative pb-4">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-[65%] h-1 bg-gradient-to-r from-primary to-error -translate-y-1/2 rounded-full"></div>
              {/* Timeline Points */}
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mb-4"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">4:00 PM</span>
                  <span className="text-xs font-medium">Detection</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mb-4"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">4:42 PM</span>
                  <span className="text-xs font-medium">Warning Issued</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-error border-4 border-background mb-3 ring-4 ring-error/20"></div>
                  <span className="text-[10px] font-bold text-error">5:15 PM</span>
                  <span className="text-xs font-bold text-error">Peak Impact</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-4 h-4 rounded-full bg-surface-container-highest border-4 border-background mb-4"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">6:30 PM</span>
                  <span className="text-xs font-medium">Dissipation</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-4 h-4 rounded-full bg-surface-container-highest border-4 border-background mb-4"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">7:00 PM</span>
                  <span className="text-xs font-medium">All Clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
