import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "validate";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/userForm";
import { user } from "../../helpers/validateLogin";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const history =useHistory();
  const [formValue, handleInputChange] = useForm();
  const { email, password } = formValue;
  const [errors] = user.validate({ email, password });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email, logged: true};
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(login(email, password));
    history.replace('/dashboard');
  };
  return (
    <div className="box-login">
      <div className="box-form">
        <h1 className="title">Signe In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="control-input">
  
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

            <input
              className="box-input"
              type="password"
              name="password"
              placeholder="Your password*"
              onChange={handleInputChange}
            />
          </div>
          <input className="" type="submit" value="Send" disabled={!!errors} />
        </form>
        <p className="title">Forgot password ?</p>
      </div>
    </div>
  );
};
