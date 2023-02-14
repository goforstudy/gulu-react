import React from 'react';
import { createRoot } from 'react-dom/client';
// import Button from './button';
import Icon from "./icon"

const fn: React.MouseEventHandler = (e ) => {
    console.log(e);
}
const root = createRoot(document.querySelector("#root") as Element);
root.render(<><Icon onClick={fn} name="wechat"/> </>)

