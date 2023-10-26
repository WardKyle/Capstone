export default function copyText(i) {
  const passwords = document.querySelectorAll(".user--password");
  const text = passwords[i].innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
}
