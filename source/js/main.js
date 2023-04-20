window.addEventListener("DOMContentLoaded", function renderBlockchainData() {
    const graphics = document.querySelector(".graphics-list");
    graphics.innerHTML = `<div class="lds-dual-ring"></div>`

    fetch("https://www.blockchain.com/ticker")
        .then(r => r.json())
        .then(data => {
            const items = [
                [encodeURIComponent(data['USD'].last), 'Active publishers'],
                [encodeURIComponent(`$${data['EUR'].last}`), 'Publishers earn per day'],
                [encodeURIComponent(data['GBP'].last), 'Active campaigns'],
            ];

            graphics.innerHTML = items.map(item => `
                    <li class="graphics-list__item">
                        <span class="graphics-list__count text-blue">${decodeURIComponent(item[0])}</span>
                        <p class="graphics-list__text">${decodeURIComponent(item[1])}</p>
                    </li>
                  `).join('')
        })
        .catch(e => {
            console.error(e, 'Error');
            graphics.innerHTML = `Нет данных`
        });
});