import { Link } from "react-router-dom";

const SignInComponent = () => {
  return (
    <div className="max-w-[375px] m-auto md:max-w-[444px] lg:mt-20 lg:w-[420px] lg:m-0">
      <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
        Sign in
      </h2>
      <p className="text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[444px] lg:text-start lg:mx-0">
        You need to login to use the service
      </p>
      <form
        action=""
        className="mb-12 md:max-w-[380px] md:m-auto md:mb-[206px] lg:m-0 lg:max-w-[212px] lg:mb-[168px]"
      >
        <input
          type="text"
          placeholder="E-mail"
          className="w-full bg-black2 border-2 border-liteGreen rounded-xl py-2 px-2.5 mb-6"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full bg-black2 border-2 border-liteGreen rounded-xl py-2 px-2.5 mb-6"
        />
        <button className="text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5">
          Sign In
        </button>
      </form>
      <div className="flex justify-between md:flex-row md:justify-center md:gap-4 lg:justify-start">
        <p className="text-bodyText1 text-grey">
          If you don&apos;t have an account yet
        </p>
        <Link to="/signup" className="text-buttonText1">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignInComponent;
