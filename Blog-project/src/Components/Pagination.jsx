function Pagination({
  currentPage,
  totalPages,
  setCurrentPage
}) {

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-5">

      <ul className="pagination justify-content-center">

        <li
          className={`page-item ${
            currentPage === 1
              ? "disabled"
              : ""
          }`}
        >

          <button
            className="page-link"
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            Previous
          </button>

        </li>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (

          <li
            key={page}
            className={`page-item ${
              currentPage === page
                ? "active"
                : ""
            }`}
          >

            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(page)
              }
            >
              {page}
            </button>

          </li>

        ))}

        <li
          className={`page-item ${
            currentPage === totalPages
              ? "disabled"
              : ""
          }`}
        >

          <button
            className="page-link"
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next
          </button>

        </li>

      </ul>

    </nav>
  );
}

export default Pagination;