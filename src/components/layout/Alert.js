import React, { useContext } from "react";
import githubcontext from "../../context/github/githubContext";

export const Alert = () => {
  const githubContext = useContext(githubcontext);

  return (
    githubContext.alert !== null && (
      <div className={`alert alert-${githubContext.alert.type}`}>
        <i className='fas fa-info-circle' />
        {githubContext.alert.msg}
      </div>
    )
  );
};
