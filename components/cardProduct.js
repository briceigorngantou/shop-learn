import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import AppContext from "../configs/appContext";

export default function CardProduct({ data }) {
  const { id, title, image, price, altImage, content } = data;
  const { setCards } = useContext(AppContext);

  const handleAddToCard = () => {
    setCards((old) => [...old, data]);
  };
  return (
    <div class="card mb-3" style={{ maxWidth: 600 }}>
      <div class="row g-0">
        <div class="col-md-6">
          <Image src={image} alt={altImage} width={300} height={200} />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h6 class="card-title">{title}</h6>
            <p class="card-text">
              {content.length > 50 ? `${content.slice(0, 50)}...` : content}
            </p>
            <p class="card-text">
              <strong> Prix : {price} $</strong>
            </p>
            <div style={{ display: "flex" }}>
              <Link
                href={`/products/${id}`}
                className="btn btn-secondary"
                style={{ width: 100, height: 40, marginRight: 2 }}
              >
                Voir
              </Link>
              <button
                onClick={handleAddToCard}
                className="btn btn-primary"
                style={{ width: 150, height: 40 }}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
