import React, { Component } from 'react';

class Resume extends Component {
  render() {
    var cssForTable = {
      'width': '15%',
      'textAlign': 'center'
    }
    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education,index) {
        return <div key={education.school + index}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      // var work = this.props.data.work.map(function (work) {
      //   return <div key={work.company}><h3>{work.company}</h3>
      //     <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //     <p className="newline">{work.description}</p>
      //   </div>
      // })
      // var skills = this.props.data.skills.map(function (skills) {
      //   var projectImage = 'images/tech/' + skills.image;
      //   return <div key={skills.name} className="columns feature-item">
      //     <img className='skill' alt={skills.name} src={projectImage} />
      //     <h5>{skills.name}</h5>
      //     <p>{skills.description}</p>
      //   </div>
      // })
    }

    return (
      <section id="details" >

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Family Details</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <table>
                  <tbody>
                    <tr>
                      <td>Father Name</td>
                      <td style={cssForTable} >:-</td>
                      <td>Dharmeshbhai Vijaybhai Chhipavadiya</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td style={cssForTable} >:-</td>
                      <td>Diamond</td>
                    </tr>
                    <tr>
                      <td>Mother Name</td>
                      <td style={cssForTable} >:-</td>
                      <td>Ashaben Dharmeshbhai Chhipavadiya</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td style={cssForTable} >:-</td>
                      <td>Housewife</td>
                    </tr>
                    <tr>
                      <td>Brother</td>
                      <td style={cssForTable} >:-</td>
                      <td>Roshan Dharmeshbhai Chhipavadiya<br />(Pursuing :- Last Year of BCA in Gandhinagar)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Maternal Details</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td style={cssForTable} >:-</td>
                      <td>Satishbhai Ramanbhai  Sarkheliya</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td style={cssForTable} >:-</td>
                      <td>Spex Showroom</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td style={cssForTable} >:-</td>
                      <td>Vijaybhai Ramanbhai Sarkheliya</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td style={cssForTable} >:-</td>
                      <td>Diamond</td>
                    </tr>
                    <tr>
                      <td>Native</td>
                      <td style={cssForTable}>:-</td>
                      <td>Chital, Amreli</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
