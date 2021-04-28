import { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: props.initCount,
            input: "",
        }
    }

    sendData = (str) => {
        this.props.parentFuc(str)
    }

    json = {
        "id":"1",
        "jobTitleName":"Developer",
        "firstName":"Ahmed",
        "lastName":"Ali",
        "preferredFullName":"Ahmed Ali"
        ,"employeeCode":"E1","region":"CA","phoneNumber":"408-1234567","emailAddress":"ahmed.ali@gmail.com"
    }

    setInput = (e) => {
        const str = e.target.value
        this.setState({input:str})
    }

    changeNumber = (flag) => {
        if(flag === "+"){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({ num:this.state.num+=1 })
        } else if (flag === "-"){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({ num:this.state.num-=1 })
        }
    }

    render () {
        return (
            <div className="Counter">
                <p>Counter: { this.state.num }</p>
                <div>

                    <button className="btn btn-primary m-2" onClick={ ()=>this.changeNumber("-") }
                    >Reduce</button>

                    <button className="btn btn-info m-2"    onClick={ ()=>this.sendData(this.state.input) }
                    >Send to parent</button>

                    <button className="btn btn-primary m-2" onClick={ ()=>this.changeNumber("+") }
                    >Add</button>

                </div>
                <input type="text" className="form-control w-25" onChange={ this.setInput } />
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default Counter;
