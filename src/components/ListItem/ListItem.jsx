import React, {useState} from 'react';
import ListItemStatic from "./ListItemStatic";
import ListItemEdit from "./ListItemEdit";
import './ListItem.scss';

const ListItem = (props) => {

  const { text, index, allList, setAllList } = props;
  const [checkEdit, setCheckEdit] = useState(false);

  const ListItem = {
    text: text,
    index: index,
    allList: allList,
    setAllList: setAllList,
    checkEdit: checkEdit,
    setCheckEdit: setCheckEdit
  };

  return (
    checkEdit ? <ListItemEdit ListItem={ListItem}/> : <ListItemStatic ListItem={ListItem}/>
  );
};

export default ListItem;
