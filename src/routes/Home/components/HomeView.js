import React from 'react'
import SlideShowView from './SlideShowView';
import RegisterLinkView from './RegisterLinkView';
import MenuCategoryView from './MenuCategoryView';
import ProductsView from './ProductsView';

class HomeView extends React.Component {
  componentWillMount() {
      this.props.fetchCategoryAgriculture();
      this.props.fetchCategoryKebutuhanHarian();
      this.props.fetchCategoryProdukTerproses();
  }

  render() {
    return (
      <div>
        <SlideShowView/>
        <MenuCategoryView categories1={this.props.categories1} categories2={this.props.categories2} categories3={this.props.categories3}/>
        <section class="pad60">
          <div class="container">
            <div class="row">
              <ProductsView {...this.props} title="Promo Hari Ini"/>
              
            </div>
          </div>
        </section>
        <RegisterLinkView/>
      </div>
    )
  }
}
/*
<ProductsView title="Produk Makanan &amp; Minuman Terpopuler"/>
              <ProductsView title="Produk Agrikultur Terpopuler"/>
              <ProductsView title="Consumer Good Terpopular"/>*/
export default HomeView
