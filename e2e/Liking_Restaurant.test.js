/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  
  I.see('Your Favorite Restaurant', '.content__heading');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurants');
  I.wait();
  const firstRestaurant = locate('h3>a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  
  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  
  const likedRestaurantTitle = await I.grabTextFrom('h3>a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

/* eslint-disable no-undef */
Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurants');
  I.wait();
  const firstRestaurant = locate('h3>a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  
  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  
  const likedRestaurantTitle = await I.grabTextFrom('h3>a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.seeElement('.restaurants');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurants');
});