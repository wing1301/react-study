//导入react和react-dom的包
import React from 'react'
import ReactDOM from 'react-dom'

// const mydiv = React.createElement('div',{id:'mydiv',title:'divvv'},'这是一个div元素')
//在js文件中不识别以下这种类似html的语法，为了解决这个问题可以安装bable来进行转换
// 在js中写入类似html的语法是jsx语法
function Welcome(props){
    return <h1>hello,{props.name}</h1>
}

function APP(){
    return (
        <div>
            <Welcome name="sasra"></Welcome>
        </div>
    )
}

ReactDOM.render(
    <APP/>,
    document.getElementById("app")
)