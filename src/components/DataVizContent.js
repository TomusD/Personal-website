import "./AboutContent&DataVizStyles.css"
import React from 'react'
import DataVizPhoto from "../assets/DataVizPhoto.webp"

function DataVizContent() {
  return (
    <div className="about">

        <div className="left">

            <h1>The Singularity Is Near: When Humans Transcend Biology</h1>

            <p>This graph illustrates the progression of computational power over time, 
                comparing it to the processing capabilities of the human and mouse brain. 
                It shows different types of computing technologies, from electromechanical devices 
                to integrated circuits, and their calculations per second per $1000. The graph 
                indicates an exponential increase in computational power over the years.
                Specific computers/models are plotted on the graph like IBM Tabulator, 
                UNIVAC I, IBM PC, Pentium processors etc., showing their respective 
                computational powers at their times. There are two markers indicating the processing 
                capabilities of a human brain and a mouse brain for comparison. 
                The source of the graph is mentioned as 
                Ray Kurzweil’s book “The Singularity is Near: When Humans Transcend Biology”.
                In essence, this graph is a visual representation of Moore’s Law, 
                which states that the number of transistors on a microchip doubles approximately 
                every two years, leading to an exponential increase in computational power. 
                This trend has significant implications for the development of artificial 
                intelligence and other advanced technologies.
            </p>

                <a href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889" 
                    target="_blank" 
                    rel="noreferrer" > 
                <button className="btn btn-light"> 
                    Source
                </button></a>
        </div>

        <div className="right2">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={DataVizPhoto} className= "img2" alt={DataVizPhoto} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataVizContent