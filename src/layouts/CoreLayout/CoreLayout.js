import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'

import Header from '../../components/Header'
import Footer from '../../components/Footer';

export const CoreLayout = ({children}) => (
  <div className='container-fluid'>
    <div class="row">
      <Header/>
      <div className='core-layout__viewport'>
        {children}
      </div>
      <Footer/>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
