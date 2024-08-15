import React from "react";

const Posts = () => {
  return (
    <main className="relative m-[4.5rem] flex flex-col items-center">
      <div className="relative max-w-[44rem]">
        <section className="relative mb-10">
          <div className="relative text-[1.75rem] leading-lh-120 font-medium text-custom-label-color">
            Hello Jane
          </div>
          <div className="mt-3 max-w-[36.25rem] text-custon-16 text-custom-placeholder leading-lh-150 text-md-400">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
        </section>
      </div>
    </main>
  );
};

export default Posts;
