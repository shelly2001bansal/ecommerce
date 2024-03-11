import { useEffect, useState } from "react";

import Products from "../components/Products";
import Spinner from "../components/Spinner";
const Home = () => {

 
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const Api_url="https://fakestoreapi.com/products";
  

  async function fetchData(){
    setLoading(true);
    const res=await fetch (Api_url);
    const data=await res.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();

  },[])

  // console.log(posts,"hello");

  // console.log(posts[0].title);

  return (
    <>
      <div>
        {
          loading ? <Spinner/> : posts.length>0?(<div className="product">{
              posts.map((post)=>(
                <Products key={post.id} post={post}  />
              ))

          }
          </div>
          
          ):<p>NO data found</p>
        }
      </div>
    </>
    
  )

}
export default Home;
