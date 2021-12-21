import React from 'react'

 export default function Home (){
     return(
        <div className= "info">
    <div>
        <h1>Who am I?</h1>
        <h2>Alexandra Donnelly</h2>
        <ul>
            <li>Web Developer with 3 years of experience </li>
            <li>Leader-</li>
            <li>Baker of Cookies-</li>
        </ul>
        <a href="https://www.linkedin.com/in/alexandradonnellythedev/">LinkedIn Profile</a>
    </div>

            <h1>What do I know?</h1>
        <div className="image-grid">
            {/* grid image display of technologies/skills- fontawesome  */}
        <i class="fab fa-html5"></i> <i class="fab fa-react"></i> <i class="fab fa-node-js"></i> 
        <i class="fab fa-js"></i> <i class="fab fa-github-square"></i>
            <p>JavaScript, React, Redux, Git, Express, MongoDB, Node.js, HTML</p>
        </div>

        <div>
        <h1>Who do I want to work for?</h1>
            <>I want to work for someone who is passionate about </>
        </div>
    </div>
     )
 }
 
// create an outlined box in a contrasing dark color around header/info. (green?)