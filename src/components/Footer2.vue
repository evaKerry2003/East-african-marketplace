 <template>
  <footer>
  <div className="container">
    <div className="one">
      <h2>Quick links</h2>
      <input type="search" id="search" placeholder="Search">
      <button type="submit"><i class='bx bx-search'></i></button>
    </div>
    <div className="two">
      <h2>Newsletter</h2>
      <input type="email" id="email" placeholder="Email address">
      <button type="submit">SUBSCRIBE</button>
    </div>
  </div>
  <hr>
  <div className="container2">
    <div className="images">
    <img src="/public/images/images (1).png" className="Ot">
  <img src="/public/images/images (2).png" className="Ot">
  <img src="/public/images/images (3).png" className="Ots">
  <img src="/public/images/images (4).png" className="Ot" >
  <img src="/public/images/images.png" className="Ots">
  <img src="/public/images/paypal.png" className="Ots">
  <img src="/public/images/Mastercard-Logo.png" className="Ot">
  <img src="/public/images/card.png" className="Ots">
  </div>
  <div className="icons">
    <i class='bx bxl-facebook-square'></i>
  <i class='bx bxl-instagram-alt'></i>
  </div>
  
  </div>
  
  <div>
   
  </div>
  </footer>
</template>

<script >


export default {
  name: 'FooterComponent'
}

</script>

<style>

.container{
  background-color: #f6f6f6;
  color: #333232;
  display:flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding:10px;
  padding-bottom: 70px;
  flex-wrap: wrap;
}
.one, .two{
  flex:1;
  margin:40px;
}
.two{
  padding-left:100px;
}
input{
  padding:10px;
  width: 200px;
  box-sizing: border-box;
}
button{
  padding:10px;
  background-color: #3A3A3A;
}
.Ot{
  border-radius: 10px;
  width:90px;
  padding-top: 0px;
}
.Ots{
  width:50px;
  padding:10px;
  border-radius: 0px;
}
.container2{
 align-items: center;
 justify-content: center;
 text-align: center;
display:flex;
flex-direction: column;

  
}
.images {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
}
.images img {
  margin: 5px;
}
.icons{
  padding-left: 80px;
}
.icons i{
  padding:10px;
  font-size: 40px;
}
@media (max-width: 468px) {
  .container {
    flex-direction: column; 
    text-align: center;
  }

  .one, .two {
    padding-left: 0; 
    margin: 0;
  }

  .container2 {
    padding-left: 0; 
  }

  .icons i {
    font-size: 24px; 
  }
}

@media (max-width: 480px) {
  .container {
    padding: 5px;
  }

  .input, button {
    width: 100%; 
  }

  .images img {
    width: 80px; 
  }
}

</style>
    
    