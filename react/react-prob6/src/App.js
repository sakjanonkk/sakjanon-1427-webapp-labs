import React, { useState } from "react";
import "./App.css";
// import users from "./users"; // Assuming this contains an array of users

function App() {
  const [users, setUsers] = useState([
    {
      url: "https://github.com/sakjanonkk",
      imgURL: "https://avatars.githubusercontent.com/u/119271157?v=4",
      username: "sakjanonkk",
      followers: 0,
    },
    {
      url: "https://github.com/facebook/react",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      username: "facebook",
      followers: 25800,
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?v=4",
      username: "vercel",
      followers: 17500,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  const currentUser = users[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setShowFollowers(false); // Hide follower
  };

  const handleNext = () => {
    if (currentIndex < users.length - 1) setCurrentIndex(currentIndex + 1);
    setShowFollowers(false);
  };

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-semibold m-5 block">
        Sample Github Repository
      </h1>

      <div className="user-info alight-center ">
        <a
          href={currentUser.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-500 m-5 block underline underline-offset-1 font-semibold"
        >
          {currentUser.username}
        </a>
        <img
          src={currentUser.imgURL}
          alt="GitHub Avatar"
          width={300}
          height={300}
          className="rounded drop-shadow-md block m-auto justify-center items-center pb-10"
        />

        {showFollowers && <p>{currentUser.followers} followers</p>}

        <button onClick={toggleFollowers} className=" bg-blue-400 p-1">
          {showFollowers ? "Hide followers" : "Show followers"}
        </button>

        <div className=" flex justify-between   ">
          <button
            className={`p-1 ${
              currentIndex === 0 ? "bg-gray-500" : "bg-green-500"
            }`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className={`p-1 ${
              currentIndex === users.length - 1
                ? "bg-gray-500"
                : "bg-orange-500"
            }`}
            onClick={handleNext}
            disabled={currentIndex === users.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
