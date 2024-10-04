import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/sakjanonkk")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center pt-5 text-4xl">
      <h2 className=" font-bold ">My Github information</h2>
      {profile && (
        <div className="flex justify-center">
          <img
            className="p-5 justify-center"
            src={profile.avatar_url}
            alt="Github Profile"
          />
        </div>
      )}
      <a
        className="underline underline-offset-1 font-semibold text-blue-500"
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
