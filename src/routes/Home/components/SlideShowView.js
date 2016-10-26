import React from 'react'

export const SlideShowView = () => (
  <section class="pad15">
    <div class="container">
      <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="img/slider/1.jpg" alt="..."/>
          </div>
          <div class="item">
            <img src="img/slider/2.jpg" alt="..."/>
          </div>
        </div>

        <a
          class="left carousel-control"
          href="#carousel"
          role="button"
          data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel"
          role="button"
          data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>
)

export default SlideShowView
