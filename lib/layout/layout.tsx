import { scopedClassMarker } from '../helper/classnames'
import React, { ReactElement } from 'react'
import "./layout.scss"
import Side from './side'
const sc = scopedClassMarker('gr-layout')
// interface Props {
//     children?: React.ReactNode | React.ReactElement
// }
interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}
const Layout: React.FC<Props> = (props) => {
    const {className, children, ...rest} = props
    const childrenArray = props.children as Array<ReactElement>
    let hasSide = length in childrenArray && childrenArray.some(
        item => item.type === Side
    )
    return <div className={sc({'': true, 'has-side': hasSide },  {extra: [className, hasSide && 'has-side' || undefined].join(' ')})} {...rest}>
        {props.children}
    </div>
}

export default Layout
export {default as Head} from './header'
export {default as Content} from './content'
export {default as Footer} from './footer'
export {Side}