import ABOUT_IMAGE from "../../assets/about.png";

export default function About() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* about text  */}
        <div>
          <h2 className="text-[#CCD6D4] text-4xl font-bold">
            About <br /><span className="text-[#3CFF71]">KinkajouCoin</span>
          </h2>
          <p className="text-[#C3C3C3] text-md font-medium mt-5">
            At KinkajouCoin, we envision a world where economic growth and
            environmental sustainability go hand in hand. Our mission is to
            harness the power of cryptocurrency to create a financial ecosystem
            that rewards responsible stewardship of the Earth's resources. We
            believe in transparency, accountability, and positive action—values
            that are reflected in everything we do.{" "}
          </p>
          <button className="mt-5 bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] text-black px-8 py-3 rounded-lg titillium font-semibold text-xl cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* image  */}
        <div>
          <img src={ABOUT_IMAGE} alt="about" />
        </div>
      </div>
    </div>
  );
}
