import React, { useState } from "react";
import Card from "./components/Card";
import foodImage from "./assets/food.jpg";

function App() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(193);

  const Item = {
    author: "Kodluyoruz",
    name: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    desc: "Bu kremsi ve baharatlı avokado sosu, günlük tacolarınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  return (
    <div>
      <Card
        author={Item.author}
        name={Item.name}
        date={Item.date}
        foodImage={foodImage}
        desc={Item.desc}
        liked={liked}
        setLiked={setLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    </div>
  );
}

export default App;
