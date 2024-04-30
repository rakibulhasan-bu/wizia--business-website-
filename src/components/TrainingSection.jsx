import { HiOutlineCheckCircle } from "react-icons/hi";

const TrainingSection = () => {
  return (
    <section
      id="Pricing"
      className="mx-6 md:mx-12 flex items-center justify-center bg-trainingBg rounded-2xl bg-cover"
    >
      <div className="px-6 md:px-0 py-8 md:py-28">
        <h2 className="text-2xl font-medium md:font-semibold md:text-[40px]">
          Train your aiDR on your...
        </h2>
        <h2 className="text-2xl font-medium md:font-semibold md:text-[40px] text-bgSky italic">
          prefered email st|
        </h2>
        <p className="py-6 md:pt-7 md:pb-16 text-lg md:text-2xl font-thin max-w-[450px]">
          You’re in control. Train your aiDR on elements of your Marketing
          strategy.
        </p>

        {/* this is first text div  */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <h4 className="flex items-center gap-1 text-textSkySecondary">
            <HiOutlineCheckCircle className="text-xl" /> Quick to ramp
          </h4>
          <h4 className="flex items-center gap-1 text-textSkySecondary">
            <HiOutlineCheckCircle className="text-xl" /> Easy to optimize
          </h4>
        </div>
        {/* this is second text div  */}
        <div className="flex flex-col md:flex-row md:items-center md:mt-4 md:gap-8">
          <h4 className="flex items-center gap-1 text-textSkySecondary">
            <HiOutlineCheckCircle className="text-xl" /> Quick to scale up
          </h4>

          <h4 className="flex items-center gap-1 text-textSkySecondary">
            <HiOutlineCheckCircle className="text-xl" /> Works with all your
            existing tools
          </h4>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
