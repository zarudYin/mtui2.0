'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Modal, Grid, Button, DatePicker, Popover} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            name : '111'
        }
    }

    showBack() {
        console.log('弹窗开启，2秒后，自动变化值！')
        var _this = this;
        setTimeout(function(){
            _this.setState({
                name: '2222'
            });
        }, 2000)  
    }

    closeBack(){
        console.log('弹窗关闭');
    }

    showOrHide(){
        this.refs.modalID2.showModal(true);
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Modal弹窗</div>
                <div className="mt-panel-box">
                    <Modal btn={<a className="mt-btn mt-btn-success"><i>弹窗</i></a>} modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    &nbsp;
                     <Modal ref="modalID2" modalClassName="animated bounceInDown" style={{width:200, height:180, overflow: 'auto'}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">
                                <div style={{ height: 200}}></div>
                                <DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" />
                                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                                    <Button type="info">click弹窗在上</Button>
                                </Popover>
                            </div>
                        </div>
                    </Modal>

                    <Button onClick={this.showOrHide.bind(this)}>点击我控制弹窗</Button>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Modal, Grid, Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            name : '111'
        }
    }

    showBack() {
        console.log('弹窗开启，2秒后，自动变化值！')
        var _this = this;
        setTimeout(function(){
            _this.setState({
                name: '2222'
            });
        }, 2000)  
    }

    closeBack(){
        console.log('弹窗关闭');
    }

    showOrHide(){
        this.refs.modalID2.showModal(true);
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Modal弹窗</div>
                <div className="mt-panel-box">
                    <Modal btn={<a className="mt-btn mt-btn-success"><i>弹窗</i></a>} modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    &nbsp;
                     <Modal ref="modalID2" modalClassName="animated bounceInDown" style={{width:200, height:180}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)}>
                        <div className="mt-panel-min">
                            <div className="mt-panel-h2">标题</div>
                            <div className="mt-panel-box">{this.state.name}内容...</div>
                        </div>
                    </Modal>
                    <Button onClick={this.showOrHide.bind(this)}>点击我控制弹窗</Button>
                </div>
            </div>
        );
    }
}

//主页
export default UI;
`}
</code>
</pre>
                </div>
                <Grid className="code" width="2/2">
                </Grid>
            </div>
        );
    }
}

//主页
export default UI;