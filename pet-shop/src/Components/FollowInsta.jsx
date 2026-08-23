function FollowInsta() {
  const images = [
    "/Images/instagram_img01.png",
    "/Images/instagram_img02.png",
    "/Images/instagram_img03.png",
    "/Images/instagram_img04.png",
    "/Images/instagram_img05.png",
  ];

  return (
    <section className="instagram-section">

      <button className="instagram-btn">
        Follow Us On Instagram
      </button>

      <div className="instagram-images">
        {images.map((image, index) => (
          <div className="instagram-image" key={index}>
            <img src={image} alt={`Instagram ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default FollowInsta;