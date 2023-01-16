import React, { useState } from 'react'

export default function ListBlog() {

  const [blogs, setblogs] = useState([
    {
      id:1,
      title:"Node Js + React FullStack Course",
      tags:['Software Development',"IT Course"],
      done:false,
      content:[
        //just content  of a one single horizontal row
        {
        id:1,
        type:"STEP",//
        title:"Step1",
        data:{text:"Do something"}

      },
      {
        id:2,
        type:"INFO",//INFO|STEP|WARNING
        title:"Info",
        data:{text:"Do something"}

      },
      {
        id:3,
        type:"STEP",
        title:"Step2",
        data:{text:"Do something"}

      },],
      result:"at the end you will be full stack developer"
    },
    {
      id:2,
      title:"Cubernetes Course",
      tags:['Software Deployment',"Cubernetes"],
      done:false,
      result:"at the end you will be cubernetes developer",
      content:[{
        id:1,
        type:"STEP",//
        title:"Step1",
        data:{text:"Do something"}
      },
      {
        id:2,
        type:"INFO",//INFO|STEP|WARNING
        title:"Info",
        data:{text:"Do something"}

      },
      {
        id:3,
        type:"STEP",
        title:"Step2",
        data:{text:"Do something"}

      },]

      
    }
  ])
  return (
    <div>ListBlog</div>
  )
}
