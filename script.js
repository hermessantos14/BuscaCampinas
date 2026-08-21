/* =========================================================
   BUSCA CAMPINAS
   v0.2 - Sistema de Navegação
   ========================================================= */


/* =========================================================
   DADOS FICTÍCIOS
   ========================================================= */

const ads = [

    /* =========================
       SERVIÇOS
       ========================= */

    {
        id: 1,
        type: "servicos",
        title: "Barbearia Premium",
        category: "Beleza e Cuidados Pessoais",
        subcategory: "Barbearia",
        description:
            "Cortes masculinos, barba, acabamento e serviços especializados para quem busca qualidade e atendimento personalizado.",
        neighborhood: "Cambuí",
        price: "A partir de R$ 35,00",
        whatsapp: "19999990001",
        image: "img/demo1.jpeg"
    },

    {
        id: 2,
        type: "servicos",
        title: "Eletricista Express",
        category: "Serviços Técnicos e Manutenção",
        subcategory: "Eletricista",
        description:
            "Serviços elétricos residenciais e comerciais, instalações, manutenção e pequenos reparos.",
        neighborhood: "Taquaral",
        price: "A consultar",
        whatsapp: "19999990002",
        image: "img/demo2.jpg"
    },

    {
        id: 3,
        type: "servicos",
        title: "Fretes Campinas",
        category: "Transporte e Fretes",
        subcategory: "Fretes e Mudanças",
        description:
            "Fretes pequenos e médios, mudanças residenciais e transporte de móveis em Campinas e região.",
        neighborhood: "Ouro Verde",
        price: "A consultar",
        whatsapp: "19999990003",
        image: "img/demo3.jpg"
    },

    {
        id: 4,
        type: "servicos",
        title: "Diarista Juliana",
        category: "Serviços Domésticos",
        subcategory: "Diarista",
        description:
            "Serviço de limpeza residencial com atendimento cuidadoso e horários previamente agendados.",
        neighborhood: "Barão Geraldo",
        price: "A partir de R$ 150,00",
        whatsapp: "19999990004",
        image: "img/demo4.jpeg"
    },


    /* =========================
       PRODUTOS
       ========================= */

    {
        id: 5,
        type: "produtos",
        title: "Marmitas da Ana",
        category: "Alimentos",
        subcategory: "Marmitas",
        description:
            "Marmitas caseiras preparadas diariamente, com opções variadas para almoço e jantar.",
        neighborhood: "Jardim Aurélia",
        price: "A partir de R$ 18,00",
        whatsapp: "19999990005",
        image: "img/demo5.jpg"
    },

    {
        id: 6,
        type: "produtos",
        title: "Bolos da Vó",
        category: "Alimentos",
        subcategory: "Bolos e Doces",
        description:
            "Bolos caseiros, bolos para festas e encomendas especiais.",
        neighborhood: "Cambuí",
        price: "A partir de R$ 35,00",
        whatsapp: "19999990006",
        image: "img/demo6.jpg"
    },

    {
        id: 7,
        type: "produtos",
        title: "Brechó Elegance",
        category: "Segunda Mão",
        subcategory: "Brechó",
        description:
            "Roupas selecionadas, peças seminovas e opções de moda feminina.",
        neighborhood: "Centro",
        price: "A partir de R$ 20,00",
        whatsapp: "19999990007",
        image: "img/demo7.jpg"
    },

    {
        id: 8,
        type: "produtos",
        title: "Artesanato Campinas",
        category: "Artesanato",
        subcategory: "Decoração Artesanal",
        description:
            "Produtos artesanais e peças decorativas produzidas manualmente.",
        neighborhood: "Jardim Proença",
        price: "A consultar",
        whatsapp: "19999990008",
        image: "img/demo8.jpeg"
    },


    /* =========================
       COMÉRCIO LOCAL
       ========================= */

    {
        id: 9,
        type: "comercio",
        title: "Padaria Pão Quente",
        category: "Comércio de Alimentos",
        subcategory: "Padarias",
        description:
            "Pães frescos, cafés, salgados e produtos para o café da manhã e da tarde.",
        neighborhood: "Cambuí",
        price: "",
        whatsapp: "19999990009",
        image: "img/demo9.jpeg"
    },

    {
        id: 10,
        type: "comercio",
        title: "Tech Informática",
        category: "Comércio de Tecnologia e Eletrônicos",
        subcategory: "Lojas de Informática",
        description:
            "Assistência técnica, manutenção de computadores e venda de acessórios de informática.",
        neighborhood: "Centro",
        price: "",
        whatsapp: "19999990010",
        image: "img/demo10.jpeg"
    },

    {
        id: 11,
        type: "comercio",
        title: "Casa das Ferragens",
        category: "Comércio para Casa e Construção",
        subcategory: "Lojas de Materiais de Construção",
        description:
            "Ferramentas, materiais para construção, ferragens e acessórios.",
        neighborhood: "Jardim Florence",
        price: "",
        whatsapp: "19999990011",
        image: "img/demo11.jpeg"
    },

    {
        id: 12,
        type: "comercio",
        title: "Hortifruti Primavera",
        category: "Comércio de Alimentos",
        subcategory: "Hortifrutis e Quitandas",
        description:
            "Frutas, verduras e legumes selecionados para sua casa.",
        neighborhood: "Taquaral",
        price: "",
        whatsapp: "19999990012",
        image: "img/demo12.jpeg"
    }

];

