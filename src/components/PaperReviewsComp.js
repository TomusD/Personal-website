import "./AboutContent&DataVizStyles.css"
import React from 'react'

function PaperReviews() {

  return (
    <div className="about">    
      <div className="left">

        <h1>"Perception! Immersion! Empowerment! Superpowers as Inspiration for Visualization" Review</h1>

            <p>     This paper merges fictional superpowers with real world visualization techniques 
                    and offers a perspective on boosting human abilities. It introduces a framework with 
                    visualization techniques, which focuses on tool limitations but also shows us new 
                    research directions. The authors provide us with the necessary data so that we can study 
                    further resources and focus on the importance of creative thinking in visualization 
                    especially with upcoming platforms and different use cases. They also discuss about 
                    design concepts proving the potential of their framework and they present us with a lot 
                    of possibilities across different concepts. Also the research behind these topics on 
                    visualization, especially when using VR, AR or XR, has a promising future when connected 
                    with more artistic concepts like super powers from fictional characters, making it more 
                    popular and engaging for wider audiences.
            </p>      
                <a href="https://ieeexplore.ieee.org/document/9552195"
                    target="_blank"
                    rel="noreferrer" >                  
                <button className="btn">
                    Source
                </button></a>
      </div>
  </div>
  )
}

export default PaperReviews