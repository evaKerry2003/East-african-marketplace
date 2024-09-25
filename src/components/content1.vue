<template>
  <div>
    <!-- Background Section -->
    <div class="background">
      <h1>East of Africa Marketplace</h1>
      <h2>Designers. Makers. Ethical Merchant Traders.</h2>
      <p>
        Ethically sourced & handmade in East Africa & our studio in Melbourne's
        <br />West, with a global story of Partnership woven into the fibres,
        artisan <br />products & coffee beans.
      </p>
      <button>MARKETPLACE</button>
    </div>

    <!-- Fabric Section -->
    <div class="fabric">
      <img src="/images/fabbs.jpg" alt="Fabric Store">
      <div>
        <h2>East of Africa Fabric Store</h2>
        <p>Uhuru Street, Buguruni. Dar es Salaam, Tanzania</p>
        <p>
          All our Kanga, Kitenge, Kikoy, Batiki, and African wax print fabrics
          <br />are directly traded & ethically sourced from our sister store.
        </p>
        <p>
          The partnership of our marketplace to our Tanzanian fabric
          <br />store enables us to employ a team of two local staff. Our team is
          <br />training in our own sewing studio to produce locally made
          <br />handicrafts.
        </p>
      </div>
    </div>

    <!-- Images Section -->
    <div class="images">
      <img src="/images/download.jfif" class="img1" alt="Image 1">
      <img src="/images/Ankara-1.jpg" class="img2" alt="Image 2">
      <img src="/images/east-africa.png" class="img3" alt="Image 3">
    </div>

    <!-- Fabric 2 Section -->
    <div class="fabric2">
      <div>
        <h2>East of Africa Marketplace & Studio</h2>
        <p>
          330 Melbourne Road, Newport. Melbourne, Australia.
          <br />We are specialist African textile traders,
          <br />importing handcrafted Tanzanian batiki, kikoy,
          <br />kitenge, khanga, Ankara, and African Wax Print.
          <br />We also carry a large collection of Authentic Vlisco wax prints.
          <br />Our Melbourne studio produces our slow fashion,
          <br />our custom furniture collection, and our handcrafts
          <br />from our directly traded fabrics and batiks
          <br />including our bags, blankets, and homewares.
          <br />Our freshly roasted collection of East African
          <br />coffee is available in-store together with our direct
          <br />trade Tanzanian tea.
        </p>
        <button>INTERNATIONAL SALES VIA ETSY</button>
      </div>
      <div>
        <img src="/images/sample.jpg" alt="Sample">
      </div>
    </div>

    <!-- Fabric 3 Section -->
    <div class="fabric3">
      <div>
        <h2>Visit our Marketplace & Studio</h2>
        <p>330 Melbourne Road Newport, Melbourne Australia</p>
        <p>Opening hours:</p>
        <p>Tuesday - Friday 10 - 5</p>
        <p>Saturday - 10 - 4</p>
        <p>Closed Sunday & Monday</p>
        <p>
          For assistance & enquiries, please contact Erica
          <br />0410 622 699 or via erica@eastofafrica.com.au
        </p>
      </div>
      <div>
        <img src="/images/BE.webp" alt="BE">
      </div>
    </div>

    <!-- Prices Section -->
    <div class="prices">
      <div class="price1">
        <img src="/images/Woven-bowl-24-01_360x.webp" alt="Woven Basket 24/01">
        <h4>Tanzanian Woven Basket 24/01<br/></h4>from $30.00
      </div>
      <div class="price2">
        <img src="/images/Woven-bowl-24-02_360x.webp" alt="Woven Basket 24/02">
        <h4>Tanzanian Woven Basket 24/02<br/></h4>from $30.00
      </div>
      <div class="price3">
        <img src="/images/Woven-bowl-24-03_360x.webp" alt="Woven Basket 24/03">
        <h4>Tanzanian Woven Basket 24/03<br/></h4>from $30.00
      </div>
      <div class="price4">
        <img src="/images/Woven-bowl-24-04_360x.webp" alt="Woven Basket 24/05">
        <h4>Tanzanian Woven Basket 24/05<br/></h4>from $30.00
      </div>
    </div>

    <div class="prices2">
      <div class="price5">
        <img src="/images/Woven-bowl-24-05_360x.webp" alt="Woven Basket 24/07">
        <h4>Tanzanian Woven Basket 24/07<br/></h4>from $30.00
      </div>
      <div class="price6">
        <img src="/images/Woven-bowl-24-06_360x.webp" alt="Woven Basket 24/08">
        <h4>Tanzanian Woven Basket 24/08<br/></h4>from $30.00
      </div>
      <div class="price7">
        <img src="/images/Woven-bowl-24-07_360x.webp" alt="Woven Basket 24/09">
        <h4>Tanzanian Woven Basket 24/09<br/></h4>from $30.00
      </div>
      <div class="price8">
        <img src="/images/Woven-bowl-24-08_360x.webp" alt="Woven Basket 24/10">
        <h4>Tanzanian Woven Basket 24/10<br/></h4> $30.00
      </div>
    </div>

    <!-- Imported Components -->
    <contents/>
    <content2/>
    <content3/>
    <content4/>
    <content5/>
    <content6/>
    <content7/>
  </div>
