import React from 'react'
import LoadingIcons from 'react-loading-icons'

export default function LoadingAnimation() {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <LoadingIcons.ThreeDots stroke="#5941A9" strokeOpacity={1} speed={0.65} />
  </div>
  )
}
