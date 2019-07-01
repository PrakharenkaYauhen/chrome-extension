let setCustomizationLocalStorage = (value, property, cssVariable) => {
  console.log(value);
  const customizationObject = JSON.parse(localStorage.getItem('customization')) || {};
  const root = document.querySelector(':root');
  root.style.setProperty(cssVariable, value);
  Object.assign(customizationObject, { [property]: value });
  localStorage.setItem('customization', JSON.stringify(customizationObject));
};

export default setCustomizationLocalStorage;