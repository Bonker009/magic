import { MdHome } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="px-10">
      <ul className="flex flex-col items-center gap-8 pt-10">
        <li>
          <MdHome className="text-3xl" />
        </li>
        <li>
          <IoPersonSharp className="text-2xl" />
        </li>
        <li>
          <FaMessage className="text-2xl" />
        </li>
        <li>
          <GiGraduateCap className="text-3xl" />
        </li>
        <li>
          <FaClock className="text-2xl" />
        </li>
        <li>
          <IoSettingsSharp className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
