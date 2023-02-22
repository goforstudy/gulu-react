import Dialog, { alert, confirm, modal } from './dialog'
import React, { useState } from 'react'

export default () => {
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)
  return (
    <>
      <button onClick={() => setVisible(!visible)}>按钮1</button>
      <Dialog
        onClose={() => setVisible(false)}
        visible={visible}
        buttons={[
          <button key={1} onClick={() => setVisible(false)}>
            按钮1
          </button>,
          <button key={2}>按钮2</button>,
        ]}
      >
        <div>children</div>
      </Dialog>
      <button onClick={() => setVisible1(!visible1)}>按钮2</button>
      <Dialog
        onClose={() => setVisible1(false)}
        closeOnClickMask={false}
        visible={visible1}
        buttons={[
          <button key={1} onClick={() => setVisible1(false)}>
            按钮1
          </button>,
          <button key={2}>按钮2</button>,
        ]}
      >
        <div>children</div>
      </Dialog>
      <div>
        <button
          onClick={() => {
            alert('alert')
          }}
        >
          alert
        </button>
        <button
          onClick={() => {
            confirm(
              'confirm',
              () => {
                console.log('yes')
              },
              () => {
                console.log('no')
              }
            )
          }}
        >
          confirm
        </button>
        <button
          onClick={() => {
            const onClose = modal(
              <>
                <h2>modal</h2>
                <button onClick={() => onClose()}>关闭</button>
              </>
            )
          }}
        >
          modal
        </button>
      </div>
    </>
  )
}
