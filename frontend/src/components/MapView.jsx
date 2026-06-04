import PointCloudViewer from "./PointCloudViewer";

const MapView = ({ isMain = false, zoom = 1 }) => {
  return (
    <div className="w-full h-full bg-[#F3F3F3]">
      <PointCloudViewer zoom={zoom} />
    </div>
  );
};

export default MapView;
