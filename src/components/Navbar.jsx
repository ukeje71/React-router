import Logo from "../assets/iphone Wallpaper 4K.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between w-full items-center max-w-6xl mx-auto py-4 px-4">
        <img src={Logo} alt="Logo" width={50} />
        <ul className="flex gap-20 shadow-2xl p-5  rounded-xl items-center ">
          <NavLink to="./">
            <li> Home</li>
          </NavLink>
          <NavLink to="./about">
            <li>About</li>
          </NavLink>
          <NavLink to="./products">
            <li>Products</li>
          </NavLink>
          <NavLink to="./contact">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="flex gap-2 items-center">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold"
            onClick={() => navigate("./products")}
          >
            Sign In
          </button>
          <button
            className="border-2 border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-bold"
            onClick={() => navigate("./about ")}
          >
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
