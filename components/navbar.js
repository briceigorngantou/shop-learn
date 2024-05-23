import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../configs/appContext";

export default function Navbar() {
  let { cards } = useContext(AppContext);
  console.log("card:", cards);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/home">
          Mon Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/home">
                Produits
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/cart">
                  Mon Panier ({cards?.length || 0})
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
