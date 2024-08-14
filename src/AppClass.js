import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-104.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-103.png",
  },
  paper: {
    name: "Paper",
    img: "https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-102.png",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    let judgementResult = this.judgement(
      choice[userChoice],
      choice[computerChoice]
    );
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: choice[computerChoice],
      userResult: judgementResult.user,
      computerResult: judgementResult.computer,
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return final;
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return { user: "Tie", computer: "Tie" };
    } else if (user.name === "Rock") {
      return computer.name === "Scissors"
        ? { user: "Win", computer: "Lose" }
        : { user: "Lose", computer: "Win" };
    } else if (user.name === "Scissors") {
      return computer.name === "Paper"
        ? { user: "Win", computer: "Lose" }
        : { user: "Lose", computer: "Win" };
    } else if (user.name === "Paper") {
      return computer.name === "Rock"
        ? { user: "Win", computer: "Lose" }
        : { user: "Lose", computer: "Win" };
    }
  };

  render() {
    return (
      <div>
        <div className="header">가위 바위 보 게임!</div>
        <div className="semi-header">컴퓨터를 이겨라~ 가위! 바위! 보!</div>
        <div className="main">
          <BoxClass
            title="YOU"
            item={this.state.userSelect}
            result={this.state.userResult}
          />
          <BoxClass
            title="COMPUTER"
            item={this.state.computerSelect}
            result={this.state.computerResult}
          />
        </div>

        <div className="main">
          <button onClick={() => this.play("scissors")} className="button">
            가위
          </button>
          <button onClick={() => this.play("rock")} className="button">
            바위
          </button>
          <button onClick={() => this.play("paper")} className="button">
            보
          </button>
        </div>
      </div>
    );
  }
}
