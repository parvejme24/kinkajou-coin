import Tokenomics_Image from "../../assets/tokenomics.png";
import Tokenomics_Values from "../../assets/tokenomics-value.png";

export default function Tokenomics() {
  return (
    <div id="tokenomics">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* image  */}
        <div className="flex justify-center lg:justify-start">
          <img src={Tokenomics_Image} alt="" draggable={false} />
        </div>

        {/* info  */}
        <div>
          <h3 className="text-3xl font-bold text-white">Tokenomics</h3>
          <p className="text-white py-5">
            We believe in empowering our community and ensuring everyone has a
            stake in our success. Here's how kinkajou is distributed:
          </p>
          <img src={Tokenomics_Values} alt="" draggable={false} />
        </div>
      </div>
    </div>
  );
}
