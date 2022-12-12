import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <div className="input-group mb-2" mt-3>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onclick="submitSearch(event)"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <span>
          <button type="button" className="btn btn-warning current">
            Current
          </button>
        </span>
      </div>
    </form>
  );
}
