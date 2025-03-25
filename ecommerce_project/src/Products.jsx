import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Products() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ fontFamily: "cursive", fontVariant: "small-caps" }}>
      NS FashionStore
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPErOPPQjwEQUuIlydPEx93z23-hkAOxaVKDZBZcp44j26WVD1r7WRqLN2QE2ZJU-pjdM&usqp=CAU" width="65" height="45" alt="Logo" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ fontFamily: "cursive" }}>
            Fast.Easy.<br />
            Shop in our free app today
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "cursive" }}>
            Shop by Category
          </a>
          <ul className="dropdown-menu" style={{ fontFamily: "cursive" }}>
            <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
            <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
            <li><a className="dropdown-item" href="#">Kid's Fashion</a></li>
            <li><hr className="dropdown-divider" /></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" style={{ fontFamily: "cursive" }}> Disabled</a>
        </li>
      </ul>
      <form className="d-flex" style={{ width: "700px", fontFamily: "cursive" }} role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.ace.adityacampus.org/images/blog_images/blog9/2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://static.wixstatic.com/media/3f3442_df728349d21e4ce0ba0343165c13bb5a~mv2.jpg/v1/fill/w_1920,h_1080,al_c/3f3442_df728349d21e4ce0ba0343165c13bb5a~mv2.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container-fluid">
  <div className="row">
  <div className="col-3 bg-body-secondary">
  <div className="card">
    <img
      src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-pakistani-suit-in-off-white-v1-kch14207.jpg"
      className="card-img-top"
      alt="Embroidered Georgette Pakistani Suit"
    />
    <div className="card-body">
      <h5 className="card-title">Embroidered Georgette Pakistani Suit in Off White</h5>
      <p className="card-text">
        <strong>3813 Reviews</strong> <br />
        <span style={{ textDecoration: "line-through" }}>MRP ₹6,800.00</span> ₹5,100.00 (25% Off) <br />
        <strong>Inclusive of all taxes</strong> <br />
        <strong>Shipping:</strong> Free
      </p>
      <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
    </div>
  </div>
</div>
    <div className="col-3 bg-body-secondary">
          <div className="card">
            <img
              src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-chinon-chiffon-gown-in-beige-v1-tch443.jpg"
              className="card-img-top"
              alt="Embroidered Chinon Chiffon Gown"
            />
            <div className="card-body">
              <h5 className="card-title">Embroidered Chinon Chiffon Gown in Beige</h5>
              <p className="card-text">
                <strong>3813 Reviews</strong> <br />
                <span style={{ textDecoration: "line-through" }}>MRP ₹7,300.00</span> ₹5,475.00 (25% Off) <br />
                <strong>Inclusive of all taxes</strong> <br />
                <strong>Offers:</strong> 3 <br />
                <strong>Shipping:</strong> Free
              </p>
              <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
            </div>
          </div>
        </div>
        <div className="col-3 bg-body-secondary">
          <div className="card">
            <img
              src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-art-silk-kurta-set-in-dark-green-v1-mly2384.jpg"
              className="card-img-top"
              alt="Embroidered Art Silk Kurta Set"
            />
            <div className="card-body">
              <h5 className="card-title">Embroidered Art Silk Kurta Set in Dark Green</h5>
              <p className="card-text">
                <strong>3813 Reviews</strong> <br />
                <span style={{ textDecoration: "line-through" }}>MRP ₹3,700.00</span> ₹2,775.00 (25% Off) <br />
                <strong>Inclusive of all taxes</strong> <br />
                <strong>Offers:</strong> 3 <br />
                <strong>Shipping:</strong> Free
              </p>
              <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
            </div>
          </div>
        </div>
        <div className="col-3 bg-body-secondary">
          <div className="card">
            <img
              src="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-velvet-kurta-set-in-black-v1-mxx929.jpg"
              className="card-img-top"
              alt="Embroidered Velvet Sherwani"
            />
            <div className="card-body">
              <h5 className="card-title">Embroidered Velvet Sherwani in Black</h5>
              <p className="card-text">
                <strong>3813 Reviews</strong> <br />
                <span style={{ textDecoration: "line-through" }}>MRP ₹10,000.00</span> ₹7,500.00 (25% Off) <br />
                <strong>Inclusive of all taxes</strong> <br />
                <strong>Offers:</strong> 3 <br />
                <strong>Shipping:</strong> Free
              </p>
              <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
            </div>
          </div>
        </div>
  </div>
</div>

<div className="container-fluid">
  <div className="row">
    {/* Video Section */}
    <div className="col-6 bg-body-secondary">
      <div className="card">
        <video controls style={{ width: "700px", height: "350px" }}>
          <source src="ecommerce_project/multi" type="video/mp4" />
        </video>
        <div className="card-body">
          <h5 className="card-title">NS Fashion Trends</h5>
          <p className="card-text">
            Get Discounted Jackets for Women Online Today at NS Fashion Store
          </p>
          <a href="#" className="btn btn-danger">15% Discount</a>
          <a href="#" className="btn btn-danger">Shop Now</a>
        </div>
      </div>
    </div>

   
    <div className="col-3 bg-body-secondary">
      <div className="card">
        <img
          src="https://www.alamodelabel.in/cdn/shop/files/E6092999-B384-48AD-9DFF-06007244F180_600x.jpg?v=1729883292"
          className="card-img-top"
          alt="Brett Warm Parka Jacket"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Brett Warm Parka Jacket</h5>
          <p className="card-text">
            <strong>MRP:</strong> <span style={{ textDecoration: "line-through" }}>Rs. 4,950.00</span> Rs. 3,549.00 (28% OFF) <br />
            <strong>Inclusive of all taxes</strong> <br />
            <strong>Best Price:</strong> Rs. 3,016.65 (15% OFF) <br />
            <strong>Use Code:</strong> <code>BF75</code>
          </p>
          <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
        </div>
      </div>
    </div>

    
    <div className="col-3 bg-body-secondary">
      <div className="card">
        <img
          src="https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F9c5ada55aa95f8535857a730d8df0255854564b8_original.jpeg"
          className="card-img-top"
          alt="Spring Autumn Kids Jackets"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Spring Autumn Kids Jackets</h5>
          <p className="card-text">
            <strong>MRP:</strong> <span style={{ textDecoration: "line-through" }}>Rs. 4,850.00</span> Rs. 3,749.00 (23% OFF) <br />
            <strong>Inclusive of all taxes</strong> <br />
            <strong>Best Price:</strong> Rs. 3,186.65 (15% OFF) <br />
            <strong>Use Code:</strong> <code>BF75</code>
          </p>
          <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="card text-center">
  <div className="card-header" style={{ fontFamily: "cursive", fontVariant: "small-caps" }}>
    NS Fashion Store
  </div>
  <div className="card-body">
    <h3 className="card-title" style={{ color: "rgb(235, 40, 40)" }}>
      "Style is something each of us already has, all we need to do is find it." - NS
    </h3>
    <p className="card-text" style={{ fontSize: "medium" }}>
      Fashions fade, style is eternal.
    </p>
    <a href="#" className="btn btn-danger">Know more</a>
  </div>
</div>
      </>
    )
}

export default Products;
