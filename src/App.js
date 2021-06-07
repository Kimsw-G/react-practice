import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

    return (
    <div className="App">
      Hello World
      <FuncComp initNumber={3}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
    );
}

// react에서 ajax통신을 이용하여 jdbc에 접근을 한다면?
// react...는 js파일에서 html 코드를 짜면 되는건가?
// 그렇다면 다른 function들을 다른 js파일에서 가져오는건??



let funcStyle = 'color:blue';
let funcId = 0;
function FuncComp(props){
    // state 사용 가능!!
    let numberState = useState(props.initNumber);
    console.log("number : ",numberState);
    let number = numberState[0]; // 0번 : 상태값
    let setNumber = numberState[1]; // 1번 : 그 상태를 바꿀 수 있는 함수
    // lifecycle 사용 가능!!

    // sideEffect 부가작용.
    useEffect(()=>{
        // componentDidMount && componentDidUpdate
        // 이와 같은 효과
        console.log('%cuseEffect => render'+(++funcId),funcStyle);
    });
    console.log('%cfunc => render'+(++funcId),funcStyle);
// 함수는 이를 매개변수로 받는다
    return(
        <div className="container">
            <h2>function style component</h2>
            <p>Number : {number}</p>
            <input type="button" value="random" onClick={
                function (){
                    setNumber(Math.random());
                }
            }></input>
            <input type="button" value="date" onClick={
                function (){
                    setNumber((new Date()).toString());
                }
            }></input>
        </div>
    );
}

let classStyle = 'color:red';
class ClassComp extends React.Component{
    // state 값을 바꿔주면서 이를 연산 등등 가능
    state = {
        number:this.props.initNumber
    }
    // 라이프사이클이 구현된다
    componentDidMount(){
        console.log('%cclass => componentDidMount',classStyle);
    }
    render() {
        console.log('%cclass => render',classStyle);
        return(
            <div className="container">
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function (){
                        this.setState({number:Math.random()*this.state.number})
                    }.bind(this)
                }></input>
                <input type="button" value="date" onClick={
                    function (){
                        this.setState({number:(new Date()).toString()})
                    }.bind(this)
                }></input>
            </div>
        )
    }
}

export default App;
