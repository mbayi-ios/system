import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss'

const New = ({inputs, title}) => {

    const [file, setFile] = useState("")
    console.log(file)
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
       
        <Navbar />
        <div className="top">
                <h1>{title}</h1>
        </div>
        <div className="bottom">
                <div className="left">
                    <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className='avatar-image'/>
                </div>
                <div className="right">
                    <form action="">
                        <div className="formInput">
                            <label htmlFor="file">
                               Image:  <DriveFolderUploadIcon className='icon' />
                            </label>
                            <input type="file" id="file" style={{display: "none" }} onChange = {e => setFile(e.target.files[0])}/>
                        </div>

                        {inputs.map((input) => (
                        <div className="formInput" key={input.id}>
                            <label>{input.title}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                        </div>
                          ))}
                        
                        <button>
                            Send
                        </button>
                    </form>
                </div>
        </div>
      </div>
    </div>
  )
}

export default New
