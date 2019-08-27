import React, { Component } from 'react';

import { Row, Col, Glyphicon } from 'react-bootstrap';

import language from '../../languages';

import Section from './Section';

class ActivitiesSection extends Component {
  constructor() {
    super();
    this.renderActivities = this.renderActivities.bind(this);
  }

  renderActivities() {
    var activities = [
      {
        title : {
          [language.ENGLISH]: 'Mailing list',
          [language.FINNISH]: 'Tiedotus'
        },
        content : {
          [language.ENGLISH]: <span>Subscribe to official our mail list <a href='https://listmail.tut.fi/mailman/listinfo/tt-kamerat'>here.</a> Same info is also sent to our <a href='https://ttkamerat.fi/tg-info'>announcement channel</a> in Telegram.</span>,
          [language.FINNISH]: <span>Kerhon viralliselle tiedotuskanavalle voit liittyä <a href='https://listmail.tut.fi/mailman/listinfo/tt-kamerat'>tästä.</a> Samat tiedot julkaistaan myös meidän <a href='https://ttkamerat.fi/tg-info'>tiedotuskanavalle</a> Telegramissa.</span>
        },
        glyph: 'envelope'
      },
      {
        title : {
          [language.ENGLISH]: <span>Social media</span>,
          [language.FINNISH]: <span>Some</span>
        },
        content : {
          [language.ENGLISH]: <span>Follow us on Instagram <a href='https://www.instagram.com/ttkamerat/'>@ttkamerat</a> and <a href='http://www.facebook.com/TT-kamerat'>Facebook</a>.</span>,
          [language.FINNISH]: <span>Seuraa meitä Instagramissa <a href='https://www.instagram.com/ttkamerat/'>@ttkamerat</a> ja <a href='http://www.facebook.com/TT-kamerat'>Facebookissa</a>.</span>
        },
        glyph: 'thumbs-up'
      },
      {
        title : {
          [language.ENGLISH]: <span>Pictures</span>,
          [language.FINNISH]: <span>Kuvat</span>
        },
        content : {
          [language.ENGLISH]: <span>Our picture gallery can be found at <a href='http://ttkamerat.kuvat.fi/kuvat/'>ttkamerat.kuvat.fi</a>, <a href='http://teekkari.kuvat.fi/kuvat/'>teekkari.kuvat.fi</a> and <a href='http://trey.kuvat.fi/kuvat/'>trey.kuvat.fi</a>.</span>,
          [language.FINNISH]: <span>Tapahtumien kuva-albumit löydät osoitteesta <a href='http://ttkamerat.kuvat.fi/kuvat/'>ttkamerat.kuvat.fi</a>, <a href='http://teekkari.kuvat.fi/kuvat/'>teekkari.kuvat.fi</a> ja <a href='http://trey.kuvat.fi/kuvat/'>trey.kuvat.fi</a>.</span>
        },
        glyph: 'picture'
      },
      {
        title : {
          [language.ENGLISH]: <span>Telegram</span>,
          [language.FINNISH]: <span>Telegram</span>
        },
        content : {
          [language.ENGLISH]: <span>All of our international members are welcome to <a href='https://ttkamerat.fi/tg-en'>TT-kamerat international Telegram group.</a></span>,
          [language.FINNISH]: <span>Kaikki kerhon toiminnasta kiinnostuneet ovat tervetulleita <a href='https://ttkamerat.fi/tg'>Telegram-kanavallemme.</a></span>
        },
        glyph: 'comment'
      },
      {
        title : {
          [language.ENGLISH]: <span>Gear</span>,
          [language.FINNISH]: <span>Kaluston lainaaminen</span>
        },
        content : {
          [language.ENGLISH]: <span>We provide a extensive collection of photography gear for our members to borrow. Further information below.</span>,
          [language.FINNISH]: <span>Kerhon jäsenillä on lainattavissa laaja valikoima kalustoa valokuvaamiseen. Alempana lisätietoa.</span>
        },
        glyph: 'camera'
      },
      {
        title : {
          [language.ENGLISH]: <span>Clubroom</span>,
          [language.FINNISH]: <span>Kerhohuone</span>
        },
        content : {
          [language.ENGLISH]: <span>Our clubroom can be found at Tietotalo cellar (TA006).</span>,
          [language.FINNISH]: <span>Kerhohuoneemme löytyy Tietotalon kellarista osoitteesta TA006.</span>
        },
        glyph: 'home'
      }
    ];

    var activitiesJSX = [];

    activities.forEach( function(activity, i) {
      activitiesJSX.push(<Col className={'activity'} key={i} md={2} sm={6} xs={12}>
      <Glyphicon className={'activity-glyph'} glyph={activity.glyph}/><br/>
      <h3>{activity.title[this.props.lang]}</h3>
      <p>{activity.content[this.props.lang]}</p>
      </Col>)
    }.bind(this));

    return <Row>{activitiesJSX}</Row>;
  }

  render() {
    const header = {
      [language.ENGLISH]: 'Activities',
      [language.FINNISH]: 'Toiminta'
    }

    return (
      <Section id={'activity'} header={header[this.props.lang]}>{this.renderActivities()}</Section>
    );
  }
}

export default ActivitiesSection;
