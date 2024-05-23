import React, { useContext } from "react";
import Navbar from "../../components/navbar";
import AppContext, { AppProvider } from "../../configs/appContext";

export default function Cart() {
  const { cards } = useContext(AppContext);
  return (
    <AppProvider>
      <div>
        <Navbar />
        <div className="container" style={{ margin: 20 }}>
          <h4>Mon panier</h4>
        </div>
        <div className="container">
          <div class="row justify-content-evenly">
            {cards?.map((item) => (
              <div class="container" key={item.id}>
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
