import React from 'react';
import { Outlet } from 'react-router-dom';
import {ModalContainer} from '../../components/ModalContainer/ModalContainer';

export const LayoutWithOutHeader = function() {
  return (
    <>
      <Outlet/>
      <ModalContainer/>
    </>
  )
}
