import React from "react";

const Content = () => {
  return (
    <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-[80vh]">
      <div className="max-w-3xl w-full bg-zinc-800 shadow-2xl rounded-2xl p-10 text-white">
        <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-6">
          Welcome to MyApp
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          🔒 Secure, fast, and easy authentication built for your convenience.
          <br /><br />
          🚀 Access your dashboard with just a few clicks.
          <br /><br />
          🛡️ Your personal data stays protected with top-level encryption.
          <br /><br />
          ✨ New here? Creating an account is quick and effortless.
          <br /><br />
          💡 Get started now and experience a smooth, reliable login.
        </p>
      </div>
    </div>
  );
};

export default Content;
