'use strict';

const adsSpam = document.querySelector('.ads');
const itemsBook = document.querySelectorAll('.item');
const heading = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const closureItems = propsList[2].querySelectorAll('.props__item');
const typeItems = document.querySelectorAll('.props__item_four');
const es6Items = propsList[5].querySelectorAll('.props__item');
const cloneHeading = heading[2].cloneNode();

adsSpam.remove();

itemsBook[4].before(itemsBook[0]);

heading[1].replaceWith(heading[3]);

propsList[4].before(heading[4]);

propsList[5].prepend(heading[1]);

typeItems[2].after(closureItems[3]);

propsList[2].append(es6Items[8], es6Items[9]);

propsList[3].replaceWith(propsList[4]);

heading[4].after(propsList[3]);

heading[2].replaceWith(cloneHeading);

cloneHeading.insertAdjacentHTML('afterbegin', 'This и прототипы объектов');
