import React, { useEffect, useState } from "react";
import CreateContentForm from "./CreateContentForm";

import UpdateContentForm from "./UpdateContentForm";

// import TurndownService from 'turndown';

import ModalWrapper from "./ModalWrapper"
import TestRichEditorDetail from "./TestRichEditorDetail";

// const turndownService = new TurndownService()



const styles = {
  input: {
    width: "100%",
  },
};

export default function CreateBlog() {
  const [content, setcontent] = useState([]);
  // const markdown = turndownService.turndown('<h1>Hello world!</h1>')

  useEffect(() => {
    const create_blog = localStorage.getItem('create_blog')
    if(create_blog){
      const create_blog_obj = JSON.parse(create_blog)
      console.log('create_blog_objwhat',create_blog_obj)
      setdata(create_blog_obj)
      setcontent(create_blog_obj.content)
    }
  }, [])

  useEffect(() => {
    // const existing_blog = localStorage.getItem('create_blog')
    if (content.length){
      localStorage.setItem('create_blog',JSON.stringify({
        ...data,
        content:content
      }))
    }
   
  }, [content])
  
  const [updateModalData, setUpdateModalData] = useState(null)


  
  const saveTheBlog = (e) => {
    e.preventDefault();
    // console.log("save the blog here", {data,content});
    localStorage.setItem('create_blog',JSON.stringify({...data,content}))
    
    const blogs = localStorage.getItem('blogs_list')
    if(!blogs){
      localStorage.setItem('blogs_list',JSON.stringify([{...data,content,id:0}]))

    }
    else{
      const parsed_data = JSON.parse(blogs)
      localStorage.setItem('blogs_list',JSON.stringify([...parsed_data,{...data,content,id:parsed_data.length+1}]))

    }


  };

  const addContent = (content) => {
    console.log("contenthere", content);
    setcontent((prv) => [...prv, {...content,id:prv.length+1}]);
    setOpenContent(false)
    
  };

  const updateContent = (newContent,id) => {
    console.log('let see if there is new content',newContent,'old content',id)

    // newContent.id = 
    setcontent((prv)=>{
      console.log('what is  prv',prv)
      // const found_itm = [...prv].find((item)=>item.id==id)
      // console.log('here is found item',found_itm)
      const copy = [...prv]
      let found_itm = copy[id-1]

      found_itm.data=newContent.data
      found_itm.image=newContent.image
      found_itm.title=newContent.title
      found_itm.type=newContent.type
      // const a = [...prv,...found_itm]
      // console.log('here is it not overridden',a``)
      return [...copy]
    })

    setUpdateModalData(null)
    // setOpenUpdate(false)
    // console.log("contenthere", content);
    // setcontent((prv) => {
    //   console.log('arewehere',prv)
    //   const copy = JSON.parse(JSON.stringify(prv))
    //   copy[0].title=newContent.title
    //   // let first = prv[0]
    //   // prv[0].title = newContent.title
    //   copy[0].data.text = newContent.data.text
    //   copy[0].type = newContent.type
    //   //add image also later on
      

    //   return [...copy]
    // });
    // setOpenContent(false)

    // console.log('contentsdfasf',newContent,content)
    
    //HERE UPDATE THE CONTENT
    
  };

  const handleChange = (e) => {
    e.preventDefault();
    // setdata()
    console.log("e", e.target.value, e.target.name, e.target.id);
    setdata((prev) => {
      if (typeof prev[e.target.id] == "string") {
        return { ...prev, [e.target.id]: e.target.value };
      } else return prev;
    });
  };


  const openUpdateContentModal = (index)=>{
    setUpdateModalData(data.content[index])

  }

  const [data, setdata] = useState({
    title: "",
    tags: [],
    result: "",
    content: [],
    // done:false,
  });

  const [openContent, setOpenContent] = useState(false)
  const [openUpdateContent, setopenUpdateContent] = useState(false)
  // const [previewData, setpreviewData] = useState(null)


 


console.log('openUpdateContent',openUpdateContent)
  return (
    <>
        <div
      style={{
        // border: "1px solid red",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <form>
        <div>
          <input
            type="text"
            value={data["title"]}
            id="title"
            name="title"
            placeholder="title"
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        {/* <textarea name='tags' placeholder='tags' value={['a','b so']}/> */}
        <div>
          <input
            type="text"
            value={data["result"]}
            id="result"
            name="result"
            placeholder="result"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        

        <div>

        <button onClick={() => console.log('redirect to preview')}>Preview</button>
        <button onClick={() => console.log('Create Blog')}>Create Blog</button>

        </div>
        {!openContent?<button onClick={()=>setOpenContent(true)}>+</button>:
        
        <ModalWrapper isOpen={openContent} close={setOpenContent}>
          <CreateContentForm addContent={addContent} 
          
          // onSave={onSave}
          />
        </ModalWrapper>

        // <CreateContentForm addContent={addContent} onSave={onSave}/>

        
        
        }
        <div>
        {/* <button onClick={saveTheBlog}> Save</button> */}
        {updateModalData && <ModalWrapper isOpen={openUpdateContent} close={setopenUpdateContent}>
        {updateModalData && 
    <UpdateContentForm 
    updateContent={(e)=>
      updateContent(e,updateModalData.id)
    
    } 
    savedData={updateModalData}
    // id={updateModalData.id}
  // onSave={onSave}
  />
    }
        </ModalWrapper>}
        </div>
        {/* {JSON.stringify(content)} */}
        {content.map((i, ind) => {
          return (
            <div key={ind}>
              <div>
                <span>{i.title}</span> 
                <button onClick={(e)=>{
                  e.preventDefault()
                  setopenUpdateContent(true)
                  openUpdateContentModal(ind)
                }}>Update</button>
              </div>   
              {/* <img src={i.image} alt="no image" height={50} width={100} /> */}
            </div>
          );
        })}
      </form>
    </div>

    
    {/* <div>{updateModalData && <div>{JSON.stringify(updateModalData)}</div>}</div> */}
    
    
    <div>
      <div>{JSON.stringify(updateModalData)}</div>
    

    </div>
    {/* <div>{previewData && <TestRichEditorDetail data={previewData} />}</div> */}
    
    
    
    </>
  );

  
}
