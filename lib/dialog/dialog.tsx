import Icon from '../icon/icon'
import React, { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM  from 'react-dom'
import './dialog.scss'
import { scopedClassMarker } from '../helper/classnames'
interface Props extends React.DOMAttributes<Element> {
  visible: boolean
  buttons?: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: Boolean,
}
const scopedClass = scopedClassMarker('rg-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if(props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const DialogDom = props.visible ? (
    <>
      <div className={scopedClass('mask')} onClick={onClickMask}></div>
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={scopedClass('header')}>提示</header>
        <main>{props.children}</main>
        <footer className={scopedClass('footer')}>
          {props.buttons ? (
            props.buttons
          ) : (
            <>
              <button>ok</button>
              <button>cancel</button>
            </>
          )}
        </footer>
      </div>
    </>
  ) : null 
  return ReactDOM.createPortal(DialogDom, document.body)
}
Dialog.defaultProps = {
  closeOnClickMask: true
}

const alert = (content: string) => {
  const div = document.createElement('div')
  div.className = "dialog-wrapper";
  const root = createRoot(div)
  const component = <Dialog visible={true} onClose={() => {
    root.render(React.cloneElement(component, {visible: false}))
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>{content}</Dialog>
  document.body.append(div)
  root.render(component)
}
export {alert}
export default Dialog
