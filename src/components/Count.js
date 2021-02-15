import React from "react";

class Count extends React.Component{
    constructor() {
        super();
        this.state = {
          counter: 0,
        };
      } 
      componentDidMount(){
          console.log("component Did Mount");
      }

      // counter +1
      increase = () =>{
        this.setState({counter:this.state.counter+1});
      }
      // counter -1
      decrease = () =>{
        this.setState({counter:this.state.counter-1});
      }
    render(){
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}


export default Count;