/* =========================================================
   PERSISTÊNCIA DOS ANÚNCIOS
   ========================================================= */

function saveAds() {
    localStorage.setItem(
        "buscaCampinasAds",
        JSON.stringify(ads)
    );
}

function loadAds() {
    const savedAds =
        localStorage.getItem(
            "buscaCampinasAds"
        );
    if (!savedAds) {
        return;
    }
    const parsedAds =
        JSON.parse(savedAds);
    ads.length = 0;
    ads.push(
        ...parsedAds
    );
}

function fileToDataUrl(file) {
    return new Promise(
        (resolve, reject) => {
            const reader =
                new FileReader();
            reader.onload =
                () => {
                    resolve(
                        reader.result
                    );
                };
            reader.onerror =
                () => {
                    reject(
                        reader.error
                    );
                };
            reader.readAsDataURL(
                file
            );
        }
    );
}

/* =========================================================
   CONFIGURAÇÃO DAS CATEGORIAS
   ========================================================= */

const categories = {

    servicos: {
        title: "Serviços",
        subtitle: "Encontre profissionais e serviços em Campinas.",
        icon: `
            <svg class="category-icon" viewBox="0 0 24 24">
                <path d="M14.7 6.3a4.5 4.5 0 0 0-5.9 5.9L3 18l3 3 5.8-5.8a4.5 4.5 0 0 0 5.9-5.9l-2.3 2.3-3-3z"/>
            </svg>
        `
    },

    produtos: {
        title: "Produtos",
        subtitle: "Encontre produtos anunciados por vendedores locais.",
        icon: `
            <svg class="category-icon" viewBox="0 0 24 24">
                <path d="M5 8h14l1 13H4L5 8z"/>
                <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
            </svg>
        `
    },

    comercio: {
        title: "Comércio Local",
        subtitle: "Descubra estabelecimentos e negócios próximos.",
        icon: `
            <svg class="category-icon" viewBox="0 0 24 24">
                <path d="M4 10h16"/>
                <path d="M5 10v10h14V10"/>
                <path d="M3 10l2-6h14l2 6"/>
                <path d="M8 20v-6h8v6"/>
            </svg>
        `
    }

};

/* =========================================================
   CATEGORIAS DE ANÚNCIOS
   ========================================================= */

const adCategories = {

    servicos: {

        "Beleza e Cuidados Pessoais": [
            "Salão de Beleza",
            "Barbearia"
        ],

        "Serviços Técnicos e Manutenção": [
            "Eletricista",
            "Pedreiro",
            "Pintor",
            "Montador de Móveis",
            "Chaveiro",
            "Costureira",
            "Manutenção de Ar-Condicionado",
            "Manutenção de Veículos"
        ],

        "Transporte e Fretes": [
            "Fretes e Mudanças",
            "Motoboy"
        ],

        "Serviços Domésticos": [
            "Diarista",
            "Desentupidora",
            "Limpeza de Tapetes e Estofados"
        ],

        "Eventos": [
            "Locações para Festas"
        ],

        "Empresas": [
            "Contabilidade"
        ],

        "Educacionais": [
            "Aulas Particulares"
        ]

    },

    produtos: {

    "Alimentos": [
        "Marmitas",
        "Lanches e Salgados",
        "Bolos e Doces",
        "Alimentos Orgânicos"
    ],

    "Artesanato": [
        "Roupas Personalizadas",
        "Decoração Artesanal",
        "Bijuterias",
        "Cosméticos Artesanais",
        "Cestas Personalizadas"
    ],

    "Segunda Mão": [
        "Brechó",
        "Móveis Usados",
        "Livros Usados"
    ],

    "Moda": [
        "Roupas",
        "Calçados",
        "Acessórios"
    ]

    },

    comercio: {

        "Comércio de Alimentos": [
            "Restaurantes e Bares",
            "Lanchonetes",
            "Padarias",
            "Mercearias e Supermercados Locais",
            "Empórios",
            "Hortifrutis e Quitandas"
        ],

        "Comércio de Roupas e Acessórios": [
            "Lojas de Roupas",
            "Loja de Calçados e Bolsas",
            "Loja de Bijuteria e Acessórios"
        ],

        "Comércio de Móveis e Decoração": [
            "Lojas de Móveis",
            "Móveis Planejados",
            "Loja de Decoração"
        ],

        "Comércio de Tecnologia e Eletrônicos": [
            "Lojas de Informática",
            "Lojas de Celulares e Acessórios",
            "Loja de Eletrodomésticos"
        ],

        "Comércio para Casa e Construção": [
            "Lojas de Materiais de Construção",
            "Lojas de Produtos de Jardinagem",
            "Lojas de Utensílios Domésticos"
        ]

    }

};

/* =========================================================
   ESTADO DA APLICAÇÃO
   ========================================================= */

let currentScreen = "home";

let navigationHistory = [];

let currentCategory = null;

let currentAdId = null;


/* =========================================================
   ELEMENTOS
   ========================================================= */

const appContent =
    document.getElementById("appContent");

