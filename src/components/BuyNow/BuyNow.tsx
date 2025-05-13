export default function BuyNow() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* left side  */}
        <div className="border border-green-900 rounded-2xl p-10 text-gray-400 bg-gradient-to-bl from-[#010405] via-[#002312] to-[#010405] shadow-2xl">
          <h2 className="text-white w-full text-center p-2 text-2xl font-bold border rounded-full          ">
            PRESALE LIVE
          </h2>
          <p className="text-[#00CC55] text-center text-2xl font-semibold my-5">
            Raised <span className="font-extrabold">$45487 / $566465</span>
          </p>

          <div className="bg-gradient-to-r mx-auto from-[#00CC55] via-[#75FD9B] to-[#00CC55] h-1 w-full rounded-full p-[5px]"></div>

          <div className="flex justify-between items-center text-white mt-5 mb-7">
            <p>CURRENT PRICE: $0.002</p>
            <p>NEXT STAGE PRICE: $0.002</p>
          </div>

          <p className="text-white text-2xl text-center font-bold">
            Buy in before price increase!Listing soon
          </p>

          <div className="grid grid-cols-2 gap-5 mt-6">
            <div className="space-y-2">
              <p className="text-white text-lg">You pay</p>
              <div className="border border-[#00CC55] rounded bg-gradient-to-r from-[#00cc5525] to-[#00cc5534] px-2 py-5 text-3xl font-bold text-white">
                0
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-white text-lg">You Receive</p>
              <div className="border border-[#00CC55] rounded bg-gradient-to-l from-[#00cc5525] to-[#00cc5534] px-2 py-5 text-3xl font-bold text-white">
                0
              </div>
            </div>
          </div>

          <button className="mt-6 cursor-pointer text-white font-bold text-3xl border rounded-2xl px-5 py-3 w-full">
            Buy Now
          </button>
        </div>

        {/* right side  */}
        <div>
          <h2 className="bg-gradient-to-r from-[#ADF99F] to-[#00CC55]/80  bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
            KinkajouCoin: A Greener Future in Your Wallet
          </h2>
          <p className="text-[#90B4D4] mt-5 text-lg md:text-xl">
            Take control of your digital assets while supporting the planet.
            KinkajouCoin is a forward-thinking cryptocurrency designed for
            sustainability, empowering eco-conscious transactions on the
            blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
