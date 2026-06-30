// =====================================================
// WOLVERINE PERFUMES - ENGINE
// =====================================================

const produtos = [
    {
        id: 1,
        nome: "Lattafa Asad Elixir",
        descricao: "Perfume árabe marcante e especiado. Uma assinatura inconfundível para homens de presença.",
        descricao_longa: "Asad Elixir é a quintessência do luxo árabe. Criado para deixar um rastro poderoso e sedutor, este perfume combina especiarias quentes com a doçura viciante da baunilha e a profundidade do âmbar.",
        notas_topo: "Pimenta Preta, Abacaxi, Tabaco",
        notas_coracao: "Café, Patchouli, Íris",
        notas_fundo: "Âmbar, Baunilha, Notas Amadeiradas",
        preco: 299.90,
        categoria: "Árabes",
        imagem: "img/lattafa_asad.jpg"
    },
    {
        id: 2,
        nome: "Lattafa Al Noble Ameer",
        descricao: "Perfume amadeirado e luxuoso. Traz o poder do Oud com toques elegantes de especiarias quentes.",
        descricao_longa: "Al Noble Ameer é uma verdadeira obra de arte da perfumaria oriental. A fragrância exala nobreza através da perfeita harmonia entre a maçã crocante, ervas aromáticas e a robustez do Oud.",
        notas_topo: "Maçã, Alecrim, Pimenta Rosa",
        notas_coracao: "Cravo, Notas Florais",
        notas_fundo: "Oud, Vetiver, Labdanum, Patchouli",
        preco: 349.90,
        categoria: "Árabes",
        imagem: "img/lattafa_ameer.jpg"
    },
    {
        id: 3,
        nome: "Lattafa Afeef",
        descricao: "Aroma envolvente e radiante. Notas florais e frutadas sobre uma base aveludada de almíscar e sândalo.",
        descricao_longa: "Afeef celebra a pureza e a luminosidade. Uma fragrância altamente versátil e sofisticada, projetada para quem busca um frescor marcante sem perder a base sedutora do almíscar oriental.",
        notas_topo: "Frutas Tropicais, Bergamota",
        notas_coracao: "Flores Brancas, Jasmim",
        notas_fundo: "Sândalo, Almíscar, Baunilha Suave",
        preco: 289.90,
        categoria: "Árabes",
        imagem: "img/lattafa_afeef.jpg"
    },
    {
        id: 4,
        nome: "Lattafa Musamam Black Intense",
        descricao: "Aroma enigmático e sedutor. Combinação poderosa de Oud, especiarias exóticas e couro.",
        descricao_longa: "Conhecido como 'o perfume da serpente', Musamam Black Intense é para os ousados. Ele abre com especiarias impactantes e evolui para um coração de incenso e uma base obscura de couro e Oud.",
        notas_topo: "Açafrão, Especiarias Quentes",
        notas_coracao: "Incenso, Notas Amadeiradas Escuras",
        notas_fundo: "Oud Cambojano, Couro, Âmbar Negro",
        preco: 429.90,
        categoria: "Árabes",
        imagem: "img/lattafa_musamam.jpg"
    },
    {
        id: 5,
        nome: "Lattafa Atheeri",
        descricao: "A doçura do mel com a realeza oriental. Uma joia perfumada que evoca luxo e sofisticação extrema.",
        descricao_longa: "Atheeri é uma experiência olfativa indescritível. A fusão do mel com notas florais nobres e madeiras preciosas cria uma aura de riqueza e magnetismo que dura o dia inteiro na pele.",
        notas_topo: "Mel Silvestre, Açafrão",
        notas_coracao: "Rosa Damascena, Caramelo",
        notas_fundo: "Sândalo, Baunilha, Almíscar",
        preco: 389.90,
        categoria: "Árabes",
        imagem: "img/lattafa_atheeri.jpg"
    },
    {
        id: 6,
        nome: "Hawas Black",
        descricao: "A versão mais obscura e intensa. Notas frutadas vibrantes mergulhadas em madeiras escuras e couro.",
        descricao_longa: "Hawas Black leva o DNA frutado e ambarado ao extremo. Com um toque obscuro e esfumaçado, é a escolha definitiva para baladas e encontros, projetando poder e mistério de forma avassaladora.",
        notas_topo: "Maçã Verde, Limão Siciliano, Pimenta",
        notas_coracao: "Cardamomo, Violeta, Notas Marinhas",
        notas_fundo: "Couro Escuro, Patchouli, Âmbar Gris",
        preco: 519.90,
        categoria: "Árabes",
        imagem: "img/hawas_black.jpg"
    }
];

