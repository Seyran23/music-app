import "../scss/components/_log-in.scss";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";
import { AiOutlineWindows } from "react-icons/ai";
import { TfiApple } from "react-icons/tfi";

const LogInForm = () => {

  const formSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <section className="log-in__sec">
      <div className="container">
        <div className="decor-triangle"></div>

        <h1 className="log-in__sec_title">Log In</h1>
        <form className="form" onSubmit={formSubmitHandler}>
          <div className="input_container">
            <FaRegUser className="icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input_container">
            <FiLock className="icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="btn-container">
            <button className="form-btn">LOG IN</button>
          </div>
        </form>
        <div className="log-in_icons_container">
          <h1>LOG IN WITH:</h1>
          <div className="icons">
            <TbBrandGoogle className="icon" />
            <TfiApple className="icon" />
            <AiOutlineWindows className="icon" />
          </div>
        </div>
        <p className="no-acc__paragraph">
          Don’t have an account press <span>here</span>
        </p>
      </div>
    </section>
  );
};

export default LogInForm;
