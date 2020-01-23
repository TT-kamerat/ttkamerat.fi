import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import kaisa from '../../images/board/Kaisa.jpg';
import ella from '../../images/board/Ella.jpg';
import eeli from '../../images/board/Eeli.jpg';
import antti from '../../images/board/Antti.jpg';
import ville from '../../images/board/Ville.jpg';
import lauri from '../../images/board/Lauri.jpg';
import aaro from '../../images/board/Aaro.jpg';
import jan from '../../images/board/Jan.jpg';
import markku from '../../images/board/Markku.jpg';
import juhis from '../../images/board/Juha-Matti.jpg';
import patrik from '../../images/board/Patrik.jpg';
import heidi from '../../images/board/Heidi.jpg';
import petteri from '../../images/board/Petteri.jpg';
import olli from '../../images/board/Olli.jpg';
import anriika from '../../images/board/Anriika.jpg';


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
    <img alt={official.name} className={'img-rounded'} src={official.img}/>
    <h3 className="official-title">{official.title[this.props.lang]}</h3>
    <h4 className="official-title">{official.name}</h4>
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
          id: 'jan',	
          img: jan,
          name: 'Jan Heikkilä',	
          nick: 'hjeikkilan',	
          title: {	
            [language.ENGLISH] : 'Chairman', 	
            [language.FINNISH] : 'Puheenjohtaja'	
          }	
        },
        {
          id: 'lauri',
          img: lauri,
          name: 'Lauri Nopanen',
          nick: 'Nopppanen',
          title: {
            [language.ENGLISH] : 'Vice Chairman', 
            [language.FINNISH] : 'Varapuheenjohtaja'
          }
        },        
        {
          id: 'patrik',
          img: patrik,
          name: 'Patrik Parviainen',
          nick: 'Pheytr1x',
          title: {
            [language.ENGLISH] : 'Secretary', 
            [language.FINNISH] : 'Sihteeri'
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
          id: 'heidi',
          img: heidi,
          name: 'Heidi Lillvis',
          nick: 'heidilill',
          title: {
            [language.ENGLISH] : 'Media Official', 
            [language.FINNISH] : 'Viestintävastaava'
          }
        }              
      ],
      officials : [
        {
          id: 'kaisa',
          img: kaisa,
          name: 'Kaisa Tolvanen',
          nick: 'kkaitsu',
          title: {
            [language.ENGLISH] : 'Event Official', 
            [language.FINNISH] : 'Tapahtumavastaava'
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
          id: 'petteri',
          img: petteri,
          name: 'Petteri Niemi',
          nick: 'Nippis',
          title: {
            [language.ENGLISH] : 'Darkroom Master', 
            [language.FINNISH] : 'Pimiömestari'
          }
        },        
        {
          id: 'olli',
          img: olli,
          name: 'Olli Tammenlarva',
          nick: 'Banaani120',
          title: {
            [language.ENGLISH] : 'Assistant Photo-op Coordinator', 
            [language.FINNISH] : 'Keikkakoordinaattorin apu'
          }
        },   
        {
          id: 'antti',
          img: antti,
          name: 'Antti Kallonen',
          nick: 'anttimoi',
          title: {
            [language.ENGLISH] : 'IT-wiz', 
            [language.FINNISH] : 'ATK-vastaava'
          }
        },     
        {
          id: 'juhis',
          img: juhis,
          name: 'Juha-Matti Hakojärvi',
          nick: 'Juhishhh',
          title: {
            [language.ENGLISH] : 'Gear Official', 
            [language.FINNISH] : 'Kalustovastaava'
          }
        },    
        {
          id: 'eeli',
          img: eeli,
          name: 'Eeli Hernesniemi',
          nick: 'eltsu7',
          title: {
            [language.ENGLISH] : 'Graphic Designer / IT assistant', 
            [language.FINNISH] : 'Graafikko / IT-apu'
          }
        },     
        {
          id: 'ville',
          img: ville,
          name: 'Ville Tahvanainen',
          nick: 'billsh',
          title: {
            [language.ENGLISH] : 'Long in the Tooth', 
            [language.FINNISH] : 'Vanha kähmy'
          }
        },                    
        {
          id: 'anriika',
          img: anriika,
          name: 'Anriika Kauppi',
          nick: 'anriika',
          title: {
            [language.ENGLISH] : 'Gallery Official', 
            [language.FINNISH] : 'Galleriavastaava'
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
