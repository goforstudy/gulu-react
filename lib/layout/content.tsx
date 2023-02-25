import { scopedClassMarker } from '../helper/classnames'
import React, { HTMLAttributes } from 'react'
const sc = scopedClassMarker("gr-layout")
const Content: React.FC<HTMLAttributes<Element>> = (props) => {
    
    const {className} = props;
    return <div className={sc('content', {extra: className})}>{props.children}</div>
}

export default Content