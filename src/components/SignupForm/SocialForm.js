import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import  Animator from "./Animator";
import { useHistory } from "react-router";
import { useSignupForm } from "./SignupFormContext";

export default function SocialForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  const onSubmit = (data) => {
    setSocial(data);
    history.push({ pathname: "/review" });
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Social Media</h2>
        <input
          defaultValue={social.twitter}
          type="text"
          name="twitter"
          id="twitter"
          placeholder="What's your Twitter?"
          {...register("twitter", { max: 50 })}
        />
        <ErrorMessage
          errors={errors}
          name="twitter"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          defaultValue={social.facebook}
          type="text"
          name="facebook"
          id="facebook"
          placeholder="What's your facebook?"
          {...register("facebook", { max: 50 })}
        />
        <ErrorMessage
          errors={errors}
          name="facebook"
          render={({ message }) => <p>{message}</p>}
        />
        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
}
