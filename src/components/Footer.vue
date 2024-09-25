<template>
  <footer>
    <div className="container">
      <ul>
        <h1>Astra</h1>
        <p>Astra Security Suites makes
          security simple and hassle-free 
          for thousands of websites & businesses worldwide.
        </p>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-youtube"></a>
        
      </ul>
      <p>See your glowing reviews on</p>
      
      
    </div>
    <div className="container1">
      <ul>
        <h3>Product</h3>
        <a href="#">Features</a>
        <a href="#">Agencies</a>
        <a href="#"> Security Audits</a>
        <a href="#"> Hacked Websites</a>
        <a href="#">E-commerce</a>
        <a href="#">Affiliates</a>
      </ul>
    </div>
    <div className="container2">
      <h3>CMS Security</h3>
      <a href="#">WordPress</a>
      <a href="#">Magento</a>
      <a href="#">Prestashop</a>
      <a href="#">Opencart</a>
      <a href="#">Joomla</a>
      <a href="#">Drupal</a>
    </div>
    <div className="container3">
      <h3>Company</h3>
      <a hre="#">About</a>
      <a hre="#">Customers</a>
      <a hre="#">Career</a>
      <a hre="#">Contact Us</a>
      <a hre="#">Knowledge Based</a>
      <a hre="#">Demo</a>
    </div>
    <div className="container4">
      <h3>Resources</h3>
      <a href="#">Astra Security Blog</a>
      <a href="#">Blacklist Checker</a>
      <a href="#">Website Scanner</a>
      <a href="#">SEO Spam Checker</a>
      <a href="#">WP Security Course</a>
      <div class="Search">
        <input type="text" placeholder="Search" name="Search">
      <button type="submit"><i class='bx bx-search'></i></button>
      </div>
      
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
      display:flex;
    flex-direction: column;
      background-color:#123b3b;
      color: white;
      padding:10px;
    
    }
    .container{
      display: block;
    }
    .container p{
      padding-left:10px;
    }
    .container a{
      padding:10px;
      text-decoration: none;
      background-color:black;
      border-radius: 10px;
      color:white;
    }
    .container1 a{
      display:flex;
      flex-direction: column;
      color:rgba(255, 255, 255, 0.938);
      text-decoration: none;
      padding:10px;
    }
    .container2 a{
      display:flex;
      flex-direction: column;
      color:rgba(255, 255, 255, 0.938);
      text-decoration: none;
      padding: 10px;
    }
    .container3 a{
      display:flex;
      flex-direction: column;
      color:rgba(255, 255, 255, 0.938);
      text-decoration: none;
      padding: 10px;
    }
    .container4 a{
      display:flex;
      flex-direction: column;
      color:rgba(255, 255, 255, 0.938);
      text-decoration: none;
      padding:10px;
    }
   .Search{
    display:flex;
    
   }
   .Search input{
    width:300px;
    height: 30px;
   } 
   
</style>