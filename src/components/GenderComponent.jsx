import { Link } from "react-router-dom";
import RadioBtnComponent from "./RadioBtnComponent";

const GenderComponent = () => {
  return (
    <div className="max-w-[375px] m-auto md:max-w-[380px] lg:mt-20 lg:w-[420px] lg:m-0">
      <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
        Select gender, Age
      </h2>
      <p className="text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[444px] lg:text-start lg:mx-0">
        Choose a goal so that we can help you effectively
      </p>

      <form method="post" className="mb-10 ">
        <fieldset className="flex mb-6 flex-col gap-4">
          <legend className="mb-3">Gender</legend>
          <div className="flex lg:flex-col lg:gap-4">
            <div className="relative w-full flex items-center gap-2 w-[50%]">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="male">Male</label>
            </div>

            <div className="relative w-full flex items-center gap-2 w-[50%]">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col gap-3 lg:max-w-[212px]">
          <div className="flex flex-col gap-3">
            <label htmlFor="data">Date of birth</label>
            <input
              type="data"
              id="data"
              name="data"
              placeholder="00.00.0000"
              className="border-2 text-grey rounded-[12px] py-2 px-2.5 outline-none bg-transparent border-liteGreen"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/parameters"
              className="block text-center text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
            >
              Next
            </Link>

            <Link
              to="/signup"
              className="block text-center text-buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenderComponent;
