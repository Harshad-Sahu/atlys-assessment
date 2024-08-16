import React from "react";
import * as CONSTANT from "../../utilities/constant";
import UserGreeting from "../../components/UserGreeting";
import CreatePost from "../../components/CreatePost";
import UserPost from "../../components/UserPost";

const Posts: React.FC = () => {
  return (
    <main className="relative m-[4.5rem] flex flex-col items-center">
      <div className="relative max-w-[44rem]">
        <UserGreeting />
        <CreatePost />
        {CONSTANT.DummyPosts.map((userPostInfo) => {
          return <UserPost key={userPostInfo.id} userPostInfo={userPostInfo} />;
        })}
      </div>
    </main>
  );
};

export default Posts;
