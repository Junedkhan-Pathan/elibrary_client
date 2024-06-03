import About from "@/components/Home/About";
import GetInTouch from "@/components/Home/GetInTouch";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();
  return (
    <>
      <div>
        <section id="home" className="bg-white py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* <!-- Left column: Description and buttons --> */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-4">
                Welcome to eBook Haven
              </h2>
              <p className="my-7">
                Discover, read, and share an extensive collection of books.
                Whether you're a book lover, a student, or a researcher,
                eLibrary is the perfect place to find and share knowledge.
              </p>
              <div className="space-x-2">
                <Button size={"lg"} variant={"default"}>
                  Get started
                </Button>
              </div>
            </div>

            {/* <!-- Right column: Responsive image --> */}
            <div className="md:w-1/2">
              <img
                src="/homepage.jpeg"
                alt="Image"
                className="w-full md:mx-auto md:max-w-md"
              />
            </div>
          </div>
        </section>

        <section
          id="aboutus"
          className=" bg-gray-dark flex flex-col justify-center items-center my-24"
        >
          <div className="mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className=" text-5xl font-bold mb-4 text-black">About Us</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                eLibrary is an innovative digital platform designed to
                facilitate the sharing, reading, and downloading of books. Our
                mission is to create a global community of readers and authors
                who can freely exchange knowledge and ideas. We believe in the
                power of literature to transform lives, and our platform aims to
                make books accessible to everyone, everywhere.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/vision.jpeg"
                alt="Image"
                className="w-56 md:mx-auto md:max-w-md  rounded-3xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-black">Our Vision</h2>
              <p className=" mx-auto leading-relaxed text-base">
                To become the leading digital library where knowledge knows no
                boundaries.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto my-24 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Our Mission
              </h2>
              <ol className="mb-10 list-outside">
                <li className="flex items-center mb-4">
                  <span className="text-black">
                    # To provide a user-friendly platform for sharing and
                    accessing a diverse range of books.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-black">
                    # To foster a community of readers and authors.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-black">
                    # To support learning and literacy by making books more
                    accessible.
                  </span>
                </li>
              </ol>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/misson.jpeg"
                alt="Image"
                className="w-56 md:mx-auto md:max-w-md  rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section id="howitwork" className="py-16 bg-gray-dark">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* <!-- Left column: Image --> */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/howitwork.jpeg"
                alt="Image"
                className="w-72 md:mx-auto md:max-w-md  rounded-xl"
              />
            </div>

            {/* <!-- Right column: Title, description list, and button --> */}
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4 text-black">
                How it <span className="text-primary">Work</span>
              </h2>
              <ol className="mb-10 list-outside">
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    1
                  </strong>
                  <span className="text-black">
                    Sign Up / Login: Create a free account or log in to your
                    existing account.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    2
                  </strong>
                  <span className="text-black">
                    Browse Books: Explore our extensive collection of books
                    across various genres and languages.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    3
                  </strong>
                  <span className="text-black">
                    Read Online: Enjoy reading books online with our integrated
                    e-reader.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    4
                  </strong>
                  <span className="text-black">
                    Download Books: Download your favorite books to read offline
                    at your convenience.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    5
                  </strong>
                  <span className="text-black">
                    Share Books: Upload and share your own books with the
                    community.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    6
                  </strong>
                  <span className="text-black">
                    Manage Your Library: Edit, update, or delete your uploaded
                    books anytime.
                  </span>
                </li>
                <li className="flex items-center mb-4">
                  <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                    7
                  </strong>
                  <span className="text-black">
                    Engage: Leave reviews and ratings for books you've read and
                    interact with other readers.
                  </span>
                </li>
              </ol>
              <Button
                onClick={() => navigation("/auth/signin")}
                className="  px-4 py-2 "
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="portfolio-section py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Testimonials</h2>
              <p className="text-lg text-primary font-semibold">
                What Our Users Say
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    eLibrary has transformed my reading habits. I can find books
                    on any topic and share my own work easily. It's a fantastic
                    resource for avid readers and writers alike.
                  </p>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Sarah L
                      </span>
                      <span className="text-gray-500 text-sm">Educator</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I love the community aspect of eLibrary. It's great to see
                    what others are reading and get recommendations. Plus,
                    sharing my own books has never been easier
                  </p>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Emily R.
                      </span>
                      <span className="text-gray-500 text-sm">Author</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-cover bg-no-repeat bg-center relative py-16 px-2"
        >
          <GetInTouch />
        </section>
      </div>
    </>
  );
};

export default HomePage;
