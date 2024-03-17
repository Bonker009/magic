import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "/assets/Images/pf.jpg"
const Header = () => {
  return (
    <header className="bg-white text-gray-900 font-semibold px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl pl-28 font-bold">Portfolio</h1>
      <ul className="flex items-center space-x-4">
        <li>
          <IoMdNotificationsOutline className="text-xl" />
        </li>
        <li>
          <img
            src={profile}
            alt="jong suk"
            className="w-10 h-10 rounded-full"
          />
        </li>
        <li>Jong Suk</li>
      </ul>
    </header>
  );
};

export default Header;
