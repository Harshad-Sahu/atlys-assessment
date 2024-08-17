import React from "react";
import { EmojiImageProps } from "../../utilities/types";

const EmojiImage: React.FC<EmojiImageProps> = ({ imageIcon, altImageText }) => {
  return (
    <div className="bg-post-bg w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
      <img
        src={imageIcon as string}
        alt={altImageText}
        className="w-[18px] h-[18px]"
      />
    </div>
  );
};

export default EmojiImage;
