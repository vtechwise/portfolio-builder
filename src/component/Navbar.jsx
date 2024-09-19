import logo from "/WorkFolio.svg";
import { FaArrowRight } from "react-icons/fa";


const links = [
  {
    id: 1,
    text: "FAQ",
  },
  {
    id: 2,
    text: "About",
  },
  {
    id: 3,
    text: "Log in",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between pt-6">
      <div>
        <img src={logo} alt="workfolio logo" />
      </div>
      <div className="flex gap-x-6  items-center">
        <ul className="flex gap-x-4">
          {links.map((link) => {
            return (
              <li key={link.id} className="cursor-pointer">
                {link.text}
              </li>
            );
          })}
        </ul>
        <button className="btn rounded-full bg-[#0000FE] text-white">
          Get Started{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;