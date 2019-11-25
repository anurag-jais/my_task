import React, { Component } from "react";
import { Icon } from "antd";
import "./Card.css";
class Card extends Component {
  renderStar = count => {
    if (count) {
      return (
        <div>
          <Icon type="star" style={{ color: "black" }} theme="filled" />
          &nbsp;
          {this.props.starCount}
        </div>
      );
    } else return null;
  };
  renderTech = tech => {
    switch (tech) {
      case "JavaScript":
        return (
          <div>
            <Icon
              type="up-circle-o"
              style={{ color: "yellow" }}
              theme="filled"
            />
            &nbsp;
            {this.props.tech}
          </div>
        );
      case "CSS":
        return (
          <div>
            <Icon type="up-circle-o" style={{ color: "red" }} theme="filled" />
            &nbsp;
            {this.props.tech}
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="Cards">
        <article className="Card">
          <h4>{this.props.name}</h4>
          <div className="Content">{this.props.content}</div>
          <div className="Technology">
            {this.renderTech(this.props.tech)}&nbsp;&nbsp;
            {this.renderStar(this.props.starCount)}
          </div>
        </article>
      </div>
    );
  }
}

export default Card;
