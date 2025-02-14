export type IconType = {
  isLinkActive: boolean;
};

const BillIcon = ({ isLinkActive }: IconType) => {
  return (
    <svg
      width="24"
      height="25"
      className="w-[18px] h-[18px] md:w-6 md:h-6"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.25 4.51001L3.75 4.51001C3.35218 4.51001 2.97064 4.66804 2.68934 4.94935C2.40804 5.23065 2.25 5.61219 2.25 6.01001L2.25 20.26C2.25007 20.3878 2.28281 20.5135 2.34511 20.6251C2.40741 20.7368 2.49721 20.8306 2.60597 20.8978C2.71474 20.9649 2.83887 21.0032 2.96657 21.0089C3.09427 21.0146 3.22131 20.9875 3.33563 20.9303L6 19.5981L8.66437 20.9303C8.76857 20.9825 8.88348 21.0096 9 21.0096C9.11652 21.0096 9.23143 20.9825 9.33563 20.9303L12 19.5981L14.6644 20.9303C14.7686 20.9825 14.8835 21.0096 15 21.0096C15.1165 21.0096 15.2314 20.9825 15.3356 20.9303L18 19.5981L20.6644 20.9303C20.7787 20.9875 20.9057 21.0146 21.0334 21.0089C21.1611 21.0032 21.2853 20.9649 21.394 20.8978C21.5028 20.8306 21.5926 20.7368 21.6549 20.6251C21.7172 20.5135 21.7499 20.3878 21.75 20.26L21.75 6.01001C21.75 5.61219 21.592 5.23065 21.3107 4.94935C21.0294 4.66804 20.6478 4.51001 20.25 4.51001ZM16.5 14.26L7.5 14.26C7.30109 14.26 7.11032 14.181 6.96967 14.0403C6.82902 13.8997 6.75 13.7089 6.75 13.51C6.75 13.3111 6.82902 13.1203 6.96967 12.9797C7.11032 12.839 7.30109 12.76 7.5 12.76L16.5 12.76C16.6989 12.76 16.8897 12.839 17.0303 12.9797C17.171 13.1203 17.25 13.3111 17.25 13.51C17.25 13.7089 17.171 13.8997 17.0303 14.0403C16.8897 14.181 16.6989 14.26 16.5 14.26ZM16.5 11.26L7.5 11.26C7.30109 11.26 7.11032 11.181 6.96967 11.0403C6.82902 10.8997 6.75 10.7089 6.75 10.51C6.75 10.3111 6.82902 10.1203 6.96967 9.97968C7.11032 9.83903 7.30109 9.76001 7.5 9.76001L16.5 9.76001C16.6989 9.76001 16.8897 9.83903 17.0303 9.97968C17.171 10.1203 17.25 10.3111 17.25 10.51C17.25 10.7089 17.171 10.8997 17.0303 11.0403C16.8897 11.181 16.6989 11.26 16.5 11.26Z"
        fill={`${isLinkActive ? "#277C78" : "#B3B3B3"}`}
      />
    </svg>
  );
};

export default BillIcon;
