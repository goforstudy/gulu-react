import React, { AllHTMLAttributes, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
interface Props extends AllHTMLAttributes<Element> {
  code: string
  children: React.ReactNode | Array<React.ReactNode>
}
const Demo: React.FC<Props> = (props: Props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
  return (
    <div>
      <div>{props.children}</div>
      <div>
        <button className='example' onClick={() => setCodeVisible(!codeVisible)}>
          {codeVisible ? '隐藏代码' : '查看代码'}
        </button>
        {codeVisible && code}
      </div>
    </div>
  )
}
export default Demo
