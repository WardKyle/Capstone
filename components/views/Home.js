import html from "html-literal";

export default () => html`
  <section class="homepage">
    <section id="firstSection">
      <div class="top_left">Password Management Has Never Been So Simple</div>
      <div class="bottom_right"></div>
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
          "PassLockr is the best password management product yet!" -Anonymous
        </p>
        <p id="slide2" style="display:none;">
          "I have already recommended their product to my entire family."
          -Anonymous
        </p>
        <p id="slide3" style="display:none;">
          "Life. Saver. And not the sugar coated kind." -Anonymous
        </p>
      </div>
    </section>
  </section>
`;
