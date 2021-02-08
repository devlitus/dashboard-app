import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import { useForm } from "../../hooks/userForm";
import "validate";

import { user } from "../../helpers/validateLogin";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange] = useForm({ email: "", password: "" });
  const { email, password } = formValue;
  const [errors] = user.validate({ email, password });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="box-login">
      <div className="box-form">
        <h1 className="title">Signe In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="control-input">
            <div className="icon-error">
              {errors?.path === "email" ? (
                <FontAwesomeIcon icon={faTimesCircle} size="lg" color="red" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} size="lg" color="green" />
              )}
            </div>
            <input
              className="box-input"
              type="email"
              name="email"
              placeholder="Your email*"
              autoComplete="false"
              onChange={handleInputChange}
            />
          </div>
          <div className="control-input">
            <div className="icon-error">
              {errors?.path === "password" ? (
                <FontAwesomeIcon icon={faTimesCircle} size="lg" color="red" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} size="lg" color="green" />
              )}
            </div>
            <input
              className="box-input"
              type="password"
              name="password"
              placeholder="Your password*"
              onChange={handleInputChange}
            />
          </div>
          <input
            className=""
            type="submit"
            value="Send"
            disabled={!!errors}
          />
        </form>
        <p className="title">Forgot password ?</p>
      </div>
    </div>
  );
};
