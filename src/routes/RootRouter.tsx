import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

import LayoutWithHeader from '../layouts/LayoutWithHeader/LayoutWithHeader';
import LayoutWithOutHeader from '../layouts/LayoutWithOutHeader/LayoutWithOutHeader';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SearchPage = React.lazy(() => import('../pages/SearchPage/SearchPage'));
const HistoryPage = React.lazy(() => import('../pages/HistoryPage/HistoryPage'));
const FavoritesPage = React.lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const SigninPage = React.lazy(() => import('../pages/SigninPage/SigninPage'));
const SignupPage = React.lazy(() => import('../pages/SignupPage/SignupPage'));
const ViewCardPage = React.lazy(() => import('../pages/ViewCardPage/ViewCardPage'));

function RootRouter() {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <Routes>
        <Route element={ <LayoutWithHeader/> }>
          <Route path={ROUTES.home} element={<HomePage/>}/>
          <Route path={ROUTES.search} element={<SearchPage/>}/>
          <Route path={ROUTES.history} element={<HistoryPage/>}/>
          <Route path={ROUTES.favorites} element={<FavoritesPage/>}/>
          <Route path={ROUTES.viewCard} element={<ViewCardPage/>}/>
        </Route>
        <Route element={ <LayoutWithOutHeader/> }>
          <Route path={ROUTES.signin} element={<SigninPage/>}/>
          <Route path={ROUTES.signup} element={<SignupPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default RootRouter
