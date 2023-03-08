<div class="landing-page-div">
  <div class="hero-section m-2xl">
    <img src="1280x1280 logo.png" />
    <h2>Your fortune awaits.</h2>
    <p class="subtitle px-2xl">
      Crack open your fate with a cookie each day.<br />Let your fortune be
      told, come whatever may.
    </p>
    <a href="/" class="primary-button">Find my fate</a>
  </div>

  <div class="banner">
    <span
      >Find your fortune, know your fate. Find your fortune, know your fate.
      Find your fortune, know your fate. Find your fortune, know your fate. Find
      your fortune, know your fate. Find your fortune, know your fate. Find your
      fortune, know your fate. Find your fortune, know your fate. Find your
      fortune, know your fate. Find your fortune, know your fate. Find your
      fortune, know your fate. Find your fortune, know your fate. Find your
      fortune, know your fate. Find your fortune, know your fate. Find your
      fortune, know your fate. Find your fortune, know your fate.
    </span>
  </div>

  <div class="content-section">
    <div class="content-div">
      <h3
        >Beware the misfortune cookie, for it brings not happy prophecies of the
        future.</h3
      >
      <p
        >No, this cursed confectionery harbors a grim secret within its crumbly
        shell. The misfortune cookie contains fortunes that are too realistic
        for comfort, foretelling dark and dismal futures that will send shivers
        down your spine. As you crack open the cookie, the ominous words
        scrawled on the tiny slip of paper will chill you to the bone, leaving
        you to wonder if they are already coming true. Tread carefully when
        encountering the misfortune cookie, for its realistic fortunes may be a
        harbinger of impending doom.</p
      >
    </div>
    <div class="img"> <img src="cookie-banner.svg" alt=''/> </div>
  </div>

  <div class="pattern" />

  <div class="team-section">
    <div class="heading">
      <h3
        >Unleashed by the creators of darkness, the misfortune cookie is nothing
        short of diabolical.</h3
      >
      <p>
        The misfortune cookie is the malevolent creation of two diabolical
        minds: Ray, the master software developer, and Christina, the sinister
        designer. Together, they have conspired to unleash a tide of despair
        upon unsuspecting victims with their cursed confectionery.
      </p>
    </div>

    <div class="team">
      <div class="team-member">
        <div class="team-member-information">
          <h4>Ray Gong</h4>
          <h5>The Sinister Software Engineer</h5>
          <p
            >Ray hails from the frozen wastelands of Alberta, where he perfected
            the craft of developing magic. With a stroke of a keyboard, Ray has
            woven a web of darkness into the code of the misfortune cookie. His
            system generates fortunes that are too accurate for comfort,
            predicting tragedies and misfortunes with unnerving precision.</p
          >
        </div>
      </div>

      <div class="team-member">
        <div class="team-member-information">
          <h4>Christina Raganit</h4>
          <h5>The Tiny Master of Evil</h5>
          <p
            >Birthed from the fires of the hellscape of British Columbia
            Institute of Technology, Christina's wicked imagination has brought
            the misfortune cookie to life with her sinister designs. She has
            created an alluring shell that masks the cursed nature of the
            cookie, luring people into its trap.</p
          >
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div>
      <a href="">GitHub</a>
      <a href="">DevPost</a>
      <a href="">Misfortune Cookie</a>
    </div>
    <p>Made with ❤️ for RootHacks 2023 by Christina and Ray</p>
  </footer>
</div>

<style>
  .hero-section {
    max-width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .hero-section > .primary-button {
    margin-top: var(--sp-xs);
    width: fit-content;
  }

  .hero-section > img {
    width: 100%;
    padding-bottom: var(--sp-lg);
  }

  .banner {
    display: inline-block;
    border-top: 2px solid var(--black);
    border-bottom: 2px solid var(--black);
    background-color: #feeed9;
    white-space: nowrap;
    padding: var(--sp-md);
    font-size: var(--sp-lg);
    font-weight: 700;
    max-width: calc(100vw - (var(--sp-md) * 2));
    width: calc(100vw - (var(--sp-md) * 2));
    overflow: hidden;
  }

  .banner > span {
    display: inline-block;
    margin-right: var(--sp-lg);
    animation: scrolling-text 120s infinite linear;
  }

  @keyframes scrolling-text {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1440px);
    }
  }

  .pattern {
    height: calc(var(--sp-2xl) * 9);
    width: 100vw;
    background-color: #fe6b33;
    background-image: url("pattern-repeatable.png");
    background-size: 20%;
  }

  .content-section {
    margin: calc(var(--sp-2xl) * 2) calc(var(--sp-2xl) * 4);
    display: flex;
    flex-direction: row;
    gap: calc(var(--sp-2xl) * 5);
    align-items: center;
  }

  .content-section > div {
    width: 50%;
  }

  .content-section > .img > img {
    width: 100%;
    height: auto;
  }

  p {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem;
  }

  .team-section {
    margin: calc(var(--sp-2xl) * 2) calc(var(--sp-2xl) * 4);
  }

  .team-section > .heading {
    margin: 0px calc(var(--sp-2xl) * 12);
    text-align: center;
    margin-bottom: var(--sp-2xl);
  }

  .team-section > .team {
    display: flex;
    gap: var(--sp-2xl);
    flex-direction: row;
  }

  .team-section > .team > .team-member {
    width: 50%;
    border: 4px solid black;
    background-color: #feeed9;
    border-radius: 12px;
    box-shadow: 4px 4px 0 black;
    padding: var(--sp-xl);
  }

  .team-member-information {
    text-align: center;
  }

  .team-member-information > h5 {
    margin-bottom: var(--sp-md);
  }

  footer {
    border-top: 3px solid black;
    text-align: center;
    padding: calc(var(--sp-2xl)) 0px;
    background-color: var(--light-brown);
  }

  footer > div > a {
    font-family: "Quicksand";
    color: black;
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: underline;
  }

  footer > p {
    margin-top: var(--sp-sm);
    opacity: 0.8;
  }

  footer > div > a:not(footer > div > a:last-of-type) {
    margin-right: var(--sp-md);
  }

  footer > div > a:visited {
    color: black;
  }

  @media screen and (min-width: 1024px) {
    .hero-section > img {
      width: 25%;
    }

    .m-2xl {
      margin: calc(var(--sp-2xl) * 2);
    }
  }
</style>
