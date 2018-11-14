import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import kaisa from '../../images/board/kaisa.jpg';
import mika from '../../images/board/mika.jpg';
import ella from '../../images/board/ella.jpg';
import paavo from '../../images/board/paavo.jpg';
import eeli from '../../images/board/eeli.jpg';
import antti from '../../images/board/antti.jpg';
import ville from '../../images/board/ville.jpg';
import sami from '../../images/board/sami.jpg';
import lauri from '../../images/board/lauri.jpg';
import konsta from '../../images/board/konsta.jpg';
import zyrk from '../../images/board/zyrk.jpg';
import milla from '../../images/board/milla.jpg';
import hene from '../../images/board/hene.jpg';

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
        id: 'kaisa',
        img: kaisa,
        name: 'Kaisa Tolvanen',
        nick: 'kkaitsu',
        title: {
          [language.ENGLISH] : 'Chairman', 
          [language.FINNISH] : 'Puheenjohtaja'
        }
      },
      {	
        id: 'mika',	
        img: mika,
        name: 'Mika Kiviluoma',	
        nick: 'Kiviluoma',	
        title: {	
          [language.ENGLISH] : 'Vice Chairman', 	
          [language.FINNISH] : 'Varapuheenjohtaja'	
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
        id: 'paavo',
        img: paavo,
        name: 'Paavo Virtanen',
        nick: 'PaaVirt',
        title: {
          [language.ENGLISH] : 'Secretary', 
          [language.FINNISH] : 'Sihteeri'
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
        id: 'antti',
        img: antti,
        name: 'Antti Kallonen',
        nick: 'anttimoi',
        title: {
          [language.ENGLISH] : 'Master', 
          [language.FINNISH] : 'Isäntä'
        }
      },
      {
        id: 'ville',
        img: ville,
        name: 'Ville Tahvanainen',
        nick: 'billsh',
        title: {
          [language.ENGLISH] : 'Contact Person', 
          [language.FINNISH] : 'Yhteyshenkilö'
        }
      }
    ],
    officials : [
      {	
        id: 'sami',	
        img: sami,
        name: 'Sami Lamminen',	
        nick: 'Lamminen',	
        title: {	
          [language.ENGLISH] : 'Long in the tooth', 	
          [language.FINNISH] : 'Vanha kähmy'	
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
      {
        id: 'konsta',
        img: konsta,
        name: 'Konsta Ryösä',
        nick: 'Kryosa',
        title: {
          [language.ENGLISH] : 'Film Official', 
          [language.FINNISH] : 'Filmivastaava'
        }
      },
      {
        id: 'zyrk',
        img: zyrk,
        name: 'Veli-Matti Korpelainen',
        nick: 'Zyrkki',
        title: {
          [language.ENGLISH] : 'RY Master', 
          [language.FINNISH] : 'RY-mestari'
        }
      },
      {
        id: 'milla',
        img: milla,
        name: 'Milla Virkki',
        nick: 'Millav',
        title: {
          [language.ENGLISH] : 'Annual Celebration Official', 
          [language.FINNISH] : 'Vuosijuhlavastaava'
        }
      },
      {
        id: 'hene',
        img: hene,
        name: 'Henrik Laakkonen',
        nick: 'munlempinorsuonbabar',
        title: {
          [language.ENGLISH] : 'Event Official', 
          [language.FINNISH] : 'Tapahtumavastaava'
        }
      } 
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
