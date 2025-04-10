import { useEffect, useState } from 'react'
import { Button } from '@material-tailwind/react'

function FileUpload() {
  const [selImg,setImg] = useState(null);
  const fileDrop = (e) => {
    e.preventDefault();
    let fls = Array.from(e.dataTransfer.files)
    console.log(fls);
    setImg(fls[0]);
    e.target.classList.remove('bg-gray-500');
  };
  const fileSelect = (e) => {
    let fls = Array.from(e.target.files)
    console.log(fls);
    setImg(fls[0]);
    e.target.classList.remove('bg-gray-500');
  };
  return (
    <>
      <div className={`${selImg==null?"flex ":""}items-center justify-center w-full`}>
        <label for="dropzone-file" className={`${selImg==null?"flex flex-col border-2 border-gray-300 border-dashed ":""}items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-gray-50 [&.is-dragging]:hover:bg-gray-500 dark:bg-gray-500`}
          onDragEnter={(e)=>{e.preventDefault();e.target.classList.add('bg-gray-500');}}
          onDragLeave={(e)=>{e.preventDefault();e.target.classList.remove('bg-gray-500');}}
          onDragOver={(e)=>e.preventDefault()}
          onDrop={(e)=>fileDrop(e)}>
          <div className={`${selImg!=null?"hidden ":""}flex flex-col items-center justify-center pt-5 pb-6`}>
          </div>
          {(selImg!=null)?<img className='m-auto rounded-xl' src={URL.createObjectURL(selImg)}/>:[]}
          <input id="dropzone-file" type="file" className='hidden' onChange={(e)=>fileSelect(e)}/>
        </label>
      </div>
    </>
  )
}

export default FileUpload