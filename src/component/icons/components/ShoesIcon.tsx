import { FC } from "react";

import { BaseIcon, IIconProps } from "../BaseIcon";

export const ShoesIcon: FC<IIconProps> = (props) => {
  return (
    <BaseIcon variant="special" {...props}>
      <g clip-path="url(#clip0_51_16)">
        <path
          d="M24 15.3983C24 13.3992 22.8369 12.4737 20.6848 12.0406C20.4966 12.0028 20.3009 11.9679 20.0706 11.9304C19.9824 11.9161 19.8936 11.902 19.7749 11.8834C19.6306 11.861 19.5563 11.8494 19.4906 11.8391C19.1829 11.7906 18.9823 11.7554 18.8 11.7161C18.7264 11.7002 18.6377 11.6716 18.5355 11.6315C18.5231 11.6249 18.5105 11.6187 18.4972 11.6133C18.1418 11.4687 17.6505 11.2028 17.0455 10.8315C17.0354 10.8253 17.0256 10.8195 17.0155 10.8132C16.9851 10.7945 16.954 10.775 16.923 10.7558C16.8913 10.7361 16.8596 10.7164 16.8274 10.6961C16.8004 10.6793 16.7732 10.6621 16.7459 10.6449C16.7323 10.6363 16.7183 10.6274 16.7046 10.6187C16.8899 10.1817 16.8047 9.65726 16.4486 9.30111C15.98 8.8325 15.2199 8.8325 14.7513 9.30111L14.7482 9.30415C14.5612 9.1729 14.3699 9.03734 14.1749 8.89808C14.5123 8.42905 14.4703 7.7714 14.0486 7.34962C13.58 6.88102 12.8199 6.88102 12.3513 7.34962L12.2276 7.47337C11.717 7.09186 11.2354 6.72652 10.8164 6.40425C10.805 6.39558 10.7932 6.38813 10.7816 6.38002C10.3926 6.10646 9.86174 6.14977 9.52256 6.489L8.94736 7.0642L8.70098 7.31044C8.37511 7.63631 8.31399 8.12685 8.51766 8.51441C8.56467 8.60385 8.62575 8.68785 8.70094 8.76303L8.92453 8.98663C8.92664 8.98873 8.92786 8.99127 8.92983 8.99342C9.00183 9.07372 8.97609 9.20272 8.87967 9.24453C8.86378 9.25133 8.84812 9.25751 8.83228 9.26417C8.81719 9.27012 8.79928 9.27711 8.77472 9.28662C8.74552 9.29787 8.74552 9.29787 8.71416 9.3102C8.70352 9.31442 8.69395 9.31976 8.68397 9.32468C8.09963 9.55437 7.55565 9.67474 7.04936 9.69945C7.02629 9.69598 7.00295 9.69378 6.97919 9.69443C5.9606 9.72204 5.10528 9.37067 4.39939 8.76313C4.15991 8.55702 3.95572 8.33586 3.78735 8.11555C3.68845 7.98618 3.62512 7.88882 3.59742 7.83979C3.53882 7.73615 3.43706 7.66396 3.31982 7.64296C3.03197 7.59135 2.77641 7.68576 2.54199 7.91624C1.99913 8.44972 1.57051 9.71749 1.12215 11.6233C1.11953 11.6345 1.11695 11.6459 1.11433 11.6572C0.925936 12.4613 0.754375 13.3194 0.602735 14.1776C0.54897 14.482 0.50158 14.7647 0.460987 15.0185C0.44069 15.1454 0.425784 15.2419 0.416268 15.305L0.0216775 16.4543C-0.0084629 16.5421 -0.00715041 16.6377 0.0254743 16.7246C0.102067 16.9289 0.328097 17.1598 0.755172 17.355C1.37017 17.6362 2.31211 17.7982 3.65601 17.7982H21.1999C21.3156 17.7918 21.4632 17.7745 21.6497 17.739C21.9593 17.6801 22.2695 17.5893 22.5629 17.4583C23.4448 17.0647 24.0003 16.3895 23.9997 15.4043C23.9997 15.4024 24 15.4003 24 15.3983ZM3.87693 9.37034C4.69128 10.0717 5.65802 10.4837 6.76666 10.5037C7.56404 11.8884 8.0828 13.4148 8.29196 14.9983H6.79998V13.7983C6.79998 13.1354 6.26289 12.5983 5.59999 12.5983H1.72407C1.77516 12.3584 1.82771 12.1219 1.88162 11.89C1.88808 11.8623 1.89441 11.8341 1.90088 11.8065C2.31572 10.0434 2.80092 8.78619 3.06736 8.49439C3.25082 8.75347 3.51937 9.06237 3.87693 9.37034ZM1.4326 14.0834C1.47343 13.8578 1.51632 13.6289 1.56127 13.3983H5.59995C5.82101 13.3983 5.99993 13.5772 5.99993 13.7983V14.9982H1.27501C1.28729 14.923 1.30032 14.8442 1.3141 14.7621C1.34996 14.5487 1.38803 14.3302 1.42806 14.1085C1.4296 14.1002 1.4311 14.0918 1.4326 14.0834ZM19.3661 12.6293C19.4326 12.6398 19.5078 12.6515 19.6516 12.6739C19.7687 12.6922 19.8559 12.7059 19.9419 12.72C20.1632 12.756 20.3497 12.7892 20.527 12.8249C22.1829 13.1581 23.0359 13.7466 23.1785 14.9983H9.09848C8.90072 13.4006 8.40666 11.8563 7.64593 10.4405C8.02205 10.3807 8.41233 10.2783 8.81639 10.1302L13.6391 13.2686C15.2357 14.3073 17.3423 13.9347 18.4945 12.4622C18.5422 12.4762 18.5883 12.4887 18.6314 12.498C18.8319 12.5414 19.0446 12.5787 19.3661 12.6293ZM10.0881 7.05516C10.152 6.99113 10.2504 6.98353 10.323 7.03495C10.3248 7.03627 10.3268 7.03716 10.3287 7.03856C10.7237 7.3424 11.1759 7.68581 11.656 8.04524L11.6459 8.05532L11.503 8.1981C11.4956 8.20551 11.4888 8.21319 11.4816 8.22074C11.4741 8.22857 11.4665 8.23635 11.4593 8.24432C11.4511 8.25341 11.4433 8.26279 11.4355 8.27202C11.4296 8.27891 11.4236 8.28576 11.418 8.29274C11.4097 8.30291 11.4019 8.31327 11.394 8.32368C11.3893 8.32986 11.3845 8.33605 11.38 8.34233C11.3718 8.35363 11.3639 8.36507 11.3561 8.37655C11.3525 8.3819 11.3489 8.38719 11.3454 8.39254C11.3372 8.40505 11.3293 8.41766 11.3217 8.43041C11.3191 8.43472 11.3166 8.43899 11.3141 8.4433C11.306 8.45713 11.2982 8.4711 11.2907 8.48516C11.2892 8.48807 11.2877 8.49097 11.2862 8.49393C11.2781 8.50944 11.2703 8.525 11.263 8.5408C11.2626 8.5416 11.2623 8.54244 11.2619 8.54324C11.2129 8.64913 11.1804 8.76031 11.164 8.87338C11.1639 8.87394 11.1638 8.87445 11.1638 8.87502C11.1614 8.89128 11.1596 8.90755 11.1579 8.92386C11.1576 8.92658 11.1572 8.92925 11.1569 8.93197C11.1568 8.93333 11.1567 8.93473 11.1567 8.93609C11.1554 8.9502 11.1544 8.96431 11.1536 8.97842C11.1532 8.98503 11.1529 8.99164 11.1526 8.9982C11.1522 9.01044 11.1519 9.02267 11.1517 9.03491C11.1516 9.04372 11.1517 9.05253 11.1518 9.06134C11.1519 9.07175 11.1521 9.08216 11.1525 9.09256C11.1529 9.10376 11.1536 9.11492 11.1544 9.12612C11.1549 9.13437 11.1554 9.14262 11.1561 9.15087C11.1574 9.16508 11.1589 9.17923 11.1607 9.19334C11.1613 9.19878 11.1619 9.20422 11.1627 9.20965C11.1653 9.22906 11.1684 9.24842 11.172 9.26769C11.172 9.26797 11.1721 9.2682 11.1721 9.26848C11.1765 9.29215 11.1817 9.31573 11.1875 9.33922C11.2072 9.41796 11.2352 9.49503 11.271 9.56918C11.2716 9.57035 11.2722 9.57157 11.2728 9.57275C11.2813 9.59023 11.2903 9.60757 11.2997 9.62468C11.301 9.62698 11.3022 9.62923 11.3035 9.63153C11.3124 9.64746 11.3217 9.66326 11.3314 9.67887C11.3333 9.68187 11.3352 9.68492 11.3371 9.68792C11.3464 9.70268 11.3561 9.71726 11.3662 9.7317C11.3686 9.73517 11.371 9.73863 11.3734 9.74206C11.3833 9.75593 11.3936 9.76957 11.4041 9.78312C11.4069 9.78677 11.4097 9.79048 11.4126 9.79413C11.4233 9.80759 11.4345 9.82085 11.4459 9.83393C11.4488 9.83721 11.4515 9.84059 11.4544 9.84387C11.4672 9.85816 11.4804 9.87223 11.4939 9.88605C11.4956 9.88779 11.4972 9.88962 11.4989 9.89135C11.5003 9.89271 11.5016 9.89416 11.5029 9.89557C11.5335 9.92613 11.5653 9.95459 11.5982 9.98112C11.6013 9.98365 11.6046 9.98604 11.6078 9.98857C11.6209 9.99898 11.6342 10.0092 11.6477 10.019C11.6501 10.0208 11.6523 10.0226 11.6547 10.0244C11.6579 10.0267 11.6613 10.0285 11.6645 10.0307C11.6899 10.0485 11.7156 10.0655 11.7421 10.0811C11.7477 10.0844 11.7536 10.0874 11.7593 10.0907C11.7866 10.1062 11.8144 10.1209 11.8426 10.1341C11.8429 10.1342 11.8431 10.1344 11.8434 10.1345C12.2877 10.3421 12.8329 10.2625 13.1998 9.89562L13.4544 9.64099L13.6144 9.48111C13.8046 9.61723 13.9911 9.74979 14.1741 9.87865L13.9029 10.1498C13.8952 10.1575 13.8881 10.1655 13.8807 10.1733C13.8736 10.1808 13.8662 10.1883 13.8593 10.1959C13.8509 10.2053 13.8429 10.2149 13.8348 10.2244C13.8293 10.2311 13.8235 10.2376 13.8181 10.2443C13.8096 10.2547 13.8016 10.2654 13.7934 10.2761C13.789 10.282 13.7845 10.2878 13.7802 10.2937C13.7717 10.3053 13.7636 10.317 13.7557 10.3288C13.7523 10.3338 13.7489 10.3388 13.7456 10.3439C13.7372 10.3566 13.7292 10.3695 13.7214 10.3825C13.7191 10.3865 13.7167 10.3905 13.7143 10.3946C13.7061 10.4087 13.6981 10.4229 13.6906 10.4372C13.6891 10.4398 13.6878 10.4424 13.6864 10.4451C13.6782 10.4608 13.6704 10.4767 13.6629 10.4927C13.6627 10.4932 13.6624 10.4937 13.6622 10.4943C13.613 10.6004 13.5803 10.7118 13.564 10.8252C13.5639 10.8256 13.5639 10.826 13.5638 10.8265C13.5615 10.8429 13.5595 10.8594 13.5579 10.8759C13.5576 10.8784 13.5572 10.881 13.557 10.8835C13.5569 10.8848 13.5569 10.8861 13.5567 10.8874C13.5554 10.9018 13.5544 10.9162 13.5536 10.9307C13.5533 10.9368 13.5529 10.943 13.5527 10.9492C13.5522 10.9619 13.5519 10.9745 13.5518 10.9872C13.5517 10.9955 13.5518 11.0037 13.5519 11.0119C13.552 11.023 13.5522 11.0339 13.5526 11.0449C13.5531 11.0553 13.5537 11.0657 13.5543 11.076C13.5549 11.0851 13.5555 11.0942 13.5563 11.1033C13.5574 11.1163 13.5589 11.1294 13.5605 11.1423C13.5613 11.1489 13.5619 11.1555 13.5629 11.1621C13.5653 11.1796 13.5681 11.197 13.5713 11.2144C13.5717 11.2166 13.572 11.2188 13.5724 11.221C13.5878 11.3031 13.6119 11.3837 13.6445 11.4618C13.6455 11.464 13.6464 11.4662 13.6474 11.4684C13.6545 11.4851 13.6619 11.5016 13.6698 11.518C13.6716 11.5218 13.6735 11.5256 13.6754 11.5294C13.6826 11.544 13.6901 11.5585 13.6979 11.5728C13.7006 11.5778 13.7034 11.5827 13.7062 11.5877C13.7135 11.6006 13.721 11.6133 13.7288 11.626C13.7324 11.6319 13.7361 11.6378 13.7398 11.6436C13.7471 11.655 13.7546 11.6662 13.7623 11.6774C13.7669 11.6841 13.7715 11.6908 13.7762 11.6975C13.7834 11.7075 13.7908 11.7173 13.7984 11.7271C13.804 11.7345 13.8096 11.7418 13.8155 11.7491C13.8224 11.7578 13.8296 11.7662 13.8368 11.7747C13.8436 11.7827 13.8504 11.7907 13.8574 11.7986C13.8639 11.8059 13.8709 11.8131 13.8777 11.8203C13.8857 11.8288 13.8936 11.8374 13.9019 11.8458C13.9023 11.8462 13.9026 11.8465 13.903 11.847C13.9089 11.8529 13.9152 11.8585 13.9212 11.8643C13.9393 11.8817 13.9581 11.8986 13.9775 11.9151C13.9832 11.9199 13.9889 11.9251 13.9948 11.9299C14.007 11.9399 14.0197 11.9495 14.0325 11.959C14.0362 11.9619 14.0398 11.9648 14.0436 11.9675C14.0474 11.9703 14.0509 11.9733 14.0548 11.9761C14.0598 11.9797 14.0653 11.9826 14.0704 11.9862C14.0905 12.0001 14.111 12.0135 14.1317 12.026C14.1433 12.033 14.1548 12.0396 14.1666 12.0461C14.1882 12.0582 14.2102 12.0697 14.2324 12.0804C14.2371 12.0826 14.2418 12.0851 14.2465 12.0873C14.6902 12.2931 15.2338 12.213 15.5999 11.847L15.6285 11.8184C15.6291 11.8178 15.6297 11.8173 15.6302 11.8168L15.9357 11.5113L16.2005 11.2466C16.7959 11.6265 17.3029 11.9247 17.7231 12.1378C16.8004 13.1453 15.2584 13.3678 14.0755 12.5983L9.58485 9.67592C9.73649 9.47164 9.79883 9.21214 9.76194 8.96127C9.76185 8.96066 9.76176 8.96005 9.76171 8.95944C9.75763 8.93192 9.75257 8.90455 9.74605 8.87736C9.74596 8.87698 9.74587 8.87661 9.74577 8.87628C9.74005 8.85238 9.73312 8.8287 9.72552 8.80513C9.7236 8.79913 9.72163 8.79313 9.71957 8.78713C9.71146 8.76369 9.70274 8.74044 9.69276 8.71752C9.69093 8.71335 9.68877 8.70927 9.6869 8.7051C9.67832 8.68611 9.66899 8.66736 9.65906 8.64885C9.65512 8.64149 9.65113 8.63417 9.64701 8.62686C9.63496 8.60572 9.62235 8.58482 9.60852 8.56438C9.60609 8.56082 9.60341 8.55735 9.60098 8.55378C9.58809 8.53522 9.57431 8.51708 9.55991 8.49922C9.55499 8.49308 9.54998 8.48704 9.54487 8.48099C9.52785 8.46088 9.51018 8.4411 9.49115 8.42202C9.49087 8.42174 9.49059 8.42136 9.49031 8.42108L9.26671 8.19749C9.24459 8.17537 9.228 8.14977 9.21693 8.12249C9.1837 8.04051 9.20034 7.94291 9.26676 7.87649L9.51145 7.63181L10.0881 7.05516ZM15.8828 9.86688C16.039 10.0231 16.039 10.2766 15.8828 10.4328L15.8656 10.4501C15.8647 10.4509 15.8637 10.4517 15.8628 10.4526L15.6143 10.7011L15.0611 11.2541C14.928 11.3846 14.7367 11.4237 14.5907 11.3642C14.5607 11.3511 14.5321 11.3342 14.5055 11.3134C14.5017 11.3103 14.4978 11.3074 14.4942 11.3042C14.4885 11.2995 14.4832 11.2945 14.4778 11.2894C14.4714 11.2833 14.4653 11.2772 14.4594 11.2709C14.4561 11.2674 14.4529 11.2638 14.4498 11.2602C14.4425 11.2518 14.4356 11.2432 14.4292 11.2344C14.4275 11.2322 14.4259 11.23 14.4243 11.2277C14.4168 11.2172 14.4099 11.2063 14.4037 11.1952C14.4031 11.1942 14.4025 11.1933 14.402 11.1924C14.3745 11.1429 14.3582 11.0889 14.3531 11.0339C14.3526 11.0274 14.3525 11.0208 14.3522 11.0143C14.3519 11.0079 14.3515 11.0014 14.3516 10.995C14.3517 10.9866 14.3522 10.9782 14.3528 10.9698C14.3531 10.9653 14.3534 10.9607 14.3538 10.9562C14.3548 10.947 14.3562 10.9378 14.3578 10.9287C14.3585 10.925 14.3591 10.9214 14.3598 10.9177C14.3618 10.9082 14.3641 10.8988 14.3667 10.8895C14.3677 10.8862 14.3686 10.8828 14.3697 10.8796C14.3726 10.8701 14.3758 10.8608 14.3795 10.8516C14.3807 10.8484 14.3821 10.8452 14.3835 10.842C14.3873 10.8329 14.3914 10.8239 14.396 10.8151C14.3977 10.8118 14.3996 10.8085 14.4015 10.8052C14.4062 10.7967 14.411 10.7882 14.4164 10.78C14.4186 10.7766 14.4211 10.7734 14.4234 10.7701C14.4291 10.762 14.4346 10.754 14.4409 10.7463C14.4426 10.7442 14.4446 10.7423 14.4464 10.7403C14.4535 10.7319 14.4607 10.7235 14.4686 10.7156L14.7214 10.4628L15.0771 10.1071C15.0776 10.1066 15.0779 10.106 15.0785 10.1055L15.3171 9.8667C15.4731 9.7107 15.7266 9.7107 15.8828 9.86688ZM13.4829 7.91545C13.639 8.07163 13.639 8.32518 13.4829 8.48136L13.2924 8.67177C13.2912 8.67289 13.29 8.67388 13.2888 8.675L12.6644 9.29942C12.5304 9.43367 12.3354 9.47332 12.1877 9.41154C12.1818 9.40892 12.1759 9.40639 12.1702 9.40343C12.1679 9.40231 12.1656 9.40118 12.1633 9.39997C12.1446 9.38998 12.1267 9.37812 12.1095 9.365C12.1033 9.36017 12.097 9.35534 12.0912 9.35023C12.0876 9.34714 12.0841 9.34386 12.0805 9.34058C12.0721 9.33275 12.064 9.32473 12.0565 9.31639C12.0548 9.31461 12.0532 9.31283 12.0516 9.31104C12.0426 9.30078 12.0341 9.29028 12.0264 9.27936C12.0261 9.27898 12.0258 9.27861 12.0255 9.27823C11.9836 9.21917 11.9594 9.15134 11.9531 9.08225C11.9525 9.07597 11.9524 9.06969 11.9522 9.06336C11.9519 9.05675 11.9516 9.05014 11.9516 9.04353C11.9517 9.03505 11.9522 9.02652 11.9528 9.01803C11.9531 9.01367 11.9533 9.00936 11.9538 9.005C11.9548 8.99548 11.9562 8.98602 11.9579 8.97659C11.9584 8.97331 11.959 8.97003 11.9597 8.9668C11.9617 8.95686 11.9641 8.94697 11.9669 8.93717C11.9676 8.93445 11.9685 8.93173 11.9693 8.92906C11.9724 8.91903 11.9758 8.90909 11.9797 8.8993C11.9807 8.89686 11.9817 8.89447 11.9827 8.89208C11.9869 8.88219 11.9913 8.87239 11.9963 8.86278C11.9974 8.86063 11.9987 8.85852 11.9999 8.85636C12.0052 8.84666 12.0107 8.83705 12.0168 8.82767C12.0178 8.82617 12.019 8.82472 12.02 8.82322C12.0341 8.80245 12.0501 8.78258 12.0685 8.7642L12.3752 8.45741L12.5487 8.28397C12.5494 8.28327 12.55 8.28252 12.5507 8.28182L12.917 7.91535C13.0732 7.75926 13.3267 7.75926 13.4829 7.91545ZM22.2368 16.7278C22.0053 16.8312 21.7529 16.905 21.5001 16.9532C21.349 16.9819 21.2342 16.9953 21.175 16.999L3.65601 16.9982C2.41796 16.9982 1.58565 16.855 1.08779 16.6275C0.987998 16.5819 0.911077 16.537 0.853655 16.4948L1.09281 15.7983H8.73998C8.74022 15.7983 8.7405 15.7983 8.74073 15.7983H23.1484C23.0311 16.2146 22.7163 16.5138 22.2368 16.7278Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_16">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseIcon>
  );
};