const backButton =
    document.getElementById("backButton");


/* =========================================================
   FUNÇÃO PRINCIPAL DE NAVEGAÇÃO
   ========================================================= */

function navigateTo(
    screen,
    params = {},
    addToHistory = true
) {

    if (
        addToHistory &&
        currentScreen !== screen
    ) {

        navigationHistory.push({
            screen: currentScreen,
            category: currentCategory,
            adId: currentAdId
        });

    }

    currentScreen = screen;

    currentCategory =
        params.category !== undefined
            ? params.category
            : currentCategory;

    currentAdId =
        params.adId !== undefined
            ? params.adId
            : currentAdId;

    renderScreen();

}


/* =========================================================
   RENDERIZAÇÃO
   ========================================================= */

function renderScreen() {

    switch (currentScreen) {

        case "home":
            renderHome();
            break;

        case "category":
            renderCategory();
            break;

        case "detail":
            renderDetail();
            break;

        case "search":
            break;

        case "register":
            renderRegister();
            break;

        case "login":
            renderLogin();
            break;

        case "account":
            renderAccount();
            break;

        case "createAd":
            renderCreateAd();
            break;

        default:
            renderHome();

    }

    updateHeader();

}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

    appContent.innerHTML = `

        <img
            src="img/logo.png"
            alt="Busca Campinas"
            class="home-logo">


        <form
            class="search-box"
            id="searchForm">

            <input
                type="text"
                id="searchInput"
                placeholder="O que você procura?"
                autocomplete="off">

                <select
                    id="searchTypeFilter">

                    <option value="">
                        Todos os tipos
                    </option>

                    <option value="servicos">
                        Serviços
                    </option>

                    <option value="produtos">
                        Produtos
                    </option>

                    <option value="comercio">
                        Comércio Local
                    </option>

                </select>

                <select id="searchCategoryFilter" disabled>

                    <option value="">
                        Todas as categorias
                    </option>

                </select>

            <button
                type="submit"
                class="search-button"
                aria-label="Pesquisar">

                <svg viewBox="0 0 24 24">

                    <circle
                        cx="11"
                        cy="11"
                        r="7">
                    </circle>

                    <path
                        d="M16.5 16.5L21 21">
                    </path>

                </svg>

            </button>

        </form>


        <div class="category-list">

            <button
                class="category-button"
                data-category="servicos">

                ${categories.servicos.icon}

                <span>
                    Serviços
                </span>

            </button>


            <button
                class="category-button"
                data-category="produtos">

                ${categories.produtos.icon}

                <span>
                    Produtos
                </span>

            </button>


            <button
                class="category-button"
                data-category="comercio">

                ${categories.comercio.icon}

                <span>
                    Comércio Local
                </span>

            </button>

        </div>


        <div class="home-account-links">

            <button
                type="button"
                class="home-link primary"
                id="announceLink">

                                ${
                    getCurrentUser()
                        ? "Minha Conta"
                        : "Anuncie Grátis"
                }

            </button>

            <button
                type="button"
                class="home-link"
                id="accountActionLink">

                ${
                    getCurrentUser()
                    ? "Sair"
                    : "Login"
                }

            </button>

        </div>

    `;


    /* ---------- CATEGORIAS ---------- */

    document
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                        button.dataset.category;

                    navigateTo(
                        "category",
                        {
                            category: category
                        }
                    );

                }
            );

        });


    /* ---------- ANUNCIE GRÁTIS ---------- */

    document
        .getElementById("announceLink")
        .addEventListener(
            "click",
            () => {

                const currentUser =
                    getCurrentUser();

                if (currentUser) {

                    navigateTo("account");

                    return;
                }

            navigateTo("register");

        }
    );

    /* ---------- LOGIN ---------- */

    document
        .getElementById("accountActionLink")
        .addEventListener(
            "click",
        () => {

            const currentUser =
                getCurrentUser();


            if (currentUser) {

                logout();

                return;

            }


            navigateTo("login");

        }
    );


    /* ---------- BUSCA ---------- */

document
    .getElementById("searchForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const term =
                document
                    .getElementById("searchInput")
                    .value
                    .trim();

            const type =
                document
                    .getElementById("searchTypeFilter")
                    .value;

            const category =
                document
                    .getElementById("searchCategoryFilter")
                    .value;

            if (!term) {
                return;
            }

            searchAds(
                term,
                type,
                category
            );

        }
    );


/* ---------- FILTRO DE CATEGORIA ---------- */

const searchTypeFilter =
    document.getElementById(
        "searchTypeFilter"
    );

const searchCategoryFilter =
    document.getElementById(
        "searchCategoryFilter"
    );


searchTypeFilter.addEventListener(
    "change",
    () => {

        const categoriesForType =
            adCategories[
                searchTypeFilter.value
            ] || {};


        searchCategoryFilter.innerHTML = `
            <option value="">
                Todas as categorias
            </option>
        `;


        Object.keys(categoriesForType)
            .forEach(category => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    category;

                option.textContent =
                    category;

                searchCategoryFilter.appendChild(
                    option
                );

            });


        searchCategoryFilter.disabled =
            !searchTypeFilter.value;

    }
);
}

/* =========================================================
   USUÁRIOS
   ========================================================= */

