const About = () => {
  return (
    <section
      id="AboutUs"
      className="px-6 md:px-0 py-8 md:py-[120px] container grid gap-8 grid-cols-1 md:grid-cols-3"
    >
      {/* this is control div  */}
      <div className="space-y-3 md:space-y-5">
        <img src="/control.png" className="size-10 md:size-16" alt="" />
        <h3 className="text-2xl md:text-3xl font-semibold">
          You’re in Control
        </h3>
        <p className="font-light md:text-xl md:max-w-96">
          aiDRs operate based on your rules. You guide the machine, the aiDRs
          execute the work.
        </p>
      </div>
      {/* this is control div  */}
      <div className="space-y-3  md:space-y-5">
        <img src="/scalable.png" className="size-10 md:size-16" alt="" />
        <h3 className="text-2xl md:text-3xl font-semibold">
          Infinitely Scalable
        </h3>
        <p className="font-light md:text-xl max-w-96">
          Train an aiDR on a patch. When you are happy with the results, scale
          it effortlessly.
        </p>
      </div>
      {/* this is control div  */}
      <div className="space-y-3  md:space-y-5">
        <img src="/flexible.png" className="size-10 md:size-16" alt="" />
        <h3 className="text-2xl md:text-3xl font-semibold">
          Incredibly Flexible
        </h3>
        <p className="font-light md:text-xl max-w-96">
          Train an aiDR on an outbound patch, to nurture inbound leads, or to
          reach out to your long tail of SMB customers at renewal time.
        </p>
      </div>
    </section>
  );
};

export default About;
