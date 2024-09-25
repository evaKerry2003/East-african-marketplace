<template>
  <div class="main">
    <div class="large-image" v-if="selectedImage !== null">
      <img :src="images[selectedImage].src" :alt="images[selectedImage].alt">
    </div>
    <div class="gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        @click="selectImage(index)"
        :class="{ 'selected': selectedImage === index }"
      >
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
    <div class="main2">
      <h2>IDENTITY Bag</h2>
      <h4>$55.00</h4>
      
        <select>
          <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        </select>
        
    
      <button class="abe" aria-label="Add to Cart">ADD TO CART</button>
      <button class="buon" aria-label="Buy with Shop">Buy with <b>Shop</b></button>
    <p> IDENTITY
The heart of our work is to connect you to talented East African artisans, and for you to know them by name. 
The connection of identity is fundamental to our interconnected stories. 
We are inviting you to participate in our training of our team of women for our Kukua Pamoja :: Growing Together project we are establishing in the 
village in Tabora, rural central Tanzania. Our beading project will begin with you - your identity is fundamental to our beginning. We are creating 
unique beaded products to learn the skill of intricate design. Your purchase of a handcrafted bag will fund our team training. The project is viable and the women are ready
, the seeds have been planted and we are ready to put in the work to take this idea and make it grow. 
This is the beginning of our new collection, build one by one as we gain momentum. Don't hesitate in writing your name in our network of partnership and community
 based projects located in rural Tanzania. We need you,
 and we would love to make a bag to reflect your identity. Because we are all better together.
Our identity bags are premium and created to be treasured forever.
Each bag is created by hand from premium glass Japanese Miyuki beads, stitched onto a lush heavyweight natural hemp fabric.
 This is paired with our direct trade East African wax print and our deluxe designer denim. The bag is padded and has a draw string closure. 
The bag measurements are: 22cm wide and 25cm high
Choose your letter and we will contact you to confirm the colour you would like for your bag. 
</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      images: [
        { src: '/public/images/bag8.avif', alt: 'Bag 8' },
        { src: '/public/images/bag5.webp', alt: 'Bag 5' },
        { src: '/public/images/bag7.webp', alt: 'Bag 7' },
        { src: '/public/images/bag6.avif', alt: 'Bag 6' },
        { src: '/public/images/bag10.webp', alt: 'Bag 10' },
        { src: '/public/images/bag9.avif', alt: 'Bag 9' },
        { src: '/public/images/bag2.avif', alt: 'Bag 2' },
        { src: '/public/images/bag4.avif', alt: 'Bag 4' },
        { src: '/public/images/bag5.avif', alt: 'Bag 5' }
      ]
    }
  },
  methods: {
    selectImage(index) {
      this.selectedImage = index;
    }
  }
}
</script>
<style >
.main {
  display: flex;
  flex-direction: row; 
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  margin:40px;
}

.large-image {
  margin-bottom: 20px; 
}

.large-image img {
  width: 100%;
  height: auto; 
  object-fit: contain; }

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery-item {
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: transform 1s, filter 1s;
}

.gallery-item.selected img {
  filter: grayscale(0%);
  transform: scale(1.2); 
}

.main2 {
  margin-top: 20px; 
  padding-left: 30px;
}

.main2 h2 {
  margin: 0;
}
.main2 p{
  width:600px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.main2 select {
  width: 100%;
  max-width: 200px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.abe {
  display: block;
  margin: 10px ;
  padding: 10px;
  width: 100%;
  max-width: 150px;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid #5A31F4;
  cursor: pointer;
}

.buon {
  display: block;
  margin: 10px ;
  padding: 10px;
  width: 100%;
  max-width: 150px;
  text-align: center;
  background-color: #5A31F4;
  color: white;
  border: none;
  cursor: pointer;
}

.buon b {
  font-weight: bold;
}

@media (max-width: 668px) {
  .gallery {
    grid-template-columns: repeat(1, 2fr);
  }
}

</style>