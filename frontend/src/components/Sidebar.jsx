import {
  LayoutGrid,
  Map,
  MapPin,
  Focus,
  Radar,
  TrendingUp,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div
      className="
      w-[62px]
      h-screen
      bg-[#071526]
      flex
      flex-col
      items-center
      shrink-0
      relative
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "100% 4px",
      }}
    >
      {/* Logo */}

      <div className="mt-4 text-center">
        <h1 className="text-white text-[14px] font-black tracking-wider">
          ERIC
        </h1>

        <p className="text-[4px] tracking-[2px] text-slate-500">ROBOTICS</p>
      </div>

      {/* Menu */}

      <div className="mt-14 flex flex-col items-center gap-7">
        <button className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
          <LayoutGrid size={18} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Map size={18} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <MapPin size={18} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Focus size={18} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Radar size={18} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <TrendingUp size={18} />
        </button>
      </div>

      {/* User */}

      <div className="mt-auto mb-5">
        <button className="text-slate-400 hover:text-white">
          <User size={18} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
