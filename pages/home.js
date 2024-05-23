import React, { useState } from "react";
import CardProduct from "../components/cardProduct";
import "../public/bootstrap.css";
import Navbar from "../components/navbar";
import { Products } from "../constants/data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ margin: 20 }}>
        <h4>Liste des produits</h4>
      </div>
      <div className="container">
        <div class="row justify-content-evenly">
          {Products.map((item) => (
            <div class="col-6" key={item.id}>
              <CardProduct data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
