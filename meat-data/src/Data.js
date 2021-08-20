import React from 'react'
import { useData } from './useData'
import {scaleBand, scaleLinear, max, format} from "d3"
import AxisBottom from "./AxisBottom"
import { AxisLeft } from './AxisLeft'
import Marks from "./Marks"

let width = 960
let height = 500
const margin ={
    top:20,
    right:30,
    bottom:60,
    left:100
}
const xAxisOffset = 50

const Data = () => {
    const data = useData()
   
    if(!data){
        return <pre> Loading...</pre>
    }
    console.log(data[0])

const xValue =d=> d.MeatData
const yValue = d=>d.Time
const innerHeight = height- margin.top-margin.bottom
const innerWidth = width- margin.left-margin.right

const xScale = scaleLinear()
    .domain([200000000,max(data,xValue)])
    .range([0,innerWidth])

const yScale =scaleBand()
    .domain(data.map(yValue))
    .range([0,innerHeight])
    
    .paddingInner(0.1)
    return (
        <svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisBottom 
                xScale={xScale} 
                innerHeight={innerHeight}
                tickFormat={format(".2s")}
                />
            <AxisLeft yScale={yScale} xValue={xValue} yValue={yValue} />
            <text 
                className="axisLabel"
                x={innerWidth/2} 
                y={innerHeight+xAxisOffset} 
                textAnchor="middle">
                Meat Congumed In Kg(Millions)
            </text>
            <Marks data={data} 
                xScale={xScale} 
                yScale={yScale} 
                xValue={xValue} 
                yValue={yValue}
                tickFormat={format(".2s")}
            />
          </g> 
        </svg>
    )
}

export default Data
