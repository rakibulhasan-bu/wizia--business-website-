const Banner = () => {
  return (
    <div className="bg-banner py-20 md:py-0 px-6 md:px-0 md:min-h-[80dvh] md:bg-cover ">
      <div className="container md:min-h-[80dvh] flex items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-2xl text-bgSky">AI SDRs (aiDRs)</h3>
          <h1 className="text-4xl md:text-7xl font-bold pt-2">
            More <span className="font-medium italic">leads</span>, <br /> less
            <span className="font-medium italic"> people</span>.
          </h1>
          <p className="text-white text-lg font-light max-w-[450px] pt-2.5 pb-6">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>

          <button className="appBtn mx-auto md:mx-0 flex items-center gap-1">
            Sign Up for the Beta <img src="/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
