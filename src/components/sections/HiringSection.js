import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

import language from '../../languages';

import Section from './Section';

class HiringSection extends Component {
  render() {
    const header = {
      [language.ENGLISH]: 'Hire a Photographer',
      [language.FINNISH]: 'Tilaa Kuvaaja'
    }

    const email = <p className={'hire-email'}><Glyphicon glyph='envelope'/><br/><a href="mailto:kamerat-hallitus@listmail.tut.fi">kamerat-hallitus@listmail.tut.fi</a></p>

    const content = {
      [language.ENGLISH]: <div>Need a photographer for your event?<br/>Ask for an offer via email!{email}</div>,
      [language.FINNISH]: <div>Tarvitsetko tapahtumaasi kuvaajaa?<br/>Kysy tarjousta sähköpostilla!{email}</div>
    }

    return (
      <Section id={'contact'} header={header[this.props.lang]} color={'primary'}>{content[this.props.lang]}</Section>
    );
  }
}

export default HiringSection;
