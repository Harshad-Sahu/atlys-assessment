import React from "react";

const UserGreeting: React.FC = () => {
  return (
    <section className="relative mb-10">
      <h2 className="relative text-[1.75rem] leading-lh-120 font-medium text-custom-label-color">
        Hello Jane
      </h2>
      <div className="mt-3 max-w-[36.25rem] text-custon-16 text-custom-placeholder leading-lh-150 text-md-400">
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
    </section>
  );
};

export default UserGreeting;
