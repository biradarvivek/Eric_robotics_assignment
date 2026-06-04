import { Pause, BatteryFull, Wifi, Circle, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [activeMode, setActiveMode] = useState("AUTO");
  return (
    <>
      {/* Top Left: Mission Status */}
      <div className="absolute top-6 left-6 z-40 flex items-center bg-white rounded-full shadow-lg px-4 py-2 gap-4 border border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
            Status
          </span>
          <span className="font-extrabold text-sm text-slate-800">
            On Mission 1234
          </span>
        </div>
        <button className="w-8 h-8 rounded-full bg-[#081726] flex items-center justify-center hover:scale-105 transition-transform">
          <Pause size={14} className="text-white" fill="white" />
        </button>
      </div>

      {/* Top Left (Lower): Quick Goal */}
      <div className="absolute top-[88px] left-6 z-40">
        <button className="bg-white rounded-full pl-5 pr-2 py-2 shadow-lg flex items-center gap-4 hover:scale-105 transition-transform border border-slate-100">
          <span className="font-black text-[11px] tracking-widest text-slate-800">
            QUICK GOAL
          </span>
          <div className="w-8 h-8 rounded-full bg-[#081726] flex items-center justify-center">
            <ArrowRight size={16} className="text-white" />
          </div>
        </button>
      </div>

      {/* Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-[#081726]/90 backdrop-blur-md border-b border-x border-white/10 rounded-b-[2rem] text-slate-100 px-10 py-4 flex items-center gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2.5">
            <BatteryFull size={18} />
            <span className="text-sm font-semibold">100%</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Wifi size={18} />
            <span className="text-sm font-semibold">Strong</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Circle size={10} fill="#4ade80" className="text-green-400" />
            <span className="text-sm font-semibold">
              Failsafe <span className="text-white ml-1">Okay</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Circle size={10} fill="#4ade80" className="text-green-400" />
            <span className="text-sm font-semibold">
              System <span className="text-white ml-1">Okay</span>
            </span>
          </div>
        </div>
      </div>

      {/* Top Right: Mode & Initiate */}
      <div className="absolute top-6 right-6 z-40 flex flex-col items-end gap-5">
        <div className="bg-white rounded-full flex items-center p-1 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <span className="px-4 text-[11px] font-semibold tracking-wide text-slate-500">
            MODE
          </span>

          <button
            onClick={() => setActiveMode("AUTO")}
            className={`
              rounded-full px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300
              ${
                activeMode === "AUTO"
                  ? "bg-[#081726] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  : "text-slate-500 hover:text-[#081726] bg-transparent"
              }
            `}
          >
            AUTO
          </button>

          <button
            onClick={() => setActiveMode("MANUAL")}
            className={`
              rounded-full px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300
              ${
                activeMode === "MANUAL"
                  ? "bg-[#081726] backdrop-blur-md text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  : "text-slate-500 hover:text-[#081726] bg-transparent"
              }
            `}
          >
            MANUAL
          </button>
        </div>

        {/* Initiate Button */}
        <button className="bg-white rounded-full pl-6 pr-2 py-2 shadow-lg flex items-center gap-4 hover:scale-105 transition-transform border border-slate-100">
          <span className="text-[11px] font-black tracking-widest text-slate-800">
            INITIATE
          </span>
          <div className="w-8 h-8 rounded-full bg-[#081726] flex items-center justify-center">
            <ArrowRight size={16} className="text-white" />
          </div>
        </button>
      </div>
    </>
  );
};

export default Header;
