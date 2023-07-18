function ProductLists(props) {
  const { image, title, rating, sold, price } = props; // destructuring

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card col-md-6">
            <div className="m-3 shadow">
              <div className="ms-3 text-center">
                <img src={image} className="card-img mt-3"  />
                <p className="fw-bold mt-3 text-start">Product Name: <span>{title}</span></p>
                <p className="fw-bold text-start">Rating: <span className="fw-bold">{rating}</span></p>
                <p className="fw-bold text-start">Sold: <span className="fw-bold">{sold}</span></p>
                <p className="fw-bold text-start">Price: $ <span className="fw-bold">{price}</span></p>
                <button className="fw-bold rounded-pill mb-3 col-4 bg-warning">Add to Cart</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductLists