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
    <span>Find your fortune, know your fate. Find your fortune.</span>
  </div>
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
    background-color: var(--white);
    white-space: no-wrap;
    padding: var(--sp-md);
    font-size: var(--sp-lg);
    font-weight: 700;
    height: calc(var(--sp-md) + var(--sp-md) + var(--sp-lg));
    max-height: calc(var(--sp-md) + var(--sp-md) + var(--sp-lg));
    max-width: calc(100vw - (var(--sp-md) * 2));
    width: calc(100vw - (var(--sp-md) * 2));
    overflow: hidden;
    margin-top: var(--sp-lg);
    margin-bottom: var(--sp-lg);
  }

  .banner > span {
    display: inline-block;
    margin-right: var(--sp-lg);
    /* animation: scrolling-text 6s infinite linear; */
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
