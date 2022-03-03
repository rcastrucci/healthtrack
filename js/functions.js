// Functions
function isEmailValid(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

function alertMsg(displayId, borderId, messageCase) {
    const element = document.getElementById(displayId);
    const border = document.getElementById(borderId);
    const alertTextColor = 'red';

    // SET-UP COLOR
    element.style.color = alertTextColor;
    if (border != null) border.style.borderColor = alertTextColor;

    switch (messageCase) {
        case 'invalidEmail':
            element.innerHTML = 'Insira um email válido';
            break;
        case 'shortPass':
            element.innerHTML = 'A senha não pode conter menos que quatro caracteres';
            break;
        case null:
            element.innerHTML = '';
            if (border != null) border.style.borderColor = '';
            break;
        default:
            element.innerHTML = 'Algo deu errado por favor tente novamente';
    }
}

function enableButton(buttonId) {
    const inputEmail = document.getElementById('inputEmail');
    const inputPass = document.getElementById('inputPass');
    const button = document.getElementById(buttonId);
    const activeElement = document.activeElement;

    if (activeElement === inputEmail) {
        if (isEmailValid(inputEmail.value) || inputEmail.value.length == 0) {
            /* clear */
            alertMsg('alertMsgEmail', 'inputEmail', null);
        } else {
            /* warning */
            alertMsg('alertMsgEmail', 'inputEmail', 'invalidEmail');
        }
    }

    if (activeElement === inputPass) {
        if (inputPass.value.length >= 4 || inputPass.value.length == 0) {
            /* clear */
            alertMsg('alertMsgPass', 'inputPass', null);
        } else {
            /* warning */
            alertMsg('alertMsgPass', 'inputPass', 'shortPass');
        }
    }

    button.disabled = !(isEmailValid(inputEmail.value) && (inputPass.value.length >= 4));
}

function buildToast() {
    return `
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 100">
        <div id="toast" class="toast align-items-center text-white bg-toast border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body"></div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
    `;
}

function displayFeed(container) {
if (container) {
    let head = ['Suco de Açai','Vegano','Receita','Beleza','Couve','Corrida','O Segredo','Muita energia','Esporte','Mirtillo','Castanhas','Frutas'];
    let body = ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quisquam ipsa.'
            ];

    head.forEach((value, i) => {
        container.innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card">
            <img src="../images/cards/card${i+1}.jpg" class="img-card" alt="${value}">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title">${value}</h5>
              <p class="card-text">${body[i]}</p>
              <a building-msg href="#" class="btn btn-lighter-color btn-custom d-flex flex-column justify-content-center">Ver mais</a>
            </div>
          </div>
        </div>
        `;
    });
}
}

function activityList(container) {
    if (container) {
        let list = ["Aeróbica","Alongamentos","Andebol", "Artes Marciais", "Badminton", "Ballet", "Basebol", "Basebol Finlandês",
                    "Basquetebol", "Biatlo", "Boxe", "Caiaque", "Caminhada", "Caminhada em raquetes de neve", "Caminhada nordica",
                    "Campo de treino", "Canoagem", "Ciclismo", "Ciclismo de estrada", "Ciclismo de montanha", "Ciclismo em pista coberta",
                    "Clássico esqui de fundo", "Corpo e mente", "Corrida", "Corrida de estrada", "Corrida em cadeira de rodas",
                    "Corrida em passadeira rolante", "Corrida em trilhos", "Corrida ultra", "Corridas de atletismo", "Cross-training",
                    "Criquete", "Dança", "Dança fitness", "Equitação", "Escalada (interior)", "Esqui aquático", "Esqui de fundo",
                    "Esqui de rodas - clássico", "Esqui de rodas - estilo livre", "Esqui downhill", "Esqui telemark", "Esquiar",
                    "Estilo livre esqui de fundo", "Exercício em grupo", "Exercícios step", "Fitness aquática", "Floorball",
                    "Futebol", "Futebol americano", "Futsal", "Ginástica", "Golfe", "Golfe de disco", "HIIT", "Hóquei no gelo",
                    "Ioga", "Jazz", "Jogging", "Judo", "Kickboxing", "Kitesurfing", "Latina", "Mobilidade dinâmica", "Mobilidade estática",
                    "Moderna", "Natação", "Natação em águas abertas", "Natação piscina", "Orientação", "Orientação em bicicleta",
                    "Orientação em esqui", "Outro ao ar livre", "Outro de interior", "Patinagem", "Patinagem com patins de 4 rodas",
                    "Patinagem com patins em linha", "Patinagem no gelo", "Pedestrianismo", "Pilates", "Remo", "Remo em recinto coberto",
                    "Rua", "Râguebi", "Salão", "Show", "Snowboarding", "Spinning", "Squash", "Surfing", "Treino de força",
                    "Treino em circuito", "Treino funcional", "Tronco", "Trote", "Tênis", "Tênis de mesa", "Vela", "Voleibol",
                    "Voleibol de praia", "Wakeboarding", "Windsurfing"];

        list.forEach(value => {
            container.innerHTML += `<option value="${value}">`;
        });
    }
}

function calculateIMC(usersHeight) {
    const imc = document.getElementById("measurementsIMC");
    let weight = document.getElementById("measurementsWeight");
    weight = weight.value.replace(",", ".");
    if (weight && weight > 10) {
        imc.innerHTML = (Math.round((weight/(usersHeight*usersHeight)) * 100) / 100).toFixed(2);
    } else {
        imc.innerHTML = "--";
    }
}

window.onload = () => {
    const logoElement = document.getElementById('logo');
    const buildingMsg = document.querySelectorAll('[building-msg]');
    const imgAlt = document.querySelectorAll('[data-alt]');
    const toastDiv = document.getElementById('toast-div');
    const feed = document.getElementById('feed');
    const buttonOnOff = document.querySelectorAll('[button-on-off]');
    const activityListOptions = document.getElementById('activityListOptions');

    if (logoElement) logoElement.style.top = '0px';
    if (toastDiv) toastDiv.innerHTML = buildToast();

    /* TRANSITIONS OPACITY */
    document.querySelectorAll('.transition-opacity').forEach(element => element.style.opacity = '1.0');

    /* TOAST MESSAGES */
    buildingMsg.forEach(element => element.addEventListener('click', () => {
        element.href='javascript:void(0)';
        let msg;
        switch (element.getAttribute('building-msg')) {
            case 'function':
                msg = 'Estamos trabalhando nesta funcionalidade';
                break;
            case 'img':
                msg = 'Trocar a imagem ainda não está disponível!';
                break;
            case 'forgot':
                msg = 'Para entrar, digite um email válido e qualquer senha com mais de 4 digítos';
                break;
            default:
                msg = 'Este link ainda está em construção!';
        }
        document.querySelectorAll('div.toast-body').forEach(div => div.innerHTML = msg);
        new bootstrap.Toast(document.getElementById('toast')).show();
    }));

    /* BUTTONS ON AND OFF */
    buttonOnOff.forEach(elementOff => elementOff.addEventListener('click', () => {
        let group = elementOff.getAttribute('button-on-off');
        let attr = elementOff.getAttribute('class');

        if (attr.includes('btn-off')) {
            buttonOnOff.forEach(elementOn => {
                if (group === elementOn.getAttribute('button-on-off')) {
                    if (elementOn.getAttribute('class').includes('btn-on')) {
                        elementOn.classList.remove('btn-on');
                        elementOn.classList.add('btn-off');
                    }
                }
            });
            elementOff.classList.remove('btn-off');
            elementOff.classList.add('btn-on');
        }
    }));

    /* IMAGE CHANGE ON CLICK */
    imgAlt.forEach(element => element.addEventListener('click', () => {
        let alt = element.getAttribute('data-alt');
        let temp = element.getAttribute('src');
        element.setAttribute('src', alt);
        element.setAttribute('data-alt', temp);
    }));
    activityList(activityListOptions);
    displayFeed(feed);
}