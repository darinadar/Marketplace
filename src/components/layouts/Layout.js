import React, { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';


export default function Layout(props) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {props.children || null}
      </Suspense>
      <Footer />
    </div>
  )
}
