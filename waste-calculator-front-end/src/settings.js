const domEl = document.querySelectorAll('.waste-calculator-app');
let apiUrl = '/waste-calculator';

if (domEl.length > 0) {
    const apiUrlAttr = domEl[0].getAttribute('data-api-url');

    if (apiUrlAttr) {
        apiUrl = apiUrlAttr;
    }
}

export const API_URL = apiUrl;
