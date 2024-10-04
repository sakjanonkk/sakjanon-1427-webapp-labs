import React from "react";
import "./App.css";
import { GitHubUsername, GitHubAvatar } from "./github_data";
import userInfo from "./github_data";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-5 text-4xl">
      {/* <h2 className=" font-bold ">My Github information</h2> */}
      <GitHubUsername username={userInfo.username} />
      <div className="flex justify-center">
        <GitHubAvatar avatarURL={userInfo.avatarURL} />{" "}
      </div>
      <a
        className="underline underline-offset-1 pt-2 font-semibold text-blue-500"
        href="https://github.com/sakjanonkk"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Github repository
      </a>
    </div>
  );
}

export default App;
