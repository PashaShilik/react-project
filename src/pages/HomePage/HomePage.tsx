import React from 'react';
import styles from './homePage.module.scss'
import {SearchBlock} from './Bloks/SearchBlock/SearchBlock';
import {FilterBlock} from './Bloks/FilterBlock/FilterBlock';
import {CardListBlock} from './Bloks/CardListBlock/CardListBlock';
import { TopSliderBlock } from './Bloks/TopSliderBlock/TopSliderBlock';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <ErrorBoundary>
        <TopSliderBlock/>
      </ErrorBoundary>
      <ErrorBoundary>
        <SearchBlock/>
      </ErrorBoundary>
      <FilterBlock/>
      <ErrorBoundary>
        <CardListBlock/>
      </ErrorBoundary>
    </div>
  )
}

export default HomePage