function getUsers() {

    const users =
        localStorage.getItem("buscaCampinasUsers");

    return users
        ? JSON.parse(users)
        : [];

}

function saveUsers(users) {

    localStorage.setItem(
        "buscaCampinasUsers",
        JSON.stringify(users)
    );

}

function setCurrentUser(user) {

    localStorage.setItem(
        "buscaCampinasCurrentUser",
        JSON.stringify(user)
    );

}

function getCurrentUser() {

    const user =
        localStorage.getItem("buscaCampinasCurrentUser");

    return user
        ? JSON.parse(user)
        : null;

}

function logout() {

    localStorage.removeItem(
        "buscaCampinasCurrentUser"
    );


    navigateTo(
        "home",
        {},
        false
    );

}

/* =========================================================
   CADASTRO
   ========================================================= */

function renderRegister() {

    appContent.innerHTML = `

        <div class="auth-container">

            <h1 class="screen-title">
                Criar conta
            </h1>

            <p class="screen-subtitle">
                Crie sua conta para anunciar gratuitamente no Busca Campinas.
            </p>

            <form
                class="auth-form"
                id="registerForm">

                <div class="form-group">

                    <label for="registerName">
                        Nome
                    </label>

                    <input
                        type="text"
                        id="registerName"
                        name="name"
                        placeholder="Digite seu nome"
                        autocomplete="name"
                        required>

                </div>

                <div class="form-group">

                    <label for="registerEmail">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="registerEmail"
                        name="email"
                        placeholder="Digite seu e-mail"
                        autocomplete="email"
                        required>

                </div>

                <div class="form-group">

                    <label for="registerPassword">
                        Senha
                    </label>

                    <input
                        type="password"
                        id="registerPassword"
                        name="password"
                        placeholder="Digite sua senha"
                        autocomplete="new-password"
                        required>

                </div>

                <div class="form-group">

                    <label for="registerPasswordConfirm">
                        Confirmar senha
                    </label>

                    <input
                        type="password"
                        id="registerPasswordConfirm"
                        name="passwordConfirm"
                        placeholder="Digite a senha novamente"
                        autocomplete="new-password"
                        required>

                </div>

                <button
                    type="submit"
                    class="auth-button">

                    Criar conta

                </button>

            </form>

            <div class="auth-footer">

                <span>
                    Já possui uma conta?
                </span>

                <button
                    type="button"
                    class="auth-link"
                    id="goToLoginButton">

                    Fazer login

                </button>

            </div>

        </div>

    `;

    document
    .getElementById("registerForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("registerName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("registerPassword")
                    .value;


            const passwordConfirm =
                document
                    .getElementById("registerPasswordConfirm")
                    .value;


            /* ---------- VALIDAÇÕES ---------- */

            if (!name || !email || !password || !passwordConfirm) {

                alert(
                    "Preencha todos os campos."
                );

                return;

            }


            if (!email.includes("@")) {

                alert(
                    "Digite um e-mail válido."
                );

                return;

            }


            if (password !== passwordConfirm) {

                alert(
                    "As senhas não coincidem."
                );

                return;

            }


            /* ---------- VERIFICA E-MAIL ---------- */

            const users = getUsers();


            const emailAlreadyExists =
                users.some(
                    user =>
                        user.email === email
                );


            if (emailAlreadyExists) {

                alert(
                    "Este e-mail já está cadastrado."
                );

                return;

            }


            /* ---------- CRIA USUÁRIO ---------- */

            const newUser = {

                id: Date.now(),

                name: name,

                email: email,

                password: password

            };


            users.push(newUser);

            saveUsers(users);


            /* ---------- MANTÉM USUÁRIO LOGADO ---------- */

            setCurrentUser({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            });


            alert(
                "Conta criada com sucesso!"
            );


            navigateTo("home");

        }
    );


    document
    .getElementById("goToLoginButton")
    .addEventListener(
        "click",
        () => {

            navigateTo("login");

        }
    );

}

/* =========================================================
   LOGIN
   ========================================================= */

function renderLogin() {

    appContent.innerHTML = `

        <div class="auth-container">

            <h1 class="screen-title">
                Entrar
            </h1>

            <p class="screen-subtitle">
                Acesse sua conta para gerenciar seus anúncios.
            </p>

            <form
                class="auth-form"
                id="loginForm">

                <div class="form-group">

                    <label for="loginEmail">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="loginEmail"
                        name="email"
                        placeholder="Digite seu e-mail"
                        autocomplete="email"
                        required>

                </div>

                <div class="form-group">

                    <label for="loginPassword">
                        Senha
                    </label>

                    <input
                        type="password"
                        id="loginPassword"
                        name="password"
                        placeholder="Digite sua senha"
                        autocomplete="current-password"
                        required>

                </div>

                <button
                    type="submit"
                    class="auth-button">

                    Entrar

                </button>

            </form>

            <div class="auth-footer">

                <span>
                    Ainda não possui uma conta?
                </span>

                <button
                    type="button"
                    class="auth-link"
                    id="goToRegisterButton">

                    Criar conta

                </button>

            </div>

        </div>

    `;


    document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            /* ---------- VALIDAÇÃO ---------- */

            if (!email || !password) {

                alert(
                    "Preencha o e-mail e a senha."
                );

                return;

            }


            /* ---------- BUSCA USUÁRIO ---------- */

            const users = getUsers();


            const user =
                users.find(
                    item =>
                        item.email === email
                );


            if (!user) {

                alert(
                    "E-mail ou senha incorretos."
                );

                return;

            }


            /* ---------- VERIFICA SENHA ---------- */

            if (user.password !== password) {

                alert(
                    "E-mail ou senha incorretos."
                );

                return;

            }


            /* ---------- CRIA SESSÃO ---------- */

            setCurrentUser({

                id: user.id,

                name: user.name,

                email: user.email

            });


            alert(
                "Login realizado com sucesso!"
            );


            navigateTo("home");

        }
    );


    document
        .getElementById("goToRegisterButton")
        .addEventListener(
            "click",
            () => {

                navigateTo("register");

            }
        );

}

