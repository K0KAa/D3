export const AxisLeft =({yScale})=>
yScale.domain().map((tickValue=>(
    <text key={tickValue} y={yScale(tickValue)+yScale.bandwidth()/2} x={-3} style={{textAnchor:"end"}} dy=".32em">
        {tickValue}
    </text>
)))