function Navbar () {

  return (
    <>
     <nav className="navbar bg-danger">
      <div className="container-fluid justify-content-between shadow">
        <p><span className="navbar-brand m-5 h1 text-warning fs-1"><i class="fa-brands fa-shopify"></i></span></p>
        <p><span className="navbar-brand m-3 me-5 h2 fs-3 text-light">Home</span>
        <span className="navbar-brand m-3 me-5 h2 fs-3 text-light">Products</span>
        <i className="fa-solid fa-cart-shopping m-3 me-5 fs-3 text-warning"></i></p>
      </div>
    </nav>
    </>
  )
}

export default Navbar