import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero_section" id="hero_section">
      <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg" style="position: absolute; z-index: 0; max-height: 600px;">
          <img class="lazyload" data-src="./images/hero-image_2-large.jpg" width="100%" style="position: absolute; z-index: 0; max-height: 600px;" alt="hero-image-large" alt="" />
      </picture>
      <div class="content">
        <h1>Find Delicious Food Places</h1>
      </div>
    </div>
      <section class="content">
        <div class="title_content">
            <h1>Explore Delicious Food</h1>
        </div>
            <div class="restaurants" id="resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#resto');
    const data = await RestaurantDbSource.getRestaurantList();
    data.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
