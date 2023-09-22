import { Link } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Profile from "./DashBoard/Profile/Profile";
import EditProfile from "./EditProfile/EditProfile";

const DashboardLayout = () => {
  return (
    <div>
      <h1 className="text-center text-5xl  text-orange-400 font-extrabold">
        This Is My First DashBoard
      </h1>
      <div className="bg-orange-200 max-w-fit p-10 rounded-md">
        <ul>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/editprofile">Edit Profile</Link>
          </li>
        </ul>
        {/* <DashBoard></DashBoard>
            <Profile></Profile>
            <EditProfile></EditProfile> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
