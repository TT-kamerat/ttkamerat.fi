import React, { Component } from 'react';

class Section extends Component {
  constructor() {
    super();
    this.sectionColor = this.sectionColor.bind(this);
  }

  sectionColor() {
    switch(this.props.color) {
      case 'primary':
        return 'section-primary';
      case 'black':
        return 'section-black';
      default:
        return 'section-white';
    }
  }

  render() {
    return (
      <div id={this.props.id} className={'section '+this.sectionColor()}>
        <div className={'section-container'}>
          <center><h1>{this.props.header}</h1></center>
          <hr/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
