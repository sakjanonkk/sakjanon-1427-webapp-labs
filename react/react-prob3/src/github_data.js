import React from "react";

export const GitHubRepoURL = (props) => {
  return (
    <a
      className="font-bold pt-3"
      href={props.repoURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.repoURL}
    </a>
  );
};
export const GitHubUsername = (props) => {
  return (
    <p className=" w-full p-2 text-3xl flex flex-col justify-center text-center">
      {" "}
      {props.username}
    </p>
  );
};

export const GitHubAvatar = (props) => {
  const size = props.size || 250;
  return (
    <img
      className="pt-1 justify-center items-center"
      src={props.avatarURL}
      alt="GitHub Avatar"
      width={size}
      height={size}
    />
  );
};

// export default GitHubInfo = (props) => {
//   return (
//     <div className="user-card flex flex-col items-center justify-center">
//       <GitHubUsername username={props.props.alt} />
//       <GitHubAvatar avatarURL={props.props.imgURL} />
//       <GitHubRepoURL repoURL={props.props.url} />
//     </div>
//   );
// };