/* =========================================================
   MINHA CONTA
   ========================================================= */

function renderAccount() {

    const currentUser =
        getCurrentUser();


    if (!currentUser) {

        navigateTo(
            "login",
            {},
            false
        );

        return;

    }


    appContent.innerHTML = `

        <div class="auth-container">

            <h1 class="screen-title">
                Minha conta
            </h1>

            <p class="screen-subtitle">
                Gerencie sua conta e seus anúncios.
            </p>


            <div class="detail-info-box">

                <div class="detail-info-row">

                    <span class="detail-info-label">
                        Nome:
                    </span>

                    <span class="detail-info-value">
                        ${escapeHtml(currentUser.name)}
                    </span>

                </div>


                <div class="detail-info-row">

                    <span class="detail-info-label">
                        E-mail:
                    </span>

                    <span class="detail-info-value">
                        ${escapeHtml(currentUser.email)}
                    </span>

                </div>

            </div>
            <div class="detail-info-box">

                <h2>
                    Meus anúncios
                </h2>

                <div id="myAdsList">

                    Nenhum anúncio publicado.

                </div>

            </div>

            <button
                type="button"
                class="auth-button"
                id="createAdButton">

                Anunciar grátis

            </button>


            <div class="auth-footer">

                <button
                    type="button"
                    class="auth-link"
                    id="logoutButton">

                    Sair da conta

                </button>

            </div>

        </div>

    `;

    const myAds =
    getUserAds(
        currentUser.id
    );


const myAdsList =
    document.getElementById(
        "myAdsList"
    );


if (myAds.length > 0) {

    myAdsList.innerHTML =
        `<div class="ad-list">
            ${myAds
                .map(
                    ad => `
                        <div class="my-ad-item">

                            ${createAdCard(ad)}

                            <button
                                type="button"
                                class="edit-ad-button"
                                data-ad-id="${ad.id}">
                                Editar
                            </button>

                            <button
                                type="button"
                                class="delete-ad-button"
                                data-ad-id="${ad.id}">
                                Excluir
                            </button>

                        </div>
                    `
                )
                .join("")}
        </div>`;

    addAdCardEvents();

    document
    .querySelectorAll(".delete-ad-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const adId =
                    Number(
                        button.dataset.adId
                    );

                deleteUserAd(adId);

            }
        );

    });

    document
    .querySelectorAll(".edit-ad-button")
    .forEach(button => {
        button.addEventListener(
            "click",
            event => {
                event.stopPropagation();
                const adId =
                    Number(
                        button.dataset.adId
                    );
                renderCreateAd(adId);
            }
        );
    });
}

    /* ---------- ANUNCIAR GRÁTIS ---------- */

    document
        .getElementById("createAdButton")
        .addEventListener(
            "click",
            () => {

                navigateTo("createAd");

            }
        );


    /* ---------- LOGOUT ---------- */

    document
        .getElementById("logoutButton")
        .addEventListener(
            "click",
            () => {

                logout();

            }
        );

}


/* =========================================================
   ANÚNCIOS DO USUÁRIO
   ========================================================= */

function getUserAds(userId) {

    return ads.filter(
        ad =>
            ad.userId === userId
    );

}

function deleteUserAd(adId) {
    const currentUser =
        getCurrentUser();

    if (!currentUser) {
        return;
    }

    const ad =
        ads.find(
            item =>
                item.id === adId
        );

    if (!ad) {
        return;
    }

    if (
        ad.userId !==
        currentUser.id
    ) {

        alert(
            "Você não pode excluir este anúncio."
        );
        return;
    }

    const confirmed =
        confirm(
            "Tem certeza que deseja excluir este anúncio?"
        );

    if (!confirmed) {
        return;
    }

    const adIndex =
        ads.findIndex(
            item =>
                item.id === adId
        );

    ads.splice(
        adIndex,
        1
    );

    saveAds();
    renderAccount();
}

function formatWhatsApp(value) {

    let numbers =
        value.replace(/\D/g, "");

    numbers =
        numbers.substring(0, 11);

    if (numbers.length <= 2) {
        return `(${numbers}`;
    }

    if (numbers.length <= 7) {
        return `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`;
    }

    return `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7)}`;
}

/* =========================================================
   CADASTRO DE ANÚNCIO
   ========================================================= */

