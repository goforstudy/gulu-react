import { scopedClassMarker } from '../helper/classnames';
import React, { AllHTMLAttributes } from 'react'
const sc = scopedClassMarker('gr-layout')
const Side: React.FC<AllHTMLAttributes<HTMLElement>> = (props) => {
    
    const {className} = props;
    return <div className={sc('side', {extra: className})}>{props.children}</div>
}

export default Side