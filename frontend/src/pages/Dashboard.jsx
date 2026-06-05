import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MapView from "../components/MapView";
import CameraView from "../components/CameraView";
import EmergencyButton from "../components/EmergencyButton";
import Joystick from "../components/Joystick";

const Dashboard = () => {
  const [isCameraMain, setIsCameraMain] = useState(false);
  const [missionStarted, setMissionStarted] = useState(false);

  const [emergencyStop, setEmergencyStop] = useState(false);

  const [activeTab, setActiveTab] = useState("dashboard");

  const [joystickDirection, setJoystickDirection] = useState("IDLE");

  // --- MASTER ZOOM STATE ---
  const [zoom, setZoom] = useState(1);
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));
  const thumbPosition = ((zoom - 1) / 2) * 100;

  return (
    <div className="h-screen flex bg-[#F3F3F3] overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 relative">
        <Header
          missionStarted={missionStarted}
          setMissionStarted={setMissionStarted}
          emergencyStop={emergencyStop}
        />

        {/* --- MAIN BACKGROUND VIEW --- */}
        <div className="absolute inset-0 z-0">
          {isCameraMain ? (
            <CameraView isMain={true} zoom={zoom} />
          ) : (
            <MapView isMain={true} zoom={zoom} />
          )}
        </div>

        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 z-30 bg-[#081726]/80 backdrop-blur-md px-8 py-2.5 rounded-md border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] pointer-events-none">
          <span className="text-white font-black text-xs tracking-[0.2em]">
            {isCameraMain ? "CAMERA VIEW" : "MAP VIEW"}
          </span>
        </div>

        <div className="absolute bottom-8 left-8 z-40 flex flex-col items-center bg-[#081726]/80 backdrop-blur-md rounded-full py-4 px-2.5 shadow-2xl border border-white/10">
          <button
            onClick={handleZoomIn}
            className="text-slate-400 hover:text-white transition-colors mb-3"
          >
            <Plus size={18} strokeWidth={2.5} />
          </button>

          <div className="relative h-24 w-1 bg-slate-700 rounded-full my-1">
            <div
              className="absolute w-3.5 h-3.5 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ease-out cursor-pointer hover:scale-125"
              style={{
                bottom: `${thumbPosition}%`,
                transform: "translate(-50%, 50%)",
              }}
            />
          </div>

          <button
            onClick={handleZoomOut}
            className="text-slate-400 hover:text-white transition-colors mt-3"
          >
            <Minus size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div
          onClick={() => setIsCameraMain(!isCameraMain)}
          className="absolute bottom-8 left-28 w-[320px] h-[190px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.4)] z-40 border-[3px] border-white cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
        >
          {isCameraMain ? (
            <MapView isMain={false} zoom={1} />
          ) : (
            <CameraView isMain={false} zoom={1} />
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-50">
            <span className="text-white font-bold text-sm bg-black/70 px-5 py-2.5 rounded-full backdrop-blur-md">
              Click to enter {isCameraMain ? "Map" : "Camera"} view
            </span>
          </div>
        </div>

        <EmergencyButton
          emergencyStop={emergencyStop}
          setEmergencyStop={setEmergencyStop}
        />
        <Joystick
          joystickDirection={joystickDirection}
          setJoystickDirection={setJoystickDirection}
        />
      </div>
    </div>
  );
};

export default Dashboard;
