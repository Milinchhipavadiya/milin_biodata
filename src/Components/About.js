import React, { Component } from 'react';

class About extends Component {
   render() {
      var cssForTable = {
         'width': '15%',
         'textAlign': 'center'
      }
      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         // var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }
      var today = new Date()
   
      var year = today.getFullYear() - 1999; 
    
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>I'm a Surat-based Full Stack Software Engineer, fueled by an athlete's spirit and an entrepreneurial drive. With a passion for coding and a keen eye for online security, I thrive in crafting innovative solutions. Hailing from Surat, I embark on projects as a freelancer, embracing a nomadic lifestyle reminiscent of my adventurous spirit. Just as I juggle multiple projects, I balance my love for coding with pursuits like motorcycling, soccer, and Muay Thai. I envision a future where my work takes me across the globe, mirroring the journey that shaped my early portfolio on the beaches of Southeast Asia.</p>

                  <table>
                     <tbody>
                     <tr>
                        <td>Cast</td>
                        <td style={cssForTable} >:-</td>
                        <td>Hindu Leva Patel</td>
                     </tr>
                     <tr>
                        <td>Date Of Birth </td>
                        <td style={cssForTable} >:-</td>
                        <td>29-11-1999</td>
                     </tr>
                     <tr>
                        <td>Age</td>
                        <td style={cssForTable} >:-</td>
                        <td>{year} year</td>
                     </tr>
                     <tr>
                        <td>Height</td>
                        <td style={cssForTable} >:-</td>
                        <td>5'8"</td>
                     </tr>
                     <tr>
                        <td>BloodGroup</td>
                        <td style={cssForTable} >:-</td>
                        <td>O Positive</td>
                     </tr>
                     <tr>
                        <td>Weight</td>
                        <td style={cssForTable} >:-</td>
                        <td>68</td>
                     </tr>
                     <tr>
                        <td>Education</td>
                        <td style={cssForTable} >:-</td>
                        <td>Bachelor of Engineering in Computer Science</td>
                     </tr>
                     <tr>
                        <td>Pursuing Education</td>
                        <td style={cssForTable} >:-</td>
                        <td>Master In Artificial Intelligence And Big Data Management</td>
                     </tr>
                     <tr>
                        <td>Occupation</td>
                        <td style={cssForTable} >:-</td>
                        <td>Freelancer as well as Diamond Seller</td>
                     </tr>
                     <tr>
                        <td>Native</td>
                        <td style={cssForTable} >:-</td>
                        <td>Surat</td>
                     </tr>
                     <tr>
                        <td>Hobbies</td>
                        <td style={cssForTable} >:-</td>
                        <td>Travaling, Music, Writing, Games, Coading</td>
                     </tr>
                     </tbody>
                  </table>

                  <br />

                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />{city}<br />
                              {state}, {zip}
                           </span><br />
                           <a href="tel:+91 9512699622"><span>{phone}</span></a><br />
                           <span><a href="mailto:milinchhipavadiya@gmail.com">{email}</a></span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Biodata</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
