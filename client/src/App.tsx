import { Outlet } from 'react-router-dom'

import { GlobalStyles } from './components/styles/GlobalStyles'

// components
import Header from './components/common/Header'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  )
}
