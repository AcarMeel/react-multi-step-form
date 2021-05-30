import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useHistory } from "react-router";
import  Animator  from './Animator'
import { useSignupForm } from "./SignupFormContext";

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { profile, setProfile } = useSignupForm();

  const onSubmit = (data) => {
    setProfile(data);
    history.push({ pathname: "/social" });
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us About Yourself</h2>
        <input
          defaultValue={profile.name}
          type="text"
          name="name"
          id="name"
          placeholder="What's your name?"
          {...register("name", { required: "Name is required", max: 50 })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          defaultValue={profile.email}
          type="email"
          name="email"
          id="email"
          placeholder="What's your email?"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: "Email is invalid",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />
        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
}
