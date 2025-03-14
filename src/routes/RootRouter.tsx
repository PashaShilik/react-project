import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

import {LayoutWithHeader} from '@/layouts/LayoutWithHeader/LayoutWithHeader';
import {LayoutWithOutHeader} from '@/layouts/LayoutWithOutHeader/LayoutWithOutHeader';
import { CommonLoader } from '@/components/Common/CommonLoader/CommonLoader';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

const HomePage = React.lazy(() => import('@/pages/HomePage/HomePage'));
const SearchPage = React.lazy(() => import('@/pages/SearchPage'));
const HistoryPage = React.lazy(() => import('@/pages/HistoryPage'));
const FavoritesPage = React.lazy(() => import('@/pages/FavoritesPage/FavoritesPage'));
const SigninPage = React.lazy(() => import('@/pages/SigninPage/SigninPage'));
const SignupPage = React.lazy(() => import('@/pages/SignupPage/SignupPage'));
const ViewCardPage = React.lazy(() => import('@/pages/ViewCardPage'));
const PageNotFound = React.lazy(() => import('@/pages/PageNotFound/PageNotFound'));

export const RootRouter = function () {
  return (
    <Suspense fallback={<CommonLoader/>}>
      <Routes>
        <Route element={ <LayoutWithHeader/> }>
          <Route path={ROUTES.home} element={<HomePage/>}/>
          <Route path={ROUTES.search} element={<SearchPage/>}/>
          <Route path={ROUTES.history} element={<HistoryPage/>}/>
          <Route path={ROUTES.favorites} element={<FavoritesPage/>}/>
          <Route path={`${ROUTES.viewCard}/:id`} element={<ErrorBoundary><ViewCardPage/></ErrorBoundary>}/>
          <Route path={'*'} element={<PageNotFound/>}/>
        </Route>
        <Route element={ <LayoutWithOutHeader/> }>
          <Route path={ROUTES.signin} element={<SigninPage/>}/>
          <Route path={ROUTES.signup} element={<SignupPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

