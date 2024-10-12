import StartPageSvg from "../assets/svg/StartPageSvg";
import SignInComponent from "../components/SignInComponent";

const SignIn = () => {
  return (
    <div className="lg:flex lg:gap-20 lg:max-w-[1140px] lg:m-auto">
      <StartPageSvg />
      <SignInComponent />
    </div>
  );
};
export default SignIn;
