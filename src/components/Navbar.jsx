import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar blur-background w-full fixed">
        <div className="container flex items-center justify-between ">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold text-black"
            >
              <img
                className="w-10"
                src="../../public/assets/Skrinshot_2024-08-15_183403-removebg.svg"
                alt=""
              />
              MovieNest
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-black font-medium hover:border-b-4 hover:border-[#b80e0e] ease-in duration-300 hover:text-[#b80e0e]"
            >
              Bosh sahifa
            </Link>
            <Link
              to="/about"
              className="text-black font-medium hover:border-b-4 hover:border-[#b80e0e] ease-in duration-300 hover:text-[#b80e0e]"
            >
              Tarjima kinolar
            </Link>
            <Link
              to="/contact"
              className="text-black font-medium hover:border-b-4 hover:border-[#b80e0e] ease-in duration-300 hover:text-[#b80e0e]"
            >
              Serial
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              className="bg-[#b80e0e] pr-3 pl-3 pt-2 pb-2 rounded-md text-white font-bold hover:bg-[#b80e0ede] hover:text-slate-200 ease-in duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; // Default export
