import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { Products } from "../../constants/data";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = Products.find((item) => item.id == id);
  console.log(product);
  return (
    <div>
      <Navbar />
      <div className="container" style={{ width: 600 }}>
        <div className=" p-4">
          <div key={product.id} className="container">
            <h2>{product.title}</h2>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                style={{ width: "100%", height: 500 }}
              />
              <div className="mt-4 flex justify-between">
                <h4>Prix: {product.price}</h4>
                <div>
                  <h5 className="text-sm">{product.content}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
