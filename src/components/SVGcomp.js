import "./SVGcompStyles.css"
import React from 'react'
import { useState , useEffect } from 'react'

function SVGcomp() {
    const [WidthValue, setWidth] = useState('440');
    const [animationValuesRect, setAnimationValuesRect] = useState('10;2200;10');
    const [timeValuesRect, setTimeValuesRect] = useState('15s');
    const [animationValueCircle, setAnimationValuesCircle] = useState('10;2200;10');
    const [timeValuesCircle, setTimeValuesCircle] = useState('5s');
    const [animationValuePolygon, setAnimationValuesPolygon] = useState('100,400 120,450 80,450;2100,100 2120,50 2080,50;100,400 120,450 80,450');
    const [timeValuesPolygon, setTimeValuesPolygon] = useState('20s');
    const [rectVisible, setRectVisible] = useState(true);
    const [circleVisible, setCircleVisible] = useState(true);
    const [polygonVisible, setPolygonVisible] = useState(true);
    const [CxValue, setCx] = useState('1000');

    // SVG animation 
    useEffect(() => {

        const adjustAnimationValues = () => {

            // Dynamically adjust the animation values based on the window width
            if (window.innerWidth < 1135) {
                setWidth('440');
                setAnimationValuesRect('10;440;10');
                setTimeValuesRect('7s')
                setAnimationValuesCircle('135;400;135')
                setTimeValuesCircle('10s')
                setCx('250')
                setAnimationValuesPolygon('100,400 120,450 80,450;210,10 212,50 208,50;100,400 120,450 80,450')
                setTimeValuesPolygon('6s')
            } else {
                setWidth('2200');
                setAnimationValuesRect('10;2100;10');
                setTimeValuesRect('15s')
                setAnimationValuesCircle('135;400;135')
                setTimeValuesCircle('5s')
                setCx('1000')
                setAnimationValuesPolygon('100,400 120,450 80,450;2100,100 2120,50 2080,50;100,400 120,450 80,450')
                setTimeValuesPolygon('20s')
            }
        };

        adjustAnimationValues();
        window.addEventListener('resize', adjustAnimationValues);

        return () => {
            window.removeEventListener('resize', adjustAnimationValues);
        };
    }, []);

    return (

        <div>
            <p className="h1Style"> Click on the shapes to make them disappear</p>

            <svg width={WidthValue} height="500" xmlns="http://www.w3.org/2000/svg">

                {rectVisible && ( 
                    <rect
                        x="10"
                        y="10"
                        width="70"
                        height="70"
                        fill="yellow"
                        onClick={() => setRectVisible(false)}
                    >
                        <animate
                            attributeName="x"
                            values={animationValuesRect}
                            dur={timeValuesRect}
                            repeatCount="indefinite"
                        />
                    </rect>
                )}

                {circleVisible && (
                    <circle
                        cx={CxValue}
                        cy="50"
                        r="50"
                        fill="green"
                        onClick={() => setCircleVisible(false)}
                    >
                        <animate
                            attributeName="cy"
                            values={animationValueCircle}
                            dur={timeValuesCircle}
                            repeatCount="indefinite"
                        />
                    </circle>
                )}

                {polygonVisible && ( 
                    <polygon
                        points="100,100 120,50 80,50"
                        fill="blue"
                        onClick={() => setPolygonVisible(false)}
                    >
                        <animate
                            attributeName="points"
                            values={animationValuePolygon}
                            dur={timeValuesPolygon}
                            repeatCount="indefinite"
                        />
                    </polygon>
                )}
                
            </svg>
        </div>
    );
}


export default SVGcomp