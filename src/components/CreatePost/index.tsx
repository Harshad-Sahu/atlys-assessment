import React, { useState, useRef, useEffect } from "react";
import { MessageIcon } from "../../assets";
import Button from "../Button";

const CreatePost: React.FC = () => {
  const [postData, setPostData] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData(event.target.value);
    setCharacterCount(event.target.value.length);

    // Ensure the textarea height adjusts dynamically
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaHeight(textareaRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    // Set the initial textarea height and character count
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaHeight(textareaRef.current.scrollHeight);
      setCharacterCount(textareaRef.current.value.length);
    }
  }, []);

  // Implement character count limit (adjust as needed)
  const isCharacterCountExceeded = characterCount > 300;

  const handleDivClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const createPost = () => {};

  return (
    <section className="relative py-6 px-5 border-2 border-custom-border bg-post-bg rounded-lg">
      <div className="relative text-custom-18 text-custom-label-color font-medium leading-lh-120 mb-4">
        Create Post
      </div>
      <div
        className="relative p-4 flex items-center bg-post-input-bg rounded-lg mb-4"
        onClick={handleDivClick}>
        <img
          src={MessageIcon}
          alt="Post your message"
          className="w-12 h-12 mr-4"
        />
        <textarea
          ref={textareaRef}
          rows={1}
          value={postData}
          onChange={handleInputChange}
          className="w-full bg-transparent text-white placeholder-custom-placeholder border-0 outline-none resize-none"
          placeholder="How are you feeling today?"
          style={{ maxHeight: `${textareaHeight}px` }}
        />
      </div>
      {isCharacterCountExceeded && (
        <span className="text-red-500 mb-2 text-sm">
          Character limit exceeded.
        </span>
      )}
      <div className="relative w-full right-0 flex justify-end">
        <Button buttonLabel="Post" handleClick={createPost} buttonWidth={28} />
      </div>
    </section>
  );
};

export default CreatePost;
