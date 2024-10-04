import React from "react";
import { GitHubRepoURL, GitHubUsername, GitHubAvatar } from "./github_data";
// import GitHubInfo from "./github_data";

export default function App() {
  const users = [
    {
      url: "https://github.com/sakjanonkk",
      imgURL: "https://avatars.githubusercontent.com/u/119271157?v=4",
      alt: "sakjanonkk",
    },
    {
      url: "https://github.com/facebook/react",
      imgURL: "https://avatars.githubusercontent.com/u/69631?s=48&v=4",
      alt: "react",
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?s=48&v=4",
      alt: "next.js",
    },
  ];

  return (
    <div className="App ">
      {users.map((user, index) => (
        <div
          key={index}
          className="user-card flex flex-col items-center justify-center"
        >
          <GitHubUsername username={user.alt} />
          <GitHubAvatar avatarURL={user.imgURL} />
          <GitHubRepoURL repoURL={user.url} />
        </div>
      ))}
      {/* <GitHubInfo userInfo={users[1]} />
      <GitHubInfo userInfo={users[0]} />
      <GitHubInfo userInfo={users[2]} /> */}
    </div>
  );
}
