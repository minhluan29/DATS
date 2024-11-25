import { Input } from 'antd'
import React from 'react'

interface InputCustomProps {
    children: React.ReactNode
    className?: string
    onChange?: () => void
    error?: string
    value?: string
    type?: string
    placeholder?: string
    name?: string
    id?: string
    disabled?: boolean
    required?: boolean
    icon?: React.ReactNode
}
export const InputCustom = (props:InputCustomProps) => {
    const {children, className, onChange, error, value, type, placeholder, name, id, disabled, required, icon} = props
  return (
   <div>
    <Input className={className} onChange={onChange} value={value} type={type} placeholder={placeholder} name={name} id={id} disabled={disabled} required={required} icon={icon} >{children}</Input>
    {error && <span className='text-red-500'>{error}</span>} 
   </div>
  )
}
