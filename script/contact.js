document.getElementById('email').addEventListener('click', async e => {
  const mail = e.target.dataset.email;          // Adresse aus data‑Attr.
  try {
    await navigator.clipboard.writeText(mail);  // moderner Clipboard‑API
    alert('E‑Mail copied: ' + mail);
  } catch {                                     // Fallback für alte Browser
    const ta = document.createElement('textarea');
    ta.value = mail;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    alert('E‑Mail copied (Fallback): ' + mail);
  }
});