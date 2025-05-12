import RBG from "../../assets/r-bg.png";
import Roadmap_Image from "../../assets/roadmap.png";

export default function Roadmap() {
  return (
    <div
      id="roadmap"
      className="py-10 mt-10"
      style={{ backgroundImage: `url(${RBG})` }}
    >
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-4xl font-semibold text-white text-center">
          Roadmap Highlights{" "}
        </h2>
        <p className="text-gray-300 max-w-[520px] mx-auto text-center mt-4">
          We're on a mission, and this is just the beginning. The Matrix won’t
          know what hit it. Here's our game plan to dominate the crypto space
        </p>

        <div className="flex justify-center mt-10">
          <img src={Roadmap_Image} alt="Roadmap" draggable={false} />
        </div>
      </div>
    </div>
  );
}
