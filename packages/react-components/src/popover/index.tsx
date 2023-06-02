import React, { useEffect, useState, useRef } from 'react'

import './style'

interface PopoverType {
  children: React.ReactNode
  overlay: React.ReactNode | string
}

const Popover = ({ children, overlay }: PopoverType) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  })
  const popoverRef = useRef<HTMLDivElement>(null)
  const popoverConetnRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    function handleClick(e: any) {
      if (
        !popoverRef?.current?.contains(e.target) &&
        !popoverConetnRef?.current?.contains(e.target) &&
        visible
      ) {
        setVisible(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [visible])

  return (
    <>
      <div
        className="popover"
        ref={popoverRef}
        onClick={(e: any) => {
          if (visible) return
          const currentDom = e.target
          const rect = currentDom?.getBoundingClientRect()
          const { x, y, width, height } = rect
          const top = Math.floor(y + height)
          const left = x
          setPosition({ top, left })
          setVisible(true)
        }}
      >
        {children}
      </div>
      {visible && (
        <div
          ref={popoverConetnRef}
          className="popover-placement"
          style={{ top: position.top, left: position.left }}
        >
          <div className="popover-content">
            <div className="popover-arrow">
              <div className="popover-arrow-content"></div>
            </div>
            <div className="popover-inner">{overlay}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popover
