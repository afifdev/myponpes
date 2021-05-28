import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AdminProfilePic } from "../../assets";
import { UserContext } from "../../context/UserContext";

const Profile = ({ show }) => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");

  const getBasicProfile = async () => {
    if (user.level > 1) {
      setName("Admin");
      setUsername("@admin");
      return true;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`user?needing=profile`, config);
    setUsername(data.data.username);
    setName(data.data.name);
    setImg(data.data.image);
  };

  useEffect(() => {
    getBasicProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } lg:flex flex-col items-center py-4`}
    >
      <img
        className="object-cover w-24 h-24 rounded-full ring-1 ring-offset-4 ring-red-500"
        src={
          user.level === 2 ? AdminProfilePic : `http://localhost:4000/${img}`
        }
        alt="profilepic"
      />
      <p className="text-lg font-medium pt-4">{name}</p>
      <p className="font-medium text-gray-400 leading-3">{username}</p>
    </div>
  );
};

export default Profile;
