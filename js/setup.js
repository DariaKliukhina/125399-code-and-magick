'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizardName = function(WIZARD_NAMES, WIZARD_SURNAMES) {
  var wizardNameIndex = Math.floor(Math.random() * WIZARD_NAMES.length);
  var wizardSurameIndex = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var wizardName = WIZARD_NAMES[wizardNameIndex];
  var wizardSurame = WIZARD_SURNAMES[wizardSurameIndex];
  return wizardName + wizardSurame;
};

var getCoatColor = function(COAT_COLORS) {
  var CoatColorIndex = Math.floor(Math.random() * COAT_COLORS.length);
  return COAT_COLORS[CoatColorIndex];
};

var getEyesColor = function(EYES_COLORS) {
  var EyesColorIndex = Math.floor(Math.random() * EYES_COLORS.length);
  return EYES_COLORS[EyesColorIndex];
};

var wizards = [
  {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getCoatColor(COAT_COLORS),
    eyesColor: getEyesColor(EYES_COLORS)
  },
  {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getCoatColor(COAT_COLORS),
    eyesColor: getEyesColor(EYES_COLORS)
  },
  {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getCoatColor(COAT_COLORS),
    eyesColor: getEyesColor(EYES_COLORS)
  },
  {
    name: getWizardName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getCoatColor(COAT_COLORS),
    eyesColor: getEyesColor(EYES_COLORS)
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardRender = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(wizardRender(wizards[i]))
  similarListElement.appendChild(fragment);
}

document.querySelector('.setup-similar').classList.remove('hidden');
