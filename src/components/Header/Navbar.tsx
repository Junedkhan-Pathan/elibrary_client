import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="text-gray-600 body-font border-b-2 sticky bg-white top-0 z-50 ">
        <div className="max-w-7xl mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-extrabold">E-book</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/dashboard"} className="mr-5 hover:text-gray-900">
              Dashboard
            </Link>{" "}
            <Link to={"/books"} className="mr-5 hover:text-gray-900">
              All books
            </Link>
            {/* <Link to={"/contact"} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
            <Link to={"/aboutus"} className="mr-5 hover:text-gray-900">
              About Us
            </Link>
            <Link to={"/howitwork"} className="mr-5 hover:text-gray-900">
              How it work
            </Link> */}
          </nav>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/auth/login")} variant={"outline"}>
              Login
            </Button>
            <Button onClick={() => navigate("/auth/signup")}>Sign UP</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