</template>

<script setup>
import content2 from './content2.vue';
import contents from './contents.vue';
import content3 from './content3.vue';
import content4 from './content4.vue';
import content5 from './content5.vue';
import content6 from './content6.vue';
import content7 from './content7.vue';
</script>

<style scoped>
.background {
  background-image: url('/images/coffee.jpg'); 
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 60px 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 3rem;
  margin: 0 0 20px;
}

h2 {
  font-size: 1.5rem;
  margin: 0 0 20px;
}

p {
  font-size: 1rem;
  margin: 0 0 30px;
  line-height: 1.6;
  max-width: 800px;
}

button {
  background-color: #FF5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #E64A19;
}

.fabric, .fabric2, .fabric3 {
  display: flex;
  flex-wrap: wrap; 
  padding: 30px;
  align-items: center;
  justify-content: center;
  color: #333232;
  font: 17px Helvetica, 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
}

.fabric img, .fabric2 img, .fabric3 img {
  max-width: 100%;
  max-height: 400px; 
  height: auto;
  width: auto;
  padding: 0;
}

.images {
  display: flex;
}

.img1, .img2 {
  width: 500px;
}

.prices, .prices2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 10px; 
}

.price1, .price2, .price3, .price4, 
.price5, .price6, .price7, .price8 {
  padding: 10px;
  text-align: center;
}

.price1 img, .price2 img, .price3 img, .price4 img, 
.price5 img, .price6 img, .price7 img, .price8 img {
  width: 100%;
  max-width: 300px; 
  height: auto;
  object-fit: cover;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.price1 img:hover, .price2 img:hover, .price3 img:hover, .price4 img:hover,
.price5 img:hover, .price6 img:hover, .price7 img:hover, .price8 img:hover {
  opacity: 0.6;
}

.price1 h4, .price2 h4, .price3 h4, .price4 h4,
.price5 h4, .price6 h4, .price7 h4, .price8 h4 {
  margin: 10px 0;
  position: relative;
  padding-bottom: 5px;
}

.price1 h4::after, .price2 h4::after, .price3 h4::after, .price4 h4::after,
.price5 h4::after, .price6 h4::after, .price7 h4::after, .price8 h4::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #333;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

.price1 h4:hover::after, .price2 h4:hover::after, .price3 h4:hover::after, .price4 h4:hover::after,
.price5 h4:hover::after, .price6 h4:hover::after, .price7 h4:hover::after, .price8 h4:hover::after {
  width: 100%;
}
</style>
