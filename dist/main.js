/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactInfo = {
  workHours: "10:00 - 23:00",
  telephone: "+3712848484",
  location: "1659 Stockert Hollow Road Seattle Washington"
};

const displayContact = content => {
  // Clear class name
  content.className = "";
  displayContactInfo(content); // Create form and map wrapper

  const formMapWrapper = document.createElement("div");
  formMapWrapper.classList.add("form-map-wrapper");
  displayForm(formMapWrapper);
  content.appendChild(formMapWrapper);
};

const createInformationItem = (title, information) => {
  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("info-item-wrapper");
  const titleEl = document.createElement("p");
  titleEl.classList.add("info-item-title");
  titleEl.innerText = title;
  const informationEl = document.createElement("p");
  informationEl.classList.add("info-item-info");
  informationEl.innerText = information;
  itemWrapper.append(titleEl, informationEl);
  return itemWrapper;
};

const displayContactInfo = content => {
  // Information title
  const infoTitle = document.createElement("h1");
  infoTitle.classList.add("contact-info-title");
  infoTitle.innerText = "Information";
  content.appendChild(infoTitle); // Contact Information

  const contactInfoWrapper = document.createElement("div");
  contactInfoWrapper.classList.add("contact-info-wrapper");
  const workHourEl = createInformationItem("Work Hours", contactInfo.workHours);
  const telephoneEl = createInformationItem("Telephone", contactInfo.telephone);
  const locationEl = createInformationItem("Location", contactInfo.location);
  contactInfoWrapper.append(workHourEl, telephoneEl, locationEl);
  content.appendChild(contactInfoWrapper);
};

const displayForm = formMapWrapper => {
  const formWrapper = document.createElement("div");
  const formTitle = document.createElement("h1");
  formTitle.innerText = "Contact Us";
  formWrapper.appendChild(formTitle);
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  const ul1 = document.createElement("ul");
  ul1.classList.add("form-group");
  ul1.innerHTML = "\n    <li>\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\">\n    </li>\n    <li>\n        <label for=\"email\">E-mail:</label>\n        <input type=\"email\" id=\"email\" name=\"email\">\n    </li> \n    ";
  const ul2 = document.createElement("ul");
  ul2.innerHTML = "\n    <li>\n        <label for=\"msg\">Message:</label>\n        <textarea name=\"msg\" id=\"msg\" cols=\"30\" rows=\"10\"></textarea>\n    </li>\n    <li class=\"btn-wrapper\">\n        <button type=\"submit\">Submit Your Message</button>\n    </li>\n    ";
  form.append(ul1, ul2);
  formWrapper.append(form);
  formMapWrapper.appendChild(formWrapper);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const restaurantName = "Cofffe N' Dine";

const displayHome = content => {
  content.className = "content-home";
  displayTitle(content);
  displayInfo(content);
};

const displayTitle = content => {
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";
  const title = document.createElement("h1");
  title.innerText = restaurantName;
  const titleLine = document.createElement("hr");
  titleLine.classList.add("title-line"); // Append all children

  titleContainer.append(title, titleLine);
  content.appendChild(titleContainer);
};

const displayInfo = content => {
  const infoContainerEl = document.createElement("div");
  infoContainerEl.className = "info-container";
  content.appendChild(infoContainerEl);
  const pStreet = document.createElement("p");
  pStreet.innerText = "1659 Stockert Hollow Road Seattle Washington";
  const pCity = document.createElement("p");
  pCity.innerText = "Seattle";
  const pState = document.createElement("p");
  pState.innerText = "Washington";
  const infoLine = document.createElement("hr");
  const pWantOrder = document.createElement("p");
  pWantOrder.innerText = "Want To Order?";
  const orderBtn = document.createElement("button");
  orderBtn.innerText = "Order";
  infoContainerEl.append(pStreet, pCity, pState, infoLine, pWantOrder, orderBtn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_fruit_salad_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/fruit_salad.jpg */ "./src/assets/images/fruit_salad.jpg");
/* harmony import */ var _assets_images_latte_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/latte.jpg */ "./src/assets/images/latte.jpg");
/* harmony import */ var _assets_images_orange_smoothie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/orange_smoothie.jpg */ "./src/assets/images/orange_smoothie.jpg");
/* harmony import */ var _assets_images_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/ramen.jpg */ "./src/assets/images/ramen.jpg");
/* harmony import */ var _assets_images_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/spaghetti.jpg */ "./src/assets/images/spaghetti.jpg");




 // Seperate arrays for food and drink items

let foodItemarr = [];
let drinkItemArr = [];

class MenuItem {
  constructor(name, description, price, img, isFood) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
    this.isFood = isFood;
  }

  addToArr() {
    this.isFood ? foodItemarr.push(this) : drinkItemArr.push(this);
  }

}

const createMenuItems = () => {
  // Clear arrays on function init
  foodItemarr = [];
  drinkItemArr = []; // Create menu item objects and add them to an array

  new MenuItem("Spaghetti And MeatBalls", "Meatballs with homemade spaghetti topped with a bolognese sauce and basil", "$5.98", _assets_images_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_4__["default"], true).addToArr();
  new MenuItem("Ramen", "Japanese noodle dish served with boiled eggs and shrimp", "$3.78", _assets_images_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__["default"], true).addToArr();
  new MenuItem("Fruit salad", "Peach and fig salad with a slight drizzle of vinegar, topped with cherry tomatoes", "$4.56", _assets_images_fruit_salad_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], true).addToArr();
  new MenuItem("Caffè latte", "Milk coffee made from shots of espresso and steamed milk", "$1.29", _assets_images_latte_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], false).addToArr();
  new MenuItem("Orange smoothie", "Orange smoothie with carrot, lemon and pineapple juice", "$1.78", _assets_images_orange_smoothie_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], false).addToArr();
};

const displayMenu = content => {
  // Clear class name
  content.className = "";
  createMenuItems();
  const foodTitle = document.createElement("h1");
  foodTitle.innerText = "Main Courses";
  const foodItemContainer = document.createElement("div");
  foodItemContainer.className = "food-item-container";
  foodItemContainer.append(foodTitle);
  content.append(foodItemContainer); // Display food items

  displayItems(foodItemContainer, foodItemarr); // Display drinks

  const drinkTitle = document.createElement("h1");
  drinkTitle.innerText = "Drinks";
  foodItemContainer.appendChild(drinkTitle);
  displayItems(foodItemContainer, drinkItemArr);
};

