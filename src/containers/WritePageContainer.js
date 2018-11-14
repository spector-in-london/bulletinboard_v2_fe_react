import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.postComment();
  }

  postComment() {
    const options = {
      method: 'post',
      body: JSON.stringify(this.state.comment),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    };

    fetch('/api/comments/', options)
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          this.props.history.push('/read');
        }
      })
      // TODO: handle errors
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    return (
      <WritePage onChange={this.handleChange} onSubmit={this.handleSubmit} />
    );
  }
}

export default withRouter(WritePageContainer);
