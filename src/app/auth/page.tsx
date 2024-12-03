"use client";
import Image from "next/image";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-teal-900">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex gap-5 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`text-lg font-semibold ${
              isLogin ? "underline text-teal-300" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-lg font-semibold ${
              !isLogin ? "underline text-teal-300" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div>
            <label htmlFor="phone" className="block text-sm mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="0912345678"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Abcd!@#$%%^&*1234"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-teal-400"
              >
                {showPassword ? (
                  <Image
                    aria-hidden
                    src="/eye.svg"
                    alt="eye icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    aria-hidden
                    src="/eye-close.svg"
                    alt="eye icon"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="bg-gray-800 border-gray-700 focus:ring-teal-400 focus:ring-2 rounded"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-white font-semibold"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
