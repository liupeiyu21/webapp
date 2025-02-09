
import { useState, useRef } from 'react'
import './App.css'
import ImageGrallery from './ImageGrallery'
function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //API URL
    const endpointURL = 
    `https://pixabay.com/api/?key=48731603-ff71110ba2f373a2476a1dbb2&q=${ref.current.value}&image_type=photo`;
    //APIを叩く（データフェッチング）
    fetch( endpointURL )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits)
        setFetchData(data.hits);
      });
  }
  return (
    <>
      <div className='container'> 
        <h2>My Pixabay</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='画像を探す' ref={ref} />
        </form>
        <ImageGrallery fetchData={fetchData} />
      </div>
    </>
  )
}

export default App
