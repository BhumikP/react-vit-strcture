import Dashboard from '@views/dashboard/dashboard'
import Header from '@views/layout/header'
import { Navigate, Route, Routes } from 'react-router-dom'

function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<Header />} path="/dashboard">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default PrivateRoutes
