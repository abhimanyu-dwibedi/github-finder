import React, { useContext } from "react";
import Useritem from "./Useritem";
import { Spinner } from "../layout/Spinner";
import githubcontext from "../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(githubcontext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userstyle}>
        {githubContext.Users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
