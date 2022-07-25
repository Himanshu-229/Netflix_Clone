import { ArrowBack } from "@material-ui/icons"
import "./watch.scss"

export default function watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBack/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="/video/matrixTrailer.mp4"/>       
        </div>
  )
}
