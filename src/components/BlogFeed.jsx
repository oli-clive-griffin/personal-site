import React from 'react'
import Card from './Card'

export default function BlogFeed() {
  const blogPosts = [
    {
      title: 'blog post 1',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 2',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 3',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 4',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 4',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 4',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 4',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
    {
      title: 'blog post 5',
      tags: ["asdfa", "asdfa", "fdgdc"],
      date: "13 jan",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum accusantium reprehenderit hic? Tempore dolore quis cumque. Officia repudiandae aliquam assumenda, veritatis perferendis reiciendis dolore nam, quidem, omnis dicta voluptates.'
    },
  ]
 
  return (
    <>
      {blogPosts.map((post) => 
        Card(post)
      )}
    </>
  )
}