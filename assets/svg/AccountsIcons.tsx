import React from "react";
import { Icon } from "./type";

export const PeopleIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.587821"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.66666 5.33333C6.66666 8.27885 9.05447 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05447 0 6.66666 2.38781 6.66666 5.33333ZM20 10.6667C20 12.8758 21.7909 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7909 6.66667 20 8.45753 20 10.6667Z"
        fill="#8280FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9778 13.333C5.68255 13.333 0.517678 16.5684 0.000868912 22.9319C-0.0272823 23.2786 0.635616 23.9997 0.970003 23.9997H22.9956C23.9972 23.9997 24.0128 23.1936 23.9972 22.933C23.6065 16.3906 18.3616 13.333 11.9778 13.333ZM31.2746 23.9997L26.1333 23.9997C26.1333 20.9984 25.1417 18.2288 23.4683 16.0005C28.0103 16.0501 31.7189 18.3465 31.998 23.1997C32.0092 23.3951 31.998 23.9997 31.2746 23.9997Z"
        fill="#8280FF"
      />
    </svg>
  );
};

export const HistoryIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.78"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6312 9.80931C12.6512 9.54881 12.8684 9.34766 13.1297 9.34766H13.5475C13.8044 9.34766 14.0195 9.5423 14.045 9.7979L14.6667 16.0143L19.0814 18.537C19.2372 18.626 19.3333 18.7917 19.3333 18.9712V19.3597C19.3333 19.6894 19.0198 19.9288 18.7018 19.8421L12.3987 18.123C12.1673 18.0599 12.0133 17.8414 12.0317 17.6023L12.6312 9.80931Z"
        fill="#FF9066"
      />
      <path
        opacity="0.901274"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.72176 0.984587C6.45765 0.669838 5.94771 0.790308 5.85238 1.18997L4.21891 8.03811C4.14123 8.36376 4.39931 8.67226 4.73356 8.65332L11.7783 8.2541C12.1892 8.23082 12.3976 7.74879 12.133 7.43351L10.3316 5.28667C11.4965 4.88862 12.7317 4.68072 14 4.68072C20.2592 4.68072 25.3333 9.75482 25.3333 16.014C25.3333 22.2733 20.2592 27.3474 14 27.3474C7.74077 27.3474 2.66667 22.2733 2.66667 16.014C2.66667 14.9633 2.80896 13.9341 3.08641 12.945L0.518845 12.2248C0.180793 13.43 0 14.7009 0 16.014C0 23.746 6.26801 30.014 14 30.014C21.732 30.014 28 23.746 28 16.014C28 8.28206 21.732 2.01405 14 2.01405C12.0551 2.01405 10.2029 2.41063 8.51973 3.12733L6.72176 0.984587Z"
        fill="#FF9066"
      />
    </svg>
  );
};

export const BoxIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 11.3162L12.9005 18.7643C13.0394 18.8445 13.1851 18.9024 13.3333 18.9392V33.3844L0.920065 26.0382C0.349784 25.7007 0 25.0873 0 24.4246V11.3162ZM30 11.1182V24.4246C30 25.0873 29.6502 25.7007 29.0799 26.0382L16.6667 33.3844V18.8126C16.6969 18.7975 16.7269 18.7814 16.7566 18.7643L30 11.1182Z"
        fill="#FEC53D"
      />
      <path
        opacity="0.499209"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.405212 7.70142C0.562787 7.50244 0.761675 7.33426 0.993554 7.21076L14.1186 0.2201C14.6695 -0.0733665 15.3304 -0.0733665 15.8814 0.2201L29.0064 7.21076C29.1852 7.30596 29.3443 7.42771 29.48 7.56966L15.0899 15.8778C14.9953 15.9325 14.908 15.995 14.8285 16.064C14.749 15.995 14.6618 15.9325 14.5671 15.8778L0.405212 7.70142Z"
        fill="#FEC53D"
      />
    </svg>
  );
};

