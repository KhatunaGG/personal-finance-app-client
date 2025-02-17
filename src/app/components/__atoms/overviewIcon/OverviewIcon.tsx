import { IconType } from "@/app/interfaces/interface";

const OverviewIcon = ({ isLinkActive }: IconType) => {
  return (
    <svg
      className="w-[18px] h-[18px] md:w-6 md:h-6"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.98189V11.76C12 12.0252 11.8946 12.2796 11.7071 12.4671C11.5196 12.6547 11.2652 12.76 11 12.76H8.5C8.23478 12.76 7.98043 12.6547 7.79289 12.4671C7.60536 12.2796 7.5 12.0252 7.5 11.76V9.26001C7.5 9.12741 7.44732 9.00023 7.35355 8.90646C7.25979 8.81269 7.13261 8.76001 7 8.76001L5 8.76001C4.86739 8.76001 4.74021 8.81269 4.64645 8.90646C4.55268 9.00023 4.5 9.12741 4.5 9.26001V11.76C4.5 12.0252 4.39464 12.2796 4.20711 12.4671C4.01957 12.6547 3.76522 12.76 3.5 12.76H1C0.734784 12.76 0.48043 12.6547 0.292893 12.4671C0.105357 12.2796 1.15549e-08 12.0252 1.15549e-08 11.76L1.15549e-08 5.98189C-2.10268e-05 5.84349 0.028687 5.70659 0.0843072 5.57986C0.139927 5.45313 0.221249 5.33932 0.323125 5.24564L5.32312 0.52814L5.33 0.521265C5.51409 0.353848 5.75398 0.261078 6.00281 0.261078C6.25164 0.261078 6.49154 0.353848 6.67562 0.521265C6.67776 0.52371 6.68005 0.526007 6.6825 0.52814L11.6825 5.24564C11.7834 5.33981 11.8636 5.45384 11.9183 5.58055C11.9729 5.70726 12.0007 5.8439 12 5.98189Z"
        fill={`${isLinkActive ? "#277C78" : "#B3B3B3"}`}
      />
    </svg>
  );
};

export default OverviewIcon;
