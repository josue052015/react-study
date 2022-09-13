import React from "react";

class StateInClassComponent extends React.Component{

    constructor(props){
        super(props)

        //this contains all the objects from class component like:  state, created methods, refs, props, ect.

        this.state = {
            //you have to pass the state properties like an object
            name: 'pedro',
            lastName: 'rodriguez'
        }
    }

    render(){
        return(
            <div>
                Hi: {this.state.name}
            </div>
        )
    }

}

export default StateInClassComponent;