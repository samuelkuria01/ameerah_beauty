import React from 'react'
import { useParams } from 'react-router-dom'


function BlogDetails() {

    const params =  useParams()
    const blogId = params.blogid
  return (
    <div>
      details about blog{blogId}
    </div>
  )
}

export default BlogDetails
