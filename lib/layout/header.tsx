import { scopedClassMarker } from '../helper/classnames'
import React, { HTMLAttributes } from 'react'
const sc = scopedClassMarker("gr-layout")
const Header: React.FC<HTMLAttributes<Element>> = (props) => {
    const {className} = props;

    return <div className={sc('header', {extra: className})}>{props.children}</div>
}

export default Header