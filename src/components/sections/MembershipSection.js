import React, { Component } from 'react';

import language from '../../languages';

import Section from './Section';

import newMember from '../../files/uusijasen.pdf';
import eventPhotoInfo from '../../files/opas_tapahtumakuvaukseen.pdf';
import rules from '../../files/saannot.pdf';

class MembershipSection extends Component {
  render() {
    const header = {
      [language.ENGLISH]: 'Membership',
      [language.FINNISH]: 'Jäsenyys'
    }

    const bankAccount = 'FI93 6601 0010 0654 31';

    const content = {
      [language.ENGLISH]: <div>
      <p>Club's members are composed of full-, endorsing- and honorary members </p>
      <p>Our annual club full membership fee is (academic year) is 5 euros. Endorsement membership fee is 10 euros (calendar year).
        You can pay the fee to the club's bank account after which contact a board member:</p>
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
      <p>Full membership is valid for one academic year and members have to be degree, postgraduate or exchange students
        at Tampere University.
        You also have to accept club's intentions and rules and pay the membership fee.
      </p>
      <p>Endorsing membership is valid for one calendar year and is open for any person or community who wants to support
        the club.</p>
      <p>As our full member club's premises and equipment (after signing the reservation agreement) are available for you.
        After paying the membership fee contact a board member for reclaiming your membership card. With your membership
        card you can prove your membership when borrowing the clubroom key. According to your will and capabilities you
        can participate in the improving of our activities.</p>
      <p>As a new member you should read the following documents:</p>
      <ul>
        <li><a id='1' href={newMember}>Info for a new member</a></li>
        <li><a id='2' href={eventPhotoInfo}>Guide to event photography</a></li>
        <li><a id='3' href={rules}>Club's rules (in finnish)</a></li>
      </ul>
      </div>,
      [language.FINNISH]: <div>
      <p>Kerhon jäseniä ovat varsinaiset jäsenet sekä kannatus- ja kunniajäsenet.</p>
      <p>Kerhomme vuosimaksu (lukuvuosi) on 5 euroa varsinaisille jäsenille ja kannatusjäsenille 10 euroa (kalenterivuosi).
        Jäsenmaksun voit maksaa tilille, jonka jälkeen ota yhteyttä hallituksen jäseneen:<br/></p>
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
      <p>Varsinainen jäsenyys on voimassa yhden lukuvuoden ja jäseneksi voidaan hyväksyä jokainen Tampereen yliopistossa
        tutkinto-, jatko- tai vaihto-opintoja suorittava henkilö, joka hyväksyy kerhon tarkoituksen ja säännöt sekä suorittaa
        kerhon jäsenmaksun.</p>
      <p>Kannatusjäsenyys on voimassa kalenterivuoden ja jäseneksi voidaan hyväksyä kerhon toiminnasta kiinnostunut
        henkilö tai yhteisö, joka haluaa tukea kerhon tarkoitusta ja toimintaa.</p>
      <p>Varsinaisena jäsenenä sinulla on kaikki tilamme ja kalustomme (lainaussopimuksen allekirjoitettua) käytettävissäsi.
        Jäsenmaksun maksettuasi ota yhteyttä johonkin hallituksen jäseneen, sovi hänen kanssaan milloin voit noutaa jäsenkortin,
        jolla voit todistaa jäsenyytesi pimiön avainta lainatessa. Halutessasi (ja suotavasti) voit myös omalla aktiivisuudellasi
        olla mukana kehittämässä toimintaamme.</p>
      <p>Uutena jäsenenä sinun olisi hyvä tutustua seuraaviin asioihin: </p>
      <ul>
        <li><a id='1' href={newMember}>Uuden jäsenen tietopaketti</a></li>
        <li><a id='2' href={eventPhotoInfo}>Kerholaisen opas tapahtumakuvaukseen</a></li>
        <li><a id='3' href={rules}>Kerhon säännöt</a></li>
      </ul>
      </div>
    }

    return (
      <Section id={'membership'} header={header[this.props.lang]} color={'black'}>{content[this.props.lang]}</Section>
    );
  }
}

export default MembershipSection;
