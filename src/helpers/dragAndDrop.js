import React from 'react';

// 1. Draggable element, on which we will use our library's methods, has to has a parent element.
// 2. If you have inner elements inside draggable elements use css 'pointer-events: none'
// on the children of the draggable element.
// 3. If you want to make some elements undraggable use id less then 0.

export const example = {
  currentDraggableID: null,

  dragItemStart: (e, id) => {
    if (id < 0) return;
    example.currentDraggableID = id;
    e.dataTransfer.setData('text/plain', id);
    e.target.parentElement.style.opacity = 0.01;
  },

  dragItemOver: (e, id) => {
    e.preventDefault();
  },

  dragItemEnter: (e, id) => {
    if (example.currentDraggableID === id) return;
    if (id < 0) return;
    const styledEl = e.currentTarget.parentElement.style;
    styledEl.transform = 'translate3d(5px, -5px, 0)';
    styledEl.opacity = 0.7;
  },

  dragItemLeave: (e, id) => {
    if (example.currentDraggableID === id) return;
    const styledEl = e.currentTarget.parentElement.style;
    styledEl.transform = null;
    styledEl.opacity = 1;
  },

  dragItemEnd: (e, id) => {
    e.target.parentElement.style.opacity = 1;
  },

  dragItemDrop: (e, id, linksArray, funcToChangeArrayState) => {
    const currElemID = id;
    if (currElemID < 0) return;
    const prevElemeID = e.dataTransfer.getData('text/plain');
    const styledEl = e.currentTarget.parentElement.style;
    styledEl.transform = null;
    styledEl.opacity = 1;
    [linksArray[currElemID], linksArray[prevElemeID]] = [linksArray[prevElemeID], linksArray[currElemID]];
    funcToChangeArrayState(linksArray);
  },
};

export const ExampleContext = React.createContext(
  example
);