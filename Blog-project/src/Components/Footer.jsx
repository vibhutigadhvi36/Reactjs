function Footer() {
  return (
    <footer className="footer mt-5">

      <div className="container">

        <div className="row g-4">

          <div className="col-md-6">

            <h4>✦ BlogSphere</h4>

            <p>
              A modern Blog Management System built
              using React, Redux, Bootstrap and JSON Server.
            </p>

          </div>

          <div className="col-md-3">

            <h6>Quick Links</h6>

            <p>Home</p>
            <p>Blogs</p>
            <p>Admin</p>

          </div>

          <div className="col-md-3">

            <h6>Technologies</h6>

            <p>React.js</p>
            <p>Redux Toolkit</p>
            <p>Bootstrap</p>

          </div>

        </div>

        <hr />

        <div className="text-center pb-3">

          <small>
            © 2026 BlogSphere. All Rights Reserved.
          </small>

        </div>

      </div>

    </footer>
  );
}

export default Footer;