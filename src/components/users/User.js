import React, { Fragment, useContext, useEffect } from "react";
import { Spinner } from "../layout/Spinner";
import { Link } from "react-router-dom";
import { Repos } from "../repos/Repos";
import githubcontext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(githubcontext);
  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);
  const { getUser, loading, user, getUserRepo } = githubContext;
  // console.log(githubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to search
        </Link>
        Hireable:{" "}
        {user.hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={user.avatar_url}
              className='round-img'
              alt='img here'
              style={{ width: "150px" }}
            />
            <h1>{user.name}</h1>
          </div>
          <div>
            {user.bio && (
              <Fragment>
                <h3>About</h3>
                <p>{user.bio}</p>
              </Fragment>
            )}
            <a href={user.html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {user.login && (
                  <Fragment>
                    <strong>Username:</strong>
                    {user.login}
                  </Fragment>
                )}
              </li>
              <li>
                {user.company && (
                  <Fragment>
                    <b>company:</b>
                    {user.company}
                  </Fragment>
                )}
              </li>
              <li>
                {user.blog && (
                  <Fragment>
                    <strong>blog:</strong>
                    <a href={user.blog}>Visit blog</a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers:{user.followers}</div>
          <div className='badge badge-success'>Following:{user.following}</div>
          <div className='badge badge-dandger'>
            Public Repos:{user.public_repos}
          </div>
          <div className='badge badge-dark'>
            Public Gists:{user.public_gists}
          </div>
        </div>
        <Repos repos={githubContext.repos} />
      </Fragment>
    );
  }
};

export default User;
