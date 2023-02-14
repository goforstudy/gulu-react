import React from 'react'
import './importIcons'
import './icon.scss'
import classnames from './helper/classnames'
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg
      {...restProps}
      className={classnames('rg-icon', className)}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
export default Icon
