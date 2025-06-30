import React from 'react';
import { ReactLenis } from "lenis/react";
export default function Smoothscroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true}}>
        {children}
    </ReactLenis>
  );
}