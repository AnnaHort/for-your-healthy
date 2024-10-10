import StartPageSvg from "../assets/svg/StartPageSvg";
import SignUpComponent from "../components/SignUpComponent";

const SignUp = () => {
  return (
    <div className="lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <StartPageSvg />
      <SignUpComponent />
    </div>
  );
};
export default SignUp;
