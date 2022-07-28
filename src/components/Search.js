import React from "react";


export default function Search(){

  return(
    <div>
      <h1>Search</h1>
      <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
    </div>
  )
}