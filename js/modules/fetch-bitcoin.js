export default async function FecthBiticoin(url) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const bitcoinBRL = bitcoinJson.BRL;
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / bitcoinBRL.buy).toFixed(4);
  } catch (erro) {
    console.log("erro");
  }
}
//

