type TProps = {
  onClick?: () => void;
  direction: "prev" | "next";
};

export const ArrowButton = ({ onClick, direction }: TProps) => {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`absolute top-0 ${
        isPrev ? "start-0" : "end-0"
      } z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus-within:!outline-none focus:!outline-none`}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className={`w-4 h-4 text-white dark:text-gray-800 ${
            isPrev ? "" : "rtl:rotate-180"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isPrev ? "M5 1 1 5l4 4" : "m1 9 4-4-4-4"}
          />
        </svg>
        <span className="sr-only">{isPrev ? "Previous" : "Next"}</span>
      </span>
    </button>
  );
};
