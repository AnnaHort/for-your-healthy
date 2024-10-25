import RadioBtnComponent from "./RadioBtnComponent";

const YourActivityComponent = () => {
  return (
    <>
      <div className="max-w-[375px] m-auto md:max-w-[444px] lg:mt-20 lg:w-[420px] lg:m-0">
        <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
          Your Activity
        </h2>
        <p className="text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2  md:max-w-[360px] lg:text-start lg:mx-0">
          To correctly calculate calorie and water intake
        </p>

        <form method="post" className="mb-10 lg:max-w-[328px]">
          <fieldset className="flex mb-6 flex-col gap-4">
            <div className="relative w-full flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="activity"
                  id="notActivity"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="notActivity" className="text-bodyText1">
                If you do not have physical activity and sedentary work
              </label>
            </div>

            <div className="relative w-full flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="activity"
                  id="shortActivity"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>

              <RadioBtnComponent />
              <label htmlFor="shortActivity" className="text-bodyText1">
                If you do short runs or light gymnastics 1-3 times a week
              </label>
            </div>

            <div className="relative w-full flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="activity"
                  id="someActivity"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="someActivity" className="text-bodyText1">
                If you play sports with average loads 3-5 times a week
              </label>
            </div>

            <div className="relative w-full flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="activity"
                  id="fullyActivity"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="fullyActivity" className="text-bodyText1">
                If you train fully 6-7 times a week
              </label>
            </div>

            <div className="relative w-full flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="activity"
                  id="hurdActivity"
                  className="peer opacity-0 z-1 w-4 h-4"
                />
                <RadioBtnComponent />
              </div>
              <label htmlFor="hurdActivity" className="text-bodyText1">
                If your work is related to physical labor, you train 2 times a
                day and include strength exercises in your training program
              </label>
            </div>
          </fieldset>
          <div className="flex flex-col gap-3 lg:max-w-[212px]">
            <div className="flex flex-col items-center gap-3">
              <button className="text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5 md:max-w-[360px]">
                Sign Up
              </button>
              <button className="text-buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5 md:max-w-[360px]">
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default YourActivityComponent;