function renderCreateAd(adId = null) {

    const currentUser =
        getCurrentUser();
    if (!currentUser) {

        navigateTo(
            "login",
            {},
            false
        );
        return;
    }

    let editingAd = null;

    if (adId !== null) {

    editingAd =
        ads.find(
            ad =>
                ad.id === adId &&
                ad.userId === currentUser.id
        );

}


    appContent.innerHTML = `

        <div class="auth-container">

            <h1 class="screen-title">
                Criar anúncio
            </h1>

            <p class="screen-subtitle">
                Preencha as informações do seu anúncio.
            </p>


            <form
                class="auth-form"
                id="createAdForm">


                <div class="form-group">

                    <label for="adType">
                        Tipo de anúncio
                    </label>

                    <select
                        id="adType"
                        name="type"
                        required>

                        <option value="">
                            Selecione o tipo
                        </option>

                        <option value="servicos">
                            Serviço
                        </option>

                        <option value="produtos">
                            Produto
                        </option>

                        <option value="comercio">
                            Comércio Local
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label for="adTitle">
                        Título
                    </label>

                    <input
                        type="text"
                        id="adTitle"
                        name="title"
                        placeholder="Ex.: Eletricista residencial em Campinas"
                        required>

                </div>


                <div class="form-group">

                    <label for="adCategory">
                        Categoria
                    </label>

                    <select
                        id="adCategory"
                        name="category"
                        required>

                        <option value="">
                            Selecione uma categoria
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label for="adSubcategory">
                        Subcategoria
                    </label>

                    <select
                        id="adSubcategory"
                        name="subcategory"
                        required
                        disabled>

                        <option value="">
                            Selecione primeiro uma categoria
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label for="adDescription">
                        Descrição
                    </label>

                    <textarea
                        id="adDescription"
                        name="description"
                        placeholder="Descreva seu produto, serviço ou comércio"
                        required></textarea>

                </div>


                <div class="form-group">

                    <label for="adNeighborhood">
                        Bairro
                    </label>

                    <input
                        type="text"
                        id="adNeighborhood"
                        name="neighborhood"
                        placeholder="Ex.: Cambuí, Centro ou Taquaral"
                        required>

                </div>


                <div class="form-group">

                    <label for="adPrice">
                        Preço
                    </label>

                    <input
                        type="text"
                        id="adPrice"
                        name="price"
                        placeholder="Ex.: R$ 50,00 ou sob consulta">

                </div>


                <div class="form-group">

                    <label for="adWhatsapp">
                        WhatsApp
                    </label>

                    <input
                        type="tel"
                        id="adWhatsapp"
                        name="whatsapp"
                        placeholder="Ex.: (19) 99999-0000"
                        required>

                </div>


                <div class="form-group">

                    <label for="adImage">
                        Imagem
                    </label>

                    <input
                        type="file"
                        id="adImage"
                        name="image"
                        accept="image/*">

                </div>


                <button
                    type="submit"
                    class="auth-button">

                    Publicar anúncio

                </button>

            </form>

        </div>

    `;

    const adType =
    document.getElementById("adType");

    const adCategory =
    document.getElementById("adCategory");

    const adSubcategory =
    document.getElementById("adSubcategory"); 

    adType.addEventListener(
        "change",
        () => {

            const categoriesForType =
                adCategories[adType.value] || {};


            adCategory.innerHTML = `
                <option value="">
                    Selecione uma categoria
                </option>
            `;


            Object.keys(categoriesForType)
                .forEach(category => {

                    const option =
                        document.createElement("option");

                    option.value = category;

                    option.textContent = category;

                    adCategory.appendChild(option);

                });


            adSubcategory.innerHTML = `
                <option value="">
                    Selecione primeiro uma categoria
                </option>
            `;

            adSubcategory.disabled = true;

        }
    );


    /* ---------- PREENCHER DADOS DA EDIÇÃO ---------- */

    if (editingAd) {

        adType.value =
            editingAd.type;

        adType.dispatchEvent(
            new Event("change")
        );


        adCategory.value =
            editingAd.category;

        adCategory.dispatchEvent(
            new Event("change")
        );


        adSubcategory.value =
            editingAd.subcategory;


        document.getElementById("adTitle").value =
            editingAd.title;

        document.getElementById("adDescription").value =
            editingAd.description;

        document.getElementById("adNeighborhood").value =
            editingAd.neighborhood;

        document.getElementById("adPrice").value =
            editingAd.price;

        document.getElementById("adWhatsapp").value =
            formatWhatsApp(
            editingAd.whatsapp
            );

    }


    adCategory.addEventListener(
        "change",
        () => {

            const categoriesForType =
                adCategories[adType.value] || {};


            const subcategories =
                categoriesForType[
                    adCategory.value
                ] || [];


            adSubcategory.innerHTML = `
                <option value="">
                    Selecione uma subcategoria
                </option>
            `;


            subcategories.forEach(
                subcategory => {

                    const option =
                        document.createElement("option");

                    option.value =
                        subcategory;

                    option.textContent =
                        subcategory;

                    adSubcategory.appendChild(
                        option
                    );

                }
            );


            adSubcategory.disabled =
                subcategories.length === 0;

        }
    );

    adCategory.addEventListener(
    "change",
    () => {

        const categoriesForType =
            adCategories[adType.value] || {};


        const subcategories =
            categoriesForType[
                adCategory.value
            ] || [];


        adSubcategory.innerHTML = `
            <option value="">
                Selecione uma subcategoria
            </option>
        `;


        subcategories.forEach(
            subcategory => {

                const option =
                    document.createElement("option");

                option.value =
                    subcategory;

                option.textContent =
                    subcategory;

                adSubcategory.appendChild(
                    option
                );

            }
        );


        adSubcategory.disabled =
            subcategories.length === 0;

    }
    );

    const adWhatsapp =
        document.getElementById("adWhatsapp");

    adWhatsapp.addEventListener(
        "input",
        () => {

            const cursorPosition =
                adWhatsapp.selectionStart;

            const oldValue =
                adWhatsapp.value;

            adWhatsapp.value =
                formatWhatsApp(
                    adWhatsapp.value
                );

        }
    );

    document
        .getElementById("createAdForm")
        .addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                const imageFile =
                    document.getElementById("adImage")
                        .files[0];

                        let imageData = "";

                        if (imageFile) {
                            imageData =
                                await fileToDataUrl(
                                    imageFile
                                );
                        }

                const newAd = {
                    id:
                        editingAd
                            ? editingAd.id
                            : Math.max(
                                ...ads.map(
                                    ad => ad.id
                                )
                            ) + 1,

                    userId:
                        currentUser.id,

                    type:
                        adType.value,

                    title:
                        document
                            .getElementById("adTitle")
                            .value
                            .trim(),

                    category:
                        adCategory.value,

                    subcategory:
                        adSubcategory.value,

                    description:
                        document
                            .getElementById("adDescription")
                            .value
                            .trim(),

                    neighborhood:
                        document
                            .getElementById("adNeighborhood")
                            .value
                            .trim(),

                    price:
                        document
                            .getElementById("adPrice")
                            .value
                            .trim(),

                    whatsapp:
                        document
                            .getElementById("adWhatsapp")
                            .value
                            .replace(/\D/g, ""),

                    image:
                        imageData || (editingAd ? editingAd.image : "")

                };

                if (editingAd) {
                    const adIndex =
                        ads.findIndex(
                            ad =>
                                ad.id === editingAd.id
                        );
                    if (adIndex !== -1) {
                        ads[adIndex] =
                            newAd;
                    }
                } else {
                    ads.push(newAd);
}
                /* ---------- SALVA AS ALTERAÇÕES ---------- */

                saveAds();

                alert(
                    editingAd
                         ? "Anúncio atualizado com sucesso!"
                         : "Anúncio criado com sucesso!"
                );

                renderAccount();

            }
    );
}

