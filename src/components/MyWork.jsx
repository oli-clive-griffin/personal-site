import React from 'react'
import Card from './Card'
import notUniLogo from '../public/not_uni.png'

export default function MyWork() {

  const myWork = [
    {
      title: 'Not-Uni',
      img: notUniLogo,
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'A platform for the creation, sharing, and consumption of open source microdegrees.',
      link: 'http://not-uni.herokuapp.com/'
    },
    {
      title: 'My first website',
      img: notUniLogo,
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Created as part of The foundations program for Enspiral Dev Academy.'
    }
  ]
  
  return (
    <>
      <div className="row">
        <div className="col">
        {myWork.map((post) => {
          return Card(post)
          }
        )}
        </div>
      </div> 
    </>
  )
}