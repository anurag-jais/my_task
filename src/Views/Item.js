import React, { Component } from "react";
import { Icon } from "antd";
import "./Card.css";
class Item extends Component {
  state = {
    index: "1"
  };
  render() {
    return (
      <div className="Items">
        <a
          href="#url"
          role="tab"
          id={this.props.index}
          className={
            this.props.index === 0
              ? "UnderlineNav-item selected"
              : "UnderlineNav-item"
          }
          //className="UnderlineNav-item selected"
        >
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default Item;
