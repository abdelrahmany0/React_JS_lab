import { Component } from 'react';


class Counter extends Component {

    state = {
        num: 0
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
                    <button className="btn btn-primary m-2" onClick={ ()=>this.changeNumber("+") }
                    >Add</button>
                </div>
            </div>
        );
    }
}

export default Counter;
