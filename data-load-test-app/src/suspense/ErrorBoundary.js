import React from 'react';

export class ErrorBoundary extends React.Component {
  state = {};

  componentDidCatch(error) {
    this.setState({ error: error.message || "Unexpected error" });
  }

  render() {
    if (this.state.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.state.error || 'Unexpected Error'}</div>;
    }
    return this.props.children;
  }
}


export default ErrorBoundary;
