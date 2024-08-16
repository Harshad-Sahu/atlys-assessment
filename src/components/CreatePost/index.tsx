import React, { useState, useRef, useEffect } from "react";
import { MessageIcon } from "../../assets";
import Button from "../Button";
import { CreatePostProps } from "../../utilities/types";
import { adjustTextareaHeight } from "../../utilities/helperFunctions";
import { CHARACTER_LIMIT } from "../../utilities/constant";

const CreatePost: React.FC<CreatePostProps> = ({ handlePost }) => {
  const [postData, setPostData] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    // Adjust textarea height on mount
    adjustTextareaHeight(textareaRef.current);
  }, []);

  useEffect(() => {
    // Adjust textarea height on content change
    adjustTextareaHeight(textareaRef.current);
  }, [postData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= CHARACTER_LIMIT) {
      setPostData(value);
    }
    setCharacterCount(value.length);
  };

  const handleTextareaFocus = () => {
    textareaRef.current?.focus();
  };

  const handlePostClick = () => {
    handlePost?.();
  };

  const isCharacterCountExceeded = characterCount > CHARACTER_LIMIT;

  return (
    <section className="relative py-6 px-5 border-2 border-custom-border bg-post-bg rounded-lg">
      <div className="text-custom-18 text-custom-label-color font-medium leading-lh-120 mb-4">
        Create Post
      </div>
      <div
        className="p-4 flex items-center bg-post-input-bg rounded-lg cursor-pointer"
        onClick={handleTextareaFocus}>
        <div className="bg-post-bg w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <img
            src={MessageIcon}
            alt="Post your message"
            className="w-[18px] h-[18px]"
          />
        </div>
        <textarea
          ref={textareaRef}
          rows={1}
          value={postData}
          onChange={handleInputChange}
          className="w-full bg-transparent text-white placeholder-custom-placeholder border-0 outline-none resize-none"
          placeholder="How are you feeling today?"
        />
      </div>
      {isCharacterCountExceeded && (
        <span className="text-red-500 mt-1 mb-2 text-sm">
          Character limit exceeded.
        </span>
      )}
      <div className="w-full flex justify-end mt-4">
        <Button
          buttonLabel="Post"
          handleClick={handlePostClick}
          buttonWidth={7}
        />
      </div>
    </section>
  );
};

export default CreatePost;
