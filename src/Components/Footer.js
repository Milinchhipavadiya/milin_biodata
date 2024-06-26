import React, { Component } from 'react';

const today = new Date();
const year = today.getFullYear();

class Footer extends Component {


  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright {year} <a title="Tim Baker" href="https://milin-resume.vercel.app/">Milin Chhipavadiya</a></li>
              <li>Design by <a title="Styleshout" href="https://milin-resume.vercel.app/">Milin Chhipavadiya</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
