export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] z-40 bg-[#060e20]/80 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 h-16">
      <div className="flex items-center gap-4 bg-[#091328]/50 px-4 py-2 rounded-full min-w-[200px] md:min-w-[300px]">
        <span className="material-symbols-outlined text-slate-400" data-icon="search">search</span>
        <input className="bg-transparent border-none text-sm focus:ring-0 text-on-surface w-full outline-none placeholder:text-slate-500" placeholder="Search location..." type="text"/>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <button className="text-slate-400 hover:bg-[#192540]/50 transition-all p-2 rounded-full relative hidden sm:block">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        <button className="text-slate-400 hover:bg-[#192540]/50 transition-all p-2 rounded-full">
          <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
          <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq-WK_X963vu-6dWETtLjtmiK_qXEMN_250XFIOTRUIonycAj4h4uASjT_6ZExSDl1X1-0JDhlvNuSawDAkuPzXlDDnxeBu-XkBCaIdkL2GFnAyIkDM0hCOZBoc2IWCIxsdHUzulwqR0CLRXFP_SNMPm6gX8gyVgEFZ79wfnEOe6l3dr93DcU_cABL0oVPIlrjQn0fRH1yRTK-fXE1-yl-YINGRfa6R7Fpz5sE16_bE-iM1dQf7k3Y_PpJzJZ803f5XchTj080wv90"/>
        </div>
      </div>
    </header>
  );
}
