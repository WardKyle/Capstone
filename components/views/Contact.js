import html from "html-literal";
import * as js from "../../utils";
window.hoverTrick = js.mobileHover;

export default () => html`
  <section class="contact">
    <section id="firstSection">
      <div class="top_left">Contact Us</div>
      <p>
        We're always here to help. Get in touch with us and let's see what we
        can achieve together.
      </p>
      <div id="contact_options">
        <i class="fa-sharp fa-solid fa-building"></i>
        <div class="flex-row" onmouseover="hoverTrick()">
          <div class="options">
            <div class="row1">Need an enterprise license for a business?</div>
          </div>
          <div class="options hoverOver">
            <p>
              Learn about all our business solutions. We're equipped with
              features to meet all your needs.
            </p>
            <div class="contactButton">
              <a href="mailto: email@passlockr-app.com">Send Inquiry</a>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-lightbulb"></i>
        <div class="flex-row" onmouseover="hoverTrick()">
          <div class="options">
            <div class="row1">Have an idea regarding a feature we can add?</div>
          </div>
          <div class="options hoverOver">
            <p>
              We're all ears for however we can make our product better. Our
              product development teams is always making improvements.
            </p>
            <div class="contactButton">
              <a href="mailto: email@passlockr-app.com">Add Feature</a>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-circle-question"></i>
        <div class="flex-row" onmouseover="hoverTrick()">
          <div class="options">
            <div class="row1">Need Help?</div>
          </div>
          <div class="options hoverOver">
            <p>
              Don't hesitate to reach out, no matter the question. We'd love to
              help make your life easier.
            </p>
            <div class="contactButton">
              <a href="mailto: email@passlockr-app.com">Help</a>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-handshake"></i>
        <div class="flex-row" onmouseover="hoverTrick()">
          <div class="options">
            <div class="row1">Want to partner with us?</div>
          </div>
          <div class="options hoverOver">
            <p>Let's work together and discuss ways we could collaborate.</p>
            <div class="contactButton">
              <a href="mailto: email@passlockr-app.com">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="secondSection">
      <div class="doubleStack">
        <div class="row_col">Kyle Ward</div>
        <div class="row_col">Full Stack Web Developer</div>
      </div>
      <div class="bottom_right">
        Sparked by Savvy Coders, the idea for PassLockr was conceptualized
        through the need of a capstone for cohort completion. The ever-growing
        list of passwords, "organized" in an iPhone note, was getting out of
        hand. It was time for a change, and PassLockr was born.
      </div>
    </section>
  </section>
`;