// chart icon
export const ChartIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.11111 24.8889H26.4444C27.3036 24.8889 28 25.5853 28 26.4444C28 27.3036 27.3036 28 26.4444 28H1.55556C0.696446 28 0 27.3036 0 26.4444V1.55556C0 0.696446 0.696446 0 1.55556 0C2.41467 0 3.11111 0.696446 3.11111 1.55556V24.8889Z"
        fill="#4AD991"
      />
      <path
        opacity="0.5"
        d="M8.91263 18.175C8.32504 18.8017 7.34063 18.8335 6.71388 18.2459C6.08713 17.6583 6.05537 16.6739 6.64295 16.0472L12.4763 9.82494C13.0445 9.21879 13.9888 9.16623 14.6209 9.70555L19.2249 13.6343L25.2235 6.03606C25.7559 5.36176 26.734 5.24668 27.4083 5.77903C28.0826 6.31137 28.1977 7.28955 27.6654 7.96385L20.6654 16.8305C20.1186 17.5231 19.1059 17.6227 18.4347 17.0499L13.7306 13.0358L8.91263 18.175Z"
        fill="#4AD991"
      />
    </svg>
  );
};

// monitor icon
export const MonitorIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.876 23.9998H8.124C7.25897 24.0011 6.46029 23.5364 6.03404 22.7837C5.60779 22.0309 5.62008 21.107 6.06619 20.3658L7.8498 17.3834C8.06673 17.0214 8.45782 16.7998 8.87988 16.7998H15.1201C15.5422 16.7998 15.9333 17.0214 16.1502 17.3834L17.9379 20.3717C18.381 21.1132 18.391 22.0356 17.9643 22.7866C17.5375 23.5376 16.7398 24.001 15.876 23.9998Z"
        fill="#FFAB00"
      />
      <path
        d="M15.876 23.9998H8.124C7.25897 24.0011 6.46029 23.5364 6.03404 22.7837C5.60779 22.0309 5.62008 21.107 6.06619 20.3658L7.8498 17.3834C8.06673 17.0214 8.45782 16.7998 8.87988 16.7998H15.1201C15.5422 16.7998 15.9333 17.0214 16.1502 17.3834L17.9379 20.3717C18.381 21.1132 18.391 22.0356 17.9643 22.7866C17.5375 23.5376 16.7398 24.001 15.876 23.9998Z"
        fill="white"
        fill-opacity="0.4"
      />
      <path
        d="M20.4 19.2H3.6C1.61267 19.1978 0.00216925 17.5873 0 15.6V3.6C0.00216925 1.61267 1.61267 0.00216925 3.6 0H20.4C22.3873 0.00216925 23.9978 1.61267 24 3.6V15.6C23.9978 17.5873 22.3873 19.1978 20.4 19.2Z"
        fill="#FFAB00"
      />
      <path
        d="M20.4 19.2H3.6C1.61267 19.1978 0.00216925 17.5873 0 15.6V3.6C0.00216925 1.61267 1.61267 0.00216925 3.6 0H20.4C22.3873 0.00216925 23.9978 1.61267 24 3.6V15.6C23.9978 17.5873 22.3873 19.1978 20.4 19.2Z"
        fill="white"
        fill-opacity="0.4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4 19.2002H3.6C1.61177 19.2002 0 17.5884 0 15.6002V13.2002H24V15.6002C24 17.5884 22.3882 19.2002 20.4 19.2002Z"
        fill="#FFAB00"
      />
    </svg>
  );
};

