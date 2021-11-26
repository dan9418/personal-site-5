import React from "react";

const ICON = {
	art:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
				<path
					fill="#000"
					fillOpacity="1"
					stroke="none"
					strokeWidth="1"
					d="M43.75 971.112c-20.833 0-33.333 16.667-33.333 25 0 8.333 4.166 14.583 12.5 14.583 8.333 0 12.5 2.084 12.5 8.334 0 8.333 6.25 14.583 14.583 14.583 27.083 0 39.583-14.583 39.583-29.167 0-25-20.833-33.333-45.833-33.333zm-5.208 8.333a5.208 5.208 0 110 10.417 5.208 5.208 0 010-10.417zm16.666 0a5.208 5.208 0 110 10.417 5.208 5.208 0 010-10.417zm16.667 8.334a5.208 5.208 0 110 10.417 5.208 5.208 0 010-10.417zm-47.917 4.166a5.208 5.208 0 110 10.417 5.208 5.208 0 010-10.417zM50 1012.78a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5z"
					style={{ marker: "none" }}
					color="#000"
					display="inline"
					enableBackground="accumulate"
					overflow="visible"
					transform="translate(0 -952.362)"
					visibility="visible"
				/>
			</svg>
		</>,
	bandcamp:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
				<path d="M8.594 17L0 33h18.406L27 17zM27 17v15.691h2.375v-1.558h.043C30.164 32.629 31.813 33 33.352 33c3.363 0 4.902-2.879 4.902-5.934 0-3.32-1.738-6.046-5.32-6.046-1.274 0-2.704.683-3.387 1.78h-.043V17zm17.879 4.02c-3.738 0-5.606 2.683-5.606 6.113 0 3.34 1.957 5.867 5.52 5.867 2.922 0 4.746-1.629 5.207-4.574h-2.504c-.246 1.629-1.254 2.597-2.703 2.597-2.18 0-3.012-2-3.012-3.89 0-3.45 1.82-4.133 3.121-4.133 1.383 0 2.395.75 2.594 2.133H50c-.242-2.79-2.484-4.113-5.121-4.113zM32.605 23c2.063 0 3.141 1.957 3.145 4.02 0 1.98-.86 4-3.145 4-2.023 0-3.187-1.715-3.187-4 0-2.415 1.078-4.02 3.187-4.02zm0 0" />
			</svg>
		</>,
	calendar:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M6 1v2H5c-1.102 0-2 .898-2 2v14c0 1.102.898 2 2 2h14c1.102 0 2-.898 2-2V5c0-1.102-.898-2-2-2h-1V1h-2v2H8V1zM5 8h14v11H5zm0 0" />
			</svg>
		</>,
	facebook:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M21.8 0H2.2C1 0 0 1 0 2.2v19.6C0 23 1 24 2.2 24H12V14H9v-3h3V8c0-2.5 1-4 4-4h3v3h-1.3c-.9 0-1.7.8-1.7 1.7V11h4l-.5 3H16v10h5.8c1.2 0 2.2-1 2.2-2.2V2.2C24 1 23 0 21.8 0zm0 0" />
			</svg>
		</>,
	github:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="512"
				height="512"
				viewBox="0 0 24 24"
			>
				<path
					fill="#212121"
					d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
				></path>
			</svg>
		</>,
	home:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enableBackground="new 0 0 16 16"
				version="1.1"
				viewBox="0 0 16 16"
				xmlSpace="preserve"
			>
				<path d="M15.45 7L14 5.551V2c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v.553L9 .555C8.727.297 8.477 0 8 0s-.727.297-1 .555L.55 7C.238 7.325 0 7.562 0 8c0 .563.432 1 1 1h1v6c0 .55.45 1 1 1h3v-5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v5h3c.55 0 1-.45 1-1V9h1c.568 0 1-.437 1-1 0-.438-.238-.675-.55-1z" />
			</svg>
		</>,
	instagram:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M8 3a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm10 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 10.002 6.002A3 3 0 0012 9zm0 0" />
			</svg>
		</>,
	linkedin:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 56.693 56.693"
				xmlSpace="preserve"
			>
				<path d="M30.071 27.101v-.077a2.031 2.031 0 01-.05.077h.05z" />
				<path d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z" />
			</svg>
		</>,
	location:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 141.732 141.732"
				xmlSpace="preserve"
			>
				<path d="M95.35 50.645c0 13.98-11.389 25.322-25.438 25.322-14.051 0-25.438-11.342-25.438-25.322 0-13.984 11.389-25.322 25.438-25.322C83.964 25.322 95.35 36.66 95.35 50.645m26.393 0C121.743 22.674 98.966 0 70.866 0 42.768 0 19.989 22.674 19.989 50.645c0 12.298 4.408 23.574 11.733 32.345l39.188 56.283 39.761-57.104a50.048 50.048 0 003.916-5.625l.402-.574h-.066a50.245 50.245 0 006.82-25.325" />
			</svg>
		</>,
	lyrics:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0"
				y="0"
				enableBackground="new 0 0 97.536 97.536"
				version="1.1"
				viewBox="0 0 97.536 97.536"
				xmlSpace="preserve"
			>
				<path d="M1.5 19.546h41.758a1.503 1.503 0 001.5-1.5V8.159a1.5 1.5 0 00-1.5-1.5H1.5a1.5 1.5 0 00-1.5 1.5v9.889a1.5 1.5 0 001.5 1.498zM1.5 43.324h41.758a1.503 1.503 0 001.5-1.5v-9.888a1.5 1.5 0 00-1.5-1.5H1.5a1.5 1.5 0 00-1.5 1.5v9.888c0 .827.672 1.5 1.5 1.5zM95.977 77.989H1.5a1.5 1.5 0 00-1.5 1.5v9.889a1.5 1.5 0 001.5 1.5h94.477c.398 0 .779-.158 1.062-.439.282-.28.438-.662.438-1.061v-9.889a1.5 1.5 0 00-1.5-1.5zM1.522 54.211a1.5 1.5 0 00-1.5 1.5V65.6a1.5 1.5 0 001.5 1.5h94.514a1.5 1.5 0 001.5-1.5v-9.889a1.5 1.5 0 00-1.5-1.5H1.522zM94.004 6.659H63.76c-.699 0-1.264.566-1.264 1.264v21.994l-.354-.01c-4.326 0-7.849 3.52-7.849 7.847s3.521 7.847 7.849 7.847c4.252 0 7.77-3.459 7.842-7.686l.004-.121c.002-.016.002-.031.002-.047V17.782h17.783v12.134l-.354-.01c-4.325 0-7.846 3.52-7.846 7.847s3.521 7.847 7.846 7.847c7.771 0 7.849-7.832 7.849-7.847V7.921c0-.696-.564-1.262-1.264-1.262z" />
			</svg>
		</>,
	music:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path
					fill="#000"
					fillRule="evenodd"
					stroke="none"
					strokeWidth="1"
					d="M486 197.8v7.798c.007.713-.467 1.517-1.45 2.023-1.364.701-2.799.359-3.324-.451-.525-.81-.141-2.089 1.224-2.79.917-.473 1.867-.472 2.55-.175V194l10-2v12.6c.006.713-.468 1.516-1.45 2.02-1.364.702-2.799.36-3.324-.45-.525-.81-.141-2.089 1.224-2.79.917-.473 1.867-.472 2.55-.175V196.2zm0 0"
					transform="translate(-480 -192)"
				/>
			</svg>
		</>,
	navLeft: <>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 444.531 444.531"
			version="1.1"
			viewBox="0 0 444.531 444.531"
			xmlSpace="preserve"
		>
			<path d="M213.13 222.409L351.88 83.653c7.05-7.043 10.567-15.657 10.567-25.841 0-10.183-3.518-18.793-10.567-25.835l-21.409-21.416C323.432 3.521 314.817 0 304.637 0s-18.791 3.521-25.841 10.561L92.649 196.425c-7.044 7.043-10.566 15.656-10.566 25.841s3.521 18.791 10.566 25.837l186.146 185.864c7.05 7.043 15.66 10.564 25.841 10.564s18.795-3.521 25.834-10.564l21.409-21.412c7.05-7.039 10.567-15.604 10.567-25.697 0-10.085-3.518-18.746-10.567-25.978L213.13 222.409z" />
		</svg>
	</>,
	navRight: <>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 444.819 444.819"
			version="1.1"
			viewBox="0 0 444.819 444.819"
			xmlSpace="preserve"
		>
			<path d="M352.025 196.712L165.884 10.848C159.029 3.615 150.469 0 140.187 0s-18.842 3.619-25.697 10.848L92.792 32.264c-7.044 7.043-10.566 15.604-10.566 25.692 0 9.897 3.521 18.56 10.566 25.981L231.545 222.41 92.786 361.168c-7.042 7.043-10.564 15.604-10.564 25.693 0 9.896 3.521 18.562 10.564 25.98l21.7 21.413c7.043 7.043 15.612 10.564 25.697 10.564 10.089 0 18.656-3.521 25.697-10.564L352.025 248.39c7.046-7.423 10.571-16.084 10.571-25.981.001-10.088-3.525-18.654-10.571-25.697z" />
		</svg>
	</>,
	newTab:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
				<path d="M25.98 2.992a.96.96 0 00-.109.008H20a1.006 1.006 0 00-.879.496 1.01 1.01 0 000 1.008c.184.312.52.5.879.496h3.586L13.293 15.293a.992.992 0 00-.273.973.99.99 0 00.714.714.992.992 0 00.973-.273L25 6.414V10c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.125c.04-.29-.05-.582-.246-.805a.987.987 0 00-.774-.328zM6 7c-1.094 0-2 .906-2 2v15c0 1.094.906 2 2 2h15c1.094 0 2-.906 2-2V11.422l-2 2V24H6V9h10.578l2-2zm0 0" />
			</svg>
		</>,
	resume:
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enableBackground="new 0 0 512 512"
				viewBox="0 0 512 512"
			>
				<path
					fillRule="evenodd"
					d="M107.409 89.177h-34.38v34.334h34.38V89.177zm-37.926-7.184h41.563c1.908 0 3.545 1.636 3.545 3.593v41.562c0 1.957-1.637 3.593-3.545 3.593H69.483c-2.006 0-3.552-1.636-3.552-3.593V85.586c.001-1.957 1.547-3.593 3.552-3.593zm37.926 85.808h-34.38v34.334h34.38v-15.052l-13.188 7.594c-1.638.91-3.729.5-4.729-1.045l-7.458-10.641c-1.092-1.592-.73-3.866.815-5.002 1.638-1.137 3.913-.729 5.097.91l5.545 7.912 13.918-8.05v-10.96zm-37.926-7.183h41.563c1.908 0 3.545 1.59 3.545 3.593v10.412l2.546-1.455c1.729-.999 3.914-.454 4.914 1.274 1 1.728.454 3.955-1.276 4.911l-6.184 3.547v22.829c0 2-1.637 3.593-3.545 3.593H69.483c-2.006 0-3.552-1.592-3.552-3.593V164.21c.001-2.002 1.547-3.592 3.552-3.592zm37.926 85.81h-34.38v34.287h34.38v-34.287zm-37.926-7.232h41.563c1.908 0 3.545 1.638 3.545 3.593v41.519c0 2.001-1.637 3.639-3.545 3.639H69.483c-2.006 0-3.552-1.638-3.552-3.639v-41.519c.001-1.955 1.547-3.593 3.552-3.593zm37.926 85.81h-34.38v34.334h34.38v-19.19l-13.188 7.594c-1.638.955-3.729.501-4.729-1.045l-7.458-10.596c-1.092-1.637-.73-3.865.815-5.002a3.698 3.698 0 015.097.863l5.545 7.958 13.918-8.049v-6.867zm-37.926-7.184h41.563c1.908 0 3.545 1.59 3.545 3.593v6.275l2.546-1.457a3.587 3.587 0 014.914 1.32c1 1.682.454 3.909-1.276 4.864l-6.184 3.547v26.968c0 1.954-1.637 3.593-3.545 3.593H69.483c-2.006 0-3.552-1.639-3.552-3.593v-41.518c.001-2.002 1.547-3.592 3.552-3.592zm60.205-215.184A3.65 3.65 0 01126.05 99c0-1.955 1.638-3.593 3.638-3.593h108.956c2 0 3.637 1.638 3.637 3.593 0 2-1.637 3.638-3.637 3.638H129.688zm0 14.688c-2 0-3.638-1.638-3.638-3.593 0-2 1.638-3.593 3.638-3.593h68.484c2 0 3.545 1.592 3.545 3.593 0 1.955-1.546 3.593-3.545 3.593h-68.484zm0 63.891c-2 0-3.638-1.638-3.638-3.593 0-2 1.638-3.593 3.638-3.593h108.956c2 0 3.637 1.592 3.637 3.593 0 1.955-1.637 3.593-3.637 3.593H129.688zm0 14.688c-2 0-3.638-1.591-3.638-3.593 0-2 1.638-3.591 3.638-3.591h68.484c2 0 3.545 1.59 3.545 3.591 0 2.002-1.546 3.593-3.545 3.593h-68.484zm0 63.892c-2 0-3.638-1.591-3.638-3.594 0-2 1.638-3.591 3.638-3.591h108.956c2 0 3.637 1.59 3.637 3.591 0 2.003-1.637 3.594-3.637 3.594H129.688zm0 14.733c-2 0-3.638-1.638-3.638-3.593 0-2 1.638-3.639 3.638-3.639h68.484c2 0 3.545 1.639 3.545 3.639 0 1.955-1.546 3.593-3.545 3.593h-68.484zm0 63.892c-2 0-3.638-1.637-3.638-3.594 0-2 1.638-3.637 3.638-3.637h89.4a3.65 3.65 0 013.644 3.637c0 1.957-1.638 3.594-3.644 3.594h-89.4zm0 14.687c-2 0-3.638-1.591-3.638-3.593 0-2.001 1.638-3.591 3.638-3.591h63.939c2 0 3.637 1.59 3.637 3.591 0 2.002-1.637 3.593-3.637 3.593h-63.939zm209.912 6.003l14.643 13.642 32.65-53.796-10.735-9.821-36.558 49.975zm-57.027-40.062l31.013 56.57 16.463-16.416-36.655-50.067-10.821 9.913zm43.293-20.281c-16.009-3.365-29.197-14.642-39.294-29.286-15.457-22.419-23.645-52.842-23.645-73.941 0-20.19 8.188-38.471 21.376-51.703 11.003-10.96 25.461-18.464 41.563-20.737V45.704H40.47v356.654h150.427c.092-18.1 1.276-28.739 6.551-37.38 6.637-10.687 18.732-17.145 42.017-29.559 9.82-5.229 21.646-11.597 36.558-20.099l15.464-14.188c1.453-1.32 3.729-1.229 5.092.227l29.288 40.017v-42.607zm33.466 109.319c-1.999 0-3.637-1.592-3.637-3.592 0-1.956 1.638-3.593 3.637-3.593h32.013c2 0 3.638 1.637 3.638 3.593 0 2-1.638 3.592-3.638 3.592h-32.013zm0 20.1c-1.999 0-3.637-1.591-3.637-3.593 0-2 1.638-3.592 3.637-3.592h32.013c2 0 3.638 1.592 3.638 3.592 0 2.002-1.638 3.593-3.638 3.593h-32.013zm-70.121-278.303c11.55-11.959 27.467-19.326 45.113-19.326 17.642 0 33.559 7.367 45.108 19.326 11.458 11.869 18.556 28.285 18.556 46.384 0 18.826-7.098 46.064-20.469 66.12-10.545 15.826-25.008 27.331-43.195 27.331-18.192 0-32.742-11.505-43.291-27.331-13.373-20.055-20.464-47.293-20.464-66.12 0-18.099 7.183-34.515 18.642-46.384zM425.91 341.332c-9.281-4.957-20.378-10.914-33.197-18.189l-34.564 56.934c-.092.271-.27.546-.547.772-1.36 1.455-3.637 1.547-5.09.182l-17.641-16.462-19.646 19.509v.046l-.093.044v.048l-.093.044-.092.046v.046l-.086.045v.046h-.091l-.093.09h-.092l-.185.138-.085.046v.043h-.092v.048h-.092v.044h-.093l-.185.046v.046h-.086l-.091.046h-.093v.046h-.184v.045h-.27v.044h-.732l-.178-.044h-.277v-.045h-.092l-.093-.046h-.084l-.094-.046-.275-.092-.092-.044h-.086v-.048h-.093v-.043h-.091v-.046l-.093-.046-.092-.092h-.093v-.044l-.178-.092-.092-.045v-.046l-.092-.046v-.044h-.092v-.092h-.093v-.137h-.085v-.09l-.093-.046-.091-.138-.185-.227v-.046l-.179-.181v-.138l-32.834-59.89c-13.096 7.414-24.376 13.461-33.834 18.509-22.101 11.778-33.65 17.917-39.195 26.966-6.005 9.823-5.821 24.329-5.459 54.615.092 8.503.276 18.188.276 27.693 45.47 10.367 90.855 15.37 136.332 15.279 45.377-.046 90.854-5.229 136.33-15.279 0-9.141.093-18.599.271-26.966.368-30.559.546-45.247-5.545-55.206-5.635-9.184-17.362-15.46-39.916-27.51z"
					clipRule="evenodd"
				/>
			</svg>
		</>,
	soundcloud:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
				<path d="M30 11c-3.602 0-7 1.79-9 4.688V36h21.5c4.102 0 7.5-3.398 7.5-7.5S46.602 21 42.5 21c-.5 0-1 .086-1.5.188C40.5 15.488 35.8 11 30 11zm-13 5c-.7 0-1.398.086-2 .188V36h2zm1 0v20h2V16.5c-.602-.2-1.3-.398-2-.5zm-4 .5c-.7.3-1.398.602-2 1V36h2zm-3 1.813c-.8.699-1.5 1.593-2 2.593V36h2zM6.5 22a1.993 1.993 0 00-.5.094v13.812c.3.102.7.094 1 .094h1V22.094C7.7 21.992 7.3 22 7 22c-.148 0-.324-.012-.5 0zm-1.5.313c-.7.199-1.398.5-2 1v11.375c.602.398 1.3.8 2 1zm-3 1.78C.8 25.396 0 27.103 0 29c0 1.898.8 3.605 2 4.906zm0 0" />
			</svg>
		</>,
	software:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
				<path d="M24.845 25.396a6.013 6.013 0 00-8.449.761l-14.999 18a5.984 5.984 0 000 7.686l15 18a5.998 5.998 0 109.21-7.688L13.806 48l11.8-14.155a6 6 0 00-.762-8.45zM55.171 12.12a6.056 6.056 0 00-7.054 4.71l-12 59.996a5.985 5.985 0 004.712 7.054 5.706 5.706 0 001.183.117 5.995 5.995 0 005.87-4.827l12-59.996a5.985 5.985 0 00-4.71-7.055zM94.603 44.156l-15-17.999a5.998 5.998 0 10-9.21 7.687L82.193 48l-11.8 14.155a5.998 5.998 0 109.21 7.687l15-17.999a5.984 5.984 0 000-7.687z" />
			</svg>
		</>,
	youtube:
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M4.652 0h1.44l.988 3.702L7.996 0H9.45L7.785 5.505v3.757H6.354V5.505L4.652 0zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831V4.208c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646V4.321c0-.374.172-.651.529-.651.39 0 .557.269.557.651V7.5zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46V2.43h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27V2.43h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04a.927.927 0 00-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0C2.353 11.325 2.021 13.025 2 17.5c.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zM6.509 21.819H5.146v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718a2.645 2.645 0 01-.696.605c-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z" />
			</svg>
		</>,
	menu:
		<>
			<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 -53 384 384'>
				<path d='M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0'></path>
			</svg>
		</>,
	close: 
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0"
				y="0"
				enableBackground="new 0 0 512.001 512.001"
				version="1.1"
				viewBox="0 0 512.001 512.001"
				xmlSpace="preserve"
			>
				<path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"></path>
			</svg>
		</>
};

export default ICON;
