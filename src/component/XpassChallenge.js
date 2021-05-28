import React, {Component} from "react";
import "./XpassChallenge.css";
import {solutions} from "../solutions";
import {Solution} from "./Solution";

export class XpassChallenge extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Xpass Challenge</h1>
                    <p>
                        Using SOLID principles, write a program that prints all the numbers from 1 to 100. However,
                        for multiples of 3, instead of the number, print “Xpass”. For multiples of 5 print "IT".
                        For numbers which are multiples of both 3 and 5, print “XpassLovers”.
                    </p>
                    <p>
                        But here are the requirements:
                    </p>
                    <ul>
                        <li>1 if max.</li>
                        <li>You can't use else, else if or ternary.</li>
                        <li>Unit tests.</li>
                        <li>You can write the challenge in any language you want.</li>
                    </ul>
                </div>
                {solutions.map((solution) => <Solution solution={solution}/>)}
                <h2>Full code</h2>
                <p>
                    <a href={"https://github.com/gabrielcargnin/xpass-challenge"}>https://github.com/gabrielcargnin/xpass-challenge</a>
                    <br/>
                    <a href={"https://github.com/gabrielcargnin/xpass-challenge-frontend"}>https://github.com/gabrielcargnin/xpass-challenge-frontend</a>
                </p>
            </div>
        );
    }

}