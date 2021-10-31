import React from "react";
import { Repoitem } from "./Repoitem";

export const Repos = ({ repos }) => {
  // console.log(repos)
  return repos.map((repo) => <Repoitem repo={repo} key={repo.id} />);
  // return <h1>hi</h1>
};
