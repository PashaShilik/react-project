import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));

function RootRouter() {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage/>}/>
      </Routes>
    </Suspense>
  )
}

export default RootRouter
