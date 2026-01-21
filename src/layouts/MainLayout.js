import React from 'react';
import SideBar from "./SideBar";

export default function MainLayout({children}) {
  return (
    <>
      <SideBar />
      {children}
    </>
  )
}
