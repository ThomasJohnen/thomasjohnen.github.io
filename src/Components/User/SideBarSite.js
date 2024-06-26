/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-unresolved */
import Navigate from '../Router/Navigate';
import checkPassword from './CheckPassword';
// import passwordSecurity from '../../img/passwordSecurity.png';

import { encryption } from '../../utils/cryptPassword';
import { getAuthenticatedUser } from '../../utils/auths';
import afficherSite from './AfficherSite';

import afficherDuplicatePassword from './AfficherDuplicatePassword';

const sidebarToFill = `<!--Main Navigation-->
  <header>
  <div class="container">
  <div class="row">
    <div class="col-md-6 listSite overflow-auto">
    </div>
    <div class="right ">
    </div>
    </div>
</div>`;

const addPasswordForm = `
<section class="p-5 shadow p-3 mb-5 bg-body-tertiary rounded border-top border-primary border-3">
  <h1>Ajouter un mot de passe</h1>
    <form id="registrationForm" class="mt-3">
      <div class="mb-3">
        <label for="url" class="form-label">URL</label>
        <input type="url" class="form-control" id="url" placeholder="url.com" required>
        <div id="messageErreurURL" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="site" class="form-label">Site</label>
        <input type="text" class="form-control" id="site" placeholder="mon super site" required>
        <div id="messageErreurSite" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="login" class="form-label">Login</label>
        <input type="text" class="form-control" id="login" placeholder="mon super login" required>
        <div id="messageErreurLogin" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password" placeholder="mon super mot de passe" required>
        <div id="messageErreurPassword" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="masterPassword" class="form-label">Mot de passe maitre</label>
        <input type="password" class="form-control" id="masterPassword" placeholder="mot de passe maitre" required>
        <div id="messageErreurMasterPassword" class="form-text"></div>
      </div>
      <button type="submit" id="submitPassword" class="btn btn-primary">Enregistrer</button>
      <p id="resultat" class="text-success"></p>
    </form>
</section>
`;

