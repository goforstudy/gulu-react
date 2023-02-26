import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
// import Button from './button';
import IconExample from './icon/icon.exmaple'
import DialogExample from './dialog/dialog.example'
import LayoutExample from './layout/layout.example'
import './index.scss'
import './example.scss'
import logo from './logo.png'

import Layout, { Head, Side, Content, Footer } from './layout/layout'
const root = createRoot(document.querySelector('#root') as Element)
root.render(
  <Router>
    <Layout className="site-pages">
      <Head className="site-header">
        <div className='logo'>
          <img width="48" height="48" src={logo}></img>
          gulu-react
        </div>
      </Head>
      <Layout>
        <Side className='site-side'>
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
        </Side>
        <Content className='site-main'>
          <Routes>
            <Route path="/icon" element={<IconExample />} />
            <Route path="/dialog" element={<DialogExample />} />
            <Route path="/layout" element={<LayoutExample />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
    <Footer className='site-footer'>
      gulu react, component ui
    </Footer>
  </Router>
)
