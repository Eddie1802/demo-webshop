const TRANSLATIONS = {
  en: {
    // Page titles
    "page.home.title": "Welcome to Fruit Shop - Fresh Fruits Online",
    "page.apple.title": "Fresh Apple - Fruit Shop",
    "page.banana.title": "Fresh Banana - Fruit Shop",
    "page.lemon.title": "Fresh Lemon - Fruit Shop",
    "page.basket.title": "Shopping Basket - Fruit Shop",
    "page.checkout.title": "Checkout - Fruit Shop",

    // Header navigation
    "nav.view.products": "View Products",
    "nav.view.basket": "View shopping basket",

    // Main page
    "main.products.title": "Products",
    "product.apple.link": "Go to Apple",
    "product.banana.link": "Go to Banana",
    "product.lemon.link": "Go to Lemon",

    // Product pages
    "product.apple.name": "Apple",
    "product.banana.name": "Banana",
    "product.lemon.name": "Lemon",
    "product.apple.description": "Keeps the doctor away (unless you throw it at them).",
    "product.banana.description": "High in potassium and perfect for smoothies.",
    "product.lemon.description": "Sour and refreshing, great for drinks and cooking.",
    "button.add.to.basket": "Add to Basket",

    // Basket page
    "basket.title": "Your Shopping Basket",
    "basket.empty": "No products in basket.",
    "button.clear.basket": "Clear Basket",
    "button.checkout": "Checkout",

    // Footer
    "footer.by": "By Tim Lolkema",

    // Language selector
    "language.selector.label": "Language:",
    "language.english": "English",
    "language.japanese": "日本語",
  },

  ja: {
    // Page titles
    "page.home.title": "フルーツショップへようこそ - 新鮮なフルーツをオンラインで",
    "page.apple.title": "新鮮なりんご - フルーツショップ",
    "page.banana.title": "新鮮なバナナ - フルーツショップ",
    "page.lemon.title": "新鮮なレモン - フルーツショップ",
    "page.basket.title": "ショッピングバスケット - フルーツショップ",
    "page.checkout.title": "チェックアウト - フルーツショップ",

    // Header navigation
    "nav.view.products": "商品を見る",
    "nav.view.basket": "ショッピングバスケットを見る",

    // Main page
    "main.products.title": "商品",
    "product.apple.link": "りんごページへ",
    "product.banana.link": "バナナページへ",
    "product.lemon.link": "レモンページへ",

    // Product pages
    "product.apple.name": "りんご",
    "product.banana.name": "バナナ",
    "product.lemon.name": "レモン",
    "product.apple.description": "医者を遠ざける（投げつけない限り）。",
    "product.banana.description": "カリウムが豊富でスムージーに最適。",
    "product.lemon.description": "酸っぱくて爽やか、飲み物や料理に最適。",
    "button.add.to.basket": "バスケットに追加",

    // Basket page
    "basket.title": "あなたのショッピングバスケット",
    "basket.empty": "バスケットに商品がありません。",
    "button.clear.basket": "バスケットをクリア",
    "button.checkout": "チェックアウト",

    // Footer
    "footer.by": "ティム・ロルケマによる",

    // Language selector
    "language.selector.label": "言語：",
    "language.english": "English",
    "language.japanese": "日本語",
  },
};

// Current language state
let currentLanguage = localStorage.getItem("language") || "en";

// Translation function
function t(key) {
  return TRANSLATIONS[currentLanguage][key] || key;
}

// Set language function
function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updatePageContent();
    updateDocumentTitle();
  }
}

// Update all translatable content on the page
function updatePageContent() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  // Update language selector
  const languageSelector = document.getElementById("languageSelector");
  if (languageSelector) {
    languageSelector.value = currentLanguage;
  }
}

// Update document title
function updateDocumentTitle() {
  const titleElement = document.querySelector("[data-i18n-title]");
  if (titleElement) {
    const key = titleElement.getAttribute("data-i18n-title");
    document.title = t(key);
  }
}

// Initialize language on page load
function initializeLanguage() {
  updatePageContent();
  updateDocumentTitle();
}

// Add event listener for language selector
function setupLanguageSelector() {
  const languageSelector = document.getElementById("languageSelector");
  if (languageSelector) {
    languageSelector.addEventListener("change", function () {
      setLanguage(this.value);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState !== "loading") {
  initializeLanguage();
  setupLanguageSelector();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeLanguage();
    setupLanguageSelector();
  });
}
