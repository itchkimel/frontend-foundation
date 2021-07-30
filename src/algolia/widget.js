import React, { Component } from "react";
import places from "places.js";
import connect from "./connector";

class Places extends Component {
  createRef = (c) => (this.element = c);
  

  componentDidMount() {
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
      // Algolia Places options
    });

    autocomplete.on("change", (event) => {
      refine(event.suggestion.latlng);
    });

    autocomplete.on("clear", () => {
      refine(defaultRefinement);
    });
  }

  render() {
    
    return (
        <input
          className="finder__input"
          name="address"
          placeholder="Please enter you address"
          ref={this.createRef} 
          onSelect={this.props.handleChange}
          type="search"
        />
    );
  }
}

export default connect(Places);
