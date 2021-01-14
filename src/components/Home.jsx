import React, { useState } from 'react'
// import { Link } from 'react-router'
import BlogFeed from './BlogFeed';
import Hero from './Hero';
import MyWork from './MyWork';

function Home() {

  const [active, setActive] = useState('blog')

  return (
    <>

      <Hero/>

      <div className="row justify-content-center">
      
        <div className="col-lg-4 col-md-8 col-sm-11"> 
          <div className="row">
            <div className="col">
              <span onClick={() => setActive('blog')} className={"btn " + (active === 'blog' ? 'btn-primary' : "btn-outline-primary") + " mr-3"}> Blog </span>
              <span onClick={() => setActive('myWork')} className={"btn " + (active === 'myWork' ? 'btn-primary' : "btn-outline-primary") + " mr-3"}> My Work </span>
            </div>
          </div>

          {active == "blog" ? <BlogFeed/> : "" }
          {active == "myWork" ? <MyWork/> : ""  }

        </div>

      </div>

    </>
    )
  }

export default Home;

