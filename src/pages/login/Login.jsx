import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import google from "../../assets/google.png";
import space from "../../assets/space.jpeg";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://spaceco-api.onrender.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
    

<div class="flex items-center justify-center min-h-screen bg-gray-100">
<div
  class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
>

  <div class="flex flex-col justify-center p-8 md:p-14">
    <span class="mb-3 text-4xl font-bold">Welcome back</span>
    <span class="font-light text-gray-400 mb-8">
      Welcom back! Please enter your details
    </span>
    <div class="py-4">
      <span class="mb-2 text-md">Email</span>
      <input
        type="text"
        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        name="email"
          placeholder="username"
          id="username"
          onChange={handleChange}
      />
    </div>
    <div class="py-4">
      <span class="mb-2 text-md">Password</span>
      <input
        type="password"
        name="pass"
        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          placeholder="password"
          id="password"
          onChange={handleChange}
      />
    </div>

    <div class="flex justify-between w-full py-4">
           
      <span class="font-bold text-md">Forgot password ?</span>
    </div>

    <button  disabled={loading} onClick={handleClick}
      class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
    >
      Sign in
    </button>
    {error && <span>{error.message}</span>}
    <button
      class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
    >
      <img src={google} alt="img" class="w-6 h-6 inline mr-2" />
      Sign in with Google
    </button>

    <Link to="/" class="  hover:text-green-600  text-black text-center">
              <i class="fa fa-backward" aria-hidden="true">Back To Home</i>
            </Link>

    <div class="text-center text-gray-400">
      Dont'have an account?
      <Link to="/register" class="font-bold text-black">
                Sign up for free
              </Link>
    </div>
  </div>

  <div class="relative">
    <img
      src={space}
      alt="img"
      class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
    />
  
    <div
      class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
    >
      <span class="text-white text-xl"
        >We've been uesing Untitle to kick"<br />start every new project
        and can't <br />imagine working without it."
      </span>
    </div>
  </div>
</div>
</div>
</>
  );
};

export default Login;