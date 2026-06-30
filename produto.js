document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const container = document.getElementById('produto-detalhes-container');

    if (!idParam || !container) {
        if(container) container.innerHTML = '<h2>Produto não encontrado. <a href="index.html" style="color:var(--gold);">Voltar para a página inicial</a></h2>';
        return;
    }

    const produtoId = parseInt(idParam, 10);
    const produto = produtos.find(p => p.id === produtoId);

    if (!produto) {
        container.innerHTML = '<h2>Produto não encontrado. <a href="index.html" style="color:var(--gold);">Voltar para a página inicial</a></h2>';
        return;
    }

    // Render Product Details
    container.innerHTML = `
        <div class="produto-detalhes-wrapper">
            <div class="produto-detalhes-img-col">
                <div class="img-glow"></div>
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-detalhes-img">
            </div>
            
            <div class="produto-detalhes-info-col">
                <span class="produto-tag-detalhes">${produto.categoria}</span>
                <h1 class="produto-titulo-detalhes">${produto.nome}</h1>
                <p class="produto-preco-detalhes">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                
                <p class="produto-desc-longa">${produto.descricao_longa}</p>
                
                <div class="piramide-olfativa">
                    <h3>Pirâmide Olfativa</h3>
                    <div class="nota-item">
                        <span class="material-symbols-rounded">air</span>
                        <div>
                            <strong>Notas de Topo:</strong>
                            <span>${produto.notas_topo}</span>
                        </div>
                    </div>
                    <div class="nota-item">
                        <span class="material-symbols-rounded">favorite</span>
                        <div>
                            <strong>Notas de Coração:</strong>
                            <span>${produto.notas_coracao}</span>
                        </div>
                    </div>
                    <div class="nota-item">
                        <span class="material-symbols-rounded">spa</span>
                        <div>
                            <strong>Notas de Fundo:</strong>
                            <span>${produto.notas_fundo}</span>
                        </div>
                    </div>
                </div>
                
                <div class="produto-detalhes-acoes">
                    <button class="btn-detalhes-add" onclick="adicionarAoCarrinhoDetalhes(${produto.id})">
                        <span class="material-symbols-rounded">shopping_bag</span>
                        Adicionar à Sacola
                    </button>
                    <a href="index.html" class="btn-detalhes-voltar">Continuar Comprando</a>
                </div>
            </div>
        </div>
    `;
    
    // Set Document Title
    document.title = `${produto.nome} | Wolverine Perfumes`;
});

function adicionarAoCarrinhoDetalhes(id) {
    adicionarAoCarrinho(id);
    const cartTrigger = document.getElementById('cart-trigger');
    // Animate cart badge
    if (cartTrigger) {
        cartTrigger.style.transform = 'scale(1.2)';
        setTimeout(() => cartTrigger.style.transform = 'scale(1)', 200);
    }
}
