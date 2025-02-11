"use client"
export type MinimizeMenuPropsType = {
  minimize: boolean
}

const MinimizeMenu = ({minimize}: MinimizeMenuPropsType) => {
  return (
    <svg
      className={`transition-transform duration-300 ease-in-out transform ${
        minimize ? "rotate-180 " : "rotate-0"
      } w-6 h-6`}
      width="20"
      height="20"
      // className="w-6 h-6"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0001 5.5L14.0001 14.5C14.0001 14.6989 13.9211 14.8897 13.7804 15.0303C13.6398 15.171 13.449 15.25 13.2501 15.25H11.0001L11.0001 19C11.0002 19.1484 10.9563 19.2935 10.8739 19.417C10.7915 19.5404 10.6743 19.6367 10.5372 19.6935C10.4001 19.7503 10.2492 19.7651 10.1036 19.7361C9.95806 19.7072 9.82437 19.6356 9.71948 19.5306L0.719477 10.5306C0.649744 10.461 0.594425 10.3783 0.556682 10.2872C0.518939 10.1962 0.499512 10.0986 0.499512 10C0.499512 9.90144 0.518939 9.80384 0.556682 9.7128C0.594425 9.62175 0.649744 9.53903 0.719477 9.46938L9.71948 0.469374C9.82437 0.364366 9.95806 0.29284 10.1036 0.263852C10.2492 0.234865 10.4001 0.249718 10.5372 0.306532C10.6743 0.363347 10.7915 0.459567 10.8739 0.583013C10.9563 0.706458 11.0002 0.851578 11.0001 0.999999V4.75H13.2501C13.449 4.75 13.6398 4.82902 13.7804 4.96967C13.9211 5.11032 14.0001 5.30109 14.0001 5.5ZM16.2501 4.75C16.0512 4.75 15.8604 4.82902 15.7198 4.96967C15.5791 5.11032 15.5001 5.30109 15.5001 5.5L15.5001 14.5C15.5001 14.6989 15.5791 14.8897 15.7198 15.0303C15.8604 15.171 16.0512 15.25 16.2501 15.25C16.449 15.25 16.6398 15.171 16.7804 15.0303C16.9211 14.8897 17.0001 14.6989 17.0001 14.5L17.0001 5.5C17.0001 5.30109 16.9211 5.11032 16.7804 4.96967C16.6398 4.82902 16.449 4.75 16.2501 4.75ZM19.2501 4.75C19.0512 4.75 18.8604 4.82902 18.7198 4.96967C18.5791 5.11032 18.5001 5.30109 18.5001 5.5L18.5001 14.5C18.5001 14.6989 18.5791 14.8897 18.7198 15.0303C18.8604 15.171 19.0512 15.25 19.2501 15.25C19.449 15.25 19.6398 15.171 19.7804 15.0303C19.9211 14.8897 20.0001 14.6989 20.0001 14.5L20.0001 5.5C20.0001 5.30109 19.9211 5.11032 19.7804 4.96967C19.6398 4.82902 19.449 4.75 19.2501 4.75Z"
        fill="#B3B3B3"
      />
    </svg>
  );
};

export default MinimizeMenu;
