import React, { useState } from 'react'

function Nav() {
  
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Oli Clive-Griffin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CV</a>
      </li>
    </ul>
  </div>
</nav>

    )
  }

export default Nav;