let carrinho = [];

// =====================================================
// DOM Elements
// =====================================================
const gridProdutos = document.getElementById('produtos-grid');
const cartTrigger = document.getElementById('cart-trigger');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const totalPriceEl = document.getElementById('total-price');
const emptyCartMsg = document.getElementById('empty-cart');
const btnCheckout = document.getElementById('btn-checkout');
const searchToggle = document.getElementById('search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// =====================================================
// Render Products
// =====================================================
function renderizarProdutos(filtro = 'todos') {
    if (!gridProdutos) return;
    gridProdutos.innerHTML = '';
    const lista = filtro === 'todos' ? produtos : produtos.filter(p => p.categoria === filtro);
    
    lista.forEach((produto, index) => {
        const div = document.createElement('div');
        div.className = 'produto-card';
        div.style.animationDelay = `${index * 0.1}s`;
        div.innerHTML = `
            <a href="produto.html?id=${produto.id}" class="produto-link" style="text-decoration: none; color: inherit;">
                <div class="produto-img-container">
                    <span class="produto-tag">${produto.categoria}</span>
                    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img" loading="lazy">
                </div>
                <div class="produto-info">
                    <h3 class="produto-nome">${produto.nome}</h3>
                    <p class="produto-descricao">${produto.descricao}</p>
            </a>
                    <div class="produto-bottom">
                        <span class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                        <button class="btn-add-cart" onclick="adicionarAoCarrinho(${produto.id})" aria-label="Adicionar ${produto.nome} à sacola">
                            <span class="material-symbols-rounded">add_shopping_cart</span>
                        </button>
                    </div>
                </div>
        `;
        gridProdutos.appendChild(div);
    });
}

// =====================================================
// Cart Logic
// =====================================================
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
    abrirCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    cartBadge.innerText = carrinho.length;
    cartItemsContainer.innerHTML = '';
    
    if (carrinho.length === 0) {
        cartItemsContainer.appendChild(emptyCartMsg);
        emptyCartMsg.style.display = 'block';
        totalPriceEl.innerText = 'R$ 0,00';
        return;
    }
    
    emptyCartMsg.style.display = 'none';
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                <button class="btn-remove" onclick="removerDoCarrinho(${index})">Remover</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });
    
    totalPriceEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// =====================================================
// Cart Sidebar
// =====================================================
function abrirCarrinho() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

cartTrigger.addEventListener('click', abrirCarrinho);
cartCloseBtn.addEventListener('click', fecharCarrinho);
cartOverlay.addEventListener('click', fecharCarrinho);

// =====================================================
// Search
// =====================================================
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 300);
    document.body.style.overflow = 'hidden';
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    document.body.style.overflow = '';
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (query.length < 2) return;
    
    const resultados = produtos.filter(p =>
        p.nome.toLowerCase().includes(query) ||
        p.descricao.toLowerCase().includes(query)
    );
    
    resultados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <div>
                <div style="font-weight: 600;">${p.nome}</div>
                <div style="color: #c9a84c; font-weight: 700;">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
            </div>
        `;
        div.addEventListener('click', () => {
            adicionarAoCarrinho(p.id);
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
            document.body.style.overflow = '';
        });
        searchResults.appendChild(div);
    });
});

// =====================================================
// Filters
// =====================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderizarProdutos(btn.dataset.filter);
    });
});

// =====================================================
// Hamburger Menu
// =====================================================
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// =====================================================
// Navbar Scroll Effect
// =====================================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =====================================================
// WhatsApp Checkout
// =====================================================
btnCheckout.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert("Sua sacola está vazia!");
        return;
    }
    
    let mensagem = "Olá! Gostaria de finalizar minha compra na *Wolverine Perfumes*:%0A%0A";
    carrinho.forEach(item => {
        mensagem += `✅ ${item.nome} — R$ ${item.preco.toFixed(2).replace('.', ',')}%0A`;
    });
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    mensagem += `%0A💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    mensagem += `%0A%0AAgora preciso saber: forma de pagamento e endereço de entrega. Obrigado!`;
    
    window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
});

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =====================================================
// Init
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
});
