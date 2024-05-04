import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import google from "../../assets/google.png";
import space from "../../assets/mars.jpg";
//"proxy": "http://localhost:8800/api"
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // State to hold error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    // Client-side validation
    if (!credentials.username || !credentials.email || !credentials.password) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post("https://spaceco-api.onrender.com/api/auth/register", credentials);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        // If server returns an error message, set it to state
        const errorMessage = err.response.data.message;
        if (errorMessage.includes("duplicate key error collection")) {
          setError("Username or email already exists. Please choose a different one.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else {
        // If no specific error message received from the server, set a generic error message
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
   

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
    <div class="flex flex-col justify-center p-8 md:p-14">
      <span class="mb-3 text-4xl font-bold">Welcome To Spaceco</span>
      <span class="font-light text-gray-500 mb-8">Welcome ! Please enter your details</span>
      
      <div class="py-4">
        <span class="mb-2 text-md">Email</span>
        <input
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        
        />
      </div>
      <div class="py-4">
        <span class="mb-2 text-md">Username</span>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        />
      </div>
      <div class="py-4">
        <span class="mb-2 text-md">Password</span>
        <input
          type="password"
          name="pass"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleClick} class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
        Sign Up
      </button>
      <button class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
        <img src={google} alt="img" class="w-6 h-6 inline mr-2" />
        Sign in with Google
      </button>
      <Link to="/" class="  hover:text-green-600  text-black text-center">
              <i class="fa fa-backward" aria-hidden="true">Back To Home</i>
            </Link>
      <div class="text-center text-gray-400">
        Already have an account?
        <Link to="/login" class="font-bold text-black">
                Login
              </Link>
      </div>
    </div>

    <div class="relative">
      <img
        src={space}
        alt="img"
        class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
      />

      <div class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
        <span class="text-white text-xl">We've been using Untitle to kick<br />start every new project and can't <br />imagine working without it.</span>
      </div>
    </div>
  </div>
</div>


    
    </>
  );
};

export default Login;
