import React from 'react';
import styles from './homePage.module.scss'
import {CardListBlock} from './Bloks/CardListBlock/CardListBlock';
import { TopSliderBlock } from './Bloks/TopSliderBlock/TopSliderBlock';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import {IntroductionBlock} from './Bloks/IntroductionBlock/IntroductionBlock';
import { FeedbackBlock } from './Bloks/FeedbackBlock/FeedbackBlock';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <IntroductionBlock/>
      <ErrorBoundary>
        <TopSliderBlock/>
      </ErrorBoundary>
      <ErrorBoundary>
        <CardListBlock/>
      </ErrorBoundary>
      <FeedbackBlock/>
    </div>
  )
}

export default HomePage
