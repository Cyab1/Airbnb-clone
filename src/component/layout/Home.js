import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import "./Home.css";
import { listListing } from '../Actions/ListingActions'

const Home = () => {
  const dispatch = useDispatch();

  const listListing = useSelector((state) => state.listListingList);
  const { loading, error, listings } = listListing;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map(listings => <Card
            src={listings.img}
            title={listings.title}
            description={listings.description}
            price={listings.price}
          /> )}
          
        </div>
      )}
      { /*<div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          alt="Description of the image"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=72"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=72"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div>
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="$100/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="Penthouse in Sandton"
          description="Enjoy amazing sights in this stunning penthouse."
          price="R2500/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="3 Bedroom Flat in CapeTown"
          description="SuperHost with a stunning  view of the beachside in Capetown"
          price="R110/night"
        />
    </div>*/}
    </div>
  );
};

export default Home;
