import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

const sharedStyle = document.createElement('dom-module');

sharedStyle.innerHTML = 
	`<template>
		<style>
			.purple{
				background: linear-gradient(142deg, rgba(26,26,27,1) 0%, rgba(71,55,91,1) 46%, rgba(133,112,159,1) 100%, rgba(255,255,255,0) 100%);
			}
			.whiteBg{
				background-color : #FFF;
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
			.px30{
				font-size : 30px;
			}
			.px20{
				font-size: 20px;
			}

			.rem15{
				font-size : 1.5rem;
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
			.flexColumn {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
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
			.marginBottom30 {
				margin-bottom: 40px;
			}
			.marginBottom20 {
				margin-bottom: 20px;
			}
			.marginBottom10 {
				margin-bottom: 10px;
			}
			.marginLeft25{
				margin-left: 25px;
			}
			.marginRight10{
				margin-right: 10px;
			}

			.input {
				background: transparent;
				border: none;
				border-bottom: 1px solid white;
				width: 70%;
			}
			input:focus{
				color: #fff;
				outline: none;
				font-size: 20px;
				font-family: 'Varela Round';
				text-align: center;
			}
			input:not(:focus){
				color: #fff;
				font-size: 20px;
				font-family: 'Varela Round';
				text-align: center;
			}


			.fullWidth {
				width : 100%;
			}
			.fullHeight {
				height: 100%;
			}
			.height80 {
				height : 80%;
			}
			.height85 {
				height : 85%;
			}
			.height15 {
				height : 15%;
			}

			.height50{
				height: 50%;
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
				user-select: none;
			}
			.blueBtn:disabled, .blueBtn[disabled]{
				background-color: rgb(168,194,208);
			}

			.greenBtn {
				padding: 10px 20px;
				background-color: green; 
				color: white;
				border: none;
				border-radius: 5px;
				font-size: 20px;
			}

			.hidden {
				overflow : hidden;
			}

			.redBtn {
				padding: 10px 20px;
				background-color: red; 
				color: white;
				border: none;
				border-radius: 5px;
				font-size: 20px;
			}

			.position {
				padding:5%;
				margin:5%;
			}
			.margTop{
				margin-top:20%;
			}

			.bgWhite{
				background-color:white;
			}
		</style>
	</template>`;

sharedStyle.register('shared-style');
