import React, { Component } from "react"  ;
import "./App.css";
import {sum} from "./sum.js";
import {sub} from "./sum.js";
import {mult} from "./sum.js";

class App extends Component {

	constructor(){
		super();
		this.state = {
			result: 0,
			temp: 0,
			operation: "",
			input: "",
			opSelected: false
		};
		// This binding is necessary to make `this` work in the callback
		this.addNumber = this.addNumber.bind(this);
		this.clear = this.clear.bind(this);
		this.ops = this.ops.bind(this);
	}

	checkInput(input){
		if(input == "+" || input == "-" || input == "x" || input == "="){
			//hacer algo con las operaciones
			this.setState({
				operation: input,
				opSelected: true
			})
			this.makeOp(input);
		}else{
			if(this.state.opSelected == false){
				this.addNumber(input);
			}else{
				this.state.input = "";
				this.addNumber(input);
				this.setState({
					opSelected : false
				})
			}

		}
	}

	addNumber(number){
		if(this.state.input.length < 9){
			let concatInput = this.state.input + number;
			this.setState({
				input: concatInput
			})
		}
	}

	ops(op, a, b){
		//initializing the result
		let res = 0;

		if(op == "+"){
			//add numbers
			res = sum(a,b);
		}
		if(op == "-"){
			//substract numbers
			res = sub(a,b);
		}
		if(op == "x"){
			//substract numbers
			res = mult(a,b);
		}
		return res;
	}

	makeOp(op){

		if(this.state.operation != ""){

			if(op == "="){
				//show result
				if(this.state.input != "Error"){
					let newTemp = parseInt(this.state.input)
					this.setState({
						temp: newTemp
					})
					let res = this.ops(this.state.operation, this.state.temp, parseInt(this.state.input))
					if(res>999999999 || res<0){
						this.setState({
							input: "Error",
							operation: ""
						})
					}else{
						this.setState({
							input: res,
							temp: 0,
							operation: ""
						})
					}
				}
			}else{
				if(this.state.input != "Error"){
					let newTemp = parseInt(this.state.input)
					this.setState({
						temp: newTemp
					})
					let res = this.ops(this.state.operation, this.state.temp, parseInt(this.state.input))
					if(res>999999999 || res<0){
						this.setState({
							input: "Error",
							operation: ""
						})
					}else{
						this.setState({
							input: res,
							temp: res,
							operation: op
						})
					}
				}
			}
		}else{
			let temp = this.state.temp;
			let inp = parseInt(this.state.input);
			this.setState({
				temp: inp,
				operation: op
			})
		}
	}

	clear(){
		this.setState({
			input:"",
			temp: 0,
			operation: "",
			opSelected: false
		})
	}

	render()  {
		const myVar = this.state.input;
		return (
			<div>
				<h1>Calculadora</h1>
				<div class="calculator">
					<div class="display">
						<label>{myVar}</label>
					</div>
					<div class="top-operations">
						<button class="topBtn" onClick={this.clear}>C</button>
						<button class="topBtn" >#</button>
						<button class="topBtn" >%</button>
						<button class="opBtn" >/</button>
					</div>
					<div class="top-numbers">
						<button class="numberBtn" onClick={this.checkInput.bind(this, 7)}>7</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 8)}>8</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 9)}>9</button>
						<button class="opBtn" onClick={this.checkInput.bind(this, "x")}>x</button>
					</div>
					<div class="mid-numbers">
						<button class="numberBtn" onClick={this.checkInput.bind(this, 4)}>4</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 5)}>5</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 6)}>6</button>
						<button class="opBtn" onClick={this.checkInput.bind(this, "-")}>-</button>
					</div>
					<div class="bot-numbers">
						<button class="numberBtn" onClick={this.checkInput.bind(this, 1)}>1</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 2)}>2</button>
						<button class="numberBtn" onClick={this.checkInput.bind(this, 3)}>3</button>
						<button class="opBtn" onClick={this.checkInput.bind(this, "+")}>+</button>
					</div>
					<div class="bot-numbers">
						<button class="ceroBtn" onClick={this.checkInput.bind(this, 0)}>0</button>
						<button class="opBtn" onClick={this.checkInput.bind(this, "=")}>=</button>
					</div>
				</div>
				<br></br>
				<br></br>
				<br></br>
			</div>
		);
	}
}
export default App;
