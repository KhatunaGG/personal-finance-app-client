import { ModalPropsType } from "@/app/interfaces/interface";
import React, { Dispatch, SetStateAction } from "react";

export type CloseIconPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

const CloseIcon = ({ setIsModal }: CloseIconPropsType) => {
  return (
    <svg
      onClick={() => setIsModal(false)}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.53 9.53L14.06 13L17.53 16.47C17.6037 16.5387 17.6628 16.6215 17.7038 16.7135C17.7448 16.8055 17.7668 16.9048 17.7686 17.0055C17.7704 17.1062 17.7518 17.2062 17.7141 17.2996C17.6764 17.393 17.6203 17.4778 17.549 17.549C17.4778 17.6203 17.393 17.6764 17.2996 17.7141C17.2062 17.7518 17.1062 17.7704 17.0055 17.7686C16.9048 17.7668 16.8055 17.7448 16.7135 17.7038C16.6215 17.6628 16.5387 17.6037 16.47 17.53L13 14.06L9.53 17.53C9.38783 17.6625 9.19978 17.7346 9.00548 17.7312C8.81118 17.7277 8.6258 17.649 8.48838 17.5116C8.35097 17.3742 8.27226 17.1888 8.26883 16.9945C8.2654 16.8002 8.33753 16.6122 8.47001 16.47L11.94 13L8.47001 9.53C8.33753 9.38782 8.2654 9.19978 8.26883 9.00548C8.27226 8.81118 8.35097 8.62579 8.48838 8.48838C8.6258 8.35097 8.81118 8.27225 9.00548 8.26882C9.19978 8.2654 9.38783 8.33752 9.53 8.47L13 11.94L16.47 8.47C16.6122 8.33752 16.8002 8.2654 16.9945 8.26882C17.1888 8.27225 17.3742 8.35097 17.5116 8.48838C17.649 8.62579 17.7278 8.81118 17.7312 9.00548C17.7346 9.19978 17.6625 9.38782 17.53 9.53ZM25.75 13C25.75 15.5217 25.0022 17.9868 23.6012 20.0835C22.2003 22.1802 20.209 23.8144 17.8792 24.7795C15.5495 25.7445 12.9859 25.997 10.5126 25.505C8.03935 25.0131 5.76751 23.7987 3.98439 22.0156C2.20127 20.2325 0.986955 17.9607 0.494993 15.4874C0.00303192 13.0141 0.255524 10.4505 1.22054 8.12079C2.18556 5.79103 3.81976 3.79975 5.91648 2.39876C8.01321 0.997774 10.4783 0.25 13 0.25C16.3803 0.25397 19.621 1.59854 22.0112 3.98877C24.4015 6.379 25.746 9.61971 25.75 13ZM24.25 13C24.25 10.775 23.5902 8.59989 22.354 6.74983C21.1179 4.89978 19.3609 3.45784 17.3052 2.60635C15.2495 1.75487 12.9875 1.53208 10.8052 1.96617C8.62295 2.40025 6.61839 3.47171 5.04505 5.04505C3.47171 6.61839 2.40025 8.62295 1.96617 10.8052C1.53209 12.9875 1.75487 15.2495 2.60636 17.3052C3.45785 19.3609 4.89979 21.1179 6.74984 22.354C8.59989 23.5902 10.775 24.25 13 24.25C15.9827 24.2467 18.8422 23.0604 20.9513 20.9513C23.0604 18.8422 24.2467 15.9827 24.25 13Z"
        fill="#696868"
      />
    </svg>
  );
};

export default CloseIcon;
