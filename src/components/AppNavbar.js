import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-scroll'
 
import language from '../languages';

class AppNavbar extends Component {
  constructor() {
    super();
    this.renderNavItems = this.renderNavItems.bind(this);
  }

  renderNavItems() {
    var itemContents = [
      {
        id: 'activity',
        text: {
          [language.ENGLISH] : 'Activities',
          [language.FINNISH] : 'Toiminta'
        }
      },
      {
        id: 'contact',
        text: {
          [language.ENGLISH] : 'Hire Photographer',
          [language.FINNISH] : 'Tilaa Kuvaaja'
        }
      },
      {
        id: 'membership',
        text: {
          [language.ENGLISH] : 'Membership',
          [language.FINNISH] : 'Jäsenyys'
        }
      },
      {
        id: 'gear',
        text: {
          [language.ENGLISH] : 'Gear',
          [language.FINNISH] : 'Kalusto'
        }
      },
      {
        id: 'print',
        text: {
          [language.ENGLISH] : 'Print',
          [language.FINNISH] : 'Tulosta'
        }
      },
      {
        id: 'analog',
        text: {
          [language.ENGLISH] : 'Analog',
          [language.FINNISH] : 'Filmi'
        }
      },                              
      {
        id: 'board',
        text: {
          [language.ENGLISH] : 'Board',
          [language.FINNISH] : 'Hallitus'
        }
      }      
    ];

    var items = [];

    itemContents.forEach( function(item) {
      items.push(
        <NavItem key={item.id} eventKey={item.id} onClick={function() {this.props.select(item.id)}.bind(this)}>
          <Link activeClass="navbar-link-active"
          className={'navbar-link'}
          to={item.id}
          spy={true}
          duration={500}
          delay={50}
          smooth={true}
          >
          {item.text[this.props.lang].toUpperCase()}
          </Link>
        </NavItem>
      );
    }.bind(this));

    return items;
  }

  render() {
    return (
      <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">TT-KAMERAT</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        {this.renderNavItems()}
      </Nav>
      <Nav pullRight>
				<NavItem eventKey={1} onClick={this.props.changeLanguage}>
					{ this.props.lang === language.FINNISH ? 'IN ENGLISH' : 'SUOMEKSI'}
				</NavItem>
			</Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default AppNavbar;
