import "../asset/css/style.css"
import logo from "../asset/images/decagon-logo-1.png"
export default {
  title: "Header"
};

export const nav = () =>`
<nav class="navbar navbar-expand-lg static-top w-75">
      <div class="container">
        <img src=${logo} alt="logo">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon">Menu</span>
        </button>
        <div class="collapse navbar-collapse txt-sm" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-dark" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ml-2">
              <a class="nav-link text-dark" href="#">Course</a>
            </li>
            <li class="nav-item ml-2">
              <a class="nav-link text-dark" href="#">Author</a>
            </li>
            <li class="nav-item ml-2">
              <a class="nav-link text-dark" href="#">Feedback</a>
            </li>
          </ul>
          <button type="button" class="btn btn-success btn-sm txt-sm signin ml-3 rounded-pill">Sign In</button>
         
        </div>
      </div>
    </nav>

`
