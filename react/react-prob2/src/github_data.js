import React from "react";
const userInfo = {
  username: "sakjanonkk",
  repoURL: "https://github.com/sakjanonkk",
  avatarURL: "https://avatars.githubusercontent.com/u/119271157?v=4",
};

export default userInfo;

export const GitHubRepoURL = (props) => {
  return (
    <a href={props.repoURL} target="_blank" rel="noopener noreferrer">
      {props.repoURL}
    </a>
  );
};
export const GitHubUsername = (props) => {
  return <p className="bg-black text-white w-full p-2"> {props.username}</p>;
};

export const GitHubAvatar = (props) => {
  //   const size = props.size || 50;
  return (
    <img
      className="pt-5 justify-center"
      src={props.avatarURL}
      alt="GitHub Avatar"
      //   width={size}
      //   height={size}
    />
  );
};
