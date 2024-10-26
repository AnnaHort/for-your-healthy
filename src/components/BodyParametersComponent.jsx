import { Link } from "react-router-dom";

const BodyParametersComponent = () => {
  return (
    <div className="max-w-[375px] m-auto md:max-w-[380px] lg:mt-20 lg:max-w-[420px] lg:m-0">
      <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
        Body parameters
      </h2>
      <p className=" max-w-[280px] text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[444px] lg:text-start lg:mx-0">
        Enter your parameters for correct performance tracking
      </p>

      <form method="post" className="mb-10 lg:max-w-[212px]">
        <fieldset className="flex mb-10 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              id="height"
              name="parameters"
              placeholder="Enter your height"
              className="border-2 text-grey rounded-[12px] py-2 px-2.5 outline-none bg-transparent border-liteGreen w-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              id="weight"
              name="parameters"
              placeholder="Enter your weight"
              className="border-2 text-grey rounded-[12px] py-2 px-2.5 outline-none bg-transparent border-liteGreen w-full"
            />
          </div>
        </fieldset>
        <div className="flex flex-col gap-3 lg:max-w-[212px]">
          <div className="flex flex-col gap-3">
            <Link
              to="/activities"
              className="block text-center text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
            >
              Next
            </Link>
            {/* <button className="buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5">
              Next
            </button> */}
            <Link
              to="/genders"
              className="block text-center text-buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5"
            >
              Back
            </Link>
            {/* <button className="buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5 ">
              Back
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BodyParametersComponent;
