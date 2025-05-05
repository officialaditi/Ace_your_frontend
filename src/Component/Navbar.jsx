import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navLink = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "JavaScript Theory Question", url: '/js-theoryQuestion'},
    { id: 2, text: "JavaScript Coding Questions", url: "/js-questions" },
    { id: 3, text: "React Questions", url: "/react-questions" },
    { id: "4", text: "About Us", url: "about-us" },
  ];
  return (
    <div className="flex items-center justify-between bg-slate-900 w-full h-16 fixed top-0 left-0 text-slate-300 px-8">
      <Link to="/">
        <h2 className="font-bold text-2xl hover:cursor-pointer">
          Ace Your Frontend
        </h2>
      </Link>

      <ul className="hidden lg:flex items-center justify-between gap-4">
        {navLink.map((list) => (
          <Link to={list.url} key={list.id}>
            <li
           
              className="font-semibold text-xl hover:text-white transition-colors duration-200"
            >
              {list.text}
            </li>
          </Link>
        ))}
      </ul>
      {/* mobile view */}
      <div className="block lg:hidden" onClick={handleToggle}>
        <IoMenuSharp size={30} />
      </div>
      {toggle && (
        <ul className="  absolute top-12 left-0 py-10 bg-slate-900 flex items-center justify-center flex-col w-full gap-4">
          {navLink.map((list) => (
            <Link to={list.url} key={list.id}>
              <li
               
                className="font-semibold text-xl hover:text-white transition-colors duration-200"
                onClick={() => setToggle(false)}
              >
                {list.text}
                
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
