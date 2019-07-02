let setCssVariables = (property, value) => {
  document.querySelector(':root').style.setProperty(property, value);
}

export default setCssVariables;