import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../Components/Form/SearchInput'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active"  to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sports">Sports</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/technology">Technology</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/health">Health</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/economy">Economy</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/asia">Asia</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/africa">Africa</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/europe">Europe</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/america">America</Link>
              </li>
            </ul>
            <SearchInput/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header