import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import language from '../../languages';

import Section from './Section';

import printing from '../../files/tulostusohjeet.pdf';

class PrintingSection extends Component {
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
      pricelistJSX.push(<li key={i}><b>{category.category[this.props.lang]}</b></li>);
      category.products.forEach( function( product, j) {
        pricelistJSX.push(<li key={i+'-'+j}>{product.name[this.props.lang]} {product.price} {product.unit[this.props.lang]}</li>);
      }.bind(this));
    }.bind(this));

    return <ul className={'list-unstyled'}>{pricelistJSX}</ul>;
  }

  render() {
    const header = {
      [language.ENGLISH]: 'Printing',
      [language.FINNISH]: 'Tulostaminen'
    }

    const content = {
      [language.ENGLISH]: <div><h3>Our printer is currently not in use</h3><p>We have pro-grade Epson Stylus Pro 3880 photo printer for printing up to A2 sized pictures. Mark up your usage to the tab. For detailed instructions to use the printer check <a href={printing}>here</a>.</p><p>We also have a laminating machine. The machine fits up to A3 sized laminating sleeves. There is a few different sized sheets at the club to buy.</p></div>,
      [language.FINNISH]: <div><h3>Tulostin ei ole toistaiseksi käytettävissä</h3><p>Kerhollamme on käytössä ammattitason Epson Stylus Pro 3880 valokuvatulostin, jolla voit tulostaa aina A2 kokoon asti. Merkkaathan piikkilistaan tulosteesi. Tarkemmat käytännön ohjeet <a href={printing}>täältä</a>.</p><p>Lisäksi meiltä löytyy laminointikone. Koneella voi laminoida aina A3 kokoon saakka ja kerholta löytyy myytäväksi muutamaa eri arkkikokoa.</p></div>
    }

    const prices = [
      {
        category : {
          [language.ENGLISH]: 'Printing + paper',
          [language.FINNISH]: 'Tulostaminen + paperi'
        },
        products : [
          {
            name : {
              [language.ENGLISH]: '10x15 cm',
              [language.FINNISH]: '10x15 cm'
            },
            price : 0.5,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'A4',
              [language.FINNISH]: 'A4'
            },
            price : 2,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'A3',
              [language.FINNISH]: 'A3'
            },
            price : 4,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'A2',
              [language.FINNISH]: 'A2'
            },
            price : 8,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          }                    
        ]
      },
      {
        category : {
          [language.ENGLISH]: 'Laminating',
          [language.FINNISH]: 'Laminointi'
        },
        products : [
          {
            name : {
              [language.ENGLISH]: 'Business card',
              [language.FINNISH]: 'Käyntikortti'
            },
            price : 0.1,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'A4',
              [language.FINNISH]: 'A4'
            },
            price : 0.2,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          },
          {
            name : {
              [language.ENGLISH]: 'A3',
              [language.FINNISH]: 'A3'
            },
            price : 0.4,
            unit : {
              [language.ENGLISH]: '€/sheet',
              [language.FINNISH]: '€/arkki'
            }
          }                  
        ]

      },   
    ]

    return (
      <Section id={'print'} header={header[this.props.lang]} color={'black'}>
      <Row>
        <Col mdOffset={4} md={4} xs={12}>{content[this.props.lang]}</Col>
        <Col md={4} xs={12}>{this.renderPriceList(prices)}</Col>      
      </Row>
      </Section>
    );
  }
}

export default PrintingSection;
