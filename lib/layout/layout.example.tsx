import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Content from './content'
import Aside from './side'
import "./layout.example.scss"

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="" style={{ height: 500 }}>
          <Header className="x">header</Header>
          <Content className='y'>content</Content>
          <Footer className='z'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className="" style={{ height: 500 }}>
          <Header className="x">header</Header>
          <Layout>
            <Aside className='s'>aside</Aside>
            <Content className='y'>content</Content>
          </Layout>
          <Footer className='z'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout className="" style={{ height: 500 }}>
          <Header className='x'>header</Header>
          <Layout>
            <Content className='y'>content</Content>
            <Aside className="s">aside</Aside>
          </Layout>
          <Footer className='z'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className="" style={{ height: 500 }}>
          <Aside className='s'>aside</Aside>
          <Layout>
            <Header className='x'>header</Header>
            <Content className='y'>content</Content>
            <Footer className='z'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutExample
