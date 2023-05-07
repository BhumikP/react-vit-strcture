import Login from '@views/login-page/Login'
import NotFound from '@views/not-found/notFound'
import { Route, Routes } from 'react-router-dom'

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default PublicRoutes
