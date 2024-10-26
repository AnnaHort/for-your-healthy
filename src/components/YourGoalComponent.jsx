import { Link } from "react-router-dom";
import RadioBtnComponent from "./RadioBtnComponent";

const YourGoalComponent = () => {
  return (
    <>
      <div className="max-w-[375px] m-auto md:max-w-[444px] lg:mt-20 lg:w-[420px] lg:m-0">
        <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
          Your goal
        </h2>
        <p className="text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[444px] lg:text-start lg:mx-0">
          Choose a goal so that we can help you effectively
        </p>

        <form
          action=""
          className="flex gap-6 flex-col mb-12 md:max-w-[380px] md:m-auto md:mb-[206px] lg:m-0 lg:max-w-[212px] lg:mb-[168px]"
        >
          <div className="relative w-full flex items-center gap-2">
            <div className="relative flex items-center">
              <input
                type="radio"
                name="goal"
                id="LoseFat"
                className="peer opacity-0 z-1 w-4 h-4"
              />
              <RadioBtnComponent />
            </div>
            <label htmlFor="LoseFat" className="text-bodyText1">
              <span>Lose Fat</span>
            </label>
          </div>

          <div className="relative w-full flex items-center gap-2">
            <div className="relative flex items-center">
              <input
                type="radio"
                id="Maintain"
                name="goal"
                className="peer opacity-0 z-1 w-4 h-4"
              />
              <RadioBtnComponent />
            </div>
            <label htmlFor="Maintain" className="text-white ">
              Maintain
            </label>
          </div>

          <div className="relative w-full flex items-center gap-2">
            <div className="relative flex items-center">
              <input
                type="radio"
                id="GainMuscle"
                name="goal"
                className="peer opacity-0 z-1 w-4 h-4"
              />
              <RadioBtnComponent />
            </div>
            <label htmlFor="GainMuscle" className="text-white">
              Gain Muscle
            </label>
          </div>

          <Link
            to="#"
            className="block text-center text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
          >
            Sign up
          </Link>

          <Link
            to="/activities"
            className="block text-center text-buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5"
          >
            Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default YourGoalComponent;
