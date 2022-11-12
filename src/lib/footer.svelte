<div class="container">
  <nav><ul>
    <li><a href="/impressum">Impressum</a></li>
    <li><a href="/datenschutz">Datenschutzerklärung</a></li>
  </ul></nav>
</div>

<style lang="scss">
  div {   
    &::before {
      display: block;
      border-top: 2px solid var(--dark);
      content: '';
      width: 50vw;
      height:1px;
      margin: auto;
    }
  }

  nav ul {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>