/* =========================================================
   CATEGORIA
   ========================================================= */

function renderCategory() {

    const category =
        categories[currentCategory];


    if (!category) {

        navigateTo(
            "home",
            {},
            false
        );

        return;

    }


    const categoryAds =
        ads.filter(
            ad =>
                ad.type === currentCategory
        );


    appContent.innerHTML = `

        <h1 class="screen-title">

            ${category.title}

        </h1>


        <p class="screen-subtitle">

            ${category.subtitle}

        </p>


        <div class="ad-list">

            ${categoryAds
                .map(ad => createAdCard(ad))
                .join("")}

        </div>

    `;


    addAdCardEvents();

}


/* =========================================================
   CARD DE ANÚNCIO
   ========================================================= */

function createAdCard(ad) {

    const price =
        ad.price
            ? `
                <div class="ad-price">
                    ${ad.price}
                </div>
              `
            : "";


    return `

        <article
            class="ad-card"
            data-ad-id="${ad.id}">

            <img
                src="${ad.image}"
                alt="${ad.title}"
                class="ad-image">


            <div class="ad-info">

                <div class="ad-category">

                    ${getTypeLabel(ad.type)}

                </div>


                <h2 class="ad-title">

                    ${ad.title}

                </h2>


                <div class="ad-location">

                    ${ad.neighborhood}

                </div>


                ${price}

            </div>

        </article>

    `;

}


/* =========================================================
   EVENTOS DOS CARDS
   ========================================================= */

function addAdCardEvents() {

    document
        .querySelectorAll(".ad-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            card.dataset.adId
                        );

                    navigateTo(
                        "detail",
                        {
                            adId: id
                        }
                    );

                }
            );

        });

}


/* =========================================================
   DETALHE
   ========================================================= */

