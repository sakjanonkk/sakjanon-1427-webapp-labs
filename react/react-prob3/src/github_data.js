// import React from "react";

// export const GitHubRepoURL = (props) => {
//   return (
//     <a
//       className="font-bold pt-3"
//       href={props.repoURL}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {props.repoURL}
//     </a>
//   );
// };
// export const GitHubUsername = (props) => {
//   return (
//     <p className=" w-full p-2 text-3xl flex flex-col justify-center text-center">
//       {" "}
//       {props.username}
//     </p>
//   );
// };

// export const GitHubAvatar = (props) => {
//   const size = props.size || 250;
//   return (
//     <img
//       className="pt-1 justify-center items-center"
//       src={props.avatarURL}
//       alt="GitHub Avatar"
//       width={size}
//       height={size}
//     />
//   );
// };

// // export default GitHubInfo = (props) => {
// //   return (
// //     <div className="user-card flex flex-col items-center justify-center">
// //       <GitHubUsername username={props.props.alt} />
// //       <GitHubAvatar avatarURL={props.props.imgURL} />
// //       <GitHubRepoURL repoURL={props.props.url} />
// //     </div>
// //   );
// // };

function GithubInfo({ userInfo }) {
  return (
    <userInfo>
      <div className="App flex flex-col items-center justify-center text-center pt-5 text-4xl">
        <h2>{userInfo.alt}</h2>
        <img
          className="flex justify-center"
          src={userInfo.imgURL}
          alt="img"
          width={150}
          height={150}
        />
        <h2>
          <a
            className="underline underline-offset-1 pt-2 font-semibold text-blue-500"
            href={userInfo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userInfo.url}
          </a>
        </h2>
      </div>
    </userInfo>
  );
}
export default GithubInfo;
