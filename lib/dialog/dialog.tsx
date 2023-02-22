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

const alert = (content: string) => {
  const div = document.createElement('div')
  const root = createRoot(div)
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        root.render(React.cloneElement(component, { visible: false }))
        root.unmount()
        div.remove()
      }}
    >
      {content}
    </Dialog>
  )
  document.body.append(div)
  root.render(component)
}

const confirm = (
  content: string,
  confirm?: () => void,
  cancel?: () => void
) => {
  const div = document.createElement('div')
  const root = createRoot(div)
  const onConfirm = () => {
    root.render(React.cloneElement(component, { visible: false }))
    root.unmount()
    div.remove()
    confirm && confirm()
  }
  const onCancel = () => {
    root.render(React.cloneElement(component, { visible: false }))
    root.unmount()
    div.remove()
    cancel && cancel()
  }
  const component = (
    <Dialog
      visible={true}
      onClose={onCancel}
      buttons={[
        <button onClick={onConfirm}>确认</button>,
        <button onClick={onCancel}>取消</button>,
      ]}
    >
      {content}
    </Dialog>
  )
  document.body.append(div)
  root.render(component)
}
const modal = (content: ReactNode) => {
  const div = document.createElement('div')
  const root = createRoot(div)
  const onClose = () => {
    root.render(React.cloneElement(component, { visible: false }))
    root.unmount()
    div.remove()
  }
  const component = (
    <Dialog visible={true} onClose={onClose}>
      {content}
    </Dialog>
  )
  root.render(component)
  return onClose
}
export { alert, confirm, modal }
export default Dialog
