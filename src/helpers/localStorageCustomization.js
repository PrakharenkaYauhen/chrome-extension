let setCustomizationLocalStorage = (value, property, cssVariable) => {
  console.log(cssVariable);
  console.log(value);
  const customizationObject = JSON.parse(localStorage.getItem('customization')) || {};
  const root = document.querySelector(':root');
  root.style.setProperty(cssVariable, value);
  Object.assign(customizationObject, { [property]: value });
  localStorage.setItem('customization', JSON.stringify(customizationObject));
  console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--background-photo'));
};

export default setCustomizationLocalStorage;