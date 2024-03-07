import React, { useRef, useState } from 'react'
import axios from 'axios';
import './index.scss'
function Index() {
  const [imageSrc, setImageSrc] = useState(null);
  const [file, setFile] = useState(null)
  const title = useRef(null)
  const des = useRef(null)
  const cost = useRef(null)
  const quantity = useRef(null)
  const formData = new FormData();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    formData.append('file', file);
    formData.append('cost', cost.current.value);
    formData.append('title', title.current.value);
    formData.append('description', des.current.value);
    formData.append('quantity', quantity.current.value);
    console.log(formData)

    try {
      const response = await axios.post('http://localhost:4000/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      alert("Successful")
    } catch (error) {
      console.error('Error uploading image:', error);
      e.preventDefault()
    }
    
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFile(event.target.files[0])
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);

  };

  return (
    <div>
      <form className='signup' onSubmit={handleSubmit}>
        <h4>Add Products</h4>

        <div className='flex'>
          <div>

            <div className='image'>
              {!imageSrc && <input type='file' id="file" placeholder='Image'
                accept="image/*"
                onChange={handleImageUpload}
                className="input-field" />}

              {imageSrc && <img src={imageSrc} alt="Uploaded" />}
              </div>
              <label htmlFor="cost">Cost</label>
              <input type='number' id="cost"
                ref={cost}
                placeholder='cost' className="input-field" />


          </div>

          <div>
            <label htmlFor="title">Title</label>
            <textarea type='text' id="title"
              ref={title}
              placeholder='Title' className="input-field" />
            <label htmlFor="des">Description</label>
            <textarea type='text' id="des"
              ref={des}
              placeholder='Description' className="input-field" />
              <label htmlFor="quantity">Quantity</label>
              <input type='number' id="quantity"
                ref={quantity}
                placeholder='Quantity' className="input-field" />
          </div>
        </div>
          <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Index