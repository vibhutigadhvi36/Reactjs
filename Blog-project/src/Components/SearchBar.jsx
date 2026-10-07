function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {

  return (
    <div className="filter-box mb-4">

      <div className="row g-3">

        <div className="col-lg-5">

          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search by title or author..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="col-lg-3">

          <select
            className="form-select"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option value="All">
              All Categories
            </option>

            <option value="Web Development">
              Web Development
            </option>

            <option value="JavaScript">
              JavaScript
            </option>

            <option value="React">
              React
            </option>

            <option value="Design">
              Design
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Node.js">
              Node.js
            </option>

            <option value="Career">
              Career
            </option>

          </select>

        </div>

        <div className="col-lg-4">

          <select
            className="form-select"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >

            <option value="latest">
              Latest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

            <option value="az">
              Title A-Z
            </option>

            <option value="za">
              Title Z-A
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;