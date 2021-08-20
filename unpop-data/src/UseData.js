import React from "react"
import { csv } from "d3-fetch"

const csvUrl = "https://gist.githubusercontent.com/K0KAa/f6f465f6c782a927e444e64d382fa491/raw/7702e6389b003aded580da0715fd8825b18941d1/Country_population.csv"

export const useData =() =>{
    const [data,setData] =React.useState(null)
    React.useEffect(()=>{
        const row = d=> {
            d.Population = +d['2020']
            return d
        }
        csv(csvUrl,row).then(data=> {setData(data.slice(0,10))})
    },[])

    return data
}