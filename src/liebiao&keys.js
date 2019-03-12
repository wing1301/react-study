//导入react和react-dom的包
import React from 'react'
import ReactDOM from 'react-dom'

// const mydiv = React.createElement('div',{id:'mydiv',title:'divvv'},'这是一个div元素')
//在js文件中不识别以下这种类似html的语法，为了解决这个问题可以安装bable来进行转换
// 在js中写入类似html的语法是jsx语法

// function NumberList(props) {
//     const number = props.numbers;
//     const listItem = number.map((item) => <li key={item.toString()}>{item*2}</li>)
//     return (
//         <ul>{listItem}</ul>
//     )
// }

// const numbers = [1,2,3,4,5];

// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById("app")
// )

function Blog(props) {
    const slidebar = (
        <ul>
            {props.posts.map((item)=>
                <li key={item.id}>
                    {item.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((item)=>
        <div key="item.id">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    );

    return (
        <div>
            {slidebar}
            <hr/>
            {content}
        </div>
    )
}
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('app')
  );