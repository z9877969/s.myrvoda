import * as api from 'services/api';

import { useEffect, useRef, useState } from 'react';

import ItemsList from './ItemsList';
import PropTypes from 'prop-types';
import SendInfo from 'common/SendInfo/SendInfo';
import engine from 'images/spares/bridge-automation.png';
import s from './SparesBlock.module.css';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const SparesBlock = ({ path, name }) => {
  const match = useRouteMatch();
  const [spares, setSpares] = useState([]);
  const [activeSpare, setActiveSpare] = useState(null);

  // GET =======

  useEffect(() => {
    const fetchSpares = async () => {
      const spares = await api.getData(path);
      console.log(spares);
      setSpares(spares);
    };
    fetchSpares();
  }, [path]);

  // ADD =======

  const confirmAdd = ({ itemTitle, imgUrl, brends }) => {
    setActiveSpare({ itemTitle, imgUrl, brends });
  };

  useEffect(() => {
    // const addSpare = async () => {
    //   const newSpare = await api.saveItem(path, activeSpare);
    //   setSpares(prevSpares => [...prevSpares, newSpare]);
    // };
    // addSpare();
  }, [activeSpare, path]);

  // EDIT

  // const editData = data => {
  //   console.log(data);
  //   console.log(spares);
  //   setSpares(p => p.map(el => (el.id !== data.id ? el : { ...el, ...data })));
  // };

  const editData = (id, editedData) => {
    return api
      .editItemApi({ endpoint: match.url, item: editedData, id })
      .then(data => {
        setSpares(p =>
          p.map(el => (el.id !== data.id ? el : { ...el, ...data })),
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // useEffect(() => {
  //   const editSpare = async () => {
  //     const editedSpare = await api.editItem(path, activeSpare);
  //     setSpares(prevSpares =>
  //       prevSpares.map(spare =>
  //         spare.id === editedSpare.id ? editedSpare : spare,

  //       ),
  //     );
  //   };
  //   editSpare();
  // }, [activeSpare, path]);

  //ADD FORM ======================================================
  const [itemTitle, setItemTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  // const [brends, setBrends] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    // onSubmit({ itemTitle, imgUrl, brends });
    // confirmAdd({ itemTitle, imgUrl, brends });
    // const addSpare = async () => {
    try {
      const newSpare = await api.saveItem(path, {
        itemTitle,
        imgUrl,
        // brends: [], // {0: undefined}
      });
      setSpares(prevSpares => [...prevSpares, newSpare]);
      // };
      // addSpare();
      reset();
    } catch (error) {
      console.log(error.messgae);
    }
  };
  const reset = () => {
    setItemTitle('');
    setImgUrl('');
    // setBrends([]);
  };
  // =============================================================

  return (
    <div className={s.blockWrapper}>
      <h2 className={s.headTitle}>{name}</h2>
      <ItemsList items={spares} editData={editData} />

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={itemTitle}
          type="text"
          required
          onChange={e => setItemTitle(e.target.value)}
          placeholder="itemTitle"
        />
        <input
          ref={inputRef}
          value={imgUrl}
          type="text"
          required
          onChange={e => setImgUrl(e.target.value)}
          placeholder="imgUrl"
        />
        {/* <input
          ref={inputRef}
          value={brends}
          type="text"
          required
          onChange={e => setBrends(e.target.value)}
          placeholder="brends"
        /> */}
        {/* <button type="button" onClick={e => console.log(e.target.value)}>
          add to brends list
        </button> */}

        <button type="submit" text="Добавить">
          Добавить
        </button>
      </form>

      <SendInfo linkName="Палуба" linkPath="/" hideLink={false} />
    </div>
  );
};

SparesBlock.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SparesBlock;
