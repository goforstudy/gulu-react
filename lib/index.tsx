import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
// import Button from './button';
import IconExample from './icon/icon.exmaple'
import DialogExample from './dialog/dialog.example'
import LayoutExample from './layout/layout.example'
import "./index.scss"
const root = createRoot(document.querySelector('#root') as Element)
root.render(
  <Router>
    <div>
      <header className="logo">RG(react-gulu)</header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">icon</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
            <li>
              <Link to="/dialog">dialog</Link>
            </li>
            <li>
              <Link to="/layout">layout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Routes>
            <Route path="/icon" element={<IconExample />} />
            <Route path="/dialog" element={<DialogExample />} />
            <Route path="/layout" element={<LayoutExample />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
)