// inflow icon
export const InflowIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M15.675 5.20807H16.8084C16.6501 4.98307 16.4834 4.77474 16.3084 4.56641L15.675 5.20807Z"
        fill="#0062FF"
      />
      <path
        opacity="0.4"
        d="M15.4333 3.6831C15.225 3.5081 15.0167 3.34144 14.7917 3.18311V4.31644L15.4333 3.6831Z"
        fill="#0062FF"
      />
      <path
        opacity="0.4"
        d="M14.1667 6.45817C14.0834 6.45817 14.0083 6.44151 13.925 6.40817C13.775 6.34151 13.65 6.22484 13.5833 6.0665C13.55 5.9915 13.5333 5.90817 13.5333 5.82484V2.4915C13.5333 2.48317 13.5417 2.47483 13.5417 2.45817C12.4667 1.95817 11.2667 1.6665 10 1.6665C5.40002 1.6665 1.66669 5.39984 1.66669 9.99984C1.66669 14.5998 5.40002 18.3332 10 18.3332C14.6 18.3332 18.3334 14.5998 18.3334 9.99984C18.3334 8.73317 18.0417 7.53317 17.5334 6.44984C17.525 6.44984 17.5167 6.45817 17.5 6.45817H14.1667Z"
        fill="#0062FF"
      />
      <path
        d="M16.3167 4.56686L18.775 2.10853C19.0167 1.86686 19.0167 1.46686 18.775 1.2252C18.5334 0.983529 18.1334 0.983529 17.8917 1.2252L15.4333 3.68353C15.75 3.95853 16.0417 4.25853 16.3167 4.56686Z"
        fill="#0062FF"
      />
      <path
        d="M14.7916 2.5C14.7916 2.15833 14.5083 1.875 14.1666 1.875C13.8333 1.875 13.5667 2.14167 13.55 2.46667C13.9833 2.675 14.4 2.90833 14.7916 3.18333V2.5Z"
        fill="#0062FF"
      />
      <path
        d="M18.125 5.8335C18.125 5.49183 17.8417 5.2085 17.5 5.2085H16.8083C17.0833 5.60016 17.325 6.01683 17.525 6.45016C17.8583 6.43349 18.125 6.16683 18.125 5.8335Z"
        fill="#0062FF"
      />
      <path
        d="M11.4584 9.85L10.625 9.55833V7.70833H10.6917C11.1167 7.70833 11.4584 8.08333 11.4584 8.54167C11.4584 8.88333 11.7417 9.16667 12.0834 9.16667C12.425 9.16667 12.7084 8.88333 12.7084 8.54167C12.7084 7.39167 11.8083 6.45833 10.6917 6.45833H10.625V6.25C10.625 5.90833 10.3417 5.625 10 5.625C9.65835 5.625 9.37502 5.90833 9.37502 6.25V6.45833H9.12503C8.1167 6.45833 7.29169 7.30833 7.29169 8.35833C7.29169 9.575 8.00002 9.96667 8.54169 10.1583L9.37502 10.45V12.3H9.30836C8.88336 12.3 8.54169 11.925 8.54169 11.4667C8.54169 11.125 8.25835 10.8417 7.91669 10.8417C7.57502 10.8417 7.29169 11.125 7.29169 11.4667C7.29169 12.6167 8.1917 13.55 9.30836 13.55H9.37502V13.7583C9.37502 14.1 9.65835 14.3833 10 14.3833C10.3417 14.3833 10.625 14.1 10.625 13.7583V13.55H10.875C11.8833 13.55 12.7084 12.7 12.7084 11.65C12.7084 10.425 12 10.0333 11.4584 9.85ZM8.95001 8.96667C8.66668 8.86667 8.54169 8.80833 8.54169 8.35C8.54169 7.99166 8.80836 7.7 9.12503 7.7H9.37502V9.10833L8.95001 8.96667ZM10.875 12.2917H10.625V10.8833L11.05 11.0333C11.3334 11.1333 11.4584 11.1917 11.4584 11.65C11.4584 12 11.1917 12.2917 10.875 12.2917Z"
        fill="#0062FF"
      />
    </svg>
  );
};

// pending icon
export const PendingIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 11.4582C10.1583 11.4582 9.875 11.1748 9.875 10.8332V6.6665C9.875 6.32484 10.1583 6.0415 10.5 6.0415C10.8417 6.0415 11.125 6.32484 11.125 6.6665V10.8332C11.125 11.1748 10.8417 11.4582 10.5 11.4582Z"
        fill="#0062FF"
      />
      <path
        d="M12.9083 2.87484H8.09167C7.75833 2.87484 7.49167 2.60817 7.49167 2.27484C7.49167 1.9415 7.75833 1.6665 8.09167 1.6665H12.9083C13.2417 1.6665 13.5083 1.93317 13.5083 2.2665C13.5083 2.59984 13.2417 2.87484 12.9083 2.87484Z"
        fill="#0062FF"
      />
      <path
        opacity="0.4"
        d="M13 16.6416V14.1916C13 13.1333 13.6333 12.5 14.6917 12.5H17.1417C17.3 12.5 17.4417 12.5166 17.5833 12.55C17.675 12.0833 17.725 11.6 17.725 11.1083C17.725 7.12497 14.4833 3.8833 10.5 3.8833C6.51666 3.8833 3.27499 7.12497 3.27499 11.1083C3.27499 15.0916 6.51666 18.3333 10.5 18.3333C11.5083 18.3333 12.4667 18.125 13.3417 17.75C13.125 17.4666 13 17.1 13 16.6416Z"
        fill="#0062FF"
      />
      <path
        d="M17.1417 12.5H14.7C13.6333 12.5 13 13.1333 13 14.1917V16.6333C13 17.6917 13.6333 18.325 14.6917 18.325H17.1333C18.1917 18.325 18.825 17.6917 18.825 16.6333V14.1917C18.8333 13.1333 18.2 12.5 17.1417 12.5ZM15.4333 16.7167C15.4333 16.9833 15.2167 17.2 14.95 17.2C14.6833 17.2 14.4667 16.9833 14.4667 16.7167V14.125C14.4667 13.8583 14.6833 13.6417 14.95 13.6417C15.2167 13.6417 15.4333 13.8583 15.4333 14.125V16.7167ZM17.375 16.7167C17.375 16.9833 17.1583 17.2 16.8917 17.2C16.625 17.2 16.4083 16.9833 16.4083 16.7167V14.125C16.4083 13.8583 16.625 13.6417 16.8917 13.6417C17.1583 13.6417 17.375 13.8583 17.375 14.125V16.7167Z"
        fill="#0062FF"
      />
    </svg>
  );
};

