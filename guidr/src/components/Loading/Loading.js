import React from "react";
import Loader from "react-loader-spinner";
export const Loading = () => {
  return (
    <div>
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export const LoginLoading = () => {
  return (
    <div>
      <Loader type="Oval" color="#FFFFFF" height={20} width={20} />
    </div>
  );
};
