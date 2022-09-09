function Newsletter() {
  return (
    <section>
      <div className="container mx-auto py-16 px-4 text-white flex flex-col justify-between items-center space-y-6 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="container flex flex-col items-center space-y-5 lg:max-w-md lg:items-start">
          <div className=" flex flex-row  space-x-4  items-center ">
            <input
              className="flex-1 p-3 rounded-md text-black focus:outline-none"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-lightBluishGreen rounded-md font-medium   py-3 px-5 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-lightBluishGreen underline ">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
