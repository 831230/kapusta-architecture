import { Component } from "react";
import PropTypes from "prop-types";


class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again</h2>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};

export default ErrorBoundary;
