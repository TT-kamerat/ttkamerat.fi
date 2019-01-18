import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import kaisa from '../../images/board/kaisa.jpg';
import mika from '../../images/board/mika.jpg';
import ella from '../../images/board/ella.jpg';
import eeli from '../../images/board/eeli.jpg';
import antti from '../../images/board/antti.jpg';
import ville from '../../images/board/ville.jpg';
import lauri from '../../images/board/lauri.jpg';
import hene from '../../images/board/hene.jpg';
import aaro from '../../images/board/aaro.jpg';
import jan from '../../images/board/jan.jpg';
import jani from '../../images/board/jani.jpg';
import markku from '../../images/board/markku.jpg';

import gdpr from '../../files/jasenrekisteriseloste.pdf';

import language from '../../languages';

import Section from './Section';

class BoardSection extends Component {
  constructor() {
    super();
    this.renderOfficial = this.renderOfficial.bind(this);
    this.renderOfficials = this.renderOfficials.bind(this);

  }

  renderOfficial(official, offset=0) {
    return <Col className={'official'} mdOffset={offset*4} smOffset={offset*3} xsOffset={offset*3} md={4} sm={6} xs={6} key={official.id}>
    <img alt={official.name} className={'img-circle'} src={official.img}/>
    <h3>{official.title[this.props.lang]}</h3>
    <h4>{official.name}</h4>
    TG: @{official.nick}
    </Col>
  }

  renderOfficials(officials) {
    var boardJSX = [];

    // 7 ekaa hallituksessa, pj pois
    officials.board.slice(1).forEach( function(official, i) {
        boardJSX.push(this.renderOfficial(official));
    }.bind(this));

    var officialsJSX = [];

    // Loput toimareita
    officials.officials.forEach( function(official, i) {
      officialsJSX.push(this.renderOfficial(official));
    }.bind(this));


  return <div>
    <Row key={'chairman'}>{this.renderOfficial(officials.board[0], 1)}</Row>
    <Row key={'board'}>{boardJSX}</Row>
    <h2>{this.props.lang === language.FINNISH ? 'Toimihenkilöt' : 'Officials' }</h2><hr/>
    <Row key={'officials'}>{officialsJSX}</Row></div>;
  }

  render() {
    const header = {
      [language.ENGLISH]: 'Board',
      [language.FINNISH]: 'Hallitus'
    }

    const officials = {
      board : [
      {
        id: 'ville',
        img: ville,
        name: 'Ville Tahvanainen',
        nick: 'billsh',
        title: {
          [language.ENGLISH] : 'Chairman', 
          [language.FINNISH] : 'Puheenjohtaja'
        }
      },
      {	
        id: 'hene',	
        img: hene,
        name: 'Henrik Laakkonen',	
        nick: 'munlempinorsuonbabar',	
        title: {	
          [language.ENGLISH] : 'Vice Chairman & Secretary', 	
          [language.FINNISH] : 'Varapuheenjohtaja & Sihteeri'	
        }	
      },      
      {
        id: 'ella',
        img: ella,
        name: 'Ella Paananen',
        nick: 'Call_me_boss',
        title: {
          [language.ENGLISH] : 'Treasurer', 
          [language.FINNISH] : 'Rahastonhoitaja'
        }
      },
      {
        id: 'aaro',
        img: aaro,
        name: 'Aaro Tuukkanen',
        nick: 'rTzii',
        title: {
          [language.ENGLISH] : 'Photo-op Coordinator', 
          [language.FINNISH] : 'Keikkakoordinaattori'
        }
      },
      {
        id: 'eeli',
        img: eeli,
        name: 'Eeli Hernesniemi',
        nick: 'eltsu7',
        title: {
          [language.ENGLISH] : 'Media Official', 
          [language.FINNISH] : 'Viestintävastaava'
        }
      },
      {
        id: 'jani',
        img: jani,
        name: 'Jani Oksanen',
        nick: 'Proscribo',
        title: {
          [language.ENGLISH] : 'Event official', 
          [language.FINNISH] : 'Tapahtumavastaava'
        }
      },
      {
        id: 'juhis',
        img: lauri,
        name: 'Juha-Matti Hakojärvi',
        nick: 'Juhishhh',
        title: {
          [language.ENGLISH] : 'Business Contact', 
          [language.FINNISH] : 'Yritysvastaava'
        }
      }
    ],
    officials : [
      {	
        id: 'jan',	
        img: jan,
        name: 'Jan Heikkilä',	
        nick: 'hjeikkilan',	
        title: {	
          [language.ENGLISH] : 'Darkroom Master', 	
          [language.FINNISH] : 'Pimiömestari'	
        }	
      },      
      {
        id: 'markku',
        img: markku,
        name: 'woof woof',
        nick: 'MarkkuBot',
        title: {
          [language.ENGLISH] : 'Markku', 
          [language.FINNISH] : 'Markku'
        }
      },
      {
        id: 'kaisa',
        img: kaisa,
        name: 'Kaisa Tolvanen',
        nick: 'kkaitsu',
        title: {
          [language.ENGLISH] : 'Long in the Tooth', 
          [language.FINNISH] : 'Vanha kähmy'
        }
      },
      {
        id: 'antti',
        img: antti,
        name: 'Antti Kallonen',
        nick: 'anttimoi',
        title: {
          [language.ENGLISH] : 'IT-wiz', 
          [language.FINNISH] : 'IT-velho'
        }
      },
      {
        id: 'mika',
        img: mika,
        name: 'Mika Kiviluoma',
        nick: 'Kiviluoma',
        title: {
          [language.ENGLISH] : 'Gallery Official', 
          [language.FINNISH] : 'Galleriavastaava'
        }
      },
      {
        id: 'lauri',
        img: lauri,
        name: 'Lauri Nopanen',
        nick: 'Nopppanen',
        title: {
          [language.ENGLISH] : 'Gear Official', 
          [language.FINNISH] : 'Kalustovastaava'
        }
      },
      ]                                                 
    }

    const footer = {
      [language.ENGLISH] : <p className={'footer'}>You can contact the whole board via <a href='mailto:kamerat-hallitus@listmail.tut.fi'>kamerat-hallitus@listmail.tut.fi</a>. Optionally you can contact individual board member via Telegram.<br/> <a href={gdpr}>Membership privacy policy</a></p>,
      [language.FINNISH] : <p className={'footer'}>Hallituksen jäseniin saat helpoiten yhteyden Telegram-nimimerkeillä tai sähköpostilla <a href='mailto:kamerat-hallitus@listmail.tut.fi'>kamerat-hallitus@listmail.tut.fi</a>.<br/> <a href={gdpr}>Jäsenrekisteriseloste</a></p>
    }

    return (
      <Section id={'board'} header={header[this.props.lang]}>{this.renderOfficials(officials)}{footer[this.props.lang]}</Section>
    );
  }
}

export default BoardSection;
