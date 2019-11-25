import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Button } from "antd";
import "./Home.css";
import Card from "./Card";
import Item from "./Item";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { takeLatest, put, call } from "redux-saga/effects";
class Home extends Component {
  // state = {
  //   name: "Anurag Jaiswal",
  //   email: "anurag@cronj.com",
  //   info: "Target Coporation",
  //   location: "India",
  //   index: "0",
  //   list: [
  //     "Overview",
  //     "Repositiories",
  //     "Projects",
  //     "Stars",
  //     "Followers",
  //     "Following"
  //   ]
  // };
  // handleBorder = id => {
  //   alert("i 'm running" + id);
  //   console.log("id>>>>", id);
  //   this.setState({
  //     index: id
  //   });
  // };

  componentDidMount() {
    //this.props.getData;
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps>>>", newProps);
    if (this.props !== newProps) {
      this.props = newProps;
      console.log("new props has been assigned");
    }
  }
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const header = this.props.list.map((item, index) => {
      return <Item name={item} index={index} />;
    });
    return (
      <div>
        <Layout>
          <Sider
            className="sider"
            width={350}
            theme="light green"
            className="sider"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="imageInfo">
              <Avatar shape="square" size={251} icon="user" />
              <br></br>
              {this.props.name}
              <br></br>
              {this.props.email}
              <br></br>
              {this.props.isfollowBtnClicked === true ? (
                <Button type="primary" block onClick={this.props.handleFollow}>
                  UnFollow
                </Button>
              ) : (
                <Button type="primary" block onClick={this.props.handleFollow}>
                  Follow
                </Button>
              )}
              <br></br>
              <br></br>
              <Icon type="user" />
              &nbsp;
              {this.props.info}
              <br></br>
              <br></br>
              <Icon type="environment" />
              &nbsp;
              {this.props.location}
              <br></br>
              <br></br>
              <Icon type="mail" />
              &nbsp;
              {this.props.email}
              <br></br>
              <br></br>
              <p>block or report user</p>
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                {/* <Button type="primary" block onClick={this.handleFollow}>
                  Follow
                </Button> */}
              </Menu.Item>
              <Menu.Item key="2">
                {/* <span className="nav-text">{this.props.info}</span> */}
              </Menu.Item>
              <Menu.Item key="3">
                {/* <span className="nav-text">{this.props.location}</span> */}
              </Menu.Item>
              <Menu.Item key="4">
                {/* <span className="nav-text">{this.props.email}</span> */}
              </Menu.Item>
              <Menu.Item key="5"></Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="header"
              style={{ background: "#fff", padding: 0, height: "48px" }}
            >
              <nav class="UnderlineNav">
                <div class="UnderlineNav-body">{header}</div>
              </nav>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <h3>Popular Repositories</h3>
              <div className="contentCards">
                <Row>
                  <Col md={24} lg={12}>
                    <Card name="ActionsAngular" content="content" />
                  </Col>

                  <Col md={24} lg={12}>
                    <Card
                      name="bidding"
                      content="content"
                      tech="JavaScript"
                      starCount="1"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={24} lg={12}>
                    <Card
                      name="first-contributions"
                      content="content"
                      tech="javascript"
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <Card
                      name="FreeCodeCamp"
                      content="content"
                      tech="JavaScript"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={24} lg={12}>
                    <Card name="Observe" content="content" tech="CSS" />
                  </Col>
                  <Col md={24} lg={12}>
                    <Card name="pravar" content="content" tech="CSS" />
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    info: state.info,
    location: state.location,
    list: state.list,
    isfollowBtnClicked: state.isfollowBtnClicked,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFollow: () => dispatch({ type: "HANDLE_FOLLOW" }),
    getData: () => dispatch({ type: "FETCH_USERS" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
