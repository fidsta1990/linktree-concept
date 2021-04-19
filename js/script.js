// SELECTORS
const data = {
  fullName: "Jane Doe",
  position: "UI/UX DESIGNER",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: "https://facebook.com/jdoe",
      icon: "fab fa-facebook-f",
    },
    {
      id: "ig",
      service: "Instagram",
      url: "https://instagram.com/jdoe",
      icon: "fab fa-instagram",
    },
    {
      id: "tw",
      service: "Twitter",
      url: "https://twitter.com/jdoe",
      icon: "fab fa-twitter",
    },
  ],
};

const cardApp = (info) => {
  const style = createEl("style");
  const bodyEl = document.querySelector("body");
  const root = createEl("div");
  const html = `
  <div class="card__wrapper">
  <img
    src="https://randomuser.me/api/portraits/women/31.jpg"
    alt="profile"
    class="card__user-img"
  />
  <div class="card__info">
    <span class="card__name">${data.fullName}</span>
    <span class="card__title">${data.position}</span>
  </div>
  
  <div class="card__socials">
  
  </div>
  `;
  const cssStyles = `
  .content-area {
    background: url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
      no-repeat center/cover;
    min-height: 100vh;
  }
  
  .card {
    width: 100%;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.697);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card__wrapper {
    height: 360px;
    padding: 20px;
    width: 100%;
    max-width: 300px;
    background: #fff;
    box-shadow: 0 0px 62px 0px rgba(0, 0, 0, 0.223);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .card__user-img {
    border-radius: 50%;
    border: 2px solid #2c5eff;
    height: 70px;
    width: 70px;
    margin-bottom: 2rem;
  }
  
  .card__info {
    margin-bottom: 2rem;
  }
  
  .card__name {
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .card__title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1rem;
  }
  
  .card__icon-box {
    width: 25px;
    display: inline-block;
  }
  
  .card__icon {
    border: 1px solid black;
    padding: 10px;
    width: 200px;
    margin-bottom: 0.4rem;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    display: flex;
    align-items: center;
  }
  
  .card__icon-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
  }
  
  .card__icon--fb {
    color: #2c5eff;
    border: 1px solid #2c5eff;
  }
  
  .card__icon--fb:hover {
    background: #2c5eff;
    color: #fff;
  }
  
  .card__icon--ig {
    color: #773fe7;
    border: 1px solid #2c5eff;
  }
  
  .card__icon--ig:hover {
    background: #773fe7;
    color: #fff;
  }
  
  .card__icon--tw {
    color: #f962b1;
    border: 1px solid #2c5eff;
  }
  
  .card__icon--tw:hover {
    background: #f962b1;
    color: #fff;
  }
  
  `;
  root.classList.add("root");
  bodyEl.prepend(root);
  root.style.cssText = `
  background: url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
  no-repeat center/cover;
  min-height: 100vh;
  `;
  root.prepend(style);
  const cardEl = createEl("section");
  //create card,a dd a class name and append inside root element
  cardEl.classList.add("card");
  root.prepend(cardEl);
  cardEl.innerHTML = html;
  style.innerHTML = cssStyles;
  const cardSocials = cardEl.querySelector(".card__socials");
  data.socials.forEach((social, idx) => {
    let anchor = createEl("a");
    anchor.setAttribute("href", social.url);
    let tempNode = createEl("div");
    tempNode.classList.add("card__icon", `card__icon--${social.id}`);
    tempNode.innerHTML = `
    <span class="card__icon-box">
    <i class="${social.icon}"></i>
    </span>
    <span class="card__icon-title">${social.service}</span>
    `;
    anchor.append(tempNode);
    cardSocials.append(anchor);
  });
  // FUNCTIONS

  //creating an element
  function createEl(el) {
    return document.createElement(el);
  }
};

cardApp();
