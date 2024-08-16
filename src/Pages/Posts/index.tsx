import React from "react";
import UserGreeting from "../../components/UserGreeting";
import CreatePost from "../../components/CreatePost";

const Posts: React.FC = () => {
  return (
    <main className="relative m-[4.5rem] flex flex-col items-center">
      <div className="relative max-w-[44rem]">
        <UserGreeting />
        <CreatePost />
      </div>
    </main>
  );
};

export default Posts;
