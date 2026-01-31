document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');
    const insightsBtn = document.getElementById('insightsBtn');
    const insightsCard = document.getElementById('insightsCard');
    const insightsContent = document.getElementById('insightsContent');
    const apiKeyModal = document.getElementById('apiKeyModal');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const saveApiKeyBtn = document.getElementById('saveApiKey');
    const cancelApiKeyBtn = document.getElementById('cancelApiKey');

    // --- Data ---
    const currencies = [
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'CHF', name: 'Swiss Franc' },
        { code: 'CNY', name: 'Chinese Yuan' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'INR', name: 'Indian Rupee' }
    ];

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.93, GBP: 0.82, CHF: 0.91, CNY: 7.24, JPY: 149.85, INR: 86.42 },
        EUR: { USD: 1.07, EUR: 1, GBP: 0.88, CHF: 0.98, CNY: 7.77, JPY: 160.78, INR: 101.55 },
        GBP: { USD: 1.22, EUR: 1.14, GBP: 1, CHF: 1.11, CNY: 8.82, JPY: 182.58, INR: 117.01 },
        CHF: { USD: 1.10, EUR: 1.02, GBP: 0.90, CHF: 1, CNY: 7.95, JPY: 164.58, INR: 108.73 },
        CNY: { USD: 0.14, EUR: 0.13, GBP: 0.11, CHF: 0.13, CNY: 1, JPY: 20.71, INR: 12.07 },
        JPY: { USD: 0.0067, EUR: 0.0062, GBP: 0.0055, CHF: 0.0061, CNY: 0.048, JPY: 1, INR: 0.59 },
        INR: { USD: 0.0116, EUR: 0.0098, GBP: 0.0085, CHF: 0.0092, CNY: 0.0828, JPY: 1.69, INR: 1 }
    };

    // --- Initialization ---
    function init() {
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency.code;
            option1.textContent = `${currency.code} - ${currency.name}`;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency.code;
            option2.textContent = `${currency.code} - ${currency.name}`;
            toCurrencySelect.appendChild(option2);
        });
        fromCurrencySelect.value = 'USD';
        toCurrencySelect.value = 'INR';
    }

    // --- Event Listeners ---
    convertBtn.addEventListener('click', handleConversion);
    insightsBtn.addEventListener('click', handleGetInsights);
    saveApiKeyBtn.addEventListener('click', saveApiKey);
    cancelApiKeyBtn.addEventListener('click', () => apiKeyModal.classList.add('hidden'));

    // --- Functions ---
    function handleConversion() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount.';
            resultDiv.classList.remove('hidden');
            insightsBtn.disabled = true;
            return;
        }

        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = amount * rate;

        resultDiv.innerHTML = `
            <span class="font-normal">${formatCurrency(amount, fromCurrency)} is</span>
            <br>
            ${formatCurrency(convertedAmount, toCurrency)}
        `;
        resultDiv.classList.remove('hidden');
        insightsBtn.disabled = false;
        insightsCard.classList.add('hidden'); // Hide old insights on new conversion
    }

    async function handleGetInsights() {
        let apiKey = localStorage.getItem('geminiApiKey');
        if (!apiKey) {
            apiKeyModal.classList.remove('hidden');
            return;
        }
        await fetchInsights(apiKey);
    }

    async function fetchInsights(apiKey) {
        insightsCard.classList.remove('hidden');
        insightsContent.innerHTML = '<div class="loader mx-auto"></div><p class="text-center mt-2">Generating insights...</p>';
        
        const amount = parseFloat(amountInput.value);
        const fromCurrency = currencies.find(c => c.code === fromCurrencySelect.value).name;
        const toCurrency = currencies.find(c => c.code === toCurrencySelect.value).name;
        const convertedAmount = amount * exchangeRates[fromCurrencySelect.value][toCurrencySelect.value];
        
        const prompt = `I am planning a trip. I have ${formatCurrency(convertedAmount, toCurrencySelect.value)}. What can this amount of money typically buy for a tourist in a country that uses the ${toCurrency}? Give me a brief, one-paragraph summary focusing on accommodation, food, and activities. Be encouraging and friendly. Do not use markdown formatting.`;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText} (Code: ${response.status}). Please check your API key.`);
            }

            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;
            insightsContent.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`;

        } catch (error) {
            insightsContent.innerHTML = `<p class="text-red-600 font-semibold">Error: ${error.message}</p>`;
        }
    }
    
    function saveApiKey() {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('geminiApiKey', key);
            apiKeyModal.classList.add('hidden');
            fetchInsights(key);
        }
    }

    function formatCurrency(value, currencyCode) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }

    // --- Run Initialization ---
    init();
});
