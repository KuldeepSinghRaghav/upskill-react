import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <div className="main">something went wrong.....</div>;
    }
    return this.props.children;
  }
}
