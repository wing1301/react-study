//导入react和react-dom的包
import React from 'react'
import ReactDOM from 'react-dom'

// const mydiv = React.createElement('div',{id:'mydiv',title:'divvv'},'这是一个div元素')
//在js文件中不识别以下这种类似html的语法，为了解决这个问题可以安装bable来进行转换
// 在js中写入类似html的语法是jsx语法



class Toogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToogleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToogleOn : !prevState.isToogleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToogleOn ? "ON" : "OFF"}
            </button>
        );
    }
}

ReactDOM.render (
    <Toogle />,
    document.getElementById("app")
);
