import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaRedditSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <section>
      <div className="container mx-auto flex flex-col-reverse  py-16 px-4 text-white lg:justify-between lg:flex-row lg:align-top">
        <div className="flex flex-col text-center mt-8 lg:w-1/3 lg:text-left lg:mt-0">
          <h1 className="text-3xl font-bold text-lightBluishGreen ">REACT.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="flex flex-row justify-center space-x-5 mt-8 lg:justify-start">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-10 lg:gap-x-14 text-center lg:grid-cols-4 lg:text-left">
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-400">Solutions</h1>
            <ul className="flex flex-col space-y-3">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-400">Support</h1>
            <ul className="flex flex-col space-y-3">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-400">Company</h1>
            <ul className="flex flex-col space-y-3">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-400">Legal</h1>
            <ul className="flex flex-col space-y-3">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
