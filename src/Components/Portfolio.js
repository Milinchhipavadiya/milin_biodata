import React, { Component } from 'react';
class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects,index){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title + index} className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://drive.google.com/drive/folders/1mLfMD6xbyEpk0RqGceSfhM6kOV__d6xw?usp=sharing" >
               <img alt="milin chhipavadiya Profile Pic" src={projectImage}  />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 {/* <h5>{projects.title}</h5>
                     <p>{projects.category}</p> */}
                  </div>
                </div>  
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="photos">

      <div className="row">

         <div className="twelve columns collapsed">

            {/* <h1>Check Out Some of My Work.</h1> */}

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
