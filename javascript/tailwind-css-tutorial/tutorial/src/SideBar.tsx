import { FaBeer } from "react-icons/fa";
import { BsFillAlarmFill, BsFillCloudFog2Fill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                flex flex-col
                bg-orange-300 text-white shadow-lg"
    >
      <i>
        <SideBarIcon icon={<FaBeer size="28" />} />
      </i>
      <i>
        <SideBarIcon icon={<BsFillAlarmFill size="28" />} />
      </i>
      <i>
        <SideBarIcon icon={<BsFillCloudFog2Fill size="28" />} />
      </i>
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default SideBar;
