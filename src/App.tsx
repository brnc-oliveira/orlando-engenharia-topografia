import { Outlet } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

// import Footer from './shared/components/Footer'
import Header from './shared/components/Header'

function App() {

  return (
    <Fragment>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </Fragment>
  )
}

export default App
