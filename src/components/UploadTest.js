import React from 'react'

function UploadTest() {
  return (
    <>
    <input type="file" onChange={ (e)=>{
        const reader1 = new FileReader();
        reader1.readAsDataURL(e.target.files[0]);

        
        // const val = await FR.readAsDataURL(e.target.files[0]);
        // console.log('FR',val)
        reader1.onload=function () {
            console.log('base64 of img',reader1.result)

        }
    }}/>
    <button>upload file</button>
    </>
  )
}

export default UploadTest