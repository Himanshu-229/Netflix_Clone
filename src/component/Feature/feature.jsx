import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./feature.scss"

export default function feature({type}) {
  return (
    <div className="feature">
        {type && (
            <div className="category">
                <span>{type === "movie"? "Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="/image/moviePoster.jpg" alt="" />
      
      <div className="info">
        <img src="/image/Logo.png" alt="" />
        <span className="desc">
        What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.
           </span>
        <div className="buttons">
           <button className="play">
            <PlayArrow/>
            <span>Play</span>
           </button>
           <button className="more">
           <InfoOutlined/>
           <span>Info</span>
           </button>
        </div>
      </div>
         
    </div>
  )
}
