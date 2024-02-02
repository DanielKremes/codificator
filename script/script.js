// get data input
function doCryptography() {
  const element = document.getElementById("encryption").value;

  const result = element
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("decryption").value = result;
}

function doDecryption() {
  const element = document.getElementById("encryption").value;

  const result = element
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("decryption").value = result;
}

async function doCopy() {
  let textarea = document.getElementById("encryptionh").value;

  await navigator.clipboard.writeText(textarea);
  alert("Texto copiado");
}
