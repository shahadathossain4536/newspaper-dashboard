import React from "react";

const ForgetPassWord = () => {
  return (
    <div className="w-96 mx-auto my-auto">
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>

        <button className="btn max-w-xs text-center">Send</button>
      </form>
    </div>
  );
};

export default ForgetPassWord;
