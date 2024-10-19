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
          <div className="flex items-center gap-2">
            <input type="radio" id="LoseFat" name="goal" className="" />
            <label htmlFor="LoseFat" className="">
              <span>Lose Fat</span>
            </label>
          </div>

          <div className="flex gap-2">
            <input type="radio" id="Maintain" name="goal" className="" />
            <label htmlFor="Maintain" className="text-white ">
              Maintain
            </label>
          </div>

          <div className="flex gap-2">
            <input type="radio" id="GainMuscle" name="goal" className="" />
            <label htmlFor="GainMuscle" className="text-white">
              Gain Muscle
            </label>
          </div>

          <button className="buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5">
            Next
          </button>
          <button className="buttonText1 bg-transparent text-white w-full rounded-xl py-2 px-2.5">
            Back
          </button>
        </form>
      </div>
    </>
  );
};

export default YourGoalComponent;
