import React, { Component } from 'react';

import WritePage from '../components/WritePage';

class WritePageContainer extends Component {
  state = {
    comment: {
      title: '',
      body: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      comment: {
        ...this.state.comment,
        [name]: value,
      }
    });
  }

  render() {
    return (
      <WritePage onChange={this.handleChange} />
    );
  }
}

export default WritePageContainer;
