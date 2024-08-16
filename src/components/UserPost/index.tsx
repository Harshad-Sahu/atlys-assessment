import React from "react";
import { UserPostProps } from "../../utilities/types";
import { emojiCodes } from "../../utilities/constant";
import { CommentIcon, MenuDot } from "../../assets";
import { getRandomEmojiUrl } from "../../utilities/helperFunctions";
import EmojiImage from "../EmojiImage";

const UserPost: React.FC<UserPostProps> = ({ userPostInfo, userActions }) => {
  const handleActions = () => {
    userActions?.();
  };

  return (
    <section className="relative my-4 py-6 px-5 border-2 border-custom-border bg-post-bg rounded-lg">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer group"
          onClick={handleActions}>
          <img
            src={userPostInfo.userProfileThumbnail}
            alt={`Profile of ${userPostInfo.userName}`}
            className="w-12 h-12 mr-4 rounded-full"
          />
          <div>
            <p className="text-custom-label-color text-custom-16 font-medium leading-lh-120 group-hover:underline">
              {userPostInfo.userName}
            </p>
            <p className="text-custom-placeholder text-custom-14 font-medium leading-lh-120">
              {`${userPostInfo.postTime} ago`}
            </p>
          </div>
        </div>
        <div
          className="w-5 h-5 cursor-pointer flex items-center justify-center rounded-full"
          onClick={handleActions}>
          <img src={MenuDot} alt="Menu" className="w-4 h-1" />
        </div>
      </div>

      <div className="p-4 flex items-start bg-post-input-bg rounded-lg mb-4 mt-5">
        <EmojiImage
          imageIcon={getRandomEmojiUrl(emojiCodes)}
          altImageText="Emoji"
        />

        <div className="flex-1 text-custom-placeholder text-custom-16 font-md-400 leading-lh-150">
          {userPostInfo.postContent}
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer group"
        onClick={handleActions}>
        <div className="mr-2 h-5 w-5 flex items-center justify-center flex-shrink-0">
          <img src={CommentIcon} alt="Comments on post" className="h-5 w-5" />
        </div>
        <p className="text-custom-placeholder text-custom-14 font-medium leading-lh-120 group-hover:underline">
          {`${userPostInfo?.commentCount} ${
            userPostInfo?.commentCount > 1 ? "comments" : "comment"
          }`}
        </p>
      </div>
    </section>
  );
};

export default UserPost;
