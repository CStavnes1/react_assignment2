import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";

class NyTimesContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search yankees"
  componentDidMount() {
    this.searchArticles("Yankees");
  }

  searchArticles = query => {
    API.search(query)
      .then(function(response) {
        console.log(response)
      })
        
      //   res => this.setState({ result: res.data }))
      // .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the NYTIMES API for the value of `this.state.search`
  handleFormSubmit = event => {
    // alert("test")
    event.preventDefault();
    this.searchArticles(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Article"}
            >
              {this.state.result.Title ? (
                <ArticleDetail
                  title={this.state.result.Title}
                  date={this.state.result.date}
                  url={this.state.result.url}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NyTimesContainer;