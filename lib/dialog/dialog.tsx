import Icon from '../icon/icon'
import React, { ReactElement, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import './dialog.scss'
import { scopedClassMarker } from '../helper/classnames'
interface Props extends React.DOMAttributes<Element> {
  visible: boolean
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMask?: Boolean
  title?: string
}
const scopedClass = scopedClassMarker('rg-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
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
        <header className={scopedClass('header')}>
          {props.title || '标题'}
        </header>
        <main className={scopedClass('main')}>{props.children}</main>
        {props.buttons && props.buttons.length && (
          <footer className={scopedClass('footer')}>
            {
              props.buttons
                ? props.buttons.map((button, index) =>
                    React.cloneElement(button, { key: index })
                  )
                : null
              // <>
              //   <button>ok</button>
              //   <button>cancel</button>
              // </>
            }
          </footer>
        )}
      </div>
    </>
  ) : null
  return ReactDOM.createPortal(DialogDom, document.body)
}
Dialog.defaultProps = {
  closeOnClickMask: true,
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
  const div = document.createElement('div')
  const root = createRoot(div)
  const onClose = () => {
    root.render(React.cloneElement(component, { visible: false }))
    root.unmount()
    div.remove()
  }
  const component = (
    <Dialog visible={true} onClose={onClose} buttons={buttons}>
      {content}
    </Dialog>
  )
  root.render(component)
  return onClose
}
const alert = (content: string) => {
  modal(content)
}

const confirm = (
  content: string,
  confirm?: () => void,
  cancel?: () => void
) => {
  const onConfirm = () => {
    onClose()
    confirm && confirm()
  }
  const onCancel = () => {
    onClose()
    cancel && cancel()
  }
  const onClose = modal(content,[
    <button onClick={onConfirm}>确认</button>,
    <button onClick={onCancel}>取消</button>,
  ] )
}
export { alert, confirm, modal }
export default Dialog
