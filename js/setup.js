'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizardName = function (wizardNames, wizardSurnames) {
  var wizardNameIndex = Math.floor(Math.random() * wizardNames.length);
  var wizardSurameIndex = Math.floor(Math.random() * wizardSurnames.length);
  var wizardName = wizardNames[wizardNameIndex];
  var wizardSurame = wizardSurnames[wizardSurameIndex];
  return wizardName + ' ' + wizardSurame;
};

var getParameterIndex = function (array) {
  var parameterIndex = Math.floor(Math.random() * array.length);
  return array[parameterIndex];
};

var getRandomWizard = function () {
  var randomWizard = {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getParameterIndex(COAT_COLORS),
    eyesColor: getParameterIndex(EYES_COLORS)
  };
  return randomWizard;
};

var wizards = [];

var getWizards = function () {
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push(getRandomWizard());
  }
};

getWizards();

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardRender = function (someWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = someWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = someWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = someWizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(wizardRender(wizards[i]));
  similarListElement.appendChild(fragment);
}

document.querySelector('.setup-similar').classList.remove('hidden');
