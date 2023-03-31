import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
       
        <Navbar />
        <div className="top">
                <h1>Add new User</h1>
        </div>
        <div className="bottom">
                <div className="left">
                    <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" className='avatar-image'/>
                </div>
                <div className="right">
                    <form action="">
                    <div className="formInput">
                            <label htmlFor="file">
                               Image:  <DriveFolderUploadIcon className='icon' />
                            </label>
                            <input type="file" id="file" style={{display: "none" }}/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='John Doe' />
                        </div>

                        <div className="formInput">
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='John Doe' />
                        </div>

                        <div className="formInput">
                            <label htmlFor="">email</label>
                            <input type="email" placeholder='johndoe@gmail.com' />
                        </div>

                        <div className="formInput">
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='*****' />
                        </div>

                        <div className="formInput">
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='address' />
                        </div>
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
