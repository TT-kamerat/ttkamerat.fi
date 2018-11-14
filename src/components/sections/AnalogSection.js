import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import language from '../../languages';

import Section from './Section';

class AnalogSection extends Component {
  constructor() {
    super();
    this.renderPriceList = this.renderPriceList.bind(this);
  }

  renderPriceList(prices) {
    var pricelistJSX = [];

    const header = {
      [language.FINNISH] : 'Hinnasto',
      [language.ENGLISH] : 'Price list'
    }

    pricelistJSX.push(<h3 key={'head'} className={'price-header'}>{header[this.props.lang]}</h3>);

    prices.forEach( function( category, i ) {
      pricelistJSX.push(<li key={i}><b key={1}>{category.category[this.props.lang]}</b></li>);
      category.products.forEach( function( product, j) {
        pricelistJSX.push(<li key={i+'-'+j}>{product.name[this.props.lang]} {product.price} {product.unit[this.props.lang]}</li>);
      }.bind(this));
    }.bind(this));

    return <ul className={'list-unstyled'}>{pricelistJSX}</ul>;
  }

  render() {
    const header = {
      [language.ENGLISH]: 'Analog photography',
      [language.FINNISH]: 'Filmikuvaus'
    }

    const prices = [
      {
        category : {
          [language.ENGLISH]: 'Film development',
          [language.FINNISH]: 'Filmin kehitys'
        },
        products : [
          {
            name : {
              [language.ENGLISH]: 'Color',
              [language.FINNISH]: 'Väri'
            },
            price : 2,
            unit : {
              [language.ENGLISH]: '€/roll',
              [language.FINNISH]: '€/rll'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'BW',
              [language.FINNISH]: 'MV'
            },
            price : 1,
            unit : {
              [language.ENGLISH]: '€/roll',
              [language.FINNISH]: '€/rll'
            }
          }
        ]

      },
      {
        category : {
          [language.ENGLISH]: 'Supplies',
          [language.FINNISH]: 'Tarvikkeet'
        },
        products : [
          {
            name : {
              [language.ENGLISH]: 'Negative sleeves',
              [language.FINNISH]: 'Negalehtiö'
            },
            price : 0.2,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/lehtiö'
            }
          }
        ]
        
      },
      {
        category : {
          [language.ENGLISH]: 'Paper development',
          [language.FINNISH]: 'Vedostaminen'
        },
        products : [
          {
            name : {
              [language.ENGLISH]: 'Vastavalo darkroom fee',
              [language.FINNISH]: 'Vastavalon pimiön maksu'
            },
            price : 2,
            unit : {
              [language.ENGLISH]: '€*',
              [language.FINNISH]: '€*'
            }
          }
        ]
      }      
    ]

    const content = {
      [language.ENGLISH]: <p>
        Analog photography is making its comeback within the club. At the moment we have several film bodies and lenses available. You can develop your b&w or color film in the clubroom. Developing black and white prints is possible in UTA's camera club Vastavalo's darkroom in Kaleva (further instructions <a href='http://vastavalo.kapsi.fi/'>here</a>).</p>
        ,
      [language.FINNISH]: <p>
        Kerhon keskuudessa filmikuvaaminen tekee uutta tuloa ja kehitämme toimintaa jatkuvasti.
        Tällä hetkellä kerholtamme löytyy muutamia filmirunkoja lainattavaksi.
        Kerhotiloissa onnistuu sekä mustavalko- että värifilmin kehitys.
        Mustavalkokuvien vedostaminen on tällä hetkellä mahdollista keskustan yliopiston kameraseura Vastavalon pimiöllä Kalevassa (tarkemmat ohjeet <a href='http://vastavalo.kapsi.fi/'>täältä</a>).</p>
        
    }

    return (
      <Section id={'analog'} header={header[this.props.lang]} color={'primary'}>
      <Row>
      <Col md={4} mdOffset={4} xs={12}>{content[this.props.lang]}</Col>
      <Col md={4} xs={12}>{this.renderPriceList(prices)}</Col>
      </Row>
      </Section>
    );
  }
}

export default AnalogSection;
