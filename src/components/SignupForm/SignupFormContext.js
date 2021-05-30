import { createContext, useContext, useState } from "react";

const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export default function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});
  return (
    <SignupFormContext.Provider
      value={{
        profile,
        setProfile,
        social,
        setSocial,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}
