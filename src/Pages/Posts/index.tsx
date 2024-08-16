import React, { useState } from "react";
import * as CONSTANT from "../../utilities/constant";
import UserGreeting from "../../components/UserGreeting";
import CreatePost from "../../components/CreatePost";
import UserPost from "../../components/UserPost";
import AuthForm from "../../components/AuthForm";

const Posts: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);

  return (
    <main className="relative m-[4.5rem] flex flex-col items-center">
      <div className="relative max-w-[44rem]">
        <UserGreeting />
        <CreatePost handlePost={handleOpenPopup} />
        {CONSTANT.DummyPosts.map((userPostInfo) => {
          return (
            <UserPost
              key={userPostInfo.id}
              userPostInfo={userPostInfo}
              userActions={handleOpenPopup}
            />
          );
        })}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <AuthForm postsScreen onClose={handleClosePopup} />
        </div>
      )}
    </main>
  );
};

export default Posts;
