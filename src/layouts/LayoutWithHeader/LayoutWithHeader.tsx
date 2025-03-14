import React from 'react';
import styles from './layoutWithHeader.module.scss'
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import {ModalContainer} from '@/components/ModalContainer/ModalContainer';


export const LayoutWithHeader = function () {
  return (
    <div className={styles.layoutWithHeader}>
      <Header/>
      <Outlet/>
      <Footer/>
      <ModalContainer/>
    </div>
  )
}


