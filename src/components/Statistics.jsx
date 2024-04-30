const Statistics = () => {
  return (
    <section className="mx-6 md:mx-12 flex items-center bg-statBg rounded-2xl bg-cover">
      <div className="p-6 md:p-[72px]">
        <h2 className="text-2xl md:text-[32px] font-semibold">
          Allocate effort where your reps <br /> make an inpact.
        </h2>
        <h2 className="text-2xl md:text-[32px] font-medium text-bgSky italic">
          Let us handle the rest.
        </h2>
        <p className="pt-4 md:pt-7 pb-8 md:pb-16 text-lg md:text-xl font-thin max-w-lg">
          Keep your reps “in the air” -- out in the field and on the phone where
          they can build relationships.
        </p>

        {/* this is statistics text div  */}
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="space-y-2 md:space-y-3 md:max-w-44">
            <h2 className="text-3xl md:text-[40px] text-bgSky font-bold">
              32%
            </h2>
            <h4 className="font-medium text-lg md:text-xl">
              Improvement in Open Rates
            </h4>
          </div>

          <div className="space-y-2 md:space-y-3 md:max-w-44">
            <h2 className="text-3xl md:text-[40px] text-bgSky font-bold">
              75%
            </h2>
            <h4 className="font-medium text-lg md:text-xl">
              Improvement in Ramp Time
            </h4>
          </div>

          <div className="space-y-2 md:space-y-3 md:max-w-48">
            <h2 className="text-3xl md:text-[40px] text-bgSky font-bold">
              35%
            </h2>
            <h4 className="font-medium text-lg md:text-xl">
              Improvement in Meetings Booked
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
