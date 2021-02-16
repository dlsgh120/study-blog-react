import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"; //추가
import Header from "./components/Header";
import Home from "./components/Home"; //추가
import About from "./components/About"; //추가
import Post from "./components/Post"; //추가

class App extends React.Component{
  render(){
    return(
        // 추가
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={Post} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;