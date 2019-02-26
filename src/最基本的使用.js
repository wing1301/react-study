// console.log("hello world!!")
//引入react包，创建组件，生命周期，虚拟dom
import React from 'react'
//引入react-dom包，用来显示和操作dom的
import ReactDOM from 'react-dom'

//创建虚拟dom元素
//参数1:创建的元素的类型，字符串，表示元素的名名称
//参数2:是一个对象或null，表示当前这个dom的属性
//参数3:子节点（包括其他虚拟dom 文本子节点）
//参数4:其他子节点
const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一sda个h1')

const mydiv = React.createElement('div',null,myh1)
//使用reactdom把虚拟dom渲染到页面上
//参数1:要渲染的那个虚拟dom元素
//参数2:指定页面上的dom对象当作容器
ReactDOM.render(mydiv,document.getElementById('app'))