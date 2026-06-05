import React from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Joystick = ({ joystickDirection, setJoystickDirection }) => {
  return (
    <div className="absolute bottom-8 right-8 z-40">
      {/* Direction Badge */}

      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#081726] text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
        <span className="text-[10px] font-bold tracking-wider">
          {joystickDirection}
        </span>
      </div>

      <div className="w-[130px] h-[130px] rounded-full bg-[#081726] shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform">
        {/* UP */}

        <button
          onClick={() => setJoystickDirection("FORWARD")}
          className={`
            absolute top-2.5 transition-all duration-200
            ${
              joystickDirection === "FORWARD"
                ? "text-white scale-125"
                : "text-slate-400 hover:text-white"
            }
          `}
        >
          <ChevronUp size={18} strokeWidth={3} />
        </button>

        {/* DOWN */}

        <button
          onClick={() => setJoystickDirection("REVERSE")}
          className={`
            absolute bottom-2.5 transition-all duration-200
            ${
              joystickDirection === "REVERSE"
                ? "text-white scale-125"
                : "text-slate-400 hover:text-white"
            }
          `}
        >
          <ChevronDown size={18} strokeWidth={3} />
        </button>

        {/* LEFT */}

        <button
          onClick={() => setJoystickDirection("LEFT")}
          className={`
            absolute left-2.5 transition-all duration-200
            ${
              joystickDirection === "LEFT"
                ? "text-white scale-125"
                : "text-slate-400 hover:text-white"
            }
          `}
        >
          <ChevronLeft size={18} strokeWidth={3} />
        </button>

        {/* RIGHT */}

        <button
          onClick={() => setJoystickDirection("RIGHT")}
          className={`
            absolute right-2.5 transition-all duration-200
            ${
              joystickDirection === "RIGHT"
                ? "text-white scale-125"
                : "text-slate-400 hover:text-white"
            }
          `}
        >
          <ChevronRight size={18} strokeWidth={3} />
        </button>

        {/* Center Circle */}

        <div className="w-[74px] h-[74px] rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] relative flex items-center justify-center">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[12px] font-black text-slate-800">
            W
          </span>

          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[12px] font-black text-slate-800">
            S
          </span>

          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[12px] font-black text-slate-800">
            A
          </span>

          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] font-black text-slate-800">
            D
          </span>

          {/* Center Text */}

          <div className="flex flex-col items-center justify-center text-[8px] font-bold text-slate-400 leading-tight">
            <span>+</span>
            <span>key</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joystick;
