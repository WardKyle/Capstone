import html from "html-literal";

export default () => html`
  <section class="homepage">
    <div id="abstract"></div>
    <div class="fullColor"></div>
    <div class="colorLayer"></div>
    <section id="firstSection">
      We simplify the password management experience
      <p>
        Streamlined UX, condensed content display, custom controls, and quicker
        navigation offers our users the best experience
      </p>
      <div id="marketing">
        <a href="Login">Free, always</a>
      </div>
      <div id="marketing--anim" class="anim--mouseLeave"></div>
      <div id="marketing--white"></div>
    </section>
    <section id="secondSection">
      <div class="doubleStack">
        <div class="row_col">
          Security streamlined, we do all the database management so you don't
          have to
        </div>
        <div class="row_col">Generate and save new complex passwords</div>
      </div>
      <div class="bottom_right">
        Get started with 3 easy steps
        <ol>
          <li>Create a new account and login</li>
          <li>Add all your platforms and respective passwords</li>
          <li>That's it!</li>
        </ol>
      </div>
    </section>
    <section id="thirdSection">
      <div id="testimonials">
        <p id="slide1">
          "PassLockr is the best password management product yet!"
        </p>
        <p id="slide2" style="display:none">
          "I have already recommended their product to my entire family."
        </p>
        <p id="slide3" style="display:none">
          "Life. Saver. And not the sugar coated kind."
        </p>
        <p id="slide4" style="display:none">
          "I was today years old when I found my new best friend."
        </p>
        <div class="five--stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i>
          <h4>"Game changer"</h4>
        </div>
        <div class="five--stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i>
          <h4>"Love.Love.Love."</h4>
        </div>
        <div class="five--stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i>
          <h4>"The best yet"</h4>
        </div>
        <div class="five--stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i>
          <h4>"Can't beat free"</h4>
        </div>
      </div>
    </section>
  </section>
`;
