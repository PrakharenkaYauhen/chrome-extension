import React from 'react';
import LinksListCNT from '../containers/LinksListCNT';
// import styles from '../styles/Content.scss';
import '../styles/Content.scss';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class Content extends React.Component {
  onDragEnd = result => {
    const {
      linksArray
    } = this.props;

    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const newTaskIndex = linksArray;
    let previousObject = newTaskIndex.splice(source.index, 1)[0];
    newTaskIndex.splice(destination.index, 0, previousObject);
  };

  render() {
    return (
      <div className="content">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId='droppableField'>
            {provided => (
              <LinksListCNT innerRef={provided.innerRef} provided={provided} />
            )}
          </Droppable>
        </DragDropContext>
      </div >
    );
  }
}

export default Content;

// function Content({
//   linksArray,
//   onClickOpenModal,
//   deleteLink,
//   getChromeLocalStorage,
// }) {
//   // useEffect(getChromeLocalStorage, []);

//   let array = linksArray;

//   // let [array, setCards] = useState(linksArray);

//   // const moveCard = useCallback(
//   //   (dragIndex, hoverIndex) => {
//   //     const dragCard = array[dragIndex];
//   //     console.log(dragCard);
//   //     setCards(
//   //       update(cards, {
//   //         $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
//   //       }),
//   //     )
//   //   },
//   //   [array],
//   // )

//   const content = array.map(item => (
//     <ContentLink
//       key={item.text}
//       image={item.image}
//       text={item.text}
//       link={item.link}
//       deleteLink={deleteLink}
//       array={array}
//       moveCard={moveCard}
//     />
//   ));
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="content">
//         <div>
//           {content}
//           <ContentLink image={plus} onClickOpenModal={onClickOpenModal} />
//         </div>
//       </div>
//     </DndProvider>
//   );

// }

// Content.defaultProps = {
//   linksArray: [],
// };

// Content.propTypes = {
//   getChromeLocalStorage: PropTypes.func.isRequired,
//   linksArray: PropTypes.instanceOf(Array),
//   onClickOpenModal: PropTypes.func.isRequired,
// };

// export default Content;