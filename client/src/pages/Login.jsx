import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const res = await axios.post("https://task-manager-nu-murex.vercel.app/", {
        email,
        password,
      }, {withCredentials: true});
      const response = await res.data;


      if (response.success) {
        toast.success(response.message);
        navigate("/dashboard");
        localStorage.setItem("token", response.token);
      } 
      else {
        toast.error(response.message);
      }

    }catch (err) {
      console.log(err.message);
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-blue-300 to-blue-900">
      <div className="w-full max-w-md p-8 bg-grdient-to-r from-white to-gray-600 rounded  shadow-2xl">
        <h1 className="text-4xl font-bold text-black text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div>
            <label className="block text-black mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
          >
           {isLoading ? "Loading" : " Login"}
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-blue-900 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
