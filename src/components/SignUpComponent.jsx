import { Link } from "react-router-dom";

const SignUpComponent = () => {
  // const navigate = useNavigate();
  // const handleClickNext = () => {
  //   navigate("/gender"); // Задайте шлях до сторінки, на яку потрібно перейти
  // };

  return (
    <div className="lg:mt-20 lg:w-[420px]">
      <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
        Sign up
      </h2>
      <p className="text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[444px] lg:text-start lg:mx-0">
        You need to register to use the service
      </p>
      <form
        action=""
        className="mb-12 md:max-w-[380px] md:m-auto md:mb-[206px] lg:m-0 lg:max-w-[212px] lg:mb-[168px]"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-black2 border-2 border-liteGreen rounded-xl	py-2 px-2.5 mb-6"
        />
        <input
          type="text"
          placeholder="E-mail"
          className="w-full bg-black2 border-2 border-liteGreen rounded-xl	py-2 px-2.5 mb-6"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full bg-black2 border-2 border-liteGreen rounded-xl	py-2 px-2.5 mb-6"
        />
        {/* <button
          onClick={handleClickNext}
          className="buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
        >
          Next
        </button> */}
        <Link
          to="/genders"
          className="block text-center text-buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
        >
          Next
        </Link>
      </form>
      <div className="flex flex-col gap-4 md:flex-row md:justify-center lg:justify-start">
        <p className="text-bodyText1 text-grey">
          Do you already have an account?
        </p>
        <Link to="/signin" className="text-buttonText1">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
