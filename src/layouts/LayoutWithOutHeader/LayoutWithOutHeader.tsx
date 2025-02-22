import React from 'react';
import { Outlet } from 'react-router-dom';
import ModalContainer from '../../components/ModalContainer/ModalContainer';

function LayoutWithOutHeader() {
  return (
    <>
      <Outlet/>
      <ModalContainer/>
    </>
  )
}

export default LayoutWithOutHeader
