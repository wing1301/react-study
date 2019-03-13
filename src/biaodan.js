//导入react和react-dom的包
import React from 'react'
import ReactDOM from 'react-dom'

// const mydiv = React.createElement('div',{id:'mydiv',title:'divvv'},'这是一个div元素')
//在js文件中不识别以下这种类似html的语法，为了解决这个问题可以安装bable来进行转换
// 在js中写入类似html的语法是jsx语法

// 受控组件
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert("A name is submitted:" + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/> 
//                 </label>
//                 <input type='submit' value='Submit'/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameForm/>,
//     document.getElementById("app")
// )

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            nubmerOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                    name="nubmerOfGuests"
                    type="number"
                    value={this.state.nubmerOfGuests}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById("app")
)