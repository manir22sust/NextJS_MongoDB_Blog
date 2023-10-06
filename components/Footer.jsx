import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-blueGray-200 relative pb-6 pt-8 ">
        <hr className="border-blueGray-600 my-6" />
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-blueGray-600 mb-2 mt-0 text-lg">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mb-6 mt-6 lg:mb-0">
                <button
                  className="text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="text-lightBlue-600 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="text-blueGray-800 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Free Products
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="/"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-blueGray-300 my-6" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="text-blueGray-500 py-1 text-sm font-semibold">
                Copyright © {new Date().getFullYear()} NextJS
                <Link
                  href="/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
