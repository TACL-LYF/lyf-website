import React from "react"

export default function useMouseOver(): [boolean, React.MouseEventHandler, React.MouseEventHandler] {
  const [isMouseOver, setIsMouseOver] = React.useState(false)
  const onMouseEnter: React.MouseEventHandler = () => setIsMouseOver(true)
  const onMouseLeave: React.MouseEventHandler = () => setIsMouseOver(false)

  return [isMouseOver, onMouseEnter, onMouseLeave]
}