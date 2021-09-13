import React, {useState} from 'react';
import './ListItem.scss';
import ListItemStatic from "./ListItemStatic";
import ListItemEdit from "./ListItemEdit";

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