const displayItems = (foodItemContainer, arr) => {
  // Display all elements in food array
  arr.forEach(element => {
    const item = document.createElement("div");
    item.className = "food-item"; // Name and description

    const nameDescWrapper = document.createElement("div");
    const itemName = document.createElement("p");
    itemName.innerText = element.name;
    const itemDesc = document.createElement("p");
    itemDesc.innerText = element.description;
    nameDescWrapper.append(itemName, itemDesc); // Price

    const price = document.createElement("div");
    price.className = "item-price";
    const priceVal = document.createTextNode(element.price);
    price.appendChild(priceVal); // Image

    const foodIcon = new Image();
    foodIcon.src = element.img;
    foodIcon.classList.add("food-icon"); // Append all

    item.append(nameDescWrapper, price, foodIcon);
    foodItemContainer.appendChild(item);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create navbar
const displayNav = menuItems => {
  const navEl = document.createElement("nav");
  const ulEl = document.createElement("ul");
  navEl.appendChild(ulEl); // Create li text nodes for every nav menu array item

  menuItems.forEach(element => {
    const liEl = document.createElement("li");
    liEl.appendChild(document.createTextNode(element));
    liEl.classList.add("nav-element");
    ulEl.appendChild(liEl);
  });
  document.body.appendChild(navEl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNav);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --c-alpha: #FFD3AB;\n  --c-beta: rgba(255, 231, 158, 1);\n  --c-beta-faded: rgba(255, 231, 158, 0.6);\n  --c-gamma: #2597B3;\n  --c-alpha-text: #000000;\n  --c-beta-text: #FFFFFF;\n  --nav-height: 4.5rem;\n  --c-form-border: #000000;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#content, nav {\n  font-family: 'Amatic SC', cursive;\n  animation: fadeIn 1.5s;\n  background-color: var(--c-beta);\n}\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n#content > h1 {\n  text-align: center;\n  margin: 0;\n  padding: 64px;\n}\nnav {\n  background-color: var(--c-alpha);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--nav-height);\n}\nnav > ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 2rem;\n}\nnav > ul > li {\n  font-size: 2.5rem;\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: .2rem;\n  text-decoration-color: var(--c-alpha);\n  transition: .3s;\n  font-weight: 700;\n}\nnav > ul > li:hover {\n  text-decoration-color: var(--c-gamma);\n}\n.content-home {\n  background-color: var(--c-beta);\n  overflow: hidden;\n  height: calc(100vh - var(--nav-height));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.content-home > img {\n  background-color: var(--c-beta-faded);\n  position: absolute;\n  top: -100%;\n  right: -100%;\n  bottom: -100%;\n  left: -100%;\n  margin: auto;\n  opacity: 0.65;\n}\n.title-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.title-container > h1 {\n  font-size: 8rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.title-line {\n  border: 2px solid var(--c-alpha-text);\n  width: 80vw;\n}\n.info-container {\n  border-radius: 5px;\n  margin-top: 1rem;\n  background-color: var(--c-alpha);\n  padding: 2rem;\n  width: 70%;\n  text-align: center;\n}\n.info-container > p {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 1rem;\n}\n.info-container > hr {\n  border: 1px solid var(--c-alpha-text);\n  width: 80%;\n}\n.info-container > button {\n  color: var(--c-beta-text);\n  background-color: var(--c-gamma);\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 3rem;\n  font-size: 2rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.food-item-container {\n  display: grid;\n  text-align: center;\n  margin-left: 8%;\n  margin-right: 8%;\n  padding-bottom: 8%;\n  row-gap: 2rem;\n}\n.food-item-container > h1 {\n  font-size: 6rem;\n  font-weight: 700;\n}\n.food-item {\n  width: 80%;\n  text-align: left;\n  display: grid;\n  grid-template-columns: 50% 20% 20%;\n  column-gap: 3.5rem;\n}\n/*Target first child div container*/\n.food-item > div:first-of-type > p {\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0.5rem;\n}\n.food-item > div:first-of-type > p:last-of-type {\n  font-size: 1.5rem;\n}\n.item-price {\n  background-color: var(--c-gamma);\n  height: 30px;\n  width: 150px;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 5px;\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: var(--c-beta-text);\n}\n.food-icon {\n  height: 200px;\n  width: 200px;\n  border-radius: 100px;\n}\n.contact-info-title {\n  font-size: 6rem;\n}\n.contact-info-wrapper {\n  display: flex;\n}\n.info-item-wrapper {\n  font-weight: 700;\n  font-size: 2.5rem;\n  flex: 1 1 0px;\n  text-align: center;\n  margin-left: 8%;\n  margin-right: 8%;\n}\n.info-item-title {\n  font-weight: 700;\n  font-size: 4rem;\n}\n.form-map-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  padding-bottom: 5rem;\n  margin-left: 5%;\n  margin-right: 5%;\n\n}\n.form-group {\n  display: flex;\n  gap: 1.5rem;\n}\n.form-group input {\n  border-bottom: 3px solid var(--c-form-border);\n}\n.form-group li {\n  flex: 1 1 0px;\n}\nform > ul > li {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nform label {\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\nform textarea {\n  resize: none;\n  border: 3px solid var(--c-form-border);\n  border-radius: 5px;\n}\nform input, textarea {\n  border: none;\n  background-color: rgba(255, 231, 158, 1);\n  font-size: 1.7rem;\n  font-weight: 700;\n\n}\nform input:focus, textarea:focus {\n  outline: none;\n}\nform input {\n  padding: .3rem;\n}\n.form-map-wrapper > div > h1 {\n  font-size: 4rem;\n  text-align: center;\n}\n.btn-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n.btn-wrapper > button {\n  padding: .4rem 2.5rem;\n  background-color: var(--c-gamma);\n  color: var(--c-beta-text);\n  font-weight: 700;\n  font-size: 1.5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n#map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/styles/style.css"],"names":[],"mappings":"AACA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,wCAAwC;EACxC,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,oBAAoB;EACpB,wBAAwB;AAC1B;AACA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,0JAA0J;AAC5J;AACA;EACE,iCAAiC;EACjC,sBAAsB;EACtB,+BAA+B;AACjC;AACA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,aAAa;AACf;AACA;EACE,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,0BAA0B;EAC1B,4BAA4B;EAC5B,qCAAqC;EACrC,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,uCAAuC;EACvC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,qCAAqC;EACrC,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,gCAAgC;EAChC,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;AACA,mCAAmC;AACnC;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;;AAElB;AACA;EACE,aAAa;EACb,WAAW;AACb;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,wCAAwC;EACxC,iBAAiB;EACjB,gBAAgB;;AAElB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,gCAAgC;EAChC,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');\n:root {\n  --c-alpha: #FFD3AB;\n  --c-beta: rgba(255, 231, 158, 1);\n  --c-beta-faded: rgba(255, 231, 158, 0.6);\n  --c-gamma: #2597B3;\n  --c-alpha-text: #000000;\n  --c-beta-text: #FFFFFF;\n  --nav-height: 4.5rem;\n  --c-form-border: #000000;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#content, nav {\n  font-family: 'Amatic SC', cursive;\n  animation: fadeIn 1.5s;\n  background-color: var(--c-beta);\n}\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n#content > h1 {\n  text-align: center;\n  margin: 0;\n  padding: 64px;\n}\nnav {\n  background-color: var(--c-alpha);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--nav-height);\n}\nnav > ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 2rem;\n}\nnav > ul > li {\n  font-size: 2.5rem;\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: .2rem;\n  text-decoration-color: var(--c-alpha);\n  transition: .3s;\n  font-weight: 700;\n}\nnav > ul > li:hover {\n  text-decoration-color: var(--c-gamma);\n}\n.content-home {\n  background-color: var(--c-beta);\n  overflow: hidden;\n  height: calc(100vh - var(--nav-height));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.content-home > img {\n  background-color: var(--c-beta-faded);\n  position: absolute;\n  top: -100%;\n  right: -100%;\n  bottom: -100%;\n  left: -100%;\n  margin: auto;\n  opacity: 0.65;\n}\n.title-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.title-container > h1 {\n  font-size: 8rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.title-line {\n  border: 2px solid var(--c-alpha-text);\n  width: 80vw;\n}\n.info-container {\n  border-radius: 5px;\n  margin-top: 1rem;\n  background-color: var(--c-alpha);\n  padding: 2rem;\n  width: 70%;\n  text-align: center;\n}\n.info-container > p {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 1rem;\n}\n.info-container > hr {\n  border: 1px solid var(--c-alpha-text);\n  width: 80%;\n}\n.info-container > button {\n  color: var(--c-beta-text);\n  background-color: var(--c-gamma);\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 3rem;\n  font-size: 2rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.food-item-container {\n  display: grid;\n  text-align: center;\n  margin-left: 8%;\n  margin-right: 8%;\n  padding-bottom: 8%;\n  row-gap: 2rem;\n}\n.food-item-container > h1 {\n  font-size: 6rem;\n  font-weight: 700;\n}\n.food-item {\n  width: 80%;\n  text-align: left;\n  display: grid;\n  grid-template-columns: 50% 20% 20%;\n  column-gap: 3.5rem;\n}\n/*Target first child div container*/\n.food-item > div:first-of-type > p {\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0.5rem;\n}\n.food-item > div:first-of-type > p:last-of-type {\n  font-size: 1.5rem;\n}\n.item-price {\n  background-color: var(--c-gamma);\n  height: 30px;\n  width: 150px;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 5px;\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: var(--c-beta-text);\n}\n.food-icon {\n  height: 200px;\n  width: 200px;\n  border-radius: 100px;\n}\n.contact-info-title {\n  font-size: 6rem;\n}\n.contact-info-wrapper {\n  display: flex;\n}\n.info-item-wrapper {\n  font-weight: 700;\n  font-size: 2.5rem;\n  flex: 1 1 0px;\n  text-align: center;\n  margin-left: 8%;\n  margin-right: 8%;\n}\n.info-item-title {\n  font-weight: 700;\n  font-size: 4rem;\n}\n.form-map-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  padding-bottom: 5rem;\n  margin-left: 5%;\n  margin-right: 5%;\n\n}\n.form-group {\n  display: flex;\n  gap: 1.5rem;\n}\n.form-group input {\n  border-bottom: 3px solid var(--c-form-border);\n}\n.form-group li {\n  flex: 1 1 0px;\n}\nform > ul > li {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nform label {\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\nform textarea {\n  resize: none;\n  border: 3px solid var(--c-form-border);\n  border-radius: 5px;\n}\nform input, textarea {\n  border: none;\n  background-color: rgba(255, 231, 158, 1);\n  font-size: 1.7rem;\n  font-weight: 700;\n\n}\nform input:focus, textarea:focus {\n  outline: none;\n}\nform input {\n  padding: .3rem;\n}\n.form-map-wrapper > div > h1 {\n  font-size: 4rem;\n  text-align: center;\n}\n.btn-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n.btn-wrapper > button {\n  padding: .4rem 2.5rem;\n  background-color: var(--c-gamma);\n  color: var(--c-beta-text);\n  font-weight: 700;\n  font-size: 1.5rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n#map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/fruit_salad.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/fruit_salad.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/810b0da6baced7dfed12011d99bb3fcb.jpg");

/***/ }),

/***/ "./src/assets/images/latte.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/latte.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33afd287185fc3420a4244a32eef13e4.jpg");

/***/ }),

