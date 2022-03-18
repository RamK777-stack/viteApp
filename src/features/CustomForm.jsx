import React, { useState } from "react";

const CustomForm = () => {
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-xl shadow-lg p-20 flex flex-col w-1/2 space-y-3">
        <h1>Login</h1>
        <label className="" htmlFor="email">
          Email
        </label>
        <input id="email" placeholder="email" type="text" className="rounded border-slate-300" onChange={(e)=>{setEmail(e.target.value)}}/>

        <label className="" htmlFor="password">
          Password
        </label>
        <input id="password" placeholder="password" type="text" className="rounded border-slate-300" onChange={(e)=>{setPassword(e.target.value)}}/>

        <div className="flex flex-row space-x-5 mt-5">
          <button data-testid="LoginButton" className="bg-blue-700 p-3 rounded text-white" disabled={email && password ? false: true}>Submit</button>
          <button className="bg-gray-600 p-3 rounded text-white">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
