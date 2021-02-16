import React from "react";
import {Link} from "react-router-dom"; //추가

class Header extends React.Component{
    render(){
        return(
            <div>
                <Link to="/" style={{marginRight:"20px"}}>home</Link>
                <Link to="/about" style={{marginRight:"20px"}}>about</Link>
                <Link to="/posts">post</Link>
            </div>
        );
    }
}

export default Header;