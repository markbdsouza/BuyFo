let productGallery = document.querySelector('.product__grid');
let productCategories = document.querySelectorAll('.product__category');

const PRODUCT_CATEGORY_LIST_HTML = {
  clothes: `<figure class="product__item product__item--1">
  <img src="img/products/dresses.jpg" alt="Product Image 1" class="product__img">
  <figcaption class="product__caption">Dresses</figcaption>
</figure>
<figure class="product__item product__item--2">
  <img src="img/products/jackets.jpg" alt="Product Image 2" class="product__img">
  <figcaption class="product__caption">Jackets</figcaption>
</figure>
<figure class="product__item product__item--3">
  <img src="img/products/jeans.jpg" alt="Product Image 3" class="product__img">
  <figcaption class="product__caption">Jeans</figcaption>
</figure>
<figure class="product__item product__item--4">
  <img src="img/products/shirts.jpg" alt="Product Image 4" class="product__img">
  <figcaption class="product__caption">Shirts</figcaption>
</figure>`,
  accessories: `<figure class="product__item product__item--5">
<img src="img/products/earrings.jpg" alt="Product Image 5" class="product__img">
<figcaption class="product__caption">Earrings</figcaption>
</figure>
<figure class="product__item product__item--6">
<img src="img/products/sunglasses.jpg" alt="Product Image 6" class="product__img">
<figcaption class="product__caption">Sun Glasses</figcaption>
</figure>
<figure class="product__item product__item--7">
<img src="img/products/Watches.jpg" alt="Product Image 7" class="product__img">
<figcaption class="product__caption">Watches</figcaption>
</figure>
<figure class="product__item product__item--8">
<img src="img/products/handbag.jpg" alt="Product Image 8" class="product__img">
<figcaption class="product__caption">Handbags</figcaption>
</figure>`,
  technology: `<figure class="product__item product__item--9">
<img src="img/products/mobile.jpg" alt="Product Image 9" class="product__img">
<figcaption class="product__caption">Mobile Phones</figcaption>
</figure>
<figure class="product__item product__item--10">
<img src="img/products/ipod.jpg" alt="Product Image 10" class="product__img">
<figcaption class="product__caption">Music Players</figcaption>
</figure>
<figure class="product__item product__item--11">
<img src="img/products/laptop.jpg" alt="Product Image 11" class="product__img">
<figcaption class="product__caption">Laptops</figcaption>
</figure>
<figure class="product__item product__item--12">
<img src="img/products/tablet.jpg" alt="Product Image 12" class="product__img">
<figcaption class="product__caption">Tablets</figcaption>
</figure>`,
  home: `<figure class="product__item product__item--13">
<img src="img/products/Mugs.jpg" alt="Product Image 13" class="product__img">
<figcaption class="product__caption">Mugs</figcaption>
</figure>
<figure class="product__item product__item--14">
<img src="img/products/lamps.jpg" alt="Product Image 14" class="product__img">
<figcaption class="product__caption">Lamps</figcaption>
</figure>
<figure class="product__item product__item--15">
<img src="img/products/jars.jpg" alt="Product Image 15" class="product__img">
<figcaption class="product__caption">Jars</figcaption>
</figure>
<figure class="product__item product__item--16">
<img src="img/products/plates.jpg" alt="Product Image 16" class="product__img">
<figcaption class="product__caption">Plates</figcaption>
</figure>`,
};

function updateProductGrid(e) {
  productCategories.forEach((category) => {
    category.classList.remove('product__category--active');
  });
  e.currentTarget.classList.add('product__category--active');
  productGallery.innerHTML =
    PRODUCT_CATEGORY_LIST_HTML[e.currentTarget.dataset.category];
}

productCategories.forEach((category) => {
  category.addEventListener('click', updateProductGrid);
});

//carousel
$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    dots: true,
    infinite: true,
    adaptiveHeight: false,
  });
});
