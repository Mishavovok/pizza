import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="584" cy="544" r="9" /> 
    <circle cx="141" cy="145" r="120" /> 
    <rect x="16" y="295" rx="14" ry="14" width="260" height="28" /> 
    <rect x="15" y="337" rx="15" ry="15" width="260" height="88" /> 
    <rect x="26" y="450" rx="15" ry="15" width="80" height="34" /> 
    <rect x="167" y="443" rx="15" ry="15" width="80" height="45" />
  </ContentLoader>
)

export default Skeleton