import React from 'react'
import SlideShowView from './SlideShowView';
import RegisterLinkView from './RegisterLinkView';
import MenuCategoryView from './MenuCategoryView';
import ProductsView from './ProductsView';

class HomeView extends React.Component {
  componentWillMount() {
    console.log("HomeView", this.props);
    this.props.category();
  }

  render() {
    return (
      <div>
        <SlideShowView/>
        <MenuCategoryView/>
        <section class="pad60">
          <div class="container">
            <div class="row">
              <ProductsView title="Promo Hari Ini"/>
              <ProductsView title="Produk Makanan &amp; Minuman Terpopuler"/>
              <ProductsView title="Produk Agrikultur Terpopuler"/>
              <ProductsView title="Consumer Good Terpopular"/>
            </div>
          </div>
        </section>
        <RegisterLinkView/>
      </div>
    )
  }
}

export default HomeView
