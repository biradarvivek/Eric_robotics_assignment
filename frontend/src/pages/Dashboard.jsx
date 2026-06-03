import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MapView from "../components/MapView";
import CameraView from "../components/CameraView";
import EmergencyButton from "../components/EmergencyButton";
import Joystick from "../components/Joystick";

const Dashboard = () => {
  return (
    <div className="h-screen flex bg-[#F3F3F3] overflow-hidden">
      <Sidebar />

      <div className="flex-1 relative">
        <Header />

        <MapView />

        <CameraView />

        <EmergencyButton />

        <Joystick />
      </div>
    </div>
  );
};

export default Dashboard;
