import Image from "next";
function Card({ image, userType, price, desc }) {
  return (
    <div className=" flex flex-col items-center space-y-8 p-4 border rounded-lg duration-300 md:hover:scale-105">
      <img src={image.src} className="w-20 -mt-12 bg-white" />
      <h1 className="text-2xl font-bold">{userType}</h1>
      <h1 className="text-4xl font-bold">{price}</h1>
      <div className="w-full text-center">
        <p className="border-b py-2 mx-8">{desc[0]}</p>
        <p className="border-b py-2 mx-8">{desc[1]}</p>
        <p className="py-2 mx-8">{desc[2]}</p>
      </div>
      <button className="bg-lightBluishGreen rounded-md font-medium   py-3 px-10 text-white">
        Start trial
      </button>
    </div>
  );
}

export default Card;
