import React from "react";
import { UserPostProps } from "../../utilities/types";
import { emojiCodes } from "../../utilities/constant";
import { CommentIcon, MenuDot } from "../../assets";

const UserPost: React.FC<UserPostProps> = ({ userPostInfo }) => {
  const getTwemojiUrl = (code: string) =>
    `https://twemoji.maxcdn.com/v/13.0.1/72x72/${code}.png`;

  const getRandomEmojiUrl = (): string => {
    const randomIndex = Math.floor(Math.random() * emojiCodes.length);
    return getTwemojiUrl(emojiCodes[randomIndex]);
  };

  return (
    <section className="relative my-4 py-6 px-5 border-2 border-custom-border bg-post-bg rounded-lg">
      <div className="relative flex justify-between items-center">
        <div className="relative flex items-center cursor-pointer group">
          <img
            src={userPostInfo.userProfileThumbnail}
            alt={`Profile of ${userPostInfo.userName}`}
            className="relative w-12 h-12 mr-4 rounded-full"
          />
          <div className="relative">
            <p className="relative text-custom-label-color text-custom-16 font-medium leading-lh-120 group-hover:underline">
              {userPostInfo.userName}
            </p>
            <p className="relative text-custom-placeholder text-custom-14 font-medium leading-lh-120">{`${userPostInfo.postTime} ago`}</p>
          </div>
        </div>
        <div className="relative w-5 h-5 cursor-pointer flex items-center justify-center flex-shrink-0 rounded-full">
          <img src={MenuDot} alt="Menu" className="relative w-4 h-1" />
        </div>
      </div>

      <div className="relative p-4 flex items-start bg-post-input-bg rounded-lg mb-4 mt-5">
        <div className="relative bg-post-bg w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <img
            src={getRandomEmojiUrl()}
            alt="Emoji"
            className="relative w-[18px] h-[18px]"
          />
        </div>

        <div className="flex-1 text-custom-placeholder text-custom-16 font-md-400 leading-lh-150">
          {userPostInfo.postContent}
        </div>
      </div>

      <div className="relative flex items-center cursor-pointer group">
        <div className="relative mr-2 h-5 w-5 flex items-center justify-center flex-shrink-0">
          <img
            src={CommentIcon}
            alt="Comments on post"
            className="relative h-5 w-5"
          />
        </div>
        <p className="relative text-custom-placeholder text-custom-14 font-medium leading-lh-120 group-hover:underline">
          {`${userPostInfo?.commentCount} ${
            userPostInfo?.commentCount > 1 ? "comments" : "comment"
          }`}
        </p>
      </div>
    </section>
  );
};

export default UserPost;
