import React,{useState,useEffect} from 'react'

const Home = () => {
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/main_image")
      .then((r) => r.json())
      .then((data) => {
        setMainImage(data);
      });
  }, []);

  return (
  <div>
    <div style={{textAlign:"center", fontSize:"24px"}}>
      <p>Looking for some inspiration in the kitchen? Look no further. </p>
      <p>Eat Good Food is chock full of healthy recipes to nourish your body!</p>
      </div>
<img src={mainImage.image} alt="spread of delicous food" style={{width:"100%",display:"block"}} />
</div>
  )
}

export default Home