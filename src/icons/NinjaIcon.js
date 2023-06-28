import React from 'react';

const NinjaIcon = (props) => {
	return (
		<svg
			viewBox='0 0 91 90'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				opacity='0.917'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M44.9756 8.03399C45.6139 8.02522 46.1957 8.20708 46.7213 8.57953C55.9306 15.9704 64.1866 24.299 71.4887 33.5651C73.6793 29.1475 75.8977 24.7468 78.1442 20.3631C78.6232 20.0635 79.1325 19.9908 79.6717 20.1449C81.8359 21.2809 83.909 22.554 85.8908 23.9636C86.0363 24.5456 86.0363 25.1274 85.8908 25.7093C82.6464 32.4519 79.5549 39.253 76.6167 46.1124C76.944 47.7488 77.2713 49.3854 77.5987 51.0222C79.1061 52.158 80.6698 53.2126 82.2903 54.1863C82.776 54.5398 83.0671 55.0125 83.1631 55.6047C82.4424 57.3068 81.4968 58.8707 80.3263 60.2963C79.6872 60.4658 79.0688 60.4294 78.4715 60.1872C78.4109 63.2444 78.3017 66.2994 78.1442 69.3522C78.1512 69.8451 78.2241 70.3178 78.3624 70.7706C80.354 71.3128 82.2089 72.1492 83.9269 73.28C84.4357 74.9535 83.8173 75.7173 82.072 75.5713C77.7195 73.4537 73.137 72.1082 68.3246 71.5343C66.1913 72.8918 63.9365 74.0193 61.5599 74.9166C58.0661 76.0808 54.5747 77.2448 51.0856 78.4081C49.1038 79.4134 47.2125 80.5409 45.4121 81.7904C43.6116 80.5409 41.7203 79.4134 39.7385 78.4081C36.0313 77.1723 32.3216 75.9357 28.6096 74.6984C26.477 73.814 24.4404 72.7594 22.4996 71.5343C17.6871 72.1082 13.1046 73.4537 8.75208 75.5713C7.53252 75.9084 6.80515 75.472 6.56994 74.262C6.61421 73.737 6.83243 73.3005 7.22458 72.9527C8.89366 72.0089 10.6394 71.2452 12.4617 70.6615C12.5344 70.3341 12.6073 70.0068 12.6799 69.6795C12.5512 66.5156 12.4059 63.3515 12.2435 60.1872C11.6755 60.4189 11.0936 60.4551 10.4978 60.2963C9.32734 58.8707 8.38175 57.3068 7.66101 55.6047C7.75711 55.0125 8.04808 54.5398 8.53387 54.1863C10.1543 53.2126 11.718 52.158 13.2255 51.0222C13.5526 49.3862 13.8799 47.7496 14.2074 46.1124C11.267 39.2491 8.17567 32.4482 4.93333 25.7093C4.78785 25.1274 4.78785 24.5456 4.93333 23.9636C6.94871 22.6042 9.02175 21.3313 11.1524 20.1449C11.9216 20.0013 12.5401 20.256 13.0073 20.9086C15.1167 25.1274 17.226 29.3463 19.3355 33.5651C26.842 23.9854 35.3888 15.4751 44.9756 8.03399ZM44.9756 11.7436C45.2752 11.7094 45.5663 11.7458 45.8485 11.8527C53.2894 17.9841 60.1631 24.7123 66.4697 32.0376C69.4261 35.4026 71.5356 39.2576 72.7979 43.6029C75.1418 52.2154 75.8329 60.9439 74.871 69.7886C73.7799 69.4977 72.6888 69.2066 71.5978 68.9157C74.9116 65.1513 75.3116 61.0779 72.7979 56.6958C67.2021 47.6811 59.8192 40.5165 50.6492 35.2017C47.9907 33.8125 45.2268 33.5214 42.3571 34.3288C39.5993 35.3455 37.0536 36.7276 34.7196 38.4749C28.5376 43.2016 23.264 48.7661 18.899 55.1683C17.8016 56.8542 17.0014 58.6726 16.4987 60.6236C16.0337 63.8473 16.943 66.6114 19.2264 68.9157C18.1353 69.2066 17.0442 69.4977 15.9531 69.7886C15.0554 61.4895 15.601 53.27 17.5898 45.1304C18.5381 41.5558 19.9929 38.2097 21.954 35.0926C28.8631 26.5468 36.5371 18.764 44.9756 11.7436ZM10.716 23.7454C10.9072 23.7168 11.0527 23.7895 11.1524 23.9636C13.3245 28.2352 15.434 32.5266 17.4806 36.8383C16.7136 38.2305 16.0952 39.6853 15.6258 41.2025C13.1484 36.028 10.7118 30.8271 8.31565 25.6002C9.08106 24.9447 9.88116 24.3265 10.716 23.7454ZM79.6717 23.7454C80.7693 24.1559 81.7148 24.7741 82.5085 25.6002C80.1123 30.8271 77.6757 36.028 75.1983 41.2025C74.7289 39.6853 74.1105 38.2305 73.3435 36.8383C75.5813 32.5091 77.6905 28.1448 79.6717 23.7454ZM44.5392 36.8383C45.9004 36.8147 47.2097 37.0694 48.4671 37.602C50.7939 38.6918 52.976 40.0011 55.0135 41.5299C48.6141 43.1298 42.2133 43.1298 35.8106 41.5299C38.451 39.4464 41.3605 37.8824 44.5392 36.8383ZM32.7556 44.0393C39.148 45.5852 45.6218 45.9854 52.1767 45.2395C54.0335 45.0117 55.8519 44.6117 57.6321 44.0393C59.3156 45.1754 60.8431 46.5209 62.2146 48.0763C60.094 50.4151 57.7663 52.5246 55.2317 54.4045C54.3237 55.014 53.3782 55.0866 52.3949 54.6227C50.7948 53.8225 49.1944 53.0226 47.5942 52.2224C46.1394 51.7859 44.6848 51.7859 43.2299 52.2224C41.2416 53.3442 39.1685 54.2535 37.0108 54.95C35.5887 54.4388 34.3157 53.675 33.1921 52.6588C31.6528 51.1195 30.1253 49.592 28.6096 48.0763C29.9688 46.6804 31.3508 45.3347 32.7556 44.0393ZM25.1181 51.6768C25.8474 54.5167 26.6838 57.3535 27.6276 60.1872C28.0396 61.3754 28.6216 62.4664 29.3733 63.4604C32.4309 66.8837 35.8133 69.9023 39.5203 72.5163C41.3092 73.7016 43.2731 74.3925 45.4121 74.5893C47.8033 74.3032 49.9854 73.4666 51.9585 72.0798C55.6081 69.3766 58.9178 66.2852 61.8872 62.8058C62.251 62.0784 62.6145 61.3509 62.9783 60.6236C63.9441 57.7273 64.817 54.8178 65.5969 51.895C68.0404 54.5985 69.9317 57.6535 71.2704 61.06C71.5166 63.8058 70.5346 66.0244 68.3246 67.7156C65.7173 69.638 62.8805 71.1655 59.8142 72.2981C56.6737 73.2831 53.5458 74.3015 50.431 75.3531C48.6883 76.1513 47.0153 77.0606 45.4121 78.0807C43.8088 77.0606 42.1358 76.1513 40.3931 75.3531C36.4941 74.1747 32.6391 72.8654 28.8278 71.4252C25.8158 70.1561 23.161 68.3741 20.863 66.079C19.5474 64.565 19.1109 62.8193 19.5537 60.8418C20.0761 59.579 20.6578 58.3424 21.2994 57.1322C22.5408 55.2756 23.8137 53.4572 25.1181 51.6768ZM28.6096 52.5497C30.3287 54.1595 32.147 55.6505 34.0649 57.0231C35.8122 58.1148 37.6305 58.2603 39.5203 57.4595C40.9707 56.7396 42.4256 56.0123 43.8846 55.2774C44.903 54.8409 45.9212 54.8409 46.9396 55.2774C48.5262 56.2526 50.1992 57.0525 51.9585 57.6777C53.647 58.1656 55.2474 57.9474 56.7592 57.0231C58.669 55.6961 60.451 54.2051 62.1054 52.5497C61.5913 55.6937 60.5729 58.676 59.0504 61.4965C56.4581 64.3073 53.6575 66.8894 50.6492 69.2431C49.0848 70.4254 47.3391 71.1891 45.4121 71.5343C43.5937 71.2074 41.9206 70.5163 40.3931 69.4613C37.312 67.0347 34.4387 64.3799 31.7737 61.4965C30.2859 58.676 29.231 55.6937 28.6096 52.5497ZM77.926 54.95C78.4671 55.2582 78.9762 55.6217 79.4535 56.0411C79.2353 56.8413 78.8715 56.914 78.3624 56.2593C78.1492 55.8423 78.0039 55.4059 77.926 54.95ZM12.6799 55.1683C12.7659 55.9008 12.475 56.4099 11.8071 56.6958C11.6074 56.5151 11.462 56.2969 11.3706 56.0411C11.7517 55.6588 12.1881 55.3679 12.6799 55.1683Z'
			/>
			<path
				opacity='0.918'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M36.6235 45.9667C38.6028 45.7212 40.3314 46.2485 41.809 47.5487C41.815 48.7783 41.1998 49.5694 39.9633 49.9218C38.2113 50.3699 36.7172 49.9304 35.4809 48.6034C34.8465 47.2543 35.2273 46.3754 36.6235 45.9667Z'
			/>
			<path
				opacity='0.921'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M51.9163 45.9668C53.0118 45.8682 54.0665 46.0146 55.0804 46.4062C55.8867 47.5558 55.7109 48.552 54.553 49.3945C52.9708 50.4198 51.3888 50.4198 49.8069 49.3945C49.1284 48.9466 48.8648 48.3314 49.0159 47.5488C49.9082 46.8541 50.875 46.3268 51.9163 45.9668Z'
			/>
		</svg>
	);
};

export default NinjaIcon;
