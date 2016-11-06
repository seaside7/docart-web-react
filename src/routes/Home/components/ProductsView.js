import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

class ProductsView extends React.Component {

    componentDidMount() {
        $(ReactDOM.findDOMNode(this.refs.carousel)).owlCarousel({
            items: 6,
            itemsCustom: false,
            itemsDesktop: [
                1199, 4
            ],
            itemsDesktopSmall: [
                980, 3
            ],
            itemsTablet: [
                768, 3
            ],
            itemsTabletSmall: false,
            itemsMobile: [
                479, 2
            ],
            singleItem: false,
            itemsScaleUp: false,
            lazyLoad: true,
            // Navigation
            navigation: false,
            navigationText: [
                "prev", "next"
            ],
            rewindNav: true,
            scrollPerPage: false,
            //Pagination
            pagination: true,
            paginationNumbers: true,
            // Responsive
            responsive: true,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window
        });
    }

    componentWillMount() {
        console.log("props", this.props);
    }

    render() {
        return (
            <div class="col-md-12 mb30">
                <a href="category.html" class="fr lihatsemua">Lihat Semua <i class="fa fa-chevron-circle-right"></i>
                </a>
                <h4 class="title">{this.props.title}</h4>
                <div class="row">
                    <div class="col-md-12">
                        <div ref="carousel" id="carousel-promo-harini" class="owl-carousel">
                            
                            <Product title="Mangga" price="Rp 50.000/Kg" city="Bandung" image="img/product/2.jpg"></Product>
                            
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/3.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/4.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/1.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/2.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/3.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html">
                                        <img class="lazyOwl" data-src="img/product/4.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html">
                                        <img class="lazyOwl" data-src="img/product/1.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box-product">
                                    <a href="detail-product.html"><img class="lazyOwl" data-src="img/product/2.jpg" alt=""/></a>
                                    <div class="box-product-info">
                                        <h4>Manggis</h4>
                                        <span class="harga">Rp. 30.000/Kg</span><br/>
                                        <input type="hidden" class="inputrating"/>
                                        <span class="kota">
                                            <i class="fa fa-map-marker"></i>
                                            Jakarta</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductsView;