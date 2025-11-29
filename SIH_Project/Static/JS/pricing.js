const monthlyPrices = { standard: 9.99, premium: 19.99 };
const yearlyPrices = { standard: 99.99, premium: 199.99 };

const billingToggle = document.getElementById('billing-toggle');
const standardPriceEl = document.getElementById('plan-standard');
const premiumPriceEl = document.getElementById('plan-premium');

function updatePrices(isYearly) {
  if (isYearly) {
    billingToggle.setAttribute('aria-checked', 'true');
    standardPriceEl.innerHTML = `${yearlyPrices.standard.toFixed(2)}<span>/y</span>`;
    premiumPriceEl.innerHTML = `${yearlyPrices.premium.toFixed(2)}<span>/y</span>`;
  } else {
    billingToggle.setAttribute('aria-checked', 'false');
    standardPriceEl.innerHTML = `${monthlyPrices.standard.toFixed(2)}<span>/m</span>`;
    premiumPriceEl.innerHTML = `${monthlyPrices.premium.toFixed(2)}<span>/m</span>`;
  }
}

billingToggle.addEventListener('change', () => {
  updatePrices(billingToggle.checked);
});

updatePrices(false);
