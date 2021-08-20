import React from 'react'
import { scaleBand, scaleLinear, max } from 'd3'
import { useData } from './UseData'
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { RectangleBar } from './RectangleBar'

const width = 960
const height = 500
const margin ={
    top:100,
    right:20,
    left:200,
    bottom:20
}



const Data =() =>{
    const data = useData()

    if(!data){
        return <pre>Loading...</pre>
    }
    const innerHeight =height - margin.top -margin.bottom
    const innerWidth = width - margin.left-margin.bottom
    const yValue= d=>d.Country
    const xValue = d=>d.Population
    const yScale =scaleBand()
            .domain(data.map(yValue))
            .range([0,innerHeight])
    const xScale = scaleLinear()
            .domain([0,max(data.map(xValue))])
            .range([0,innerWidth])
    console.log(xScale.ticks())


    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom  
                    xScale={xScale} 
                    innerHeight={innerHeight}
                />
                <AxisLeft yScale={yScale}/>
                <RectangleBar 
                    data={data} 
                    xScale={xScale} 
                    yScale={yScale} 
                    xValue={xValue} 
                    yValue={yValue}
                />
            </g>
        </svg>

    )

}

export default Data

