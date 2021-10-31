import React, { useState, useContext } from "react";
import githubcontext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(githubcontext);
  // const alertcontext = useContext(alertContext);

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      githubContext.setAlert("please enter something", "light");
    } else {
      githubContext.Searchusers(text);
      setText("");
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search user...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.Users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
