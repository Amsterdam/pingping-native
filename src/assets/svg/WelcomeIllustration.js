import React from 'react';

import Svg, {Circle, G, Mask, Path, Rect} from 'react-native-svg';

function WelcomeIllustration(props) {
	return (
		<Svg width={263} height={231} viewBox="0 0 263 231" fill="none" {...props}>
			<Rect y={66} width={219} height={23} rx={11.5} fill="#BAF" />
			<Rect x={5} y={157} width={238} height={23} rx={11.5} fill="#BAF" />
			<Rect x={27} y={111} width={236} height={24} rx={12} fill="#BAF" />
			<Circle cx={127.5} cy={115.5} r={115.5} fill="#D7CDFF" />
			<Mask
				id="prefix__a"
				maskUnits="userSpaceOnUse"
				x={12}
				y={0}
				width={231}
				height={231}>
				<Circle cx={127.5} cy={115.5} r={115.5} fill="#C4C4C4" />
			</Mask>
			<G mask="url(#prefix__a)">
				<Rect y={66} width={219} height={23} rx={11.5} fill="#BAF" />
				<Rect x={5} y={157} width={238} height={23} rx={11.5} fill="#BAF" />
				<Rect x={27} y={111} width={249} height={24} rx={12} fill="#BAF" />
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M203.204 111.706H42.941c6.286 0 11.382-5.096 11.382-11.382s-5.096-11.382-11.382-11.382h160.3c-6.286 0-11.382 5.096-11.382 11.382 0 6.274 5.076 11.362 11.345 11.382zM230.748 145.853c0-5.548-3.969-10.169-9.224-11.178 5.255 1.009 9.224 5.63 9.224 11.178zm-141.33 11.383h129.948v-.001c-6.286 0-11.382-5.096-11.382-11.382 0-6.278 5.082-11.368 11.357-11.382H89.418c6.287 0 11.383 5.096 11.383 11.382s-5.096 11.383-11.383 11.383z"
					fill="#BAF"
				/>
				<Path
					d="M57.259 63.553c-3.948 17.734 5.94 41.844 21.506 44.053 14.897 2.124 31.311-16.29 31.196-32.836-.088-10.2-6.439-18.57-11.56-25.302-5.3-6.997-8.878-11.703-14.353-12.543C73.2 35.194 60.385 49.44 57.258 63.553z"
					fill="#C15A39"
				/>
				<Path
					d="M38.886 131.348l4.829-.414a3.17 3.17 0 002.9-3.445l-2.366-27.562a3.17 3.17 0 00-3.445-2.9l-4.828.415a3.17 3.17 0 00-2.9 3.444l2.366 27.562a3.193 3.193 0 003.444 2.9z"
					fill="#BCBCBC"
				/>
				<Path
					d="M35.82 131.611l4.828-.414a3.17 3.17 0 002.9-3.444l-2.366-27.562a3.17 3.17 0 00-3.444-2.9l-4.829.414a3.17 3.17 0 00-2.9 3.445l2.366 27.562a3.192 3.192 0 003.445 2.899z"
					fill="#F7F7F7"
				/>
				<Path
					d="M50.02 136.961l1.294 15.085c.581 6.767 6.428 12.017 13.21 11.613 6.995-.423 12.255-6.555 11.66-13.499l-1.767-20.583a6.884 6.884 0 016.283-7.463 6.884 6.884 0 017.463 6.283l1.766 20.583c1.24 14.451-9.457 27.157-23.907 28.397-14.45 1.241-27.157-9.457-28.397-23.907l-1.316-15.332 13.71-1.177z"
					fill="#DD3142"
				/>
				<Path
					d="M50.02 136.961l1.294 15.085c.581 6.767 6.428 12.017 13.21 11.613 6.995-.423 12.255-6.555 11.66-13.499l-1.767-20.583a6.884 6.884 0 016.283-7.463 6.884 6.884 0 017.463 6.283l1.766 20.583c1.24 14.451-9.457 27.157-23.907 28.397-14.45 1.241-27.157-9.457-28.397-23.907l-1.316-15.332 13.71-1.177z"
					fill="#DD3142"
				/>
				<Path
					d="M81.002 125.639c-1.832.157-3.218 1.803-3.06 3.635l1.766 20.584c.366 4.264-.948 8.389-3.72 11.681-2.77 3.291-6.611 5.289-10.876 5.655l-.387.034c-8.583.523-16.22-6.135-16.967-14.841l-.993-11.56-2.875-3.304 6.097-.524 1.295 15.086c.58 6.767 6.428 12.017 13.21 11.612 6.994-.423 12.255-6.555 11.66-13.498l-1.767-20.584a6.885 6.885 0 016.283-7.463 7.017 7.017 0 012.87.357c-1.226 1.845-2.148 3.096-2.536 3.13z"
					fill="#D82B45"
				/>
				<Path
					d="M88.587 184.636l18.715-1.606 6.341 73.875-18.715 1.606-6.341-73.875z"
					fill="#212D47"
				/>
				<Path
					d="M100.817 183.587l18.716-1.607 6.34 73.875-18.715 1.606-6.341-73.874z"
					fill="#2D3854"
				/>
				<Path
					d="M90.8 195.95l30.03-2.577a6.553 6.553 0 005.961-7.08l-.484-5.64-43.07 3.697.484 5.639a6.552 6.552 0 007.08 5.961z"
					fill="#2D3854"
				/>
				<Path
					d="M113.746 177.435l29.077-2.496c6.979-.599 11.41-9.784 9.102-18.888l-5.866-23.25c-2.362-9.313-9.11-15.55-16.265-14.936l-11.631.998-4.417 58.572z"
					fill="#22314C"
				/>
				<Path
					d="M136.899 168.382c5.146-.441 8.824-5.16 8.033-10.24l-1.382-8.651-16.424 1.41.113 8.76c.086 5.141 4.514 9.163 9.66 8.721z"
					fill="#2D3854"
				/>
				<Path
					d="M82.583 176.737l43.07-3.697.838 9.763-43.07 3.697-.838-9.763z"
					fill="#DD3142"
				/>
				<Path
					d="M84.156 183.064l42.824-3.676c.563-.048.982-.546.934-1.11l-4.35-50.683c-.433-5.04-4.869-8.742-9.874-8.313l-29.571 2.539c-3.42.293-5.93 3.313-5.639 6.697l4.602 53.609c.013.566.51.985 1.074.937z"
					fill="#E53E46"
				/>
				<Path
					d="M95.054 130.504l7.754-.666a3.245 3.245 0 002.964-3.521l-.538-6.273-16.354 1.403.357 4.159a5.375 5.375 0 005.817 4.898z"
					fill="#DD3142"
				/>
				<Path
					d="M89.07 115.395l8.185.221.225 5.093-7.895.678c-6.415.551-11.184 6.215-10.633 12.629l3.745 43.634a6.008 6.008 0 01-6.506-5.477l-3.23-37.642c-.836-9.728 6.346-18.298 16.11-19.136z"
					fill="#2D3854"
				/>
				<Path
					d="M76.154 133.262c-.639-7.436 4.871-13.981 12.308-14.619l6.062-.52-.272-3.173 2.714-.232.514 5.991-7.895.678c-6.415.551-11.183 6.215-10.633 12.629l3.746 43.634a6.295 6.295 0 01-2.769-.401l-3.775-43.987z"
					fill="#25314C"
				/>
				<Path
					d="M95.322 127.427l6.697-.574a3.715 3.715 0 003.383-4.019l-1.667-19.42-14.098 1.21 1.666 19.42a3.713 3.713 0 004.019 3.383z"
					fill="#FBC3AA"
				/>
				<Path
					opacity={0.76}
					d="M99.043 104.598l-9.34.801-.066-.775 14.098-1.21 1.667 19.42a3.715 3.715 0 01-3.383 4.019l-1.093.093-1.918-22.345.035-.003z"
					fill="#F2AD91"
				/>
				<Path
					d="M104.609 113.6c-2.604.685-7.132 1.287-12.143-.414-.805-.286-1.505-.58-2.176-.949l-.653-7.613 14.098-1.21.874 10.186z"
					fill="#ED9C80"
				/>
				<Path
					d="M114.642 113.839l5.71-.49a5.337 5.337 0 015.779 4.866l.124 1.445-3.275-.926c-5.04.432-8.87 4.205-8.438 9.245l3.525 41.061a5.541 5.541 0 01-5.059 6.009A5.54 5.54 0 01107 169.99l-3.673-42.788c-.513-6.808 4.513-12.779 11.315-13.363z"
					fill="#2D3854"
				/>
				<Path
					d="M111.053 128.279l3.966 46.207c2.01-.99 3.286-3.087 3.083-5.449l-2.992-34.858c-2.105-1.772-3.568-4.345-3.819-7.27a10.97 10.97 0 01.142-2.888 12.53 12.53 0 00-.38 4.258z"
					fill="#25314C"
				/>
				<Path
					d="M43.878 143.595c-5.45.468-10.248-3.571-10.716-9.022-.468-5.45 3.572-10.248 9.022-10.715 5.45-.468 10.248 3.571 10.716 9.021.468 5.451-3.572 10.248-9.022 10.716z"
					fill="#FBC3AA"
				/>
				<Path
					opacity={0.76}
					d="M39.438 140.674c6.203-.532 10.811-6.005 10.279-12.208a11.966 11.966 0 00-.5-2.514 9.936 9.936 0 013.718 6.924 9.89 9.89 0 01-9.021 10.716c-3.208.275-6.157-.998-8.193-3.202 1.161.291 2.413.396 3.717.284z"
					fill="#F2AD91"
				/>
				<Path
					d="M92.832 109.17c12.237 1.098 23.232-7.315 24.524-18.73l4.149-36.053-27.152-2.394c-15.013-1.324-28.347 9.553-30.065 24.526-1.925 16.46 10.87 31.094 28.544 32.651z"
					fill="#FBC3AA"
				/>
				<Path
					d="M88.958 90.09c3.841-.33 7.376-1.344 10.301-2.837-.858 5.719-4.666 10.164-9.636 10.59-4.97.427-9.444-3.307-11.3-8.794 3.17.936 6.793 1.37 10.635 1.04z"
					fill="#fff"
				/>
				<Path
					d="M98.865 75.74c.155-1.504-.956-2.864-2.457-2.984-1.505-.155-2.865.956-2.985 2.458M76.427 72.447c.155-1.504 1.48-2.612 2.984-2.457 1.505.155 2.613 1.48 2.458 2.984"
					stroke="#3F2E21"
					strokeWidth={2}
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M119.834 87.865a8.63 8.63 0 01-9.338-7.861 8.632 8.632 0 119.338 7.862z"
					fill="#FBC3AA"
				/>
				<Path
					d="M118.284 83.88a4.528 4.528 0 11-.773-9.023 4.528 4.528 0 01.773 9.023z"
					fill="#F2AD91"
				/>
				<Path
					d="M115.11 134.179l-.532-6.203c-.433-5.04 3.362-8.81 8.438-9.245l3.275.926-.124-1.445a5.6 5.6 0 00-.77-2.349c-1.355-.487-2.828-.68-4.379-.547a10.437 10.437 0 00-5.265 1.943 10.706 10.706 0 00-4.29 6.688 10.974 10.974 0 00-.143 2.888c.222 2.999 1.685 5.572 3.79 7.344z"
					fill="#25314C"
				/>
				<Path
					d="M115.861 195.042c-5.548.476-10.431-3.635-10.908-9.183-.476-5.548 3.635-10.431 9.183-10.907 5.548-.476 10.431 3.635 10.907 9.183.476 5.547-3.635 10.431-9.182 10.907z"
					fill="#FBC3AA"
				/>
				<Path
					d="M103.278 189.092l4.828-2.9c1.282-.785 1.707-2.454.922-3.736l-1.407-2.329-7.157 4.307c-1.282.784-1.707 2.454-.922 3.736.752 1.32 2.419 1.71 3.736.922zM114.45 195.98l-1.91-6.121a3.073 3.073 0 00-3.904-2.044l-2.592.826a.354.354 0 00-.242.483l2.701 8.715a3.071 3.071 0 003.903 2.044c1.623-.53 2.574-2.28 2.044-3.903z"
					fill="#F2AD91"
				/>
				<Path
					d="M111.125 187.034c-3.386-3.047-3.378-8.338.016-11.399 6.721-6.08 11.048-14.831 11.25-24.47.189-7.721-2.237-14.898-6.394-20.719-1.734-2.408-1.98-5.688-.497-8.266 2.744-4.851 9.562-5.258 12.819-.816a49.185 49.185 0 019.412 29.407c-.12 14.319-6.428 27.288-16.379 36.272-2.934 2.631-7.341 2.583-10.227-.009z"
					fill="#DD3142"
				/>
				<Path
					d="M115.962 130.449a7.712 7.712 0 01-1.432-5.096c1.614 1.423 3.256 2.774 3.74 3.442 4.716 6.554 7.124 14.336 6.933 22.448-.24 10.033-4.663 19.715-12.176 26.502-.792.707-3.087 3.745-4.122 5.751-.8-2.701-.035-5.784 2.236-7.861 6.722-6.08 11.048-14.831 11.25-24.47.151-7.753-2.237-14.898-6.429-20.716z"
					fill="#D82B45"
				/>
				<Path
					opacity={0.69}
					d="M94.255 81.363c-2.26-.46-3.939-1.579-3.751-2.498.187-.918 2.17-1.29 4.429-.83 2.259.46 3.938 1.578 3.751 2.497-.187.92-2.17 1.29-4.43.83zM77.604 78.487c-2.303-.106-4.135-.951-4.092-1.888.043-.937 1.945-1.61 4.248-1.505 2.303.106 4.135.951 4.092 1.888-.043.937-1.945 1.61-4.248 1.505z"
					fill="#F2AD91"
				/>
				<Path
					d="M35.858 105.583a1.557 1.557 0 11-.266-3.102 1.557 1.557 0 01.266 3.102z"
					fill="#BCBCBC"
				/>
				<Path
					d="M83.665 42.288c3.841-5.518 11.128-6.036 12.46-6.283 1.182-.333 7.814-.596 12.755.183 11.398 1.828 19.967 10.62 20.88 21.46l1.168 13.88c.785 9.32-5.613 21.246-14.799 24.988-5.09 2.096-10.779 3.844-12.174 3.762 5.975-12.722 4.417-19.813 2.085-23.842-5.597-9.843-19.452-8.301-23.839-19.412-.098-.324-2.946-8.37 1.464-14.736z"
					fill="#DD6944"
				/>
				<Path
					d="M216.435 132.328l-4.821-.501a3.17 3.17 0 01-2.837-3.496l2.861-27.515a3.17 3.17 0 013.496-2.838l4.82.502a3.17 3.17 0 012.838 3.495l-2.861 27.516a3.193 3.193 0 01-3.496 2.837z"
					fill="#212552"
				/>
				<Path
					d="M219.496 132.646l-4.82-.501a3.171 3.171 0 01-2.838-3.496l2.862-27.515a3.17 3.17 0 013.496-2.837l4.82.5a3.17 3.17 0 012.837 3.497l-2.861 27.515a3.193 3.193 0 01-3.496 2.837z"
					fill="#0A1E2B"
				/>
				<Path
					d="M205.202 137.74l-1.566 15.059c-.702 6.756-6.643 11.899-13.417 11.373-6.985-.549-12.135-6.775-11.414-13.706l2.136-20.548a6.883 6.883 0 00-6.147-7.575 6.885 6.885 0 00-7.575 6.148l-2.137 20.548c-1.5 14.426 8.967 27.322 23.393 28.822s27.323-8.966 28.823-23.392l1.591-15.306-13.687-1.423z"
					fill="#DD3142"
				/>
				<Path
					d="M205.202 137.74l-1.566 15.059c-.702 6.756-6.643 11.899-13.417 11.373-6.985-.549-12.135-6.775-11.414-13.706l2.136-20.548a6.883 6.883 0 00-6.147-7.575 6.885 6.885 0 00-7.575 6.148l-2.137 20.548c-1.5 14.426 8.967 27.322 23.393 28.822s27.323-8.966 28.823-23.392l1.591-15.306-13.687-1.423z"
					fill="#FF8345"
				/>
				<Path
					d="M174.428 125.862c1.83.19 3.185 1.86 2.995 3.69l-2.136 20.548c-.443 4.258.797 8.405 3.508 11.746 2.712 3.341 6.516 5.408 10.773 5.851l.387.04c8.572.678 16.328-5.842 17.232-14.533l1.2-11.541 2.934-3.251-6.087-.633-1.566 15.059c-.703 6.756-6.643 11.899-13.417 11.373-6.985-.549-12.135-6.775-11.414-13.706l2.136-20.549a6.883 6.883 0 00-6.147-7.574 7.001 7.001 0 00-2.877.305c1.192 1.867 2.092 3.134 2.479 3.175z"
					fill="#E9763C"
				/>
				<Path
					d="M165.783 184.713l-18.683-1.942-7.669 73.748 18.683 1.943 7.669-73.749z"
					fill="#212D47"
				/>
				<Path
					d="M153.574 183.444l-18.684-1.943-7.669 73.749 18.684 1.943 7.669-73.749z"
					fill="#2D3854"
				/>
				<Path
					d="M163.366 195.985l-29.978-3.117a6.552 6.552 0 01-5.832-7.186l.585-5.63 42.997 4.471-.586 5.63a6.551 6.551 0 01-7.186 5.832z"
					fill="#2D3854"
				/>
				<Path
					d="M140.758 177.061l-29.028-3.019c-6.967-.724-11.232-9.988-8.76-19.049l6.283-23.141c2.528-9.268 9.388-15.384 16.531-14.641l11.611 1.208 3.363 58.642z"
					fill="#22314C"
				/>
				<Path
					d="M117.771 167.593c-5.137-.534-8.73-5.318-7.847-10.383l1.537-8.625 16.396 1.705-.27 8.756c-.179 5.139-4.679 9.081-9.816 8.547z"
					fill="#2D3854"
				/>
				<Path
					d="M171.928 176.923l-42.996-4.471-1.014 9.747 42.997 4.471 1.013-9.747z"
					fill="#E9763C"
				/>
				<Path
					d="M170.242 183.221l-42.751-4.445a1.027 1.027 0 01-.914-1.127l5.261-50.597c.523-5.031 5.026-8.653 10.022-8.134l29.521 3.07c3.413.355 5.868 3.42 5.517 6.798l-5.565 53.517c-.023.567-.528.976-1.091.918z"
					fill="#FF8345"
				/>
				<Path
					d="M160.291 130.473l-7.741-.805a3.245 3.245 0 01-2.9-3.573l.651-6.263 16.326 1.697-.432 4.152a5.374 5.374 0 01-5.904 4.792z"
					fill="#E9763C"
				/>
				<Path
					d="M166.545 115.475l-8.187.073-.316 5.089 7.881.819c6.404.666 11.07 6.415 10.404 12.819l-4.529 43.559a6.008 6.008 0 006.603-5.359l3.908-37.578c1.009-9.711-6.017-18.409-15.764-19.422z"
					fill="#2D3854"
				/>
				<Path
					d="M179.139 133.571c.772-7.424-4.619-14.066-12.044-14.838l-6.051-.629.329-3.167-2.709-.282-.622 5.982 7.881.819c6.404.666 11.07 6.415 10.404 12.819l-4.53 43.559a6.292 6.292 0 002.776-.351l4.566-43.912z"
					fill="#25314C"
				/>
				<Path
					d="M160.078 127.392l-6.685-.695a3.713 3.713 0 01-3.31-4.078l2.016-19.388 14.074 1.464-2.016 19.387a3.713 3.713 0 01-4.079 3.31z"
					fill="#B17357"
				/>
				<Path
					opacity={0.76}
					d="M156.768 104.499l9.324.97.081-.774-14.074-1.464-2.016 19.388a3.713 3.713 0 003.31 4.078l1.091.114 2.319-22.308-.035-.004z"
					fill="#A0674D"
				/>
				<Path
					d="M151.041 113.4c2.592.732 7.109 1.415 12.149-.195.81-.271 1.515-.554 2.193-.91l.79-7.6-14.074-1.464-1.058 10.169z"
					fill="#8F5C44"
				/>
				<Path
					d="M141.005 113.459l-5.7-.593a5.337 5.337 0 00-5.865 4.761l-.15 1.443 3.291-.867c5.031.523 8.793 4.364 8.27 9.395l-4.263 40.991a5.541 5.541 0 004.95 6.099 5.542 5.542 0 006.099-4.95l4.441-42.715c.636-6.798-4.282-12.858-11.073-13.564z"
					fill="#2D3854"
				/>
				<Path
					d="M144.334 127.96l-4.796 46.129c-1.992-1.026-3.23-3.146-2.985-5.503l3.619-34.799c2.136-1.734 3.646-4.28 3.949-7.2.103-.985.061-1.95-.09-2.89.325 1.314.457 2.786.303 4.263z"
					fill="#25314C"
				/>
				<Path
					d="M211.223 144.483c5.441.566 10.311-3.386 10.876-8.827.566-5.442-3.386-10.311-8.827-10.877-5.441-.566-10.311 3.387-10.877 8.828-.565 5.441 3.387 10.31 8.828 10.876z"
					fill="#B17357"
				/>
				<Path
					opacity={0.76}
					d="M215.715 141.643c-6.192-.644-10.701-6.199-10.057-12.392.092-.879.285-1.713.545-2.504a9.932 9.932 0 00-3.842 6.856 9.887 9.887 0 008.827 10.876c3.202.333 6.174-.887 8.249-3.054-1.166.27-2.42.353-3.722.218z"
					fill="#A0674D"
				/>
				<Path
					d="M162.899 109.156c-12.271 1.036-23.056-8.124-24.056-20.391l-3.227-38.747 54.279-4.492 2.399 28.916c1.504 17.69-11.673 33.249-29.395 34.714z"
					fill="#B17357"
				/>
				<Path
					opacity={0.76}
					d="M153.445 90.283l-3.226-38.747 39.894-3.32-.214-2.725-54.279 4.492 3.227 38.747c1.035 12.271 11.788 21.391 24.056 20.391a32.532 32.532 0 003.391-.466c-7.027-3.22-12.146-10.083-12.849-18.372z"
					fill="#9B634A"
				/>
				<Path
					d="M190.552 48.44l-.779-11.32-54.143 7.636a3.19 3.19 0 00-2.741 3.45l2.976 36.017 8.898-.746-1.268-27.483 47.057-7.554z"
					fill="#3A221A"
				/>
				<Path
					d="M167.114 90.175c-3.836-.399-7.351-1.476-10.249-3.022.755 5.734 4.483 10.247 9.444 10.763 4.961.516 9.502-3.138 11.456-8.59-3.186.879-6.816 1.248-10.651.85z"
					fill="#fff"
				/>
				<Path
					d="M157.497 73.882c-.127-1.507 1.008-2.847 2.511-2.94 1.507-.128 2.847 1.007 2.94 2.51"
					stroke="#3F2E21"
					strokeWidth={2}
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M153.323 68.54l9.733-3.647"
					stroke="#3A221A"
					strokeWidth={4}
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M179.992 70.993c-.128-1.507-1.433-2.639-2.94-2.511-1.507.128-2.639 1.433-2.511 2.94"
					stroke="#3F2E21"
					strokeWidth={2}
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M182.935 66.284l-10.214-1.987"
					stroke="#3A221A"
					strokeWidth={4}
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M187.162 50.257c.301 2.236 2.807 17.47 2.807 17.47l1.759.183-1.686-20.377-2.88 2.724z"
					fill="#3A221A"
				/>
				<Path
					d="M136.282 87.396a8.632 8.632 0 101.785-17.17 8.632 8.632 0 00-1.785 17.17z"
					fill="#B17357"
				/>
				<Path
					d="M137.903 83.439a4.528 4.528 0 10.936-9.008 4.528 4.528 0 00-.936 9.008z"
					fill="#A0674D"
				/>
				<Path
					d="M140.172 133.787l.644-6.192c.523-5.032-3.204-8.869-8.27-9.396l-3.291.867.15-1.443a5.588 5.588 0 01.811-2.334c1.364-.463 2.84-.629 4.388-.468a10.45 10.45 0 015.23 2.037 10.71 10.71 0 014.169 6.765c.151.94.193 1.905.091 2.89-.276 2.994-1.786 5.54-3.922 7.274z"
					fill="#25314C"
				/>
				<Path
					d="M138.327 194.627c5.538.575 10.495-3.447 11.071-8.986.576-5.538-3.447-10.494-8.985-11.07-5.539-.576-10.495 3.447-11.071 8.985-.576 5.538 3.447 10.495 8.985 11.071z"
					fill="#B17357"
				/>
				<Path
					d="M151.014 188.904l-4.775-2.986c-1.268-.808-1.662-2.485-.855-3.753l1.449-2.303 7.079 4.435c1.267.808 1.662 2.485.854 3.752-.776 1.307-2.449 1.666-3.752.855zM139.72 195.589l2.02-6.085a3.072 3.072 0 013.94-1.973l2.576.873a.352.352 0 01.234.486l-2.857 8.666a3.072 3.072 0 01-3.94 1.973c-1.613-.559-2.532-2.326-1.973-3.94z"
					fill="#A0674D"
				/>
				<Path
					d="M143.205 186.705c3.44-2.986 3.528-8.276.189-11.397-6.61-6.201-10.778-15.027-10.807-24.669-.051-7.723 2.505-14.855 6.765-20.6 1.777-2.376 2.082-5.652.646-8.256-2.656-4.899-9.465-5.43-12.802-1.046a49.188 49.188 0 00-9.94 29.233c-.137 14.319 5.936 27.398 15.724 36.561 2.887 2.683 7.294 2.714 10.225.174z"
					fill="#FF8345"
				/>
				<Path
					d="M139.388 130.042a7.716 7.716 0 001.523-5.07c-1.639 1.395-3.306 2.715-3.801 3.375-4.834 6.469-7.381 14.206-7.336 22.32.059 10.035 4.308 19.796 11.697 26.717.779.721 3.019 3.799 4.018 5.824.849-2.686.139-5.783-2.095-7.9-6.61-6.201-10.779-15.028-10.807-24.669-.012-7.754 2.505-14.855 6.801-20.597z"
					fill="#E9763C"
				/>
				<Path
					opacity={0.69}
					d="M162.006 79.586c2.267-.42 3.966-1.507 3.796-2.43-.171-.922-2.147-1.329-4.414-.91-2.267.42-3.966 1.508-3.795 2.43.17.922 2.146 1.33 4.413.91zM178.706 77.01c2.305-.064 4.152-.877 4.126-1.814-.027-.937-1.916-1.645-4.221-1.58-2.304.064-4.151.876-4.125 1.813.026.938 1.916 1.646 4.22 1.581z"
					fill="#A0674D"
				/>
				<Path
					d="M219.926 106.621a1.556 1.556 0 10.322-3.096 1.556 1.556 0 00-.322 3.096z"
					fill="#BCBCBC"
				/>
				<Circle cx={185.161} cy={42.627} r={10.789} fill="#512C20" />
				<Circle cx={168.358} cy={49.171} r={9.198} fill="#512C20" />
				<Circle cx={160.045} cy={42.273} r={7.959} fill="#512C20" />
				<Circle cx={155.092} cy={50.056} r={7.959} fill="#512C20" />
				<Circle cx={173.311} cy={35.729} r={8.49} fill="#512C20" />
				<Circle cx={84.342} cy={142.031} r={7.959} fill="#E53E46" />
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M104.301 142.705a7.96 7.96 0 01-15.509-3.117 7.96 7.96 0 1015.509 3.117z"
					fill="#D7373F"
				/>
			</G>
		</Svg>
	);
}

export default WelcomeIllustration;
