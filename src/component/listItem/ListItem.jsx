import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {
  
  const [isHovered, setIsHovered] = useState(false);
  const trailer ="/video/trailer.mp4" 
  return (

    <div className="listItem" 
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave ={()=> setIsHovered(false)}>

        <img src="/image/matrix.jpg" alt="" />
        
        {isHovered && (
          <>
        <video src={trailer} autoPlay ={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownAltOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque ipsa voluptatibus sint minima illo?
          </div>
          <div className="genre">Action</div>
        </div>
        </>
        )}
        </div>
  );
}
