'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Radio} from '../../mtui/index'

const RadioGroup = Radio.RadioGroup;

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			checked: true,
			value:'1'
		}
	}

	onChange(data){
		this.setState({
			checked:data
		})
	}

	onChangeGroup(data){
		this.setState({
			value: data.value
		})
	}

	defaultClick(){
		console.log(this.refs.radioDefault.getValue())
	}

	onChangeGroup2(data){
		console.log(data)
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">按钮</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="2/2" className="btns">

	          			<Radio checked={this.state.checked} onChange={this.onChange.bind(this)} value="0">选项0</Radio> &nbsp;
	          			<Radio disabled={true} checked={true} onChange={this.onChange.bind(this)} value="0">选项0</Radio>

	          			<br/>
	          			<br/>
	          			<h4>受控组件</h4>
	          			<RadioGroup value={this.state.value} onChange={this.onChangeGroup.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>
	          			<br/>

	          			<h4>不受控组件</h4>
	          			<Radio ref="radioDefault" defaultChecked={true} value="MT" onClick={this.defaultClick.bind(this)}>选项MT</Radio>
	          			<RadioGroup defaultValue='2' onChange={this.onChangeGroup2.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>
	          			<br/>

	          			<h4>不受控组件</h4>
	          			<RadioGroup type="button" defaultValue='2' onChange={this.onChangeGroup2.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>

	          		</Grid>
	          		<Grid width="1/1">
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Radio} from '../../mtui/index'

const RadioGroup = Radio.RadioGroup;

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			checked: true,
			value:'1'
		}
	}

	onChange(data){
		this.setState({
			checked:data
		})
	}

	onChangeGroup(data){
		this.setState({
			value: data.value
		})
	}

	onChangeGroup2(data){
		console.log(data)
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">按钮</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="2/2" className="btns">

	          			<Radio checked={this.state.checked} onChange={this.onChange.bind(this)} value="0">选项0</Radio> &nbsp;
	          			<Radio disabled={true} checked={true} onChange={this.onChange.bind(this)} value="0">选项0</Radio>

	          			<br/>
	          			<br/>
	          			<h4>受控组件</h4>
	          			<RadioGroup value={this.state.value} onChange={this.onChangeGroup.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>
	          			<br/>

	          			<h4>不受控组件</h4>
	          			<RadioGroup defaultValue='2' onChange={this.onChangeGroup2.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>
	          			<br/>

	          			<h4>不受控组件</h4>
	          			<RadioGroup type="button" defaultValue='2' onChange={this.onChangeGroup2.bind(this)}>
	          				<Radio value="1">选项1</Radio>
	          				<Radio value="2">选项2</Radio>
	          				<Radio value="3">选项3</Radio>
	          			</RadioGroup>

	          		</Grid>
	          	</div>
	        </div>
	    );
	}
}
`}
</code>
</pre>	          		
	          		</Grid>
	          	</div>
	        </div>
	    );
	}
}

//主页
export default Dom;