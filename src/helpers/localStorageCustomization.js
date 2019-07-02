let setCustomizationLocalStorage = (value, property) => {
  const customizationObject = JSON.parse(localStorage.getItem('customization')) || {};
  Object.assign(customizationObject, { [property]: value });
  localStorage.setItem('customization', JSON.stringify(customizationObject));
  // console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--background-photo'));
};

export default setCustomizationLocalStorage;