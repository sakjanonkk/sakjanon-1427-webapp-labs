function GithubInfo({ userInfo }) {
  return (
    <div className="App flex  justify-center items-center text-left">
      <img
        className=" flex justify-center items-center"
        src={userInfo.imgURL}
        alt="GitHub Avatar"
        width={300}
        height={300}
      />
      <a
        className="flex flex-row pl-20 justify-centers items-center underline underline-offset-1 font-semibold text-4xl text-blue-500 pt-2"
        href={userInfo.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {userInfo.username}
        {userInfo.followers > 10000 && (
          <p className="text-lg pl-2 pt-2 text-gray-600">
            ({userInfo.followers} followers)
          </p>
        )}
      </a>
    </div>
  );
}

export default GithubInfo;
