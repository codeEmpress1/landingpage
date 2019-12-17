import "../asset/css/style.css"
import logo from "../asset/images/Logo1.svg"

export default {
    title: 'links'
}

export const links = () =>
`
<section class="row container m-auto pt-5">
<div class="col-sm-2 text-center mb-2">
 <img class="w-50" src=${logo} alt="logo">
</div>

<div class="col-sm-2 text-center mt-2">
  <h5>Community</h5>
  <p>Create Account</p>
  <p>Go to Premium</p>
  <p>Prefer A Friend</p>
  <p>Get Coupon Code</p>
</div>
   
<div class="col-sm-2 text-center mt-2">
 <h5>Support</h5>
 <p>Terms Condition</p>
 <p>Privacy & Policy</p>
 <p>Copyright Issue</p>
 <p>Get Help</p>
</div>

 
<div class="col-sm-2 text-center mt-2">
 <h5>Join Us</h5>
 <p> Become Teacher</p>
 <p>Become Student</p>
 <p>Become Both</p>
 <p>Partnership</p>
</div>

<div class="col-sm-2 text-center">
 <h5>Download App</h5>
 <p><a class = "store btn px-4 m-auto" href="#"> Apple iOS</a></p>
 <p><a class = "store btn px-4 d m-auto" href="#"> Google Play</a></p>
</div>
</section>
`