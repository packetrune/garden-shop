import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="card"
    speed={2}
    width={300}
    height={440}
    viewBox="0 0 300 440"
    backgroundColor="#cfcece"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="42" y="13" rx="20" ry="20" width="200" height="260" /> 
    <rect x="87" y="283" rx="30" ry="30" width="120" height="40" /> 
    <rect x="27" y="331" rx="7" ry="7" width="240" height="50" /> 
    <rect x="9" y="388" rx="13" ry="13" width="280" height="45" />
  </ContentLoader>
)

export default Skeleton