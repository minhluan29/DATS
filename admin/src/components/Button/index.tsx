import { Button } from 'antd'
import React from 'react'

interface ButtonCustomProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}
export const ButtonCustom = (props:ButtonCustomProps) => {
    const { children, className, onClick}=props
  return (
    <Button className={className} onClick={onClick}>{children}</Button>
  )
}
