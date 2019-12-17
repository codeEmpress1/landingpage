import "../asset/css/style.css";
import image1 from "../asset/images/instructor1.png";
import image2 from "../asset/images/instructor2.png";
import image3 from "../asset/images/instructor3.png";
import image4 from "../asset/images/instructor4.png";
import image5 from "../asset/images/instructor5.png";

export default{
    title: 'section-B'
}
export const instructor = () => 
    `
<section class="position-relative mt-5">
<div class="offset-2">
  <div>
    <div class="d-flex">
      <h2 class="toprate">Top Rated <span>Instructor</span> </h2> 
      <div class="d-flex">
      <div class="mr-3"> <img src="/asset/transparent.svg" alt="icon"></div>
    <div>
      <img src="/asset/red-arrow.svg" alt="icon">
    </div>
      </div>
    </div>
      <div >
      <div class=" d-flex overflow-auto " >
        <img src = ${image1} alt="image" class="mr-3 rounded">
        <img src= ${image2} alt="image" class="mr-3 rounded">
        <img src= ${image3} alt="image" class="mr-3 rounded" >
        <img src= ${image4} alt="image" class="mr-3 rounded">
        <img src=${image5} alt="image" class="mr-3 rounded">
       
    </div>
    </div>     
  </div>
</div>
</section>
`