function renderDetail() {

    const ad =
        ads.find(
            item =>
                item.id === currentAdId
        );


    if (!ad) {

        navigateTo(
            "home",
            {},
            false
        );

        return;

    }


    const priceRow =
        ad.price
            ? `
                <div class="detail-info-row">

                    <span
                        class="detail-info-label">

                        Preço:

                    </span>


                    <span
                        class="detail-info-value">

                        ${ad.price}

                    </span>

                </div>
            
              `
            : "";


    appContent.innerHTML = `

        <img
            src="${ad.image}"
            alt="${ad.title}"
            class="detail-image">


        <span class="detail-category">

            ${getTypeLabel(ad.type)}

        </span>


        <h1 class="detail-title">

            ${ad.title}

        </h1>


        <p class="detail-description">

            ${ad.description}

        </p>


        <div class="detail-info-box">


            <div class="detail-info-row">
                <span
                    class="detail-info-label">
                    Categoria:
                </span>

                <span class="detail-info-value">
                    ${ad.category}
                </span>

            </div>

            <div class="detail-info-row">
                <span class="detail-info-label">
                    Subcategoria:
                </span>

                <span class="detail-info-value">
                    ${ad.subcategory}
                </span>

            </div>

            <div class="detail-info-row">
                <span class="detail-info-label">
                    Bairro:
                </span>

                <span class="detail-info-value">
                    ${ad.neighborhood}
                </span>

            </div>

            ${priceRow}

        </div>

        <button
            class="whatsapp-button"
            id="whatsappButton"
            type="button">

            <span>
                WhatsApp
            </span>

        </button>

    `;


    document
        .getElementById("whatsappButton")
        .addEventListener(
            "click",
            () => {

                openWhatsApp(
                    ad.whatsapp
                );

            }
        );

}


/* =========================================================
   BUSCA
   ========================================================= */

/* =========================================================
   BUSCA
   ========================================================= */

function searchAds(
    term,
    type = "",
    category = ""
) {

    const normalizedTerm =
        normalizeText(term).trim();

    if (!normalizedTerm) {
        return;
    }

    const searchTerms =
        normalizedTerm
            .split(/\s+/)
            .filter(Boolean);

    const results =
        ads.filter(ad => {

            const searchableText = [
                ad.title,
                ad.description,
                ad.category,
                ad.subcategory,
                ad.neighborhood,
                getTypeLabel(ad.type)
            ]
                .filter(Boolean)
                .join(" ");

            const normalizedText =
                normalizeText(searchableText);


            const matchesTerm =
                searchTerms.every(searchTerm =>
                    normalizedText.includes(searchTerm)
                );


            const matchesType =
                !type ||
                ad.type === type;


            const matchesCategory =
                !category ||
                ad.category === category;


            return (
                matchesTerm &&
                matchesType &&
                matchesCategory
            );

        });


    renderSearchResults(
        term,
        results
    );

}

/* =========================================================
   RESULTADOS DA BUSCA
   ========================================================= */

function renderSearchResults(
    term,
    results
) {

    navigationHistory.push({

        screen: currentScreen,

        category: currentCategory,

        adId: currentAdId

    });


    currentScreen = "search";


    appContent.innerHTML = `

        <h1 class="screen-title">

            Resultados

        </h1>


        <p class="screen-subtitle">

            Busca por:
            <strong>
                ${escapeHtml(term)}
            </strong>

        </p>


        ${
            results.length

                ? `

                    <div class="ad-list">

                        ${results
                            .map(ad =>
                                createAdCard(ad)
                            )
                            .join("")}

                    </div>

                  `

                : `

                    <div class="empty-state">

                        <svg viewBox="0 0 24 24">

                            <circle
                                cx="11"
                                cy="11"
                                r="7">
                            </circle>

                            <path
                                d="M16.5 16.5L21 21">
                            </path>

                        </svg>


                        <h3>

                            Nenhum anúncio encontrado

                        </h3>


                        <p>

                            Tente pesquisar por outro termo.
                        </p>
                        <button
                            type="button"
                            class="empty-state-button"
                            id="emptyStateHomeButton">
                            Voltar para o início
                            </button>

                    </div>

                  `
        }

    `;


    addAdCardEvents();
    const emptyStateHomeButton =
    document.getElementById("emptyStateHomeButton");

if (emptyStateHomeButton) {

    emptyStateHomeButton.addEventListener(
        "click",
        () => {
            navigateTo("home");
        }
    );

}

    updateHeader();

}


/* =========================================================
   VOLTAR
   ========================================================= */

function goBack() {

    if (
        navigationHistory.length === 0
    ) {

        navigateTo(
            "home",
            {},
            false
        );

        return;

    }


    const previous =
        navigationHistory.pop();


    currentScreen =
        previous.screen;


    currentCategory =
        previous.category;


    currentAdId =
        previous.adId;


    renderScreen();

}


/* =========================================================
   CABEÇALHO
   ========================================================= */

function updateHeader() {

    const appHeader =
        document.querySelector(
            ".app-header"
        );


    if (
        currentScreen === "home"
    ) {

        backButton
            .classList
            .add("hidden");

        appHeader
            .classList
            .add("home-header");

    } else {

        backButton
            .classList
            .remove("hidden");

        appHeader
            .classList
            .remove("home-header");

    }

}


/* =========================================================
   BOTÃO VOLTAR
   ========================================================= */

backButton.addEventListener(
    "click",
    goBack
);


/* =========================================================
   WHATSAPP
   ========================================================= */

function openWhatsApp(number) {

    const cleanNumber =
        number.replace(
            /\D/g,
            ""
        );


    window.open(
        `https://wa.me/55${cleanNumber}`,
        "_blank"
    );

}


/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function getTypeLabel(type) {

    const labels = {

        servicos: "Serviço",

        produtos: "Produto",

        comercio: "Comércio Local"

    };


    return (
        labels[type] ||
        type
    );

}


function normalizeText(text) {

    return text
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase();

}


function escapeHtml(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent = text;


    return div.innerHTML;

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
loadAds();
renderScreen();