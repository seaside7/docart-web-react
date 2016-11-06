import React from 'react';
import Category from './Category';

class MenuCategoryView extends React.Component {
    
    render() {
        const { categories1, categories2, categories3 } =  this.props; 
        return (
            <section id="menucategory" class="pad30 home-categori">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb15">
                            <a href="category.html" class="fr lihatsemua">Lihat semua <i class="fa fa-chevron-circle-right"></i></a>
                            <h4>Kategori</h4>
                        </div>
                        <Category name="Agrikultur &amp; Bahan Mentah" subcategories={categories1}></Category>
                        <Category name="Produk Terproses" subcategories={categories2}></Category>
                        <Category name="Kebutuhan Harian" subcategories={categories3}></Category>                        
                    </div>
                </div>
            </section>
        )
    }
}

export default MenuCategoryView;