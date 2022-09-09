import Image from "next/image";
import laptop from "../img/laptop.jpg";
function Analytics() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="container flex flex-col justify-center mx-auto md:flex-row md:justify-start items-center">
        <div className="max-w-xl">
          <Image src={laptop} />
        </div>
        <div className="flex flex-col mt-3 max-w-xl">
          <p className="text-lightBluishGreen font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Manage data analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-black w-52 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-lightBluishGreen">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
