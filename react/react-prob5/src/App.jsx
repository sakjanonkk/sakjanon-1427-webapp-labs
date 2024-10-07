import React, { useEffect, useState } from "react";
import GithubInfo from "./github_data";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    {
      url: "https://github.com/sakjanonkk",
      imgURL: "https://avatars.githubusercontent.com/u/119271157?v=4",
      username: "sakjanonkk",
      // followers: 0,
    },
    {
      url: "https://github.com/facebook/react",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      username: "facebook",
      // followers: 25800,
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?v=4",
      username: "vercel",
      // followers: 17500,
    },
  ]);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await Promise.all(
        users.map(async (user) => {
          const response = await fetch(
            `https://api.github.com/users/${user.username}`
          );
          const data = await response.json();
          return {
            username: data.login,
            imgURL: data.avatar_url,
            url: data.html_url,
            followers: data.followers,
          };
        })
      );
      const filteredResults = results.filter((user) => user.followers > 10000);
      setUserData(filteredResults);
    }

    fetchData();
  }, [users]);

  return (
    <div className="App">
      <h2 className="text-5xl pt-10">Sample GitHub Repositories</h2>
      <ol className="list-decimal pl-10 justify-center items-center flex flex-col text-3xl">
        {userData.map((user, index) => (
          <li key={index} className="py-6">
            <GithubInfo userInfo={user} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