/***/ "./src/assets/images/orange_smoothie.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/orange_smoothie.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30a84070b5de7b4fb05a22de3b8d8607.jpg");

/***/ }),

/***/ "./src/assets/images/ramen.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/ramen.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ea701b28887ff1d9225f5760c7eb9b75.jpg");

/***/ }),

/***/ "./src/assets/images/spaghetti.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/spaghetti.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b1b2687b0349a53f29178b627fa6b865.jpg");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");





 // Creates container element that will hold all page content

function getContent() {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  return element;
} // on load display home page and navbar


window.addEventListener("load", () => {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_2__["default"])(["Home", "Menu", "Contact"]); // Create an instance of content element

  const contentEl = getContent();
  document.body.appendChild(contentEl); // On init display home page

  (0,_modules_home__WEBPACK_IMPORTED_MODULE_3__["default"])(contentEl); // Add event listeners for navbar list items

  displayModule(contentEl);
});

const displayModule = contentEl => {
  // Get all li elements
  const liEls = document.querySelectorAll(".nav-element");

  for (let i = 0; i < liEls.length; i++) {
    liEls[i].addEventListener("click", function (e) {
      switch (e.target.innerHTML) {
        case "Home":
          clearContent(contentEl);
          (0,_modules_home__WEBPACK_IMPORTED_MODULE_3__["default"])(contentEl);
          break;

        case "Menu":
          clearContent(contentEl);
          (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__["default"])(contentEl);
          break;

        case "Contact":
          clearContent(contentEl);
          (0,_modules_contact__WEBPACK_IMPORTED_MODULE_5__["default"])(contentEl);
          break;
      }
    });
  }
};

