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

          <div className="w-[50%]">
            <input type="radio" id="male" name="gender" />
            <label htmlFor="male">Male</label>
          </div>

          <div className="w-[50%]">
            <input type="radio" id="female" name="gender" />
            <label htmlFor="female">Female</label>
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
            <button className="buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5">
              Next
            </button>
            <button className="buttonText1 bg-transparent text-grey w-full rounded-xl py-2 px-2.5 ">
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenderComponent;
