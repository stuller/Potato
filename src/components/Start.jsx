import { Link } from "react-router-dom";

export default function Start() {
   
    return (
        <div id="start">
            <h2 className='fadeIn-5'>You are a halfling, just trying to exist.</h2>
            <h3 className='fadeIn-10'>Meanwhile, the Dark Lord rampages across the world.</h3>
            <h4 className='fadeIn-15'>You do not care about this.</h4>
            <h4 className='fadeIn-15'>You are trying to farm potatoes, because what could a halfling possibly do about it anyway?</h4>
            <Link to="/game"><button>Begin</button></Link>
        </div>
    )
}