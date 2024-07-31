import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "../SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 30 August . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b9179f06-212f-4069-8861-fd329ea0d3e6.jpg?im_w=720"
        location="Private room in center of Cape Town"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.75}
        price="R900 / night"
        total="R1650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/c82823cf-33f3-4261-8193-54ae7966983e.jpeg?im_w=720"
        location="Sandton, South Africa"
        title="City views"
        description="2 guest · 2.5 bedroom · 2 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.45}
        price="R1950 / night"
        total="R4100 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2382d233-c6ed-4b7a-a8eb-a76ccb63e0f0.jpg?im_w=720"
        location="Durban, South Africa"
        title="Beach and bay views"
        description="3 guest · 3 bedroom · 3 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.95}
        price="R800 / night"
        total="R2650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-577907266856058227/original/8143de64-4e3a-433e-8bc5-f333ef75fc1a.jpeg?im_w=720"
        location="Umhlanga, South Africa"
        title="Ocean and sea views"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.85}
        price="R1234 / night"
        total="R5650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/dfc844f7-5d46-45b9-b66f-605f722075e5.jpg?im_w=720"
        location="Dolphin Coast, South Africa"
        title="Ocean and sea views"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.5}
        price="R2118 / night"
        total="R5650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-508444762038865292/original/20b14fd3-1aee-4187-95fa-e7ec8ae4f152.jpeg?im_w=720"
        location="Umhlanga, South Africa"
        title="Ocean and sea views"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={4.9}
        price="R2118 / night"
        total="R5650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720"
        location="Eco Estate, South Africa"
        title="Ocean and sea views"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · Free parking"
        star={3.85}
        price="R1900 / night"
        total="R4650 total"
      />
    </div>
  );
};

export default SearchPage;
