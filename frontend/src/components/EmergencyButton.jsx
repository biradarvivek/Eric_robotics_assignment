import React from "react";

const EmergencyButton = ({ emergencyStop, setEmergencyStop }) => {
  return (
    <div className="absolute right-10 bottom-[180px] z-40">
      <button
        onClick={() => setEmergencyStop(!emergencyStop)}
        className={`
          w-[100px]
          h-[100px]
          rounded-full
          hover:scale-105
          active:scale-95
          transition-all
          duration-300
          border-[3.5px]
          border-white
          bg-[#FACC15]
          relative
          overflow-hidden
          flex
          items-center
          justify-center
          group
          ${
            emergencyStop
              ? "shadow-[0_0_40px_rgba(239,68,68,0.9)]"
              : "shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
          }
        `}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="top-curve" d="M 15,50 A 35,35 0 0,1 85,50" fill="none" />

            <path
              id="bottom-curve"
              d="M 6,50 A 44,44 0 0,0 94,50"
              fill="none"
            />

            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
            </filter>
          </defs>

          <text
            fontSize="12"
            fontWeight="900"
            fill="#1f2937"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.5"
          >
            <textPath href="#top-curve" startOffset="50%" textAnchor="middle">
              EMERGENCY
            </textPath>
          </text>

          <text
            fontSize="12"
            fontWeight="900"
            fill="#1f2937"
            fontFamily="system-ui, sans-serif"
            letterSpacing="1"
          >
            <textPath
              href="#bottom-curve"
              startOffset="50%"
              textAnchor="middle"
            >
              {emergencyStop ? "RESET" : "STOP"}
            </textPath>
          </text>

          <circle
            cx="50"
            cy="50"
            r="29"
            fill={emergencyStop ? "#991B1B" : "#DC2626"}
            className="transition-colors duration-300"
          />

          <circle
            cx="50"
            cy="50"
            r="29"
            fill="none"
            stroke="#7F1D1D"
            strokeWidth="1.5"
          />

          <g transform="translate(50, 50) scale(1.15)" filter="url(#shadow)">
            {[0, 120, 240].map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path
                  d="M -11,-12 A 16,16 0 0,1 11,-12 L 14,-16 L 17,-3 L 4,-5 L 7,-9 A 11,11 0 0,0 -8,-9 Z"
                  fill="#ffffff"
                />
              </g>
            ))}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default EmergencyButton;
