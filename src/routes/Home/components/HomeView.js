import React from 'react'
import SlideShowView from './SlideShowView';
import RegisterLinkView from './RegisterLinkView';
import MenuCategoryView from './MenuCategoryView';
import ProductsView from './ProductsView';

export const HomeView = () => (
  <div>
    <SlideShowView/>
    <MenuCategoryView/>
    <section class="pad60">
      <div class="container">
        <div class="row">
          <ProductsView/>
        </div>
      </div>
    </section>
    <RegisterLinkView/>
  </div>
)

export default HomeView
