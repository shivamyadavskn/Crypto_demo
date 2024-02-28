import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className="loader-wrapper w-[100%] h-[87vh] flex justify-center items-center bg-[var(--white)] z-50">
      <CircularProgress />
    </div>
  );
}

export default Loader;
