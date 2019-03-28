import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import language from '../../languages';

import Section from './Section';

class GearSection extends Component {
  constructor() {
    super();
    this.renderGear = this.renderGear.bind(this);
  }

  renderGear(gear) {
    var sections = []

    gear.forEach( function(section, j) {
      var sectionGear = [];
      section.gear.forEach( function(gear, i) {
        sectionGear.push(<li key={i}>{gear.name[this.props.lang]}</li>);
      }.bind(this));
      sections.push(<div key={j}>
        <h3>{section.header[this.props.lang]}</h3>
        <h4>{section.subtitle[this.props.lang]}</h4>
        <ul className={'list-unstyled'}>{sectionGear}</ul>
      </div>)
    }.bind(this));

    return <span><Col md={4} sm={6} xs={12}>{sections.slice(0,3)}</Col><Col md={4} sm={6} xs={12} mdOffset={0} smOffset={3} >{sections.slice(3)}</Col></span>
  }

  render() {
    const header = {
      [language.ENGLISH]: 'Gear',
      [language.FINNISH]: 'Lainattavat tavarat'
    }

    const gear = [
      {
        header: {
          [language.ENGLISH]: 'Camera bodies',
          [language.FINNISH]: 'Digirungot'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {
            name: {
              [language.ENGLISH]: '3 pcs Canon 6D',
              [language.FINNISH]: '3 kpl Canon 6D'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 5D Mark II',
              [language.FINNISH]: 'Canon 5D Mark II'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 200D',
              [language.FINNISH]: 'Canon 200D'
            }                        
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 20D',
              [language.FINNISH]: 'Canon 20D'
            }                        
          }
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Lenses',
          [language.FINNISH]: 'Objektiivit'
        },
        subtitle: {
          [language.ENGLISH]: 'All lenses are Canon EF mountable unless noted otherwise.',
          [language.FINNISH]: 'Kaikki objektiivit ovat Canon EF-kannalla ellei toisin mainita.'
        },
        gear: [
          {
            name: {
              [language.ENGLISH]: 'Canon 24-105mm f/4L IS',
              [language.FINNISH]: 'Canon 24-105mm f/4L IS'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 70-200mm f/2.8 L IS USM I',
              [language.FINNISH]: 'Canon 70-200mm f/2.8 L IS USM I'
            }
          },          
          {
            name: {
              [language.ENGLISH]: 'Sigma 70-200mm f/2.8 EX DG APO OS HSM',
              [language.FINNISH]: 'Sigma 70-200mm f/2.8 EX DG APO OS HSM'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 75-300mm f/4-5.6',
              [language.FINNISH]: 'Canon 75-300mm f/4-5.6'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 17-40mm f/4 L USM',
              [language.FINNISH]: 'Canon 17-40mm f/4 L USM'
            }
          },          
          {
            name: {
              [language.ENGLISH]: 'Samyang 8mm f/3.5',
              [language.FINNISH]: 'Samyang 8mm f/3.5'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Samyang 14mm f/2.8',
              [language.FINNISH]: 'Samyang 14mm f/2.8'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Zenitar 16mm f/2.8 fisheye',
              [language.FINNISH]: 'Zenitar 16mm f/2.8 fisheye'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 28mm f/2.8',
              [language.FINNISH]: 'Canon 28mm f/2.8'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 35mm f/2 IS USM',
              [language.FINNISH]: 'Canon 35mm f/2 IS USM'
            }
          },          
          {
            name: {
              [language.ENGLISH]: 'Canon 50mm f/1.8 II',
              [language.FINNISH]: 'Canon 50mm f/1.8 II'
            }
          },
          {
            name: {
              [language.ENGLISH]: '2 pcs Canon 50mm f/1.8 STM',
              [language.FINNISH]: '2 kpl Canon 50mm f/1.8 STM'
            }
          },
          {
            name: {
              [language.ENGLISH]: '2 pcs Canon 85mm f/1.8',
              [language.FINNISH]: '2 kpl Canon 85mm f/1.8'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 100mm f/2.8 Macro',
              [language.FINNISH]: 'Canon 100mm f/2.8 Macro'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Mirror tele 500 mm f/8',
              [language.FINNISH]: 'Venäläinen peilitele 500 mm f/8'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon EF-S 18-55 IS STM ONLY FOR CROP',
              [language.FINNISH]: 'Canon EF-S 18-55 IS STM VAIN KROPPIKENNOON'
            }
          },            
          {
            name: {
              [language.ENGLISH]: 'Tamron 17-50mm f/2.8 ONLY FOR CROP',
              [language.FINNISH]: 'Tamron 17-50mm f/2.8 VAIN KROPPIKENNOON'
            }
          }                                                                     
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Film gear',
          [language.FINNISH]: 'Filmikalusto'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {
            name: {
              [language.ENGLISH]: 'Pentax K1000 + 50mm f/2',
              [language.FINNISH]: 'Pentax K1000 + 50mm f/2'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Minolta SRT303 + 50mm f/2',
              [language.FINNISH]: 'Minolta SRT303 + 50mm f/2'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon AE-1 + 50mm f/1.8 broken :(',
              [language.FINNISH]: 'Canon AE-1 + 50mm f/1.8 broken :('
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon AV-1 + 135mm f/3.5',
              [language.FINNISH]: 'Canon AV-1 + 135mm f/3.5'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Nikon FM10 + 35-80mm f/4-5.6',
              [language.FINNISH]: 'Nikon FM10 + 35-80mm f/4-5.6'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Nikon F401X',
              [language.FINNISH]: 'Nikon F401X'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon EOS 5 (EF-lenses)',
              [language.FINNISH]: 'Canon EOS 5 (EF-objektiivit)'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Zenza Bronica ETRsi (6x4,5) medium format + 75mm f2.8 (film holder leaks light)',
              [language.FINNISH]: 'Zenza Bronica ETRsi (6x4,5) keskiformaatin kamera + 75mm f2.8 (filmiperä vuotaa valoa)'
            }
          }                                                                                        
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Lighting',
          [language.FINNISH]: 'Valaisu'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {
            name: {
              [language.ENGLISH]: 'Canon 580EX',
              [language.FINNISH]: 'Canon 580EX'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Canon 540EZ',
              [language.FINNISH]: 'Canon 540EZ'
            }
          },
          {
            name: {
              [language.ENGLISH]: '6 pcs Yongnuo 560IV + 2 pcs YN560-TX C transmitter',
              [language.FINNISH]: '6 kpl Yongnuo 560IV + 2 kpl YN560-TX C lähetin'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Elinchrome 500 studio flash + snoot',
              [language.FINNISH]: 'Elinchrome 500 studiosalama + snoot'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Studio flash set with 3 flashes (green case)',
              [language.FINNISH]: 'Studiosalamasetti 3 salamalla (vihreä laukku)'
            }
          },          
          {
            name: {
              [language.ENGLISH]: '2 kpl radiotrigger + transmitter',
              [language.FINNISH]: '2 kpl radiotriggeri + lähetin'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Slave flash receiver',
              [language.FINNISH]: 'Orjakenno'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'White 60 cm umbrella',
              [language.FINNISH]: 'Läpiammuttava 60 cm sateenvarjo'
            }
          },                                        
          {
            name: {
              [language.ENGLISH]: 'Silver 60 cm umbrella',
              [language.FINNISH]: 'Heijastava 60 cm sateenvarjo'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Silver 100 cm umbrella',
              [language.FINNISH]: 'Heijastava 100 cm sateenvarjo'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'White 100 cm umbrella',
              [language.FINNISH]: 'Läpiammuttava 100 cm sateenvarjo'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Six light stands',
              [language.FINNISH]: 'Kuusi erikokoista salamajalustaa'
            }
          },
          {
            name: {
              [language.ENGLISH]: '2 pcs horizontal beams',
              [language.FINNISH]: '2 kpl vaakapuomia'
            }
          },
          {
            name: {
              [language.ENGLISH]: '5 in 1 reflector',
              [language.FINNISH]: '5 in 1 refla'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Reflector stand',
              [language.FINNISH]: 'Reflateline'
            }
          },
          {
            name: {
              [language.ENGLISH]: 'Sand bags',
              [language.FINNISH]: 'Hiekkasäkit'
            }
          }          
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Stands',
          [language.FINNISH]: 'Jalustat'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [          
          {            
            name: {
              [language.ENGLISH]: 'Manfrotto tripod',
              [language.FINNISH]: 'Manfrotto kolmijalka'
            },
          },
          {            
            name: {
              [language.ENGLISH]: 'Manfrotto monopod',
              [language.FINNISH]: 'Manfrotto monopod'
            },
          },
          {            
            name: {
              [language.ENGLISH]: 'Lightweight tripod',
              [language.FINNISH]: 'Kevyt tripod'
            },
          },      
          {            
            name: {
              [language.ENGLISH]: 'Velbon video tripod',
              [language.FINNISH]: 'Velbon video tripod'
            },
          },          
          {            
            name: {
              [language.ENGLISH]: 'Glidecam HD-2000',
              [language.FINNISH]: 'Glidecam HD-2000'
            },
          }
        ]
      },                   
      {
        header: {
          [language.ENGLISH]: 'Bags and cases',
          [language.FINNISH]: 'Reput ja laukut'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {            
            name: {
              [language.ENGLISH]: 'Three different camera bags',
              [language.FINNISH]: 'Kolme erikokoista kameralaukkua'
            },
          },
          {            
            name: {
              [language.ENGLISH]: 'Lowepro backpack',
              [language.FINNISH]: 'Lowepro kamerareppu'
            }                                                                        
          },
          {            
            name: {
              [language.ENGLISH]: 'Bigger Lowepro backpack',
              [language.FINNISH]: 'Isompi Lowepro kamerareppu'
            }                                                                        
          }, 
          {            
            name: {
              [language.ENGLISH]: '2 pcs hardcase',
              [language.FINNISH]: '2 kpl hardcase'
            }                                                                        
          }
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Accessories',
          [language.FINNISH]: 'Oheislaitteet'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {            
            name: {
              [language.ENGLISH]: 'Spyder 3 Elite',
              [language.FINNISH]: 'Spyder 3 Elite'
            },
          },
          {            
            name: {
              [language.ENGLISH]: 'X-Rite i1Display Pro',
              [language.FINNISH]: 'X-Rite i1Display Pro'
            },
          },
          {            
            name: {
              [language.ENGLISH]: '5 pcs Loupedeck',
              [language.FINNISH]: '5 kpl Loupedeck'
            },
          },        
          {            
            name: {
              [language.ENGLISH]: '2 pcs Loupedeck+',
              [language.FINNISH]: '2 kpl Loupedeck+'
            },
          }
        ]
      },
      {
        header: {
          [language.ENGLISH]: 'Other',
          [language.FINNISH]: 'Muut'
        },
        subtitle: {
          [language.ENGLISH]: '',
          [language.FINNISH]: ''
        },
        gear: [
          {
            name: {
              [language.ENGLISH]: 'CF-cards 3 pcs 8, 32 GB',
              [language.FINNISH]: 'CF-kortit 3 kpl 8, 32 GB'
            },
          },
          {
            name: {
              [language.ENGLISH]: 'SD-cards 16, 6 pcs 32, 64 GB',
              [language.FINNISH]: 'SD-kortit 16, 6 kpl 32, 64 GB'
            },
          },
          {            
            name: {
              [language.ENGLISH]: '5 pcs LP-E6 -battery',
              [language.FINNISH]: '5 kpl LP-E6 -akku'
            }                                                                        
          }
        ]
      }                                         
    ]

    const content = {
      [language.ENGLISH]: <Col md={4} sm={6} xs={12} className={'gear-description'}>
      <p>All of our photography gear is located at our clubroom.</p>
      <p>New calendar starting from 1.9.2018 <a href='https://calendar.google.com/calendar?cid=MWZnMW1ycG1mY3VnMGQ0dThqOXQxdmM0NTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'>here</a>!</p>
      <p><b>Make sure items you are borrowing aren't already reserved during your period! MAXIMUM BORROWING PERIOD IS ONE WEEK. Borrowed gear must be returned before the next day 6:00 AM after reservation has ended.</b></p>
      <p>You can borrow the gear after paying the membership fee and signing the borrowing agreement. To borrow gear you need your membership card and editing permissions to the calendar. Mark all the things you borrow, your name and telephone number to the calendar.</p>
      <p>If borrowed gear is not returned on time member is given a notice and after second misuse member is banned from borrowing for one month. </p>
      <p>Take notice that getting into clubroom during weekends might not work out.</p>
    </Col>,
      [language.FINNISH]: <Col md={4} sm={6} xs={12} className={'gear-description'}>
        <p>Lainattavat tavarat sijaitsevat kerhohuoneellamme Tietotalon kellarissa TA006.</p>
        <p>Uusi lainauskalenteri alkaen 1.9.2018 <a href='https://calendar.google.com/calendar?cid=MWZnMW1ycG1mY3VnMGQ0dThqOXQxdmM0NTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'>tästä</a>!</p>
        <p><b>Varmista, että lainaamasi tavarat eivät ole jollain muulla lainassa sinun lainausjakson aikana. MAKSIMI LAINAUSAIKA ON VIIKKO. Tavarat on palautettava viimeistä lainapäivää seuraavana aamuna klo 6:00</b></p>
        <p>Voit lainata tavaroita maksettuasi jäsenmaksun ja allekirjoitettua lainaussopimuksen.
          Lainaamiseen tarvitset jäsenkortin ja muokkausoikeudet lainauskalenteriin jotka saat kerhon hallituksen jäseneltä, yhteystiedot sivun alaosassa.
          Merkitse lainauskalenteriin lainaamasi tavarat, nimesi ja puhelinnumerosi sekä lainausajankohta.
          Tavarat voit hakea itse näyttämällä jäsenkorttia Tietotalon Infopisteellä, jolloin saat avaimen pimiölle.</p>
        <p>Mikäli lainattavia tavaroita ei palauteta määräaikaan mennessä annetaan jäsenelle varoitus ja toisella kertaa yhden kuukauden lainakielto. Varoitukset ovat voimassa kuluvan lukuvuoden ajan.
        </p>
        <p>Huomaathan, että viikonloppuisin kerhohuoneelle pääsy ei välttämättä onnistu.</p>
      </Col>
    }

    return (
      <Section id={'gear'} header={header[this.props.lang]}><Row>{content[this.props.lang]}{this.renderGear(gear)}</Row></Section>
    );
  }
}

export default GearSection;
