import React from 'react';

class ProfileClass extends  React.Component {
    constructor(props){
        super(props);
        // this.state ={
        //     count: 0,
        //     count2:0,
        // };
        this.state = {
            userInfo:{
                name: "Dummy name",
                location:"Dummy location",
            },
        };
        console.log("child- Constructor" + this.props.name);
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/prathmeshrrai?");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })

        this.timer=setInterval(() =>{
            console.log("nm react")
        },1000)
        console.log("child- componentDidMount"+this.props.name);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            //
        }else{
            //
        }
        console.log("component did update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component did unmounting")
    };

    render(){
        const {count} = this.state;
        console.log("child- render"+this.props.name)
        return(
            <div>
                <h1> Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Login: {this.state.userInfo.login}</h2>
                {/*<h2>Count: {count}</h2>
                <button onClick={() =>{
                    //we do not mutate state directly never do this.state=something
                    this.setState({
                        count:1,
                        count2:2,
                    });
                }}
                >SetCount
                </button> */}
            </div>
        )
    }
}

export default ProfileClass;