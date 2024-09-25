
<template>
  <div class="contain">
    <div>
      <h1>HANDCRAFTED IN TANZANIA</h1>
    </div>
    <div class="gallery">
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-01.jpg" alt="Maasai Beaded Earrings 24/01">
        <p>Maasai Beaded <br/>Earrings 24/01<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-02.jpg" alt="Maasai Beaded Earrings 24/02">
        <p>Maasai Beaded <br/>Earrings 24/02<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-03.webp" alt="Maasai Beaded Earrings 24/03">
        <p>Maasai Beaded <br/>Earrings 24/03<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-04.jpg" alt="Maasai Beaded Earrings 24/04">
        <p>Maasai Beaded <br/>Earrings 24/04<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-05.jpg" alt="Maasai Beaded Earrings 24/05">
        <p>Maasai Beaded <br/>Earrings 24/05<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-06.jpg" alt="Maasai Beaded Earrings 24/06">
        <p>Maasai Beaded <br/>Earrings 24/06<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-07.jpg" alt="Maasai Beaded Earrings 24/07">
        <p>Maasai Beaded <br/>Earrings 24/07<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-08.jpg" alt="Maasai Beaded Earrings 24/08">
        <p>Maasai Beaded <br/>Earrings 24/08<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-09.jpg" alt="Maasai Beaded Earrings 24/09">
        <p>Maasai Beaded <br/>Earrings 24/09<br/> $28.00</p>
      </div>
      <div class="tain">
        <img src="/public/images/Maasai-Beaded-Earrings-24-10.jpg" alt="Maasai Beaded Earrings 24/10">
        <p>Maasai Beaded <br/>Earrings 24/10<br/> $28.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarringsGallery',
}
</script>

<style>
.contain {
  text-align: center;
  color: #333232;
  font-weight: bold;
  padding: 10px;
}

.contain h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.tain {
  flex: 1 1 calc(20% - 20px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}

.tain img {
  width: 100%;
  max-width: 160px;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.tain img:hover {
  transform: scale(1.05);
}

.tain p {
  font-weight: bold;
  margin-top: 5px;
  position: relative;
  text-align: center;
}

.tain p::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #333232;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.tain p:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}


@media (max-width: 1200px) {
  .tain {
    flex: 1 1 calc(25% - 20px); 
  }
}

@media (max-width: 900px) {
  .tain {
    flex: 1 1 calc(33.333% - 20px); 
  }
}

@media (max-width: 600px) {
  .tain {
    flex: 1 1 calc(50% - 20px); 
  }
}

@media (max-width: 400px) {
  .tain {
    flex: 1 1 100%; 
  }
}
</style>
