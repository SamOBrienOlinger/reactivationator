import React from "react";

// const FunctionalGreetingWithProps() = (props) => <h1>Hello, Sam U Well!</h1>;

const FunctionalGreetingWithProps = (props) => {
    return (<h1>Hello, Sam U Well! {props.greeting} you crazy {props.age} year old eejit living in {props.address} with your dog {props.dog} and wife {props.wife}</h1>);
}

export default FunctionalGreetingWithProps;