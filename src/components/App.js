import React, { Component } from 'react';

import './App.css';

import language from '../languages';

import AppNavbar from './AppNavbar';
import Header from './Header';

import ActivitiesSection from './sections/ActivitiesSection';
import HiringSection from './sections/HiringSection';
import MembershipSection from './sections/MembershipSection';
import GearSection from './sections/GearSection';
import PrintingSection from './sections/PrintingSection';
import AnalogSection from './sections/AnalogSection';
import BoardSection from './sections/BoardSection';

class App extends Component {
  constructor() {
    super()
    this.changeLanguage = this.changeLanguage.bind(this);
    this.select = this.select.bind(this);

    this.state = {
      language: language.FINNISH,
      select: null
    }
  }

  changeLanguage() {
    console.log('changeLanguage') 
    switch (this.state.language) {
      case language.ENGLISH:
        this.setState({language: language.FINNISH});
        break;
      case language.FINNISH:
        this.setState({language: language.ENGLISH});
        break;
      default:
        break;
    }
  }

  select(id) {
    console.log('select', id);
    this.setState({select: id});
  }

  render() {
    return (
      <div className="App" id={'home'}>
        <AppNavbar          lang={this.state.language}
                            changeLanguage={this.changeLanguage}
                            select={this.select}
                            />

        <Header             lang={this.state.language}/>

        <ActivitiesSection  lang={this.state.language}/>
        <HiringSection      lang={this.state.language}/>
        <MembershipSection  lang={this.state.language}/>
        <GearSection        lang={this.state.language}/>
        <PrintingSection    lang={this.state.language}/>
        <AnalogSection      lang={this.state.language}/>
        <BoardSection       lang={this.state.language}/>
      </div>
    );
  }
}

export default App;
