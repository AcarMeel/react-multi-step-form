import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignupFormProvider from "./SignupFormContext";
import ProfileForm from "./ProfileForm";
import Review from "./Review";
import SocialForm from "./SocialForm";
import StepLinks from "./StepLinks";

export default function SignupForm() {
  const location = useLocation()
  return (
    <SignupFormProvider>
      <div className="signup-form">
        <StepLinks />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={ProfileForm} />
            <Route path="/social" exact component={SocialForm} />
            <Route path="/review" exact component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
