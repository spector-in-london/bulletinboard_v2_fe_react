import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import WritePage from '../components/WritePage';

class WritePageContainer extends Component {
  state = {
    comment: {
      title: '',
      body: '',
    },
    isBusy: false,
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
    this.setState({ isBusy: true }, this.postComment());
  }

  handleError = (error) => {
    this.setState(
      { isBusy: false },
      console.error(error) // eslint-disable-line no-console
    );
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
          this.setState({ isBusy: false }, this.props.history.push('/read'));
        } else {
          this.handleError(res.message);
        }
      })
      .catch(this.handleError);
  }

  render() {
    const { isBusy } = this.state;

    return (
      <WritePage
        isBusy={isBusy}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default withRouter(WritePageContainer);
