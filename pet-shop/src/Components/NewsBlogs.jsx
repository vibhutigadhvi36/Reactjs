// NewsBlogs.jsx

function NewsBlogs() {
  const posts = [
    {
      image: "/Images/News-blog01.png",
      tags: ["Pet", "Medical"],
    },
    {
      image: "/Images/News-blog02.png",
      tags: ["Care"],
    },
    {
      image: "/Images/News-blog03.png",
      tags: ["Pet Care"],
    },
  ];

  return (
    <section className="news-section">
      <div className="news-container">

        <div className="news-heading">
          <div>
            <p className="news-subtitle">NEWS & BLOGS </p>
            <h2>Our Recent Articles</h2>
          </div>

          <button className="see-posts-btn">
            See All Posts
            <span>⟶</span>
          </button>
        </div>


        <div className="news-cards">

          {posts.map((post, index) => (
            <div className="news-card" key={index}>

              <div className="news-image-box">
                <img src={post.image} alt="Pet blog" />

                <div className="news-tags">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div> 


              <div className="news-info">

                <div className="news-meta">
                  <span>◉ &nbsp;By Admin</span>
                  <span>▣ &nbsp;25th Aug, 2024</span>
                </div>

                <h3>
                  Clean indoor air as important
                  <br />
                  in controlling asthma
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default NewsBlogs;