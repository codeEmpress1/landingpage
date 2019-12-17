import "../asset/css/style.css"
import icon1 from "../asset/images/icon1.svg"
import icon2 from "../asset/images/icon2.svg"
import icon3 from "../asset/images/icon3.svg"
import icon4 from "../asset/images/icon4.svg"
import icon5 from "../asset/images/icon5.svg"
import more from "../asset/images/plus.jpg"

export default{
    title : 'section-A'
}

export const sectionA = () => `
<section class="w-75 m-auto">
   <div class = "container">
        <div class = "card-deck">
            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${icon1} alt="icon">
                    <h6 class="card-text mt-2">Business</h6>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${icon2} alt="icon">
                    <h6 class="card-text mt-2">Design</h6>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${icon3} alt="icon">
                    <h6 class="card-text mt-2">Development</h6>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${icon4} alt="icon">
                    <h6 class="card-text mt-2">Language</h6>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${icon5} alt="icon">
                    <h6 class="card-text mt-2">Gaming</h6>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-block pt-4 pb-4">
                    <img class="card-img" src=${more} alt="icon">
                    <h6 class="card-text mt-2">View other</h6>
                </div>
            </div>
        </div>
   </div>
</section>`
