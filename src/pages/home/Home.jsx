
import Navbar from "../../component/navbar/Navbar";
import Feature from "../../component/Feature/feature";


import "./home.scss";
import List from "../../component/list/List";

const Home = () => {
  return (
    <div className="home">
       
       <Navbar/>
       
       <Feature />
       <List />
       <List />
       <List />
       <List />

        </div>

  )
}

export default Home