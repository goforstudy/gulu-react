import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './button';

const root = createRoot(document.querySelector("#root") as Element);
root.render(<Button />)

