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
    results: [],
    search: ""
  };
  // When this component mounts, search yankees"
  componentDidMount() {
    this.searchArticles("Twins");
  }

  searchArticles = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.response.docs })
        console.log(res.data)
      })



    //   function(result) {
    //   console.log(result)
    //   this.setState({result: result.data})
    //   console.log(result.data)
    // })

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

            {this.state.results.map(result => (
            <Card key={result._id}>
              <ArticleDetail
                title={result.headline.main}
                date={result.pub_date}
                url={result.web_url}
              />
            </Card>))}

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
