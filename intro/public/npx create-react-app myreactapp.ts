npx create-react-app myreactapp
cd myreactapp
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CouncilMembers from './components/CouncilMembers';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CouncilMembers />
      <ContactUs />
    </div>
  );
}

export default App;
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Council Members</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React from 'react';

function Hero() {
  return (
    <header>
      <h1>Welcome to Our Council Website</h1>
      <p>We are committed to serving our community.</p>
    </header>
  );
}

export default Hero;
import React from 'react';

function CouncilMembers() {
  return (
    <section>
      <h2>Council Members</h2>
      <ul>
        <li>Member 1</li>
        <li>Member 2</li>
        <li>Member 3</li>
      </ul>
    </section>
  );
}

export default CouncilMembers;
import React from 'react';

function ContactUs() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>Email us at info@ourcouncil.com or call us at 123-456-7890.</p>
    </section>
  );
}

export default ContactUs;
nav {
    background-color: #333;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 1rem;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }