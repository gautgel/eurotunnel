import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

const sharedStyle = document.createElement('dom-module');

sharedStyle.innerHTML = 
	`<template>
		<style>
			.purple{
				background: linear-gradient(142deg, rgba(26,26,27,1) 0%, rgba(71,55,91,1) 46%, rgba(133,112,159,1) 100%, rgba(255,255,255,0) 100%);
			}


			.rem2{
				font-size : 2rem;
			}
			.rem25{
				font-size : 2.5rem;
			}
			.rem3{
				font-size : 3rem;
			}
			.px95{
				font-size : 30px;
			}


			.textAlignCenter {
				text-align: center;
			}

			.paddSide10 {
				padding: 0 10%;
			}


			.white {
				color : #FFF;
			}



			.flexCenterCenter {
				display : flex;
				align-items : center;
				justify-content : center;
			}


			
			.relative {
				position : relative;
			}
			.absolute {
				position : absolute;
			}


			.bottomLeft {
				bottom: 0;
				left: 0;
			}
			.topLeft {
				top: 0;
				left: 0;
			}


			.iron30px {
				--iron-icon-width: 30px;
				--iron-icon-height: 30px;
			}

			.fontWeight {
				font-weight: 900;
			}


			.noMargin {
				margin : 0;
			}


			.fullWidth {
				width : 100%;
			}
			.fullHeight {
				height: 100%;
			}

			.pointer:hover {
				cursor: pointer;
			}

			.blueBtn {
				padding: 10px 20px;
				background-color: rgb(59, 153, 196); 
				color: white;
				border: none;
				border-radius: 5px;
				font-size: 20px;
			}
			.blueBtn:disabled, .blueBtn[disabled]{
				background-color: rgb(168,194,208);
			}

		</style>
	</template>`;

sharedStyle.register('shared-style');
