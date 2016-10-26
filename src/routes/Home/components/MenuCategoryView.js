import React from 'react';

class MenuCategoryView extends React.Component {
    render() {
        return (
            <section id="menucategory" class="pad30 home-categori">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb15">
                                <a href="category.html" class="fr lihatsemua">Lihat semua <i class="fa fa-chevron-circle-right"></i></a>
                                <h4>Kategori</h4>
                            </div>
                            <div class="col-md-4">
                                <h5>Agrikultur</h5>
                                <ul>
                                    <a href="#"><li><i class="fa fa-shopping-bag"></i> Kategori A</li></a>
                                    <a href="#"><li><i class="fa fa-shopping-basket"></i> Kategori B</li></a>
                                    <a href="#"><li><i class="fa fa-shopping-bag"></i> Kategori C</li></a>
                                    <a href="#"><li><i class="fa fa-shopping-basket"></i> Kategori D</li></a>
                                    <a href="#"><li><i class="fa fa-shopping-bag"></i> Kategori E</li></a>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h5>F&B</h5>
                                <ul>
                                    <a href="#"><li>Kategori F</li></a>
                                    <a href="#"><li>Kategori G</li></a>
                                    <a href="#"><li>Kategori H</li></a>
                                    <a href="#"><li>Kategori I</li></a>
                                    <a href="#"><li>Kategori J</li></a>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h5>Consumer Goods</h5>
                                <ul>
                                    <a href="#"><li>Kategori K</li></a>
                                    <a href="#"><li>Kategori L</li></a>
                                    <a href="#"><li>Kategori M</li></a>
                                    <a href="#"><li>Kategori N</li></a>
                                    <a href="#"><li>Kategori O</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default MenuCategoryView;