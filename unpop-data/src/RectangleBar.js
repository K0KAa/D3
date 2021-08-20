export const RectangleBar =({data, xScale,yScale,xValue,yValue}) =>
data.map(d=><rect key={d.Country} width={xScale(xValue(d))} 
                height={yScale.bandwidth()} 
                x={0} y={yScale(yValue(d))}
                >
            </rect>  
        )
