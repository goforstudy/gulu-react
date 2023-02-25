import { scopedClassMarker } from '../helper/classnames'
import React, { HTMLAttributes } from 'react'
const sc = scopedClassMarker("gr-layout")
const Footer: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
    
    const {className, children, ...rest} = props
    return <div className={sc('footer', {extra: className})} {...rest}>{props.children}</div>
}

export default Footer