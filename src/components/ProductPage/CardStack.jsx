import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { PagesButtons, PageButton, Title } from "./StyledComponents";
import { Grid } from "@material-ui/core/";
import { getDatabase, ref as ref_database, child, get } from "firebase/database";

const CardStack = (props) => {
  const items = props.for;
  const [products, setProducts] = useState({
    "kolczyki": [],
    "naszyjniki": [],
    "pierścionki": []

  })
  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};
  const [imagesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const [currentImages, setCurrentImages] = useState([]);
  const [images, setImages] = useState([]);
  const numberofPages = Math.ceil(images.length / imagesPerPage);
  const pages = Array.from({ length: numberofPages }, (v, k) => k + 1);
  const prevPageNumber = useRef(pages.length);
  useEffect(() => {
    const dbRef = ref_database(getDatabase());
  get(child(dbRef, `/${items}`)).then((snapshot) => {
  if (snapshot.exists()) {
    setProducts({
      ...products,
      [items]: snapshotToArray(snapshot)
    })
  
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  }, []);
  useEffect(() => {
    setImages(products.[items])
  }, [products, items])
  useEffect(() => {
    setCurrentImages(images.slice(indexOfFirstImage, indexOfLastImage));
  }, [images, indexOfFirstImage, indexOfLastImage]);
  useEffect(() => {
    if (pages.length !== prevPageNumber) {
      setCurrentPage(1);
    }
  }, [pages.length]);
  function handlePageClick(event) {
    setCurrentPage(Number(event.target.value));
  }

  function handleFilterClick(event) {
    setCurrentImages(
      products.[items]
        .filter((value) => value.type === event.target.value)
        .slice(indexOfFirstImage, indexOfLastImage)
    );
    setImages(
      products.[items].filter((value) => value.type === event.target.value)
    );
  }
  function handleAllFilter() {
    setCurrentImages(products.[items].slice(indexOfFirstImage, indexOfLastImage));
    setImages(products.[items]);
  }
  return (
    <div style={{ marginTop: "6%" }}>
      <Title>Kolekcja {props.for.slice(0, -1)+"ów"}</Title>
      <PagesButtons>
        <PageButton active onClick={handleAllFilter}>
          Wszystko
        </PageButton>
        <PageButton active onClick={handleFilterClick} value="gold">
          Złoto
        </PageButton>
        <PageButton onClick={handleFilterClick} value="silver">
          Srebro
        </PageButton>
      </PagesButtons>
      <Grid style={{ textAlign: "center" }} container>
        {currentImages.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card id={card.id} pre={props.for} name={card.name} src={card.images[0]} key={index} />
            </Grid>
          );
        })}
      </Grid>
      {images.length > imagesPerPage ? (
        <PagesButtons>
          {pages.map((value, index) => {
            return index + 1 === currentPage ? (
              <PageButton key={index} disabled>
                {value}
              </PageButton>
            ) : (
              <PageButton key={index} onClick={handlePageClick} value={value}>
                {value}
              </PageButton>
            );
          })}
        </PagesButtons>
      ) : null}
    </div>
  );
};

export default CardStack;
