window.onload = function () {
    axios.get('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(resp => {
        const produtos = resp.data.products.map(produto => {

            card(conteudo, produto)
            console.log(produto)

        })

    })
}

const conteudo = document.getElementById('listadeprodutos');

function card(divprincipal, produto) {
    const DivImg = document.createElement('div');
    const DivInfo = document.createElement('div');
    DivInfo.classList.add('DivInfo')


    const card = document.createElement('div');
    card.classList.add('card')

    card.appendChild(DivInfo);
    card.appendChild(DivImg);

    divprincipal.appendChild(card)

    let img = document.createElement('img');
    img.src = produto.image;

    DivImg.appendChild(img)

    let titulo = document.createElement('p');
    titulo.innerHTML = produto.name;

    DivInfo.append(titulo);

    let old = document.createElement('span');
    old.innerHTML = `De: R$${produto.oldPrice},00`;


    DivInfo.append(old);

    let price = document.createElement('h4');
    price.innerHTML = `R$${produto.price},00`;

    DivInfo.append(price);

    let parcela = document.createElement('span');
    parcela.innerHTML = `ou 2x de R$${(produto.price) / 2}`;

    DivInfo.append(parcela);

    let button = document.createElement("INPUT");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Comprar");

    DivInfo.append(button);



}

function Page2() {
    axios.get('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2')
        .then(resp => {
            const lista = resp.data.products.map(produto => {
                console.log(produto)

                DisplayDois(listadois, produto)
            })
        })

    function DisplayDois(divprincipal, produto) {
        const DivImg = document.createElement('div');
        const DivInfo = document.createElement('div');
        DivInfo.classList.add('DivInfo')


        const card = document.createElement('div');
        card.classList.add('card')

        card.appendChild(DivInfo);
        card.appendChild(DivImg);

        divprincipal.appendChild(card)

        let img = document.createElement('img');
        img.src = produto.image;

        DivImg.appendChild(img)

        let titulo = document.createElement('p');
        titulo.innerHTML = produto.name;

        DivInfo.append(titulo);

        let old = document.createElement('span');
        old.innerHTML = `De: R$${produto.oldPrice},00`;


        DivInfo.append(old);

        let price = document.createElement('h4');
        price.innerHTML = `R$${produto.price},00`;

        DivInfo.append(price);

        let parcela = document.createElement('span');
        parcela.innerHTML = `ou 2x de R$${(produto.price) / 2}`;

        DivInfo.append(parcela);

        let button = document.createElement("INPUT");
        button.setAttribute("type", "button");
        button.setAttribute("value", "Comprar");

        DivInfo.append(button);
    }

    const listadois = document.getElementById('listadois')

    let btn = document.getElementById('mais');
    btn.parentNode.removeChild(btn)
}
