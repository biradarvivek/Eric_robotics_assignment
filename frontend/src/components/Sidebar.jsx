import {
  LayoutGrid,
  Map,
  MapPin,
  Focus,
  Radar,
  TrendingUp,
  User,
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutGrid,
    },
    {
      id: "map",
      icon: Map,
    },
    {
      id: "location",
      icon: MapPin,
    },
    {
      id: "focus",
      icon: Focus,
    },
    {
      id: "radar",
      icon: Radar,
    },
    {
      id: "analytics",
      icon: TrendingUp,
    },
  ];

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
      <div className="mt-4 text-center">
        <h1 className="text-white text-[14px] font-black tracking-wider">
          ERIC
        </h1>

        <p className="text-[4px] tracking-[2px] text-slate-500">ROBOTICS</p>
      </div>

      <div className="mt-14 flex flex-col items-center gap-7">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex items-center justify-center
                transition-all duration-300
                ${
                  activeTab === item.id
                    ? "w-9 h-9 rounded-lg bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>

      <div className="mt-auto mb-5">
        <button className="text-slate-400 hover:text-white">
          <User size={18} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
