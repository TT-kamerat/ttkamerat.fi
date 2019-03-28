import React, { Component } from 'react';

import language from '../languages';

class Header extends Component {
  render() {
    const content = {
      [language.FINNISH] : <div>
        <h1>Tampereen Teekkarikamerat</h1>
        <h3>Kadonneiden muistikuvien löytötavaratoimisto</h3>
        <hr/>
        <p>Tampereen Teekkarikamerat on 5.12.1968 perustettu kerho kaikille valokuvauksesta ja siihen liittyvästä toiminnasta kiinnostuneille TREY:n jäsenille.</p>
      </div>,
      [language.ENGLISH] : <div>
      <h1>Tampereen Teekkarikamerat</h1>
      <h3>Recollection of lost images</h3>
      <hr/>
      <p>Tampereen Teekkarikamerat (est. 1968) is a club for all photography minded members of TREY.</p>
    </div>
    }

    return (
      <div className={'header'}>
        <div className={'header-content'}>
          {content[this.props.lang]}
        </div>
      </div>
    );
  }
}

export default Header;
