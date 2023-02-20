import React from 'react'
import "./Main.css"
import Header from './Header';

const Main = () => {
  return (
    <div className='all'> 
      <> <Header />
         <div className='naming'>
         <div id="home" style={{height: 500}}>
            <h1>PERSONAL DATA</h1> <br />
           <b>NAME: AMBEER BHANU VARDHAN RAO</b> <br /> <br />
           <b>Father's Name: Lakpathi Rao</b><br /> <br />
           <b>Mother's Name: Shantha Bai</b><br /> <br />
           <b>Address: Kamaredy , Telangana - 503114</b> <br /> <br />
           <b>DOB: 11-06-1999</b> <br /> <br />
           <b>Religin: Hindu</b> <br /> <br />
           <b>Civil Status: Married</b> <br /> <br />
           <b>Citizenship: Indian</b> <br /> <br />
           <b>Place of Birth: Kamaredyy, India</b> <br /> <br />
           <b>Phone: <a href="">8639584853</a></b> <br /> <br />
           <b>Email: <a href="">bhanuvardhanrao64@gmail.com</a></b>
        </div>
        <div id="about" style={{height: 300}}>
        <h1>EDUCATIONAL BACKGROUND</h1> <br />
        <b>Primary:  Victory Public School, Gandhari.</b> <br /><br />
        <b>Seconary: ZHPS High School, Gandhari </b> <br /> <br />
        <b> Teritary: Diploma in ELectrical and Electronics Engineering</b>
        </div>
        <div id="contact" style={{height: 500}}>
        <h1>SKILLS</h1> <br /> 
       <li>Computer proficiency.</li>
       <li>Leadership experience.</li>
       <li>Communication skills.</li>
       <li>Organizational know-how.</li>
       <li>People skills.</li>
       <li>Collaboration talent.</li>
        </div>
        <div id="service" style={{height: 300,}}>
        <h1>EMPLOYMENT HISTORY</h1> <br /> <br />
        <h2>1 Year in full-stack web development</h2>
        <h4>Woring In: Zelarsoft Private Limited</h4>
        <p>ROLE: Software-Trainee</p>
        <p>JOINING DATE: March 20,2022 </p>
        </div>
        <div id="hobbies"style={{height: 500}}> 
        <h1>HOBBIES</h1>
        <li>#1. Community Involvement.</li>
        <li>#2. Learning Languages</li>
        <li>#3. Sports.</li>
        <li>#4. Reading Books</li>
        </div>
         </div>
            </>
    </div>
  )
}

export default Main
