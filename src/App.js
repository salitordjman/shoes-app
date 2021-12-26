import React, { useState } from "react";
import Item from "./components/Item";
import "./App.css";
import UpdateModal from "./components/UpdateModel";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [localData, setLocalData] = useState([
    {
      id: 11111,
      brand: "Nike",
      model: "120-3df-21",
      price: "389",
      url: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 222656547222,
      brand: "Vans",
      model: "268-hg5-62",
      price: "220",
      url: "https://images.pexels.com/photos/4570768/pexels-photo-4570768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 33337474574733,
      brand: "Adidas",
      model: "657-8yf-44",
      price: "517",
      url: "https://images.pexels.com/photos/1892629/pexels-photo-1892629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4444444545455444,
      brand: "Prada",
      model: "674-d5w-61",
      price: "624",
      url: "https://images.pexels.com/photos/1507351/pexels-photo-1507351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [idUpdate, setIdUpdate] = useState();

  const toggleBtn = () => {
    setIsAddOpen(!isAddOpen);
  };
  const addNewBtn = (objadd) => {
    console.log(objadd);
    const id = uuidv4();
    console.log(id);
    const newObj = { [id]: id, ...objadd };
    console.log(newObj);
    setLocalData([...localData, newObj]);
  };
  const searchShoes = (search) => {
    const newArray = localData.filter((item) => {
      return item.brand[0].toLowerCase() === search.target.value.toLowerCase();
    });
    setLocalData(newArray);
  };
  const deleteShoes = (id) => {
    const newArray = localData.filter((item) => {
      return item.id !== id;
    });
    setLocalData(newArray);
  };
  const toggleUpdateModal = (id) => {
    setIdUpdate(id);
    setIsUpdateModalOpen(!isUpdateModalOpen);
    console.log(isUpdateModalOpen);
  };
  const updateShoes = (objUpdate) => {
    console.log(idUpdate);
    console.log(objUpdate);
    console.log(localData);
    const newArray = localData.map((item) => {
      if (item.id === idUpdate) {
        item.brand = objUpdate.brand;
        item.model = objUpdate.model;
        item.price = objUpdate.price;
        item.url = objUpdate.url;
      }
      return item;
    });
    setLocalData(newArray);
  };

  return (
    <>
      <div className="logo">My Store</div>
      <header>
        <div className="add-btns">
          <button onClick={toggleBtn}>
            <span aria-label="cart" role="img">
              🛒
            </span>
            add
          </button>
        </div>
        <div className="search-modal">
          <input
            onChange={searchShoes}
            placeholder="Search-By-Brand"
            type="text"
          />
          <span aria-label="search" role="img">
            🔎
          </span>
        </div>
      </header>
      <div className="main-container">
        <div className="shoess-list">
          {localData.map((product) => {
            return (
              <Item
                id={product.id}
                deleteItem={deleteShoes}
                toggleUpdateModalA={toggleUpdateModal}
                key={product.id}
                type={product.brand}
                img={product.url}
                model={product.model}
                price={product.price}
              />
            );
          })}
        </div>
        <div className="update-modal">
          {isUpdateModalOpen && <UpdateModal updateShoes1={updateShoes} />}
        </div>
        <div className="add-new">
          {isAddOpen && <UpdateModal updateShoes1={addNewBtn} />}
        </div>
      </div>
    </>
  );
};

export default App;
