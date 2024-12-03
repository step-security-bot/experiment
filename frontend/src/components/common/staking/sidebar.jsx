import React, { useState, useEffect } from "react";
import ConnectWalletPhone from "../buttons/connect_wallet_phone";
import { useReadContract } from 'wagmi'
import tokenStakingPoolABI from "../../assets/abi/tokenstakingpool.json";

const tokenStakingPoolContracts = [
  "0x6d7e4b2ed0C2903E476641b21755E2CB318CE79B",
  "0xA092ac34f2B80c9e944ca41d076a302bcb5d8640",
  "0x1ADe120dcB36D9113B4A55f51c2a4D6C77703C93"
];


function Sidebar() {
  const [totalRewardedETH, setTotalRewardedETH] = useState(0);
  const { data: totalDeposited, isError, isLoading, isFetched } = useReadContract({
    abi: tokenStakingPoolABI,
    address: tokenStakingPoolContracts[0],
    functionName: 'totalDeposited',
    watch: true
  });

  if (!isLoading && !isError) {
    console.log("The counter value is ", (totalDeposited).toString())
  }

  useEffect(() => {
    console.log("totalDeposited:", totalDeposited);
    setTotalRewardedETH(totalDeposited);
  }, [isFetched]);

  return (
    <div className="w-full md:w-[266px] min-w-[266px] md:py-8 py-4 px-4 items-center">
      <div className="flex items-center justify-start w-full gap-7 border-b border-slate-500 pb-[20px]">
        <svg
          width="83"
          height="45"
          viewBox="0 0 42 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.773 13.159L28.6455 15.4991L21.0001 22.3401L13.3547 15.4991L15.2272 13.159L2.61133 1.45752L20.0653 12.3186L18.1214 15.0191L21.0001 16.7896L23.8788 15.0191L21.9349 12.3186L39.3889 1.45752L26.773 13.159Z"
            fill="url(#paint0_linear_1_1104)"
          />
          <path
            d="M20.9994 2.08584e-05L20.9994 4.40912L22.1028 2.79883L27.2887 6.17276L24.6774 9.31665L30.1208 5.86604L20.9994 2.08584e-05Z"
            fill="url(#paint1_linear_1_1104)"
          />
          <path
            d="M21.0006 2.08584e-05L21.0006 4.40912L19.8972 2.79883L14.7113 6.17276L17.3226 9.31665L11.8792 5.86604L21.0006 2.08584e-05Z"
            fill="url(#paint2_linear_1_1104)"
          />
          <path
            d="M42 12.8055L33.6515 7.7832L31.9965 9.5084L35.0245 13.4108L21 24.0001L42 12.8055Z"
            fill="url(#paint3_linear_1_1104)"
          />
          <path
            d="M0 12.8055L8.3485 7.7832L10.0035 9.5084L6.97547 13.4108L21 24.0001L0 12.8055Z"
            fill="url(#paint4_linear_1_1104)"
          />
          <path
            d="M20.9999 15.4122L19.676 14.6181L20.5755 13.3924L20.9999 12.8054L21.4242 13.3924L22.3238 14.6181L20.9999 15.4122Z"
            fill="url(#paint5_linear_1_1104)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1104"
              x1="21.0001"
              y1="-2.29958"
              x2="13.4831"
              y2="21.7248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_1104"
              x1="22.0957"
              y1="8.64242"
              x2="29.6975"
              y2="7.25986"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_1104"
              x1="19.9043"
              y1="8.64242"
              x2="12.3025"
              y2="7.25986"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_1104"
              x1="23.5241"
              y1="8.95679"
              x2="40.6153"
              y2="13.0682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_1104"
              x1="18.4759"
              y1="8.95679"
              x2="1.38474"
              y2="13.0682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_1104"
              x1="20.9999"
              y1="-0.0752834"
              x2="9.16714"
              y2="13.4741"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FFC2" />
              <stop offset="0.995" stopColor="#5AB0FF" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="56"
          height="49"
          viewBox="0 0 48 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.9743 13.4422L43.7831 6.13403H47.5785L41.9931 15.8513L47.7131 25.7301H43.9446L40.0281 18.3008L36.125 25.7301H32.3027L38.0362 15.8513L32.4508 6.13403H36.2327L39.9743 13.4422Z"
            fill="white"
          />
          <path
            d="M23.339 15.5014L27.444 6.13403H31.0509L24.9137 18.7315L24.8868 25.7301H21.7239L21.7105 18.6373L15.6271 6.13403H19.2206L23.339 15.5014Z"
            fill="white"
          />
          <path
            d="M13.1238 25.7301H9.88022L3.51419 12.2444L3.50073 25.7301H0.230225V6.13403H3.51419L9.83985 19.566L9.86677 6.13403H13.1238V25.7301Z"
            fill="white"
          />
          <path
            d="M46.6363 31.6509C46.8651 31.6509 47.1029 31.6666 47.3496 31.698C47.6009 31.7294 47.7893 31.772 47.9149 31.8258L47.7467 33.0439C47.5044 32.99 47.2734 32.9519 47.0535 32.9295C46.8382 32.9026 46.6116 32.8891 46.3739 32.8891C46.0688 32.8891 45.7929 32.9272 45.5461 33.0035C45.2994 33.0753 45.0841 33.1829 44.9001 33.3265C44.7341 33.4521 44.5883 33.6069 44.4627 33.7908C44.3416 33.9703 44.2406 34.1722 44.1599 34.3965V39.0667H42.9082V31.7855H44.0926L44.1464 32.7612L44.1531 32.9429C44.4492 32.5436 44.8037 32.2296 45.2164 32.0008C45.6336 31.7675 46.1069 31.6509 46.6363 31.6509Z"
            fill="white"
          />
          <path
            d="M36.8047 39.2013C36.2932 39.2013 35.8222 39.1138 35.3915 38.9388C34.9653 38.7639 34.5997 38.5194 34.2946 38.2053C33.9895 37.8913 33.7518 37.5189 33.5813 37.0883C33.4108 36.6576 33.3256 36.1888 33.3256 35.6818V35.3992C33.3256 34.8115 33.4198 34.2866 33.6082 33.8245C33.7966 33.3579 34.0479 32.9631 34.3619 32.6401C34.6714 32.3216 35.0236 32.0771 35.4184 31.9066C35.8177 31.7361 36.2259 31.6509 36.6432 31.6509C37.1681 31.6509 37.6257 31.7428 38.016 31.9268C38.4108 32.1062 38.7383 32.3552 38.9985 32.6738C39.2587 32.9968 39.4516 33.3759 39.5772 33.811C39.7073 34.2462 39.7724 34.7173 39.7724 35.2242V35.7827H34.5705V35.8299C34.6019 36.1843 34.6714 36.4961 34.7791 36.7652C34.8913 37.0344 35.0438 37.2722 35.2367 37.4786C35.4341 37.6984 35.6719 37.8711 35.95 37.9967C36.2282 38.1223 36.5355 38.1852 36.872 38.1852C37.3161 38.1852 37.7109 38.0954 38.0563 37.916C38.4018 37.7365 38.6889 37.4988 38.9177 37.2027L39.6781 37.7948C39.4359 38.1627 39.0725 38.4902 38.588 38.7773C38.1079 39.06 37.5135 39.2013 36.8047 39.2013ZM36.6432 32.6738C36.3919 32.6738 36.1542 32.7209 35.9299 32.8151C35.7055 32.9048 35.5037 33.0371 35.3242 33.2121C35.1448 33.3916 34.9922 33.6114 34.8666 33.8716C34.7455 34.1273 34.6602 34.4234 34.6109 34.7599H38.5274V34.6993C38.5274 34.475 38.4848 34.235 38.3995 33.9793C38.3143 33.7191 38.1954 33.4947 38.0429 33.3063C37.8904 33.1179 37.6974 32.9654 37.4642 32.8487C37.2354 32.7321 36.9617 32.6738 36.6432 32.6738Z"
            fill="white"
          />
          <path
            d="M26.5557 32.8688C26.6544 32.7208 26.7643 32.5862 26.8855 32.4651C27.0066 32.3394 27.1345 32.2295 27.2691 32.1353C27.4844 31.9783 27.7199 31.8594 27.9756 31.7787C28.2358 31.6979 28.5118 31.6553 28.8034 31.6508C29.1847 31.6508 29.5301 31.7069 29.8397 31.819C30.1537 31.9267 30.4207 32.0972 30.6405 32.3305C30.8603 32.5638 31.0286 32.8599 31.1452 33.2188C31.2663 33.5732 31.3269 33.9949 31.3269 34.4839V39.0666H30.082V34.4704C30.082 34.1833 30.0483 33.9321 29.981 33.7167C29.9137 33.4969 29.815 33.3152 29.6849 33.1716C29.5458 33.0146 29.3709 32.898 29.16 32.8217C28.9492 32.741 28.7069 32.7028 28.4332 32.7073C28.2089 32.7073 27.9958 32.7387 27.7939 32.8015C27.5921 32.8643 27.4059 32.9541 27.2354 33.0707C27.1008 33.1604 26.9752 33.2659 26.8586 33.387C26.7464 33.5036 26.6455 33.6337 26.5557 33.7773V39.0666H25.3108V28.7302H26.5557V32.8688Z"
            fill="white"
          />
          <path
            d="M17.0269 41.8662V31.7855H18.1641L18.2247 32.5795C18.3234 32.4539 18.4311 32.3418 18.5477 32.2431C18.6643 32.1399 18.79 32.0524 18.9246 31.9806C19.113 31.873 19.3216 31.7922 19.5504 31.7384C19.7837 31.68 20.0327 31.6509 20.2974 31.6509C20.7639 31.6509 21.1767 31.7428 21.5356 31.9268C21.8945 32.1107 22.1951 32.3664 22.4373 32.6939C22.6796 33.0214 22.8635 33.414 22.9891 33.8716C23.1147 34.3247 23.1776 34.8227 23.1776 35.3655V35.5068C23.1776 36.0273 23.1147 36.514 22.9891 36.9671C22.8635 37.4158 22.6796 37.8061 22.4373 38.138C22.1951 38.47 21.8945 38.7302 21.5356 38.9187C21.1812 39.1071 20.7751 39.2013 20.3175 39.2013C20.0394 39.2013 19.7792 39.1721 19.5369 39.1138C19.2992 39.0555 19.0838 38.9725 18.8909 38.8648C18.7743 38.7975 18.6643 38.7235 18.5612 38.6428C18.458 38.5575 18.3615 38.4655 18.2718 38.3668V41.8662H17.0269ZM21.9326 35.3655C21.9326 35.0111 21.8922 34.6746 21.8115 34.3561C21.7352 34.0331 21.6163 33.7482 21.4548 33.5015C21.2888 33.2592 21.0802 33.0663 20.829 32.9227C20.5778 32.7792 20.2772 32.7074 19.9272 32.7074C19.7343 32.7074 19.5549 32.7298 19.3889 32.7747C19.2274 32.8196 19.0816 32.8846 18.9515 32.9698C18.8079 33.0551 18.6801 33.1605 18.5679 33.2861C18.4557 33.4117 18.357 33.5508 18.2718 33.7034V37.2094C18.3481 37.344 18.4355 37.4696 18.5342 37.5862C18.6329 37.7029 18.7451 37.8016 18.8707 37.8823C19.0143 37.9765 19.1735 38.0506 19.3485 38.1044C19.528 38.1582 19.7254 38.1852 19.9407 38.1852C20.2861 38.1852 20.5845 38.1134 20.8357 37.9698C21.0869 37.8218 21.2933 37.6244 21.4548 37.3776C21.6163 37.1309 21.7352 36.846 21.8115 36.523C21.8922 36.2 21.9326 35.8613 21.9326 35.5068V35.3655Z"
            fill="white"
          />
          <path
            d="M8.95154 31.7853H12.6729V37.9898H15.0484V39.0665H8.95154V37.9898H11.428V32.8687H8.95154V31.7853ZM11.2665 29.8741C11.2665 29.7665 11.2822 29.6655 11.3136 29.5713C11.3495 29.4771 11.4033 29.3963 11.4751 29.329C11.5334 29.2707 11.6074 29.2259 11.6971 29.1945C11.7914 29.1586 11.8968 29.1406 12.0134 29.1406C12.1301 29.1406 12.2333 29.1586 12.323 29.1945C12.4127 29.2259 12.4867 29.2707 12.5451 29.329C12.6168 29.3919 12.6707 29.4704 12.7066 29.5646C12.7424 29.6588 12.7604 29.762 12.7604 29.8741C12.7604 30.076 12.6976 30.2443 12.572 30.3788C12.4464 30.5134 12.2602 30.5807 12.0134 30.5807C11.7622 30.5807 11.5738 30.5134 11.4482 30.3788C11.327 30.2443 11.2665 30.076 11.2665 29.8741Z"
            fill="white"
          />
          <path
            d="M6.82504 36.1192C6.76672 36.5723 6.65008 36.9895 6.47511 37.3709C6.30015 37.7477 6.07359 38.0707 5.79544 38.3399C5.5128 38.6136 5.17858 38.8267 4.79276 38.9792C4.41142 39.1272 3.98522 39.2013 3.51416 39.2013C3.1104 39.2013 2.74252 39.1452 2.41054 39.033C2.08304 38.9164 1.79143 38.7571 1.53571 38.5552C1.27551 38.3533 1.05119 38.1156 0.862769 37.8419C0.678832 37.5682 0.526298 37.2699 0.405168 36.9469C0.279552 36.6239 0.18534 36.2852 0.122532 35.9308C0.0642106 35.5763 0.0328066 35.2174 0.0283203 34.854V33.488C0.0328066 33.1246 0.0642106 32.7657 0.122532 32.4113C0.18534 32.0568 0.279552 31.7181 0.405168 31.3951C0.526298 31.0721 0.678832 30.7738 0.862769 30.5001C1.05119 30.222 1.27551 29.9819 1.53571 29.7801C1.79143 29.5782 2.08304 29.4212 2.41054 29.309C2.73804 29.1924 3.10591 29.134 3.51416 29.134C4.00317 29.134 4.44058 29.2103 4.8264 29.3628C5.21222 29.5109 5.54421 29.7217 5.82236 29.9954C6.10051 30.2735 6.32258 30.6055 6.48857 30.9914C6.65905 31.3772 6.77121 31.8034 6.82504 32.2699H5.5801C5.53972 31.9739 5.47018 31.6979 5.37149 31.4422C5.27279 31.1865 5.14044 30.9622 4.97445 30.7693C4.80846 30.5764 4.60433 30.4261 4.36207 30.3184C4.1243 30.2063 3.84166 30.1502 3.51416 30.1502C3.21807 30.1502 2.95562 30.1995 2.72682 30.2982C2.50251 30.3924 2.3096 30.5225 2.14809 30.6885C1.9821 30.8545 1.84302 31.0474 1.73087 31.2673C1.62319 31.4871 1.53571 31.7204 1.46842 31.9671C1.40112 32.2139 1.35177 32.4673 1.32037 32.7275C1.29345 32.9833 1.27999 33.2323 1.27999 33.4745V34.854C1.27999 35.0963 1.29345 35.3475 1.32037 35.6077C1.35177 35.8635 1.40112 36.1147 1.46842 36.3614C1.53571 36.6127 1.62319 36.8482 1.73087 37.068C1.83854 37.2879 1.97537 37.4808 2.14136 37.6468C2.30735 37.8172 2.50251 37.9518 2.72682 38.0505C2.95114 38.1447 3.21358 38.1918 3.51416 38.1918C3.84166 38.1918 4.1243 38.1403 4.36207 38.0371C4.60433 37.9339 4.80846 37.7881 4.97445 37.5997C5.14044 37.4157 5.27279 37.1981 5.37149 36.9469C5.47018 36.6912 5.53972 36.4153 5.5801 36.1192H6.82504Z"
            fill="white"
          />
        </svg>

        <h1 className="md:hidden font-[RobotoMono] text-[20px] bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] text-transparent bg-clip-text">
          Staking
        </h1>
      </div>
      <div className="mt-5">
        <ConnectWalletPhone />
      </div>
      <div className="bg-gray-600  rounded-xl w-full flex flex-col items-start py-4 px-2.5 mt-5 font-[RobotoMono]">
        <div className="flex items-center gap-3">
          <h1 className="text-[19px] font-extrabold bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] text-transparent bg-clip-text">
            ETH Rewards
          </h1>
        </div>
        <p className="text-[14px] text-[#b5bcbe] font-extralight">
          Earn ETH by staking!
        </p>
        <div className="flex items-center gap-3">
          <h1 className="mt-2 text-[19px] font-extrabold bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] text-transparent bg-clip-text">
            {totalRewardedETH} ETH
          </h1>
        </div>
        <p className="text-[15px] text-[#b5bcbe] font-extralight">
          Total ETH Rewarded
        </p>
      </div>
    </div>
  );
}

export default Sidebar;