// outflow icon
export const OutflowIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.0833 6.60023V10.8919C16.0833 13.4586 14.6167 14.5586 12.4167 14.5586H5.09165C4.71665 14.5586 4.35832 14.5253 4.02498 14.4503C3.81665 14.4169 3.61666 14.3586 3.43332 14.2919C2.18332 13.8253 1.42499 12.7419 1.42499 10.8919V6.60023C1.42499 4.03356 2.89165 2.93359 5.09165 2.93359H12.4167C14.2833 2.93359 15.625 3.72526 15.9833 5.53359C16.0417 5.86692 16.0833 6.20856 16.0833 6.60023Z"
        fill="#0062FF"
      />
      <path
        d="M18.5833 9.09984V13.3915C18.5833 15.9582 17.1167 17.0582 14.9167 17.0582H7.59166C6.97499 17.0582 6.41667 16.9749 5.93333 16.7915C4.94167 16.4249 4.26666 15.6665 4.02499 14.4499C4.35833 14.5249 4.71666 14.5582 5.09166 14.5582H12.4167C14.6167 14.5582 16.0833 13.4582 16.0833 10.8915V6.59984C16.0833 6.20818 16.05 5.8582 15.9833 5.5332C17.5667 5.86654 18.5833 6.98318 18.5833 9.09984Z"
        fill="#0062FF"
      />
      <path
        d="M8.75 10.9498C9.96503 10.9498 10.95 9.96484 10.95 8.74982C10.95 7.53479 9.96503 6.5498 8.75 6.5498C7.53497 6.5498 6.54999 7.53479 6.54999 8.74982C6.54999 9.96484 7.53497 10.9498 8.75 10.9498Z"
        fill="#0062FF"
      />
      <path
        d="M3.98334 6.875C3.64167 6.875 3.35834 7.15833 3.35834 7.5V10C3.35834 10.3417 3.64167 10.625 3.98334 10.625C4.325 10.625 4.60834 10.3417 4.60834 10V7.5C4.60834 7.15833 4.33334 6.875 3.98334 6.875Z"
        fill="#0062FF"
      />
      <path
        d="M13.5083 6.875C13.1667 6.875 12.8833 7.15833 12.8833 7.5V10C12.8833 10.3417 13.1667 10.625 13.5083 10.625C13.85 10.625 14.1333 10.3417 14.1333 10V7.5C14.1333 7.15833 13.8583 6.875 13.5083 6.875Z"
        fill="#0062FF"
      />
    </svg>
  );
};

// calendar icon
export const CalendarIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1.5V3.75"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 1.5V3.75"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.65 16.05C14.9755 16.05 16.05 14.9755 16.05 13.65C16.05 12.3245 14.9755 11.25 13.65 11.25C12.3245 11.25 11.25 12.3245 11.25 13.65C11.25 14.9755 12.3245 16.05 13.65 16.05Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 16.5L15.75 15.75"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.625 6.81738H15.375"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0275 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375V9.75"
        stroke="#666666"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99661 10.2749H9.00335"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.22073 10.2749H6.22747"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.22073 12.5249H6.22747"
        stroke="#666666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
