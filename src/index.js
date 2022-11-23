var content = document.querySelector('#content');
var header = document.createElement('header');
var main = document.createElement('main');
var footer = document.createElement('footer');
content === null || content === void 0 ? void 0 : content.prepend(header);
content === null || content === void 0 ? void 0 : content.appendChild(footer);
content === null || content === void 0 ? void 0 : content.insertBefore(main, footer);
