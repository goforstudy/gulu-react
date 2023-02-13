import React from 'react';
import { createRoot } from 'react-dom/client';
// import Button from './button';
import Icon from "./icon"

const root = createRoot(document.querySelector("#root") as Element);
root.render(<><Icon name="wechat"/> <Icon name='qq'/></>)

