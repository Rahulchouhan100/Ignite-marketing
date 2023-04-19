import workImg from "../../assest/working.png";

const WorkingProcess = () => {
  return (
    <div className="mt-12 mb-14 px-16">
      <p className="text-center font-bold text-5xl mb-8">Our Working Process</p>
      <div className="p-9">
        <img src={workImg} alt="image work" />
        <div className="flex justify-between items-center text-center absolute">
          <div className="relative -top-28 -left-10 ">
            <h5 className="font-bold text-xl uppercase">Concept</h5>
            <p>
              Our concepts are unique and bringing a more dynamic approach to
              your brand.
            </p>
          </div>
          <div className="relative -left-36 -top-2">
            <h5 className="font-bold text-xl uppercase">Budget</h5>
            <p>
              We love to work with the budget of our clients. Making sure our
              clients do not need to break their banks.
            </p>
          </div>
          <div className="relative -top-[100] -left-10">
            <h5 className="font-bold text-xl uppercase">Development</h5>
            <p>We digitize your ideas to bring success to your brands. </p>
          </div>
          <div className="relative right-12 -top-[7]">
            <h5 className="font-bold text-xl uppercase">Results</h5>
            <p>
              Our results are proven to be reliable from across testimonies from
              different trusted clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