async function showSideBar() {
  const user = getAuthenticatedUser();

  const option1 = {
    method: 'POST',
    body: JSON.stringify({
      username: user.username,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response1 = await fetch(`${process.env.API_BASE_URL}/auths/readUserFromUsername`, option1);
  const userId = await response1.json();

  const main = document.querySelector('main');
  main.className = 'd-flex align-items-center justify-content-center';
  main.innerHTML = sidebarToFill;
  const sideBar = document.querySelector('.listSite');
  const buttonaddSit = document.createElement('tr');
  const elemAdd = document.createElement('button');
  elemAdd.innerHTML = 'Ajouter un site';
  elemAdd.setAttribute('type', 'button');
  elemAdd.setAttribute('class', 'btn btn-secondary btn-lg btn-block m-1');
  elemAdd.setAttribute('id', 'addButton');
  sideBar.appendChild(elemAdd);

  const rightDiv = document.querySelector('.right');
  const duplicata = document.createElement('button');
  duplicata.innerHTML = 'Afficher les mot de passe dupliquer';
  duplicata.setAttribute('type', 'button');
  duplicata.setAttribute('class', 'btn btn-secondary btn-lg btn-block');
  duplicata.setAttribute('id', 'afficherDuplicata');
  rightDiv.appendChild(duplicata);

  const afficherDuplicata = document.querySelector('#afficherDuplicata');

  afficherDuplicata.addEventListener('click', async (e) => {
    e.preventDefault();
    const masterPassword = await checkPassword(userId);
    afficherDuplicatePassword(masterPassword);
  });

  const addButton = document.querySelector('#addButton');

  let submitPasswordButton;
  addButton.addEventListener('click', () => {
    rightDiv.innerHTML = '';
    rightDiv.innerHTML = addPasswordForm;
    submitPasswordButton = document.querySelector('#submitPassword');

    submitPasswordButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = document.querySelector('#url').value;
      const site = document.querySelector('#site').value;
      const login = document.querySelector('#login').value;
      const passwordNeedToEcnrypt = document.querySelector('#password').value;
      const masterPassword = document.querySelector('#masterPassword').value;

      if (url === '' || !url.includes('.')) {
        const messageErreurURL = document.querySelector('#messageErreurURL');
        messageErreurURL.innerHTML = `Veuillez renseigner une URL`;
        messageErreurURL.display = 'block';
        return;
      }
      if (site === '') {
        const messageErreurSite = document.querySelector('#messageErreurSite');
        messageErreurSite.innerHTML = `Veuillez renseigner un nom de site`;
        messageErreurSite.display = 'block';
        return;
      }
      if (login === '') {
        const messageErreurLogin = document.querySelector('#messageErreurLogin');
        messageErreurLogin.innerHTML = `Veuillez renseigner un login`;
        messageErreurLogin.display = 'block';
        return;
      }
      if (passwordNeedToEcnrypt === '') {
        const messageErreurPassword = document.querySelector('#messageErreurPassword');
        messageErreurPassword.innerHTML = `Veuillez renseigner un mot de passe`;
        messageErreurPassword.display = 'block';
        return;
      }
      if (masterPassword === '') {
        const messageErreurMasterPassword = document.querySelector('#messageErreurMasterPassword');
        messageErreurMasterPassword.innerHTML = `Veuillez renseigner votre mot de pass maitre`;
        messageErreurMasterPassword.display = 'block';
        return;
      }

      const optionCompare = {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          password: masterPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const responseCompare = await fetch(`${process.env.API_BASE_URL}/auths/comparePassword`, optionCompare);
      const compareData = await responseCompare.json();
      if (compareData !== 1) {
        const messageErreurMasterPassword = document.querySelector('#messageErreurMasterPassword');
        messageErreurMasterPassword.innerHTML = `Mot de passe maitre incorrect`;
        messageErreurMasterPassword.display = 'block';
        return;
      }

      if (masterPassword === '') {
        const messageErreurMasterPassword = document.querySelector('#messageErreurMasterPassword');
        messageErreurMasterPassword.innerHTML = `Veuillez renseigner votre mot de pass maitre`;
        messageErreurMasterPassword.display = 'block';
        return;
      }

      const pass = await encryption(passwordNeedToEcnrypt, masterPassword, userId);

      const option2 = {
        method: 'POST',
        body: JSON.stringify({
          userId,
          urlSite: url,
          siteName: site,
          userNameSite: login,
          passwordSite: pass,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response2 = await fetch(`${process.env.API_BASE_URL}/sites/addSite`, option2);
      const resultat = document.querySelector('#resultat');
      if (!response2.ok) {
        resultat.className = 'text-danger';
        resultat.innerHTML = `Une erreur est survenue`;
      } else {
        resultat.innerHTML = `Enregistrement réussi`;
        Navigate('/');
      }
    });
  });

  buttonaddSit.appendChild(elemAdd);
  sideBar.appendChild(buttonaddSit);
  const list = await getlist();
  list.forEach((element) => {
    const listelem = document.createElement('tr');
    const elem = document.createElement('button');
    elem.id = element.id;
    elem.innerHTML = element.site;
    elem.setAttribute('type', 'button');
    elem.setAttribute('class', 'btn btn-secondary btn-lg btn-block m-1');
    elem.addEventListener('click', async (e) => {
      e.preventDefault();

      const masterPassword = await checkPassword(userId);

      if (masterPassword !== null) {
        // afficher mdp
        rightDiv.innerHTML = '';
        afficherSite(userId, elem.id, masterPassword);
      } else {
        // si le mot de passe est pas le bon
      }
    });
    listelem.appendChild(elem);
    sideBar.appendChild(listelem);
  });
}

async function getlist() {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: getAuthenticatedUser().username }),
  };

  const response = await fetch(`${process.env.API_BASE_URL}/sites/orderBySiteName`, option);
  if (!response.ok) {
    console.log("Error can't access the list because response is not ok");
  }
  const list = await response.json();
  return list;
}

export default showSideBar;
