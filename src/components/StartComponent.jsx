import { useNavigate } from "react-router-dom";

const StartComponent = () => {
  const navigate = useNavigate();

  const handleClickIn = () => {
    navigate("/signin"); // Задайте шлях до сторінки, на яку потрібно перейти
  };
  const handleClickUp = () => {
    navigate("/signup"); // Задайте шлях до сторінки, на яку потрібно перейти
  };

  return (
    <div className="m-auto max-w-[375px] md:max-w-[444px] md:mx-auto md:justify-center lg:mt-20 lg:w-max-[846px] lg:mx-0">
      <div>
        <h2 className="text-medium24 mb-4 md:text-center md:text-headLineTextH1 lg:text-start">
          Set goals and achieve them
        </h2>
        <p className="max-w-[250px] text-regular18 mb-6 text-grey md:text-center md:mx-auto md:text-headLineTextH2 md:max-w-[380px] lg:text-start lg:mx-0">
          The service will help you set goals and follow them.
        </p>
      </div>
      <div className="flex mb-10 md:mb-20 md:max-w-[380px] md:mx-auto lg:max-w-full">
        <button
          onClick={handleClickIn}
          className="buttonText1 bg-liteGreen text-black w-full rounded-xl py-2 px-2.5"
        >
          Sign in
        </button>
        <button
          onClick={handleClickUp}
          className="buttonText1 w-full rounded-xl py-2 px-2.5"
        >
          Sign up
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:flex-col">
          <li className="relative">
            <p className="pl-4 text-bodyText1 before:content-[''] before:absolute before:block before:w-2 before:h-2 before:bg-liteGreen before:rounded-full before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:ml-0 ">
              Set goals
            </p>
          </li>
          <li className="relative">
            <p className="pl-4 text-bodyText1 before:content-[''] before:absolute before:block before:w-2 before:h-2 before:bg-liteGreen before:rounded-full before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:ml-0 ">
              Watch your calories
            </p>
          </li>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:flex-col">
          <li className="relative">
            <p className="pl-4 text-bodyText1 before:content-[''] before:absolute before:block before:w-2 before:h-2 before:bg-liteGreen before:rounded-full before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:ml-0 ">
              Keep track of your water intake
            </p>
          </li>
          <li className="relative">
            <p className="pl-4 text-bodyText1 before:content-[''] before:absolute before:block before:w-2 before:h-2 before:bg-liteGreen before:rounded-full before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:ml-0 ">
              Control your weight
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default StartComponent;
