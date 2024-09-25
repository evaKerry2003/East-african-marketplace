<template>
  <div>
    <div class="nav">
      <img src="/public/images/market.png" class="logo" />
      <div class="nav-inner">
        <ul class="nav-list">
          <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink to ="/market">Marketplace</RouterLink>
            <div class="dropdown-content">
              <ul>
                <RouterLink to="/collection">All Collection</RouterLink>
                <RouterLink to="bags">Bags, Clutches & Totes</RouterLink>
                <RouterLink to="fabric">East African Fabric</RouterLink>
                <li><a href="#">Bags, Clutches & Totes</a></li>
                <li><a href="#">East African Fabric</a></li>
                <RouterLink to="/blanket">Blankets</RouterLink>
                <li><a href="#">Blankets</a></li>
                <li><a href="#">Body</a></li>
                <li><a href="#">Cards, Artwork & Notebooks</a></li>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Coffee & Tea</a></li>
                <li><a href="#">East African Christmas</a></li>
                <li><a href="#">East African Swahili Kangas</a></li>
                <li><a href="#">Homewares</a></li>
                <li><a href="#">Jewellery</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Tanzania Kikoy</a></li>
                <li><a href="#">Woollen Basket</a></li>
                <li><a href="#">Wooven Basket Sets</a></li>
              </ul>
            </div>
          </li>
         
        </ul>
        <div class="auth-buttons">
          <a href="#">Log in</a>
          <button>Start free</button>
        </div>
      </div>
    </div>
  </div>
  <RouterView/>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.205);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.logo {
  height: 80px; 
  object-fit: contain; 
  width:200px;
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-left: 20px; 
}

.nav-list {
  display: flex;
  gap: 10px;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-item a {
  padding: 15px;
  color: rgba(46, 44, 44, 0.877);
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.nav-item a::after {
  content: "";
  display: block;
  height: 2px;
  background: #FBB40B;
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  transition: width 0.3s;
}

.nav-item a:hover::after {
  width: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  min-width: 200px;
}

.dropdown-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-content ul li {
  padding: 0px;
}

.dropdown-content ul li a {
  color: rgba(46, 44, 44, 0.877);
  text-decoration: none;
  display: block;
}

.dropdown-content ul li a:hover {
  background-color: #f8f9fa;
  color: #FBB40B;
}

.nav-item:hover .dropdown-content {
  display: block;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-buttons a {
  color: rgba(46, 44, 44, 0.877);
  text-decoration: none;
  padding: 10px;
}

.auth-buttons button {
  padding: 10px 20px;
  background-color: #FBB40B;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.auth-buttons button:hover {
  background-color: #e9a926;
}


@media (max-width: 768px) {
  .nav-inner {
    flex-direction: column;
    align-items: center;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .dropdown-content {
    min-width: 100%;
    left: 0;
    position: static;
    max-height: 200px;
  }

  .auth-buttons {
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
}
</style>
