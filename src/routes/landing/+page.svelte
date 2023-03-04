<div class="landing-page-div">
  <div class="hero-section m-lg">
    <img src="cookie-banner.svg" />
    <h2>Your fortune awaits.</h2>
    <p class="subtitle px-lg">
      Crack open your fate with a cookie each day.<br />Let your fortune be
      told, come whatever may.
    </p>

    <a class="primary-button">Find my fate</a>
  </div>

  <div class="banner">
    <span>Find your fortune</span>
    <span>Know your fate</span>
    <span>Find your fortune</span>
    <span>Know your fate</span>
    <span>Find your fortune</span>
    <span>Know your fate</span>
    <span>Find your fortune</span>
    <span>Know your fate</span>
    <span>Find your fortune</span>
    <span>Know your fate</span>
  </div>
</div>

<style>
  .hero-section {
    max-width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-section > .primary-button {
    margin-top: var(--sp-xs);
  }

  .hero-section > img {
    width: 100%;
    padding-bottom: var(--sp-lg);
  }

  .banner {
    max-width: 100vw;
    width: 100vw;
  }

  .banner > span {
    display: inline-block;
    margin-right: var(--sp-lg);
    animation: scrolling-text 6s infinite linear;
  }

  @keyframes scrolling-text {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-240px);
    }
  }
</style>
