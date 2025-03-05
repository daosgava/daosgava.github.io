const currentYear = new Date().getFullYear();

const footerMarkup = `
  <footer>
    <div>© Daniel Garcia ${currentYear}</div>
    <div class="links">
      <div class="link">
        <a href="https://github.com/daosgava" target="_blank">Github <span class="external-icon">→</span></a>
        <hr>
      </div>
      <div class="link">
        <a href="https://www.linkedin.com/in/danielgarciavargas/" target="_blank">LinkedIn <span class="external-icon">→</span></a>
        <hr>
      </div>
    </div>
  </div>
`;

export { footerMarkup };
