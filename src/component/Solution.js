import React, {Component} from "react";

import "./Solution.css";
import {CopyBlock, dracula} from "react-code-blocks";
import {SolveInput} from "./SolveInput";

export class Solution extends Component {

    render() {
        return (
            <div className="solution-container">
                <h2>{this.props.solution.name}</h2>
                <p>
                    <div dangerouslySetInnerHTML={{__html: this.props.solution.text}}/>
                </p>
                <div className="code-block">
                    <CopyBlock
                        language="java"
                        text={this.props.solution.code}
                        showLineNumbers="true"
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <SolveInput url={this.props.solution.url}/>
            </div>);
    }

}