import { useState } from "react"
import  axios  from 'axios'

function UploadImage() {
    const [file , setFile] = useState(null)
    const [imageUrl , setImageUrl] = useState(null)

    const handleFileChange = (e) =>{
        setFile(e.target.files[0])
    }
    console.log(file)

    const handleUpload = async () => {
        if(!file) {
            return alert("Please select a file")
        }

        const formData = new FormData()

        formData.append("image" ,file)

        try {
            const res = await axios.post("http://localhost:3000/upload" , formData)
            if(res.status === 201) {
                alert("Uploaded file successfully")
                setImageUrl(res.data.imageURL)
               }
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div>
        <h1>Upload Image</h1>
        <div>
            <input onChange={handleFileChange} type="file" name="image" accept="image/*"  required />
            <button onClick={handleUpload} type="submit">Upload</button>
        </div>

        <div>
            {imageUrl && <img src={imageUrl} alt='image url' width="500" height="500"/>}
        </div>
    </div>
  )
}

export default UploadImage