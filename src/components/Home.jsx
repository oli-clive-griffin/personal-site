import React, { useState } from 'react'
// import { Link } from 'react-router'
import BlogFeed from './BlogFeed';
import MyWork from './MyWork';
import AboutMe from './AboutMe';

function Home() {

  const [active, setActive] = useState('')

  const toggleActive = (page) => {
    if (page === active) {
      setActive("")
    } else setActive(page)
  }


  return (
    <div className='container'>


      <div className="row">
        <div className="col-4 hero-card" >
          <div className='row mb-5'>
            <div className="col">
              <h1> Oli Clive-Griffin </h1>
              <code> Full stack web developer </code>            
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div onClick={() => toggleActive('blog')} className={"btn " + (active === 'blog' ? 'btn-primary' : "btn-outline-primary") + " mr-3"}> Blog </div>
              <div onClick={() => toggleActive('myWork')} className={"btn " + (active === 'myWork' ? 'btn-primary' : "btn-outline-primary") + " mr-3"}> My Work </div>
              <div onClick={() => toggleActive('aboutMe')} className={"btn " + (active === 'aboutMe' ? 'btn-primary' : "btn-outline-primary") + " mr-3"}> About Me </div>
            </div>
          </div>
        </div>

        <div className="col-4 border-rightz"/>

        <div className="col-8 ">
            {active == "blog" ? <BlogFeed/> : "" }
            {active == "myWork" ? <MyWork/> : "" }
            {active == "aboutMe" ? <AboutMe/> : "" }
        </div>
      </div>
    </div>
    )
  }

export default Home;

