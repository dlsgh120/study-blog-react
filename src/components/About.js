import React from "react";
import queryString from "query-string";

class About extends React.Component{
    render(){
        const query = queryString.parse(this.props.location.search);
        console.log(query);
        return(
            <div>
                this is About Component
                <h1>{this.props.match.params.name}</h1>
                <h1>{this.props.match.params.age}</h1>
            
                {query.detail==="true"&&
                <div>
                    <p>주소: 서울특별시</p>
                    <p>Phone: 010-0000-0000</p>
                </div>}
            </div>
        );
    }
}

export default About;