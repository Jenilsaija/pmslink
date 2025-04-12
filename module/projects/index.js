import React, { useState } from 'react'

const Index = () => {
    const [title,setTitle] = useState("Projects");
  return (
    <div>
        <h1>{title}</h1>
        <p>This is the projects page.</p>
        <p>Here you can manage your projects.</p>
    </div>
  )
}

export default Index;
