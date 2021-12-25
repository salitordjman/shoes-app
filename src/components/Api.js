import React from "react";
import axios from "axios";
import "./Api.css";

class Api extends React.Component {
  state = {
    persons: {},
    id: 0,
    like: 0,
    dislike: 0,
    per: {},
  };
  componentDidMount() {
    axios
      .get(`https://61c70ce390318500175472d8.mockapi.io/match`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        const per = persons[this.state.id];
        this.setState({ per });
      });
  }
  LikeFunc = () => {
    this.setState((prev) => ({
      like: prev.like + 1,
    }));
    this.GetGet();
  };
  DisLikeFunc = () => {
    this.setState((prev) => ({
      dislike: prev.dislike + 1,
    }));
    this.GetGet();
  };
  GetGet = () => {
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
    if (this.state.id < this.state.persons.length - 1) {
      const per = this.state.persons[this.state.id];
      console.log(per);
      this.setState({ per });
    } else {
      const per = {};
      per.name = "Error-Pic-End-Try-Tommorow";
      this.setState({ per });
    }
  };

  render() {
    return (
      <>
        <div className="emoji-num">
          <label className="emoji-space">
            {this.state.like}
            <span className="emoji" aria-label="DisLikeFunc" role="img">
              🤩
            </span>
          </label>
          <label className="emoji-space">
            {this.state.dislike}
            <span className="emoji" aria-label="DisLikeFunc" role="img">
              😵
            </span>
          </label>
        </div>
        <div>
          {console.log(this)}
          <img src={this.state.per.avatar} alt={this.state.per.name} />
        </div>
        <div className="person-name">{this.state.per.name}</div>
        <div>
          <button onClick={this.LikeFunc}>
            <span className="emoji xv" aria-label="Like" role="img">
              ✔️
            </span>
          </button>
          <button onClick={this.DisLikeFunc}>
            <span className="emoji xv" aria-label="DisLikeFunc" role="img">
              ❌
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default Api;
