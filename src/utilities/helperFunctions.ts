// Helper function for adjusting textarea height
export const adjustTextareaHeight = (textarea: HTMLTextAreaElement | null) => {
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
};

// Helper function to get Twemoji URL
export const getTwemojiUrl = (code: string) =>
  `https://twemoji.maxcdn.com/v/13.0.1/72x72/${code}.png`;

// Helper function to get a random emoji URL
export const getRandomEmojiUrl = (emojiCodes: string[]): string => {
  const randomIndex = Math.floor(Math.random() * emojiCodes.length);
  return getTwemojiUrl(emojiCodes[randomIndex]);
};
