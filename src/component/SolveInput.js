import React, {Component} from "react";
import axios from "axios";

import "./SolveInput.css";

export class SolveInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solutionValue: null,
            number: null
        };

    }

    fetchResult = () => {
        this.setState({solutionValue: null});
        axios.get(this.props.url + this.state.number)
            .then(response => {
                this.setState({solutionValue: response.data.data})
            })
    };

    setNumber = (value) => {
        this.setState({number: value})
    }

    render() {
        let setNumber = this.setNumber
        return (
            <div className="solve-input-container">
                <div className="input-group mb-3 solve-input-group">
                    <input type="text" className="form-control" placeholder="Choose a number"
                           aria-label="Choose a number" aria-describedby="button"
                           onChange={event => setNumber(event.target.value)} pattern="^[1-9][0-9]?$|^100$"
                    />
                    <input className="form-control display-result" disabled={true} value={this.state.solutionValue}/>
                    <button className="btn btn-primary" type="button" id="button" onClick={this.fetchResult}>Solve
                    </button>
                </div>
            </div>
        );
    }

}