const clearContent = contentEl => {
  contentEl.innerHTML = "";
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsa0dBQWtHLG1CQUFtQixTQUFTLHVCQUF1QixxQ0FBcUMsNkNBQTZDLHVCQUF1Qiw0QkFBNEIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsR0FBRyxRQUFRLG1DQUFtQyxnQ0FBZ0MsMkJBQTJCLG9CQUFvQixHQUFHLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLHdCQUF3QixHQUFHLFFBQVEsdUtBQXVLLEdBQUcsaUJBQWlCLHNDQUFzQywyQkFBMkIsb0NBQW9DLEdBQUcscUJBQXFCLFNBQVMsYUFBYSxXQUFXLGFBQWEsR0FBRyxpQkFBaUIsdUJBQXVCLGNBQWMsa0JBQWtCLEdBQUcsT0FBTyxxQ0FBcUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsWUFBWSwwQkFBMEIsZUFBZSxjQUFjLGtCQUFrQixjQUFjLEdBQUcsaUJBQWlCLHNCQUFzQixvQkFBb0IsK0JBQStCLGlDQUFpQywwQ0FBMEMsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QiwwQ0FBMEMsR0FBRyxpQkFBaUIsb0NBQW9DLHFCQUFxQiw0Q0FBNEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLEdBQUcsdUJBQXVCLDBDQUEwQyx1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLGdCQUFnQixpQkFBaUIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IscUJBQXFCLDBCQUEwQixHQUFHLGVBQWUsMENBQTBDLGdCQUFnQixHQUFHLG1CQUFtQix1QkFBdUIscUJBQXFCLHFDQUFxQyxrQkFBa0IsZUFBZSx1QkFBdUIsR0FBRyx1QkFBdUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsR0FBRyx3QkFBd0IsMENBQTBDLGVBQWUsR0FBRyw0QkFBNEIsOEJBQThCLHFDQUFxQyxpQkFBaUIsdUJBQXVCLHlCQUF5QixvQkFBb0IscUJBQXFCLG9CQUFvQixHQUFHLHdCQUF3QixrQkFBa0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGtCQUFrQixHQUFHLDZCQUE2QixvQkFBb0IscUJBQXFCLEdBQUcsY0FBYyxlQUFlLHFCQUFxQixrQkFBa0IsdUNBQXVDLHVCQUF1QixHQUFHLDRFQUE0RSxxQkFBcUIsb0JBQW9CLG1CQUFtQixHQUFHLG1EQUFtRCxzQkFBc0IsR0FBRyxlQUFlLHFDQUFxQyxpQkFBaUIsaUJBQWlCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHFCQUFxQixzQkFBc0IsOEJBQThCLEdBQUcsY0FBYyxrQkFBa0IsaUJBQWlCLHlCQUF5QixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsc0JBQXNCLHFCQUFxQixzQkFBc0Isa0JBQWtCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsb0JBQW9CLHFCQUFxQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLHlCQUF5QixvQkFBb0IscUJBQXFCLEtBQUssZUFBZSxrQkFBa0IsZ0JBQWdCLEdBQUcscUJBQXFCLGtEQUFrRCxHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixlQUFlLDBCQUEwQixlQUFlLGNBQWMsR0FBRyxjQUFjLDhCQUE4QixzQkFBc0IscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQiwyQ0FBMkMsdUJBQXVCLEdBQUcsd0JBQXdCLGlCQUFpQiw2Q0FBNkMsc0JBQXNCLHFCQUFxQixLQUFLLG9DQUFvQyxrQkFBa0IsR0FBRyxjQUFjLG1CQUFtQixHQUFHLGdDQUFnQyxvQkFBb0IsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLHlCQUF5QiwwQkFBMEIscUNBQXFDLDhCQUE4QixxQkFBcUIsc0JBQXNCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsUUFBUSx1QkFBdUIsV0FBVyxjQUFjLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNwamE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsaUVBQWUscUJBQXVCLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7QUNBN0YsaUVBQWUscUJBQXVCLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7QUNBN0YsaUVBQWUscUJBQXVCLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7QUNBN0YsaUVBQWUscUJBQXVCLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7QUNBN0YsaUVBQWUscUJBQXVCLHVEQUF1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0M3RixNQUFrRjtBQUNsRixNQUF3RTtBQUN4RSxNQUErRTtBQUMvRSxNQUFrRztBQUNsRyxNQUEyRjtBQUMzRixNQUEyRjtBQUMzRixNQUEwRjtBQUMxRjtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix3RkFBbUI7QUFDL0Msd0JBQXdCLHFHQUFhOztBQUVyQyx1QkFBdUIsMEZBQWE7QUFDcEM7QUFDQSxpQkFBaUIsa0ZBQU07QUFDdkIsNkJBQTZCLHlGQUFrQjs7QUFFL0MsYUFBYSw2RkFBRyxDQUFDLDZFQUFPOzs7O0FBSW9DO0FBQzVELE9BQU8saUVBQWUsNkVBQU8sSUFBSSxvRkFBYyxHQUFHLG9GQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJbUQ7QUFDM0UsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU00sVUFBVCxHQUFzQjtFQUNwQixNQUFNaEIsT0FBTyxHQUFHL0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBRUE4RCxPQUFPLENBQUN6QyxZQUFSLENBQXFCLElBQXJCLEVBQTJCLFNBQTNCO0VBRUEsT0FBT3lDLE9BQVA7QUFDRCxFQUVEOzs7QUFDQWlCLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtFQUNwQ1Isd0RBQVUsQ0FBQyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLENBQUQsQ0FBVixDQURvQyxDQUdwQzs7RUFDQSxNQUFNUyxTQUFTLEdBQUdILFVBQVUsRUFBNUI7RUFFQS9FLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY3pFLFdBQWQsQ0FBMEI2RSxTQUExQixFQU5vQyxDQVFwQzs7RUFDQXZELHlEQUFXLENBQUN1RCxTQUFELENBQVgsQ0FUb0MsQ0FVcEM7O0VBQ0FDLGFBQWEsQ0FBQ0QsU0FBRCxDQUFiO0FBQ0QsQ0FaRDs7QUFjQSxNQUFNQyxhQUFhLEdBQUlELFNBQUQsSUFBZTtFQUNuQztFQUNBLE1BQU1FLEtBQUssR0FBR3BGLFFBQVEsQ0FBQ3FGLGdCQUFULENBQTBCLGNBQTFCLENBQWQ7O0VBRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixLQUFLLENBQUNHLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0lBQ25DRixLQUFLLENBQUNFLENBQUQsQ0FBTCxDQUFTTCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVTyxDQUFWLEVBQWE7TUFFNUMsUUFBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNqRSxTQUFoQjtRQUNFLEtBQUssTUFBTDtVQUNFa0UsWUFBWSxDQUFDUixTQUFELENBQVo7VUFDQXZELHlEQUFXLENBQUN1RCxTQUFELENBQVg7VUFDRjs7UUFDQSxLQUFLLE1BQUw7VUFDRVEsWUFBWSxDQUFDUixTQUFELENBQVo7VUFDQTFCLHlEQUFXLENBQUMwQixTQUFELENBQVg7VUFDRjs7UUFDQSxLQUFLLFNBQUw7VUFDRVEsWUFBWSxDQUFDUixTQUFELENBQVo7VUFDQXZGLDREQUFjLENBQUN1RixTQUFELENBQWQ7VUFDRjtNQVpGO0lBY0gsQ0FoQkQ7RUFpQkg7QUFDRixDQXZCRDs7QUF5QkEsTUFBTVEsWUFBWSxHQUFJUixTQUFELElBQWU7RUFDbENBLFNBQVMsQ0FBQzFELFNBQVYsR0FBc0IsRUFBdEI7QUFFRCxDQUhELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9mcnVpdF9zYWxhZC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF0dGUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL29yYW5nZV9zbW9vdGhpZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcmFtZW4uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaW1hZ2VzL3NwYWdoZXR0aS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8zNDJmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz9iYzQ2Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0SW5mbyA9IHtcbiAgICB3b3JrSG91cnM6IFwiMTA6MDAgLSAyMzowMFwiLFxuICAgIHRlbGVwaG9uZTogXCIrMzcxMjg0ODQ4NFwiLFxuICAgIGxvY2F0aW9uOiBcIjE2NTkgU3RvY2tlcnQgSG9sbG93IFJvYWQgU2VhdHRsZSBXYXNoaW5ndG9uXCIsXG59XG5cbmNvbnN0IGRpc3BsYXlDb250YWN0ID0gKGNvbnRlbnQpID0+IHtcblxuICAgIC8vIENsZWFyIGNsYXNzIG5hbWVcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgXG4gICAgZGlzcGxheUNvbnRhY3RJbmZvKGNvbnRlbnQpO1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gYW5kIG1hcCB3cmFwcGVyXG4gICAgY29uc3QgZm9ybU1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1NYXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLW1hcC13cmFwcGVyXCIpO1xuICAgIGRpc3BsYXlGb3JtKGZvcm1NYXBXcmFwcGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1NYXBXcmFwcGVyKTtcbn1cblxuY29uc3QgY3JlYXRlSW5mb3JtYXRpb25JdGVtID0gKHRpdGxlLCBpbmZvcm1hdGlvbikgPT4ge1xuICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5mby1pdGVtLXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVFbC5jbGFzc0xpc3QuYWRkKFwiaW5mby1pdGVtLXRpdGxlXCIpO1xuICAgIHRpdGxlRWwuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBjb25zdCBpbmZvcm1hdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW5mb3JtYXRpb25FbC5jbGFzc0xpc3QuYWRkKFwiaW5mby1pdGVtLWluZm9cIik7XG4gICAgaW5mb3JtYXRpb25FbC5pbm5lclRleHQgPSBpbmZvcm1hdGlvbjtcblxuICAgIGl0ZW1XcmFwcGVyLmFwcGVuZCh0aXRsZUVsLCBpbmZvcm1hdGlvbkVsKTtcbiAgICByZXR1cm4gaXRlbVdyYXBwZXI7XG5cbn1cblxuY29uc3QgZGlzcGxheUNvbnRhY3RJbmZvID0gKGNvbnRlbnQpID0+IHtcbiAgICAvLyBJbmZvcm1hdGlvbiB0aXRsZVxuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mby10aXRsZVwiKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJUZXh0ID0gXCJJbmZvcm1hdGlvblwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcblxuICAgIC8vIENvbnRhY3QgSW5mb3JtYXRpb25cbiAgICBjb25zdCBjb250YWN0SW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RJbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvLXdyYXBwZXJcIik7XG4gICAgXG4gICAgY29uc3Qgd29ya0hvdXJFbCA9IGNyZWF0ZUluZm9ybWF0aW9uSXRlbShcIldvcmsgSG91cnNcIiwgY29udGFjdEluZm8ud29ya0hvdXJzKTtcbiAgICBjb25zdCB0ZWxlcGhvbmVFbCA9IGNyZWF0ZUluZm9ybWF0aW9uSXRlbShcIlRlbGVwaG9uZVwiLCBjb250YWN0SW5mby50ZWxlcGhvbmUpO1xuICAgIGNvbnN0IGxvY2F0aW9uRWwgPSBjcmVhdGVJbmZvcm1hdGlvbkl0ZW0oXCJMb2NhdGlvblwiLCBjb250YWN0SW5mby5sb2NhdGlvbik7XG5cbiAgICBjb250YWN0SW5mb1dyYXBwZXIuYXBwZW5kKHdvcmtIb3VyRWwsIHRlbGVwaG9uZUVsLCBsb2NhdGlvbkVsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvV3JhcHBlcik7XG59XG5cbmNvbnN0IGRpc3BsYXlGb3JtID0gKGZvcm1NYXBXcmFwcGVyKSA9PiB7XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcblxuICAgIGNvbnN0IHVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bDEuY2xhc3NMaXN0LmFkZChcImZvcm0tZ3JvdXBcIik7XG4gICAgdWwxLmlubmVySFRNTCA9IGBcbiAgICA8bGk+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8L2xpPiBcbiAgICBgXG5cbiAgICBjb25zdCB1bDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwyLmlubmVySFRNTCA9IGBcbiAgICA8bGk+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtc2dcIj5NZXNzYWdlOjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibXNnXCIgaWQ9XCJtc2dcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzPVwiYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0IFlvdXIgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICAgYFxuICAgIGZvcm0uYXBwZW5kKHVsMSwgdWwyKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmQoZm9ybSk7XG5cbiAgICBmb3JtTWFwV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtV3JhcHBlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250YWN0OyIsImNvbnN0IHJlc3RhdXJhbnROYW1lID0gXCJDb2ZmZmUgTicgRGluZVwiO1xuXG5jb25zdCBkaXNwbGF5SG9tZSA9IChjb250ZW50KSA9PiB7XG5cbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudC1ob21lXCI7XG4gICAgZGlzcGxheVRpdGxlKGNvbnRlbnQpO1xuICAgIGRpc3BsYXlJbmZvKGNvbnRlbnQpO1xufVxuXG5jb25zdCBkaXNwbGF5VGl0bGUgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWNvbnRhaW5lclwiXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSByZXN0YXVyYW50TmFtZTtcblxuICAgIGNvbnN0IHRpdGxlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICB0aXRsZUxpbmUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxpbmVcIik7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGNoaWxkcmVuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlLCB0aXRsZUxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xufVxuXG5jb25zdCBkaXNwbGF5SW5mbyA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvQ29udGFpbmVyRWwuY2xhc3NOYW1lID0gXCJpbmZvLWNvbnRhaW5lclwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lckVsKTtcblxuICAgIGNvbnN0IHBTdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwU3RyZWV0LmlubmVyVGV4dCA9IFwiMTY1OSBTdG9ja2VydCBIb2xsb3cgUm9hZCBTZWF0dGxlIFdhc2hpbmd0b25cIjtcbiAgICBcbiAgICBjb25zdCBwQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBDaXR5LmlubmVyVGV4dCA9IFwiU2VhdHRsZVwiO1xuXG4gICAgY29uc3QgcFN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcFN0YXRlLmlubmVyVGV4dCA9IFwiV2FzaGluZ3RvblwiO1xuXG4gICAgY29uc3QgaW5mb0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgXG4gICAgY29uc3QgcFdhbnRPcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBXYW50T3JkZXIuaW5uZXJUZXh0ID0gXCJXYW50IFRvIE9yZGVyP1wiO1xuXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG9yZGVyQnRuLmlubmVyVGV4dCA9IFwiT3JkZXJcIjtcblxuICAgIGluZm9Db250YWluZXJFbC5hcHBlbmQocFN0cmVldCwgcENpdHksIHBTdGF0ZSwgaW5mb0xpbmUsIHBXYW50T3JkZXIsIG9yZGVyQnRuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWU7IiwiaW1wb3J0IEZydWl0U2FsYWQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvZnJ1aXRfc2FsYWQuanBnXCI7XG5pbXBvcnQgTGF0dGUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvbGF0dGUuanBnXCI7XG5pbXBvcnQgT3JhbmdlU21vb3RoaWUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvb3JhbmdlX3Ntb290aGllLmpwZ1wiO1xuaW1wb3J0IFJhbWVuIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3JhbWVuLmpwZ1wiO1xuaW1wb3J0IFNwYWdoZXR0aSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9zcGFnaGV0dGkuanBnXCI7XG5cbi8vIFNlcGVyYXRlIGFycmF5cyBmb3IgZm9vZCBhbmQgZHJpbmsgaXRlbXNcbmxldCBmb29kSXRlbWFyciA9IFtdO1xubGV0IGRyaW5rSXRlbUFyciA9IFtdO1xuY2xhc3MgTWVudUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1nLCBpc0Zvb2QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICB0aGlzLmlzRm9vZCA9IGlzRm9vZDtcbiAgICB9XG4gICAgYWRkVG9BcnIoKSB7XG4gICAgICAgIHRoaXMuaXNGb29kID8gZm9vZEl0ZW1hcnIucHVzaCh0aGlzKSA6IGRyaW5rSXRlbUFyci5wdXNoKHRoaXMpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTWVudUl0ZW1zID0gKCkgPT4ge1xuXG4gICAgLy8gQ2xlYXIgYXJyYXlzIG9uIGZ1bmN0aW9uIGluaXRcbiAgICBmb29kSXRlbWFyciA9IFtdO1xuICAgIGRyaW5rSXRlbUFyciA9IFtdO1xuXG4gICAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBvYmplY3RzIGFuZCBhZGQgdGhlbSB0byBhbiBhcnJheVxuICAgIG5ldyBNZW51SXRlbShcIlNwYWdoZXR0aSBBbmQgTWVhdEJhbGxzXCIsIFxuICAgICAgICAgICAgICAgIFwiTWVhdGJhbGxzIHdpdGggaG9tZW1hZGUgc3BhZ2hldHRpIHRvcHBlZCB3aXRoIGEgYm9sb2duZXNlIHNhdWNlIGFuZCBiYXNpbFwiLFxuICAgICAgICAgICAgICAgIFwiJDUuOThcIixcbiAgICAgICAgICAgICAgICBTcGFnaGV0dGksXG4gICAgICAgICAgICAgICAgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYWRkVG9BcnIoKTtcbiAgICBuZXcgTWVudUl0ZW0oXCJSYW1lblwiLCBcbiAgICAgICAgICAgICAgICBcIkphcGFuZXNlIG5vb2RsZSBkaXNoIHNlcnZlZCB3aXRoIGJvaWxlZCBlZ2dzIGFuZCBzaHJpbXBcIixcbiAgICAgICAgICAgICAgICBcIiQzLjc4XCIsXG4gICAgICAgICAgICAgICAgUmFtZW4sXG4gICAgICAgICAgICAgICAgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYWRkVG9BcnIoKTtcbiAgICBuZXcgTWVudUl0ZW0oXCJGcnVpdCBzYWxhZFwiLCBcbiAgICAgICAgICAgICAgICBcIlBlYWNoIGFuZCBmaWcgc2FsYWQgd2l0aCBhIHNsaWdodCBkcml6emxlIG9mIHZpbmVnYXIsIHRvcHBlZCB3aXRoIGNoZXJyeSB0b21hdG9lc1wiLFxuICAgICAgICAgICAgICAgIFwiJDQuNTZcIixcbiAgICAgICAgICAgICAgICBGcnVpdFNhbGFkLFxuICAgICAgICAgICAgICAgIHRydWUpXG4gICAgICAgICAgICAgICAgLmFkZFRvQXJyKCk7XG4gICAgbmV3IE1lbnVJdGVtKFwiQ2FmZsOoIGxhdHRlXCIsIFxuICAgICAgICAgICAgICAgIFwiTWlsayBjb2ZmZWUgbWFkZSBmcm9tIHNob3RzIG9mIGVzcHJlc3NvIGFuZCBzdGVhbWVkIG1pbGtcIixcbiAgICAgICAgICAgICAgICBcIiQxLjI5XCIsXG4gICAgICAgICAgICAgICAgTGF0dGUsXG4gICAgICAgICAgICAgICAgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmFkZFRvQXJyKCk7XG4gICAgbmV3IE1lbnVJdGVtKFwiT3JhbmdlIHNtb290aGllXCIsIFxuICAgICAgICAgICAgICAgIFwiT3JhbmdlIHNtb290aGllIHdpdGggY2Fycm90LCBsZW1vbiBhbmQgcGluZWFwcGxlIGp1aWNlXCIsXG4gICAgICAgICAgICAgICAgXCIkMS43OFwiLFxuICAgICAgICAgICAgICAgIE9yYW5nZVNtb290aGllLFxuICAgICAgICAgICAgICAgIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hZGRUb0FycigpO1xuICAgIFxufVxuXG5jb25zdCBkaXNwbGF5TWVudSA9IChjb250ZW50KSA9PiB7XG5cbiAgICAvLyBDbGVhciBjbGFzcyBuYW1lXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgY3JlYXRlTWVudUl0ZW1zKCk7XG5cbiAgICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZm9vZFRpdGxlLmlubmVyVGV4dCA9IFwiTWFpbiBDb3Vyc2VzXCI7XG5cbiAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZEl0ZW1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb29kLWl0ZW0tY29udGFpbmVyXCI7XG5cbiAgICBmb29kSXRlbUNvbnRhaW5lci5hcHBlbmQoZm9vZFRpdGxlKTtcblxuXG4gICAgY29udGVudC5hcHBlbmQoZm9vZEl0ZW1Db250YWluZXIpO1xuXG4gICAgLy8gRGlzcGxheSBmb29kIGl0ZW1zXG4gICAgZGlzcGxheUl0ZW1zKGZvb2RJdGVtQ29udGFpbmVyLCBmb29kSXRlbWFycik7XG4gICAgLy8gRGlzcGxheSBkcmlua3NcbiAgICBjb25zdCBkcmlua1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGRyaW5rVGl0bGUuaW5uZXJUZXh0ID0gXCJEcmlua3NcIjtcbiAgICBmb29kSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua1RpdGxlKTtcbiAgICBkaXNwbGF5SXRlbXMoZm9vZEl0ZW1Db250YWluZXIsIGRyaW5rSXRlbUFycik7XG59XG5cbmNvbnN0IGRpc3BsYXlJdGVtcyA9IChmb29kSXRlbUNvbnRhaW5lciwgYXJyKSA9PiB7XG4gICAgICAgIC8vIERpc3BsYXkgYWxsIGVsZW1lbnRzIGluIGZvb2QgYXJyYXlcbiAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJmb29kLWl0ZW1cIjtcbiAgICBcbiAgICAgICAgICAgIC8vIE5hbWUgYW5kIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBjb25zdCBuYW1lRGVzY1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IGVsZW1lbnQubmFtZTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBpdGVtRGVzYy5pbm5lclRleHQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgIFxuICAgICAgICAgICAgbmFtZURlc2NXcmFwcGVyLmFwcGVuZChpdGVtTmFtZSwgaXRlbURlc2MpO1xuICAgIFxuICAgICAgICAgICAgLy8gUHJpY2VcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByaWNlLmNsYXNzTmFtZSA9IFwiaXRlbS1wcmljZVwiO1xuICAgICAgICAgICAgY29uc3QgcHJpY2VWYWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50LnByaWNlKTtcbiAgICAgICAgICAgIHByaWNlLmFwcGVuZENoaWxkKHByaWNlVmFsKTtcbiAgICBcbiAgICAgICAgICAgIC8vIEltYWdlXG4gICAgICAgICAgICBjb25zdCBmb29kSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgZm9vZEljb24uc3JjID0gZWxlbWVudC5pbWc7XG4gICAgICAgICAgICBmb29kSWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pY29uXCIpO1xuICAgIFxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbFxuICAgICAgICAgICAgaXRlbS5hcHBlbmQobmFtZURlc2NXcmFwcGVyLCBwcmljZSwgZm9vZEljb24pO1xuICAgICAgICAgICAgZm9vZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgXG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51OyIsIi8vIENyZWF0ZSBuYXZiYXJcbmNvbnN0IGRpc3BsYXlOYXYgPSAobWVudUl0ZW1zKSA9PiB7XG4gICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBuYXZFbC5hcHBlbmRDaGlsZCh1bEVsKTtcblxuICAgIC8vIENyZWF0ZSBsaSB0ZXh0IG5vZGVzIGZvciBldmVyeSBuYXYgbWVudSBhcnJheSBpdGVtXG4gICAgbWVudUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudCkpO1xuICAgICAgICBsaUVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtZWxlbWVudFwiKTtcbiAgICAgICAgdWxFbC5hcHBlbmRDaGlsZChsaUVsKTtcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZFbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXY7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFD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O0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYy1hbHBoYTogI0ZGRDNBQjtcXG4gIC0tYy1iZXRhOiByZ2JhKDI1NSwgMjMxLCAxNTgsIDEpO1xcbiAgLS1jLWJldGEtZmFkZWQ6IHJnYmEoMjU1LCAyMzEsIDE1OCwgMC42KTtcXG4gIC0tYy1nYW1tYTogIzI1OTdCMztcXG4gIC0tYy1hbHBoYS10ZXh0OiAjMDAwMDAwO1xcbiAgLS1jLWJldGEtdGV4dDogI0ZGRkZGRjtcXG4gIC0tbmF2LWhlaWdodDogNC41cmVtO1xcbiAgLS1jLWZvcm0tYm9yZGVyOiAjMDAwMDAwO1xcbn1cXG5odG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcXG4gIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuI2NvbnRlbnQsIG5hdiB7XFxuICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1iZXRhKTtcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG4jY29udGVudCA+IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDY0cHg7XFxufVxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFscGhhKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1oZWlnaHQpO1xcbn1cXG5uYXYgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxubmF2ID4gdWwgPiBsaSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYy1hbHBoYSk7XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5uYXYgPiB1bCA+IGxpOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYy1nYW1tYSk7XFxufVxcbi5jb250ZW50LWhvbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1iZXRhKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXYtaGVpZ2h0KSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRlbnQtaG9tZSA+IGltZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJldGEtZmFkZWQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAwJTtcXG4gIHJpZ2h0OiAtMTAwJTtcXG4gIGJvdHRvbTogLTEwMCU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcbi50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aXRsZS1jb250YWluZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4udGl0bGUtbGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jLWFscGhhLXRleHQpO1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1hbHBoYSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluZm8tY29udGFpbmVyID4gcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi5pbmZvLWNvbnRhaW5lciA+IGhyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWMtYWxwaGEtdGV4dCk7XFxuICB3aWR0aDogODAlO1xcbn1cXG4uaW5mby1jb250YWluZXIgPiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWMtYmV0YS10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZ2FtbWEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9vZC1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDglO1xcbiAgbWFyZ2luLXJpZ2h0OiA4JTtcXG4gIHBhZGRpbmctYm90dG9tOiA4JTtcXG4gIHJvdy1nYXA6IDJyZW07XFxufVxcbi5mb29kLWl0ZW0tY29udGFpbmVyID4gaDEge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvb2QtaXRlbSB7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyMCUgMjAlO1xcbiAgY29sdW1uLWdhcDogMy41cmVtO1xcbn1cXG4vKlRhcmdldCBmaXJzdCBjaGlsZCBkaXYgY29udGFpbmVyKi9cXG4uZm9vZC1pdGVtID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuLmZvb2QtaXRlbSA+IGRpdjpmaXJzdC1vZi10eXBlID4gcDpsYXN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5pdGVtLXByaWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZ2FtbWEpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tYy1iZXRhLXRleHQpO1xcbn1cXG4uZm9vZC1pY29uIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuLmNvbnRhY3QtaW5mby10aXRsZSB7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcbi5jb250YWN0LWluZm8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5mby1pdGVtLXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZmxleDogMSAxIDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA4JTtcXG4gIG1hcmdpbi1yaWdodDogOCU7XFxufVxcbi5pbmZvLWl0ZW0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLmZvcm0tbWFwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxuXFxufVxcbi5mb3JtLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWMtZm9ybS1ib3JkZXIpO1xcbn1cXG4uZm9ybS1ncm91cCBsaSB7XFxuICBmbGV4OiAxIDEgMHB4O1xcbn1cXG5mb3JtID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogLjVyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5mb3JtIGxhYmVsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbmZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYy1mb3JtLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzEsIDE1OCwgMSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxufVxcbmZvcm0gaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogLjNyZW07XFxufVxcbi5mb3JtLW1hcC13cmFwcGVyID4gZGl2ID4gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnRuLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuLmJ0bi13cmFwcGVyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IC40cmVtIDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZ2FtbWEpO1xcbiAgY29sb3I6IHZhcigtLWMtYmV0YS10ZXh0KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI21hcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDBKQUEwSjtBQUM1SjtBQUNBO0VBQ0UsaUNBQWlD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UztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgLS1jLWFscGhhOiAjRkZEM0FCO1xcbiAgLS1jLWJldGE6IHJnYmEoMjU1LCAyMzEsIDE1OCwgMSk7XFxuICAtLWMtYmV0YS1mYWRlZDogcmdiYSgyNTUsIDIzMSwgMTU4LCAwLjYpO1xcbiAgLS1jLWdhbW1hOiAjMjU5N0IzO1xcbiAgLS1jLWFscGhhLXRleHQ6ICMwMDAwMDA7XFxuICAtLWMtYmV0YS10ZXh0OiAjRkZGRkZGO1xcbiAgLS1uYXYtaGVpZ2h0OiA0LjVyZW07XFxuICAtLWMtZm9ybS1ib3JkZXI6ICMwMDAwMDA7XFxufVxcbmh0bWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG4jY29udGVudCwgbmF2IHtcXG4gIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJldGEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcbiNjb250ZW50ID4gaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNjRweDtcXG59XFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtYWxwaGEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XFxufVxcbm5hdiA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5uYXYgPiB1bCA+IGxpIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IC4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jLWFscGhhKTtcXG4gIHRyYW5zaXRpb246IC4zcztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbm5hdiA+IHVsID4gbGk6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jLWdhbW1hKTtcXG59XFxuLmNvbnRlbnQtaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJldGEpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oZWlnaHQpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudC1ob21lID4gaW1nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtYmV0YS1mYWRlZCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDAlO1xcbiAgcmlnaHQ6IC0xMDAlO1xcbiAgYm90dG9tOiAtMTAwJTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpdGxlLWNvbnRhaW5lciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi50aXRsZS1saW5lIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWMtYWxwaGEtdGV4dCk7XFxuICB3aWR0aDogODB2dztcXG59XFxuLmluZm8tY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFscGhhKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogNzAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5mby1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuLmluZm8tY29udGFpbmVyID4gaHIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYy1hbHBoYS10ZXh0KTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5pbmZvLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tYy1iZXRhLXRleHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1nYW1tYSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb29kLWl0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogOCU7XFxuICBtYXJnaW4tcmlnaHQ6IDglO1xcbiAgcGFkZGluZy1ib3R0b206IDglO1xcbiAgcm93LWdhcDogMnJlbTtcXG59XFxuLmZvb2QtaXRlbS1jb250YWluZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9vZC1pdGVtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDIwJSAyMCU7XFxuICBjb2x1bW4tZ2FwOiAzLjVyZW07XFxufVxcbi8qVGFyZ2V0IGZpcnN0IGNoaWxkIGRpdiBjb250YWluZXIqL1xcbi5mb29kLWl0ZW0gPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG4uZm9vZC1pdGVtID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBwOmxhc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLml0ZW0tcHJpY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1nYW1tYSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jLWJldGEtdGV4dCk7XFxufVxcbi5mb29kLWljb24ge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG4uY29udGFjdC1pbmZvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuLmNvbnRhY3QtaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmZvLWl0ZW0td3JhcHBlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmbGV4OiAxIDEgMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDglO1xcbiAgbWFyZ2luLXJpZ2h0OiA4JTtcXG59XFxuLmluZm8taXRlbS10aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uZm9ybS1tYXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG5cXG59XFxuLmZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4uZm9ybS1ncm91cCBpbnB1dCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYy1mb3JtLWJvcmRlcik7XFxufVxcbi5mb3JtLWdyb3VwIGxpIHtcXG4gIGZsZXg6IDEgMSAwcHg7XFxufVxcbmZvcm0gPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jLWZvcm0tYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzMSwgMTU4LCAxKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG59XFxuZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAuM3JlbTtcXG59XFxuLmZvcm0tbWFwLXdyYXBwZXIgPiBkaXYgPiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idG4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG4uYnRuLXdyYXBwZXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogLjRyZW0gMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1nYW1tYSk7XFxuICBjb2xvcjogdmFyKC0tYy1iZXRhLXRleHQpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbWFwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvODEwYjBkYTZiYWNlZDdkZmVkMTIwMTFkOTliYjNmY2IuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvMzNhZmQyODcxODVmYzM0MjBhNDI0NGEzMmVlZjEzZTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvMzBhODQwNzBiNWRlN2I0ZmIwNWEyMmRlM2I4ZDg2MDcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZWE3MDFiMjg4ODdmZjFkOTIyNWY1NzYwYzdlYjliNzUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvYjFiMjY4N2IwMzQ5YTUzZjI5MTc4YjYyN2ZhNmI4NjUuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICAgZGlzcGxheU5hdiBmcm9tICcuL21vZHVsZXMvbmF2JztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuaW1wb3J0IGRpc3BsYXlDb250YWN0IGZyb20gJy4vbW9kdWxlcy9jb250YWN0JztcblxuLy8gQ3JlYXRlcyBjb250YWluZXIgZWxlbWVudCB0aGF0IHdpbGwgaG9sZCBhbGwgcGFnZSBjb250ZW50XG5mdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gb24gbG9hZCBkaXNwbGF5IGhvbWUgcGFnZSBhbmQgbmF2YmFyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBkaXNwbGF5TmF2KFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXSk7XG5cbiAgLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGNvbnRlbnQgZWxlbWVudFxuICBjb25zdCBjb250ZW50RWwgPSBnZXRDb250ZW50KClcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRFbCk7XG5cbiAgLy8gT24gaW5pdCBkaXNwbGF5IGhvbWUgcGFnZVxuICBkaXNwbGF5SG9tZShjb250ZW50RWwpO1xuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBuYXZiYXIgbGlzdCBpdGVtc1xuICBkaXNwbGF5TW9kdWxlKGNvbnRlbnRFbCk7XG59KVxuXG5jb25zdCBkaXNwbGF5TW9kdWxlID0gKGNvbnRlbnRFbCkgPT4ge1xuICAvLyBHZXQgYWxsIGxpIGVsZW1lbnRzXG4gIGNvbnN0IGxpRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtZWxlbWVudFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpRWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaUVsc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgIHN3aXRjaChlLnRhcmdldC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICAgIGNsZWFyQ29udGVudChjb250ZW50RWwpO1xuICAgICAgICAgICAgICBkaXNwbGF5SG9tZShjb250ZW50RWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgICAgICBjbGVhckNvbnRlbnQoY29udGVudEVsKTtcbiAgICAgICAgICAgICAgZGlzcGxheU1lbnUoY29udGVudEVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgY2xlYXJDb250ZW50KGNvbnRlbnRFbCk7XG4gICAgICAgICAgICAgIGRpc3BsYXlDb250YWN0KGNvbnRlbnRFbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9IChjb250ZW50RWwpID0+IHtcbiAgY29udGVudEVsLmlubmVySFRNTCA9IFwiXCI7XG4gIFxufVxuXG5cblxuXG4gICJdLCJuYW1lcyI6WyJjb250YWN0SW5mbyIsIndvcmtIb3VycyIsInRlbGVwaG9uZSIsImxvY2F0aW9uIiwiZGlzcGxheUNvbnRhY3QiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiZGlzcGxheUNvbnRhY3RJbmZvIiwiZm9ybU1hcFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5Rm9ybSIsImFwcGVuZENoaWxkIiwiY3JlYXRlSW5mb3JtYXRpb25JdGVtIiwidGl0bGUiLCJpbmZvcm1hdGlvbiIsIml0ZW1XcmFwcGVyIiwidGl0bGVFbCIsImlubmVyVGV4dCIsImluZm9ybWF0aW9uRWwiLCJhcHBlbmQiLCJpbmZvVGl0bGUiLCJjb250YWN0SW5mb1dyYXBwZXIiLCJ3b3JrSG91ckVsIiwidGVsZXBob25lRWwiLCJsb2NhdGlvbkVsIiwiZm9ybVdyYXBwZXIiLCJmb3JtVGl0bGUiLCJmb3JtIiwic2V0QXR0cmlidXRlIiwidWwxIiwiaW5uZXJIVE1MIiwidWwyIiwicmVzdGF1cmFudE5hbWUiLCJkaXNwbGF5SG9tZSIsImRpc3BsYXlUaXRsZSIsImRpc3BsYXlJbmZvIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZUxpbmUiLCJpbmZvQ29udGFpbmVyRWwiLCJwU3RyZWV0IiwicENpdHkiLCJwU3RhdGUiLCJpbmZvTGluZSIsInBXYW50T3JkZXIiLCJvcmRlckJ0biIsIkZydWl0U2FsYWQiLCJMYXR0ZSIsIk9yYW5nZVNtb290aGllIiwiUmFtZW4iLCJTcGFnaGV0dGkiLCJmb29kSXRlbWFyciIsImRyaW5rSXRlbUFyciIsIk1lbnVJdGVtIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltZyIsImlzRm9vZCIsImFkZFRvQXJyIiwicHVzaCIsImNyZWF0ZU1lbnVJdGVtcyIsImRpc3BsYXlNZW51IiwiZm9vZFRpdGxlIiwiZm9vZEl0ZW1Db250YWluZXIiLCJkaXNwbGF5SXRlbXMiLCJkcmlua1RpdGxlIiwiYXJyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtIiwibmFtZURlc2NXcmFwcGVyIiwiaXRlbU5hbWUiLCJpdGVtRGVzYyIsInByaWNlVmFsIiwiY3JlYXRlVGV4dE5vZGUiLCJmb29kSWNvbiIsIkltYWdlIiwic3JjIiwiZGlzcGxheU5hdiIsIm1lbnVJdGVtcyIsIm5hdkVsIiwidWxFbCIsImxpRWwiLCJib2R5IiwiZ2V0Q29udGVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250ZW50RWwiLCJkaXNwbGF5TW9kdWxlIiwibGlFbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJjbGVhckNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9