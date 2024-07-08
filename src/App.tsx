import { Outlet } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { register } from "swiper/element/bundle"

import Footer from './shared/components/Footer'
import Header from './shared/components/Header'

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

function App() {

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default App
