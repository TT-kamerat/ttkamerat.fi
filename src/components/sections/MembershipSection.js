import React, { Component } from 'react';

import language from '../../languages';

import Section from './Section';

import newMember from '../../files/uusijasen.pdf';

class MembershipSection extends Component {
  render() {
    const header = {
      [language.ENGLISH]: 'Membership',
      [language.FINNISH]: 'Jäsenyys'
    }

    const bankAccount = 'FI93 6601 0010 0654 31';

    const content = {
      [language.ENGLISH]: <div>
      <p>Our annual club membership fee is (academic year) is 5 euros which you can pay to the club's bank account:</p>
      <p>
      <table className='bank-info'>
        <tbody>
          <tr>
            <td className='bank-info-description'>Receiver</td>
            <td className='bank-info-data'>Tampereen teekkarikamerat ry</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Account number</td>
            <td className='bank-info-data'>{bankAccount}</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Reference number</td>
            <td className='bank-info-data'>1012</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Bank</td>
            <td className='bank-info-data'>Ålandsbanken</td>
          </tr>
      </tbody>
      </table>
      </p>
      <p>As our member club's premises and equipment (after signing the reservation agreement) are available for you. After paying the membership fee contact a board member for reclaiming your membership card. With your membership card you can prove your membership when borrowing the clubroom key. According to your will and capabilities you can participate in the improving of our activities.</p>
      <p>Download info bulletin for new members <a href={newMember}>here!</a></p>
      </div>,
      [language.FINNISH]: <div>
      <p>Kerhomme vuosimaksu (lukuvuosi) on 5 euroa, jonka voit maksaa tilille:<br/></p>
      <p>
      <table className='bank-info'>
        <tbody>
          <tr>
            <td className='bank-info-description'>Saaja</td>
            <td className='bank-info-data'>Tampereen teekkarikamerat ry</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Tilinumero</td>
            <td className='bank-info-data'>{bankAccount}</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Viitenumero</td>
            <td className='bank-info-data'>1012</td>
          </tr>
          <tr>
            <td className='bank-info-description'>Pankki</td>
            <td className='bank-info-data'>Ålandsbanken</td>
          </tr>
      </tbody>
      </table>
      </p>
      <p>Jäsenenä sinulla on kaikki tilamme ja kalustomme (lainaussopimuksen allekirjoitettua) käytettävissäsi. Jäsenmaksun maksettuasi ota yhteyttä johonkin hallituksen jäseneen, sovi hänen kanssaan milloin voit noutaa jäsenkortin, jolla voit todistaa jäsenyytesi pimiön avainta lainatessa. Halutessasi (ja suotavasti) voit myös omalla aktiivisuudellasi olla mukana kehittämässä toimintaamme.</p>
      <p>Lataa <a href={newMember}>tästä</a> uuden jäsenen tietopaketti!</p>
      </div>
    }

    return (
      <Section id={'membership'} header={header[this.props.lang]} color={'black'}>{content[this.props.lang]}</Section>
    );
  }
}

export default MembershipSection;
