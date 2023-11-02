export function autoGenerate() {
  const password = document.querySelector("input#newPassword--password");
  const alphaCharCodes = Array.from(Array(26)).map((el, i) => i + 65);
  const numbCharCodes = Array.from(Array(10)).map((el, i) => i + 48);

  const lowerArr = alphaCharCodes.map(el =>
    String.fromCharCode(el).toLocaleLowerCase()
  );
  const upperArr = alphaCharCodes.map(el =>
    String.fromCharCode(el).toLocaleUpperCase()
  );
  const numbArr = numbCharCodes.map(el => String.fromCharCode(el));

  const picker = [...lowerArr, ...upperArr, ...numbArr];
  function randomPassword() {
    return Math.floor(Math.random() * picker.length);
  }
  const generated = Array.from(Array(16)).map(() => picker[randomPassword()]);
  password.value = generated.join("");
}
