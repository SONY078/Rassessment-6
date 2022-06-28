import React, { PureComponent } from 'react'
import './PureandHoc.css';
export default class PureComponents extends PureComponent
{
   
   
    // var score = [5];
    // var sum = 0;
    // score = prompt("enter score:");
    // for(let i=0;i<score.length;i++)
    // {
    //   sum = score[i]+sum;
    // }
    // var avg = Math.round(sum/6);
    // return avg;

   
    
  render() {
    // var { label, 
    // score = [],
    
    // //  total = Math.max(sum),
    // avg = sum/6 } = this.props;
    var {score1 = prompt("enter score:"),
          score2 = prompt("enter score:"),
          score3 = prompt("enter score:"),
          scoreS = score1 + score2 ,
          score = scoreS + score3 ,
          avg = ((score)/3)} = this.props;
    
    return (
      <div id='pure'>
        <h1>PureComponents</h1>
        <h3> ReactJS has provided us a Pure Component.
             If we extend a class with Pure Component, there is no need for
              shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state
             and props with new props and states to decide whether the React component should 
             re-render itself or  Not.</h3>
             <hr/>
             
             {/* <h4>{label}</h4>
             <p>{sum}{score1}</p>
             <p>{avg}</p> */}
             <p>Total Percentage : {Math.round(avg)}%</p>
      </div>
    )
  }
}

