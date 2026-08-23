function Reviews() {
  return (
    <section className="reviews-section">

      <div className="review-flower">
        <img
          src="/Images/Review-dog-hand-shape01.png"
          alt=""
        />
      </div>


      <div className="reviews-container">

        <div className="review-content">

          <div className="quote-icon">
            “
          </div>

          <h3>Pet Health Important</h3>

          <p className="review-text">
            “ Duis Aute Irure Dolor In Repreerit In Voluptate Velitesse
            <br />
            We Understand That Your Furry Aute Irure Dolor In Repreerit
            <br />
            In Voluptate Ute Irure Dolor In Repreerit In Voluptate
            <br />
            Understand That You ”
          </p>

          <div className="review-author">

            <img
              src="/Images/Review-author01.png"
              alt="Ur aney Jacke"
            />

            <div>
              <h4>Ur aney Jacke</h4>
              <p>Business Study</p>
            </div>

          </div>

        </div>

        <div className="review-image-area">

          <div className="review-badge">

            

            <strong>1500+</strong>

            <span>Reviews</span>

          </div>

          <div className="review-image-wrapper">

            <img
              src="/Images/Lady-dog-image.png"
              alt="Happy couple with their dog"
              className="review-main-image"
            />

          </div>

          <img
            src="/Images/Review-dog-shape02.png"
            alt=""
            className="review-paw-one"
          />

          <img
            src="/Images/Review-dog-leg-shape03.png"
            alt=""
            className="review-paw-two"
          />

        </div>

      </div>

    </section>
  );
}

export default Reviews;