<template>
  <div class="all">
    <div class="cip1">
      <img src="/images/pic1_360x.avif">
      <h2>Coffee subscriptions</h2>
      <p>East of Africa Coffee Roasters are
        passionate about bringing speciality grade,
        ethically sourced African coffee into your
        home. By selecting a coffee subscription
        you will be able to enjoy freshly roasted
        coffee regularly shipped to your home or
        locally delivered.
      </p>
      <button>SIGN UP</button>
    </div>
    <div class="cip2">
      <img src="/images/pic2.avif">
      <h2>Kenya Tusker Candle</h2>
      <p>
        We love global stories, which is why we
        create handmade products filled with them.
        Every aspect of our hand made and hand poured
        candles carry meaning and tales, all the way
        from East Africa.
      </p>
      <button>BUY NOW</button>
    </div>
    <div class="cip3">
      <img src="/images/pic3.webp">
      <H2>Direct Trade Maasai Earrings</H2>
      <p>Your purchase of this product directly
        supports fair trade with Tanzanian
        Maasai Mama's. This trade contributes
        to their micro-businesses, invests in
        supporting traditional techniques
        and provides regular income for them
        and their children, and each pair is
        custom made.</p>
      <button>SHOP THE COLLECTION</button>
    </div>
  </div>
  <div class="all2">
    
      <h1>East of Africa Coffee Roasters</h1>
      <p>
      East of Africa is a boutique Coffee
      Roastery based in Western Melbourne
      committed to trading in coffee exclusively
      from Eastern Africa. We intentionally do
      business with East African coffee farmers,
      to invest in their livelihoods, cooperatives,
      families and their communities.
    </p>
    <button>SHOP THE EAST AFRICAN COFFEE COLLECTION</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.all {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 30px;

}

.all img {
  margin: 10px;


}

p {
  width: 300px
}

.cip2 h2,
p {
  padding: 17px;
}

.cip1 button {
  background-color: whitesmoke;
  font-weight: bold;
}

.cip2 button {
  background-color: whitesmoke;
  font-weight: bold;
}

.cip3 button {
  background-color: whitesmoke;
  font-weight: bold;
}
.all2{
  background-image: url(/images/coffee2.jpg);
 background-repeat: no-repeat;
 background-size:1600px;
}
.all2 {
  padding: 20px;
  
  text-align: center;
}

.all2 h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f5f5f5; 
}

.all2 p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #f5f5f5; 
  max-width: 800px; 
  margin: 0 auto; 
}
.all2 button{
  color:#f5f5f5;
}
</style>