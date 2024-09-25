
<template>
  <div class="feat">
    <h1>FEATURED COLLECTION</h1>
    <div class="coll1">
      <div class="item">
        <img src="/images/BurundiShop1_360x.avif" alt="Burundi Ngogomo">
        <p><b class="hover-line">Burundi Ngogomo</b><br/>from $14.00</p>
      </div>
      <div class="item">
        <img src="/images/ethiopian_decaf7_360x.webp" alt="Ethiopian Sidamo Oriamo Decaf">
        <p><b class="hover-line">Ethiopian Sidamo<br/>Oriamo Decaf</b><br/>from $12.00</p>
      </div>
      <div class="item">
        <img src="/images/Kenya_4.webp" alt="Kenya Endebess Estate">
        <p><b class="hover-line">Kenya Endebess<br/>Estate</b><br/>from $14.00</p>
      </div>
      <div class="item">
        <img src="/images/LogoUMOJA8_360x.webp" alt="UMOJA Tanzania">
        <p><b class="hover-line">UMOJA Tanzania</b><br/>from $14.00</p>
      </div>
    </div>
    <div class="coll2">
      <div class="item">
        <img src="/images/Rwanda_5.webp" alt="Rwanda Irebe">
        <p><b class="hover-line">Rwanda Irebe</b><br/>from $8.00</p>
      </div>
      <div class="item">
        <img src="/images/subscription2_360x.webp" alt="Coffee Subscription">
        <p><b class="hover-line">Coffee Subscription</b><br/>from $12.00</p>
      </div>
      <div class="item">
        <img src="/images/giftpack3_360x.webp" alt="East African Collection Gift Pack">
        <p><b class="hover-line">East African<br/>Collection Gift Pack</b><br/>from $28.00</p>
      </div>
      <div class="item">
        <img src="/images/Tanzania6.webp" alt="Tanzania Mbeya Co-op">
        <p><b class="hover-line">Tanzania Mbeya Co-op</b><br/>from $8.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.feat {
  text-align: center;
  padding: 20px;
}

.coll1, .coll2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.item {
  text-align: center;
  margin: 10px; }

.item img {
  width: 250px;
  height: auto; 
  border-radius: 6px; 
  transition: transform 0.3s ease;
}

.item img:hover {
  transform: scale(1.05);
}

.item p {
  font-size: 1rem;
}

.hover-line {
  position: relative;
  display: inline-block;
  font-weight: bold; 
}

.hover-line::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px; 
  width: 100%;
  height: 2px;
  background-color: #000;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.hover-line:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

