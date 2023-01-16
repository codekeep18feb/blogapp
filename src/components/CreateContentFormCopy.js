import React, { useState } from "react";
import CreateContentComp from "./CreateContentComp";
import NewTextEditorV1 from "./NewTextEditorV1";
import TestRichEditor from "./TestRichEditor"
const styles = {
  input: {
    width: "100%",
  },
  textarea: {
    width: "100%",
    height: "100px",
  },
};

export default function CreateContentForm({ addContent }) {
  const handleChange = (e) => {
    e.preventDefault();
    console.log("e.target.id", e.target.id, data);
    setdata((prev) => {
      if (e.target.id == "data__text") {
        const value = { data: { text: e.target.value } };
        return { ...prev, ...value };
      }
      if (!e.target.id.includes("__") && typeof prev[e.target.id] == "string") {
        return { ...prev, [e.target.id]: e.target.value };
      } else {
        return prev;
      }

      //   else return prev
    });
  };

  const default_data = {
    type: "STEP", //
    title: "",
    data: { text: "" },
    image: null,
  };
  const [data, setdata] = useState(default_data);

  const onSave1 = (data1)=>{
    // setdata()
    let new_obj = {...data}
    new_obj.data.text=data1
    console.log('herewe gosdfds',new_obj)

    addContent(new_obj)
  }
  return (
    <div>

<div>
      <input
        type="text"
        value={data.title}
        id="title"
        name="title"
        placeholder="title"
        onChange={handleChange}
        style={styles.input}
      />
      <div>
        <label htmlFor="type">Choose a type:</label>
        <select
          name="type"
          id="type"
          onChange={(e) => {
            //change type
            e.preventDefault();
            console.log("here is type", e.target.value);
            setdata((prev) => {
              return { ...prev, type: e.target.value };
            });
          }}
        >
          <option value="STEP">STEP</option>
          <option value="INFO">INFO</option>
          <option value="WARNING">WARNING</option>
        </select>
      </div>
     
      {/* <textarea
        type="text"
        value={data.data.text}
        id="data__text"
        name="data__text"
        placeholder="type text here..."
        onChange={handleChange}
        style={styles.textarea}
      /> */}
<label htmlFor="main-blog-img">Upload Main image</label>
<input
        type="file"
        onChange={(e) => {
          const reader1 = new FileReader();
          reader1.readAsDataURL(e.target.files[0]);
          reader1.onload = function () {
            console.log("base64 of img", reader1.result);
            if (reader1.result) {
              setdata((prev) => {
                return { ...prev, image: reader1.result };
              });
              // data.image=reader1.result
            }
          };
        }}
        id="main-blog-img"
      />

{/* <TestRichEditor onSave={onSave1}/> */}

    
      {/* <input type="file" /> */}
      
    </div>
    <div>
      <NewTextEditorV1 onSave={onSave1}/>

    </div>
    </div>
  );
}
