import { useSignupForm } from "./SignupFormContext";
import Animator from "./Animator";

export default function Review() {
  const { social, profile } = useSignupForm();
  return (
    <Animator>
      <form>
        <h2>Review</h2>
        <h4>Name: {profile.name}</h4>
        <h4>Email: {profile.email}</h4>
        <h4>Twitter: {social.twitter}</h4>
        <h4>Facebook: {social.facebook}</h4>
        <input type="submit" value="Submit All Info" />
      </form>
    </Animator>
  );
}
