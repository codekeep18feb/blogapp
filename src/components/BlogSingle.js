import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogSingle() {
  const params = useParams();
  const [current_blog, setCurrentBlog] = useState(null);

  useEffect(() => {
    if (params) {
      const blogs_list = localStorage.getItem("blogs_list");
      const parsed_data = JSON.parse(blogs_list);
      if (parsed_data.length) {
        for (let index = 0; index < parsed_data.length; index++) {
          if (index == params.id) {
            setCurrentBlog(parsed_data[index]);
          }
        }
      }
    }
  }, []);

  const current_blog_jsx = current_blog ? (
    <div>
      <h2>Title - {current_blog.title}</h2>
      <h2>{current_blog.content[0].title}</h2>
      {current_blog.content.map((i, ind) => (

    <div style={i.type==='STEP'?{
          background: "skyblue",
          margin: "50px",

        }:i.type==='INFO'?
        {
          background: "green",
          margin: "50px 100px",
          borderRadius:"10px"

        }
        
        
        :i.type==='WARNING'?
        {
          background: "red",
          margin: "50px",
          borderRadius:"10px"


        }
        
        :

        {
          background: "orange",
          margin: "50px",

        }}>
          {i.type==="STEP"?<img src={i.image}/>:null}
          <div
            key={ind}
            dangerouslySetInnerHTML={{ __html: i.type==='INFO'?`<blockquote>${i.data.text}</blockquote>`:i.data.text }}
            style={i.type==='INFO'?{padding:10}:{padding:25}}
          ></div>
        </div>
      ))}
    </div>
    
  ) : (
    <div>loading..</div>
  );
  return (
    <div>{current_blog ? current_blog_jsx : <div>No Data Available</div>}</div>
  );
}

export default BlogSingle;
