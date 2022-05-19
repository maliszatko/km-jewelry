import { React, useState } from "react";
import { TextField, FormControl, MenuItem } from "@mui/material";
import { Form, Button } from "./StyledComponents";
import ImageUploader from "./ImageUploader";
import { push, ref as ref_database } from "firebase/database";
import db from "./firebase";
import { v4 as uuid } from "uuid";
import {
  getStorage,
  ref as ref_storage,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import {useMediaQuery} from "react-responsive";

function CreateNewProduct(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const textFieldStyle = {
    marginTop: "5%",
    textAlign: "left",
    marginBottom: "2%",
  }
  const [formValues, setValues] = useState({
    product: "",
    name: "",
    type: "",
    description: "",
    images: []
  });
  const storage = getStorage();

  function handleUpload(e) {
    e.preventDefault();
    const urlArray = [];
    for (let i = 0; i < formValues.images.length; i++) {
      let storageRef = ref_storage(
        storage,
        `images/${formValues.product}/${formValues.images[i].name}`
      );

      uploadBytes(storageRef, formValues.images[i]).then((snapshot) => {
        console.log("Uploaded file");
        getDownloadURL(storageRef).then(
          (url) => {
            urlArray.push(url);
            if (urlArray.length === formValues.images.length) {
              push(ref_database(db, `/${formValues.product}`), {
                id: uuid(),
                type: formValues.type,
                name: formValues.name,
                description: formValues.description,
                images: urlArray
              });
              props.isSubmitted(true)
            }
          },
          (error) => {
            console.log(error);
          }
        );
      });
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setValues({
      ...formValues,
      [name]: value
    });
  }
  function imageList(items) {
    setValues({
      ...formValues,
      images: items.map((item, index) => item.file)
    });
  }

  return (
    <div>
      <Form onSubmit={handleUpload}>
        <FormControl size="medium" sx={{ marginTop: isTabletOrMobile ? "10%" : "0%", width: isTabletOrMobile ? "60%" : "30%" }}>
          <TextField
            required
            name="product"
            value={formValues.product}
            onChange={handleChange}
            select // tell TextField to render select
            label="Produkt"
            sx={textFieldStyle}
            InputProps={{style: {fontSize: '1.25rem' }}} // font size of input text
            InputLabelProps={{style: {fontSize: '1.0rem'}}}
          >
            <MenuItem key={1} value="kolczyki" sx={{ fontSize: '1.25rem' }}>
              Kolczyki
            </MenuItem>
            <MenuItem key={2} value="naszyjniki" sx={{ fontSize: '1.25rem' }}>
              Naszyjniki
            </MenuItem>
            <MenuItem key={3} value="pierścionki" sx={{ fontSize: '1.25rem' }}>
              Pierścionki
            </MenuItem>
          </TextField>
          <TextField
            value={formValues.name}
            onChange={handleChange}
            required
            label="Nazwa produktu"
            name="name"
            sx={textFieldStyle}
            InputProps={{style: {fontSize: '1.25rem'}}} // font size of input text
            inputProps={{ maxLength: 35 }}
            InputLabelProps={{style: {fontSize: '1.0rem'}}}

          />
          <TextField
            name="type"
            value={formValues.type}
            onChange={handleChange}
            select // tell TextField to render select
            label="Typ"
            sx={textFieldStyle}
            InputProps={{style: {fontSize: '1.25rem' }}} // font size of input text
            InputLabelProps={{style: {fontSize: '1.0rem'}}}
          >
            <MenuItem key={1} value="gold" sx={{ fontSize: '1.25rem' }}>
              Złoto
            </MenuItem>
            <MenuItem key={2} value="silver" sx={{ fontSize: '1.25rem' }}>
              Srebro
            </MenuItem>
            <MenuItem key={3} value="" sx={{ fontSize: '1.25rem' }}>
              Żadne z powyższych
            </MenuItem>
          </TextField>
          <TextField
            name="description"
            required
            label="Opis produktu"
            onChange={handleChange}
            sx={textFieldStyle}
            InputProps={{style: {fontSize: '1.25rem' }}} // font size of input text
            InputLabelProps={{style: {fontSize: '1.0rem'}}}
            multiline
          />
          <ImageUploader list={imageList} />
          {formValues.name !== "" &&
          formValues.description !== "" &&
          formValues.images.length !== 0 ? (
            <Button
              type="submit"
              style={{
                justifyContent: "center",
                margin: "0 auto 5% auto",
                color: "green"
              }}
            >
              Dodaj produkt
            </Button>
          ) : (
            <Button
              disabled
              type="submit"
              style={{
                justifyContent: "center",
                margin: "0 auto 5% auto",
                color: "green"
              }}
            >
              Dodaj produkt
            </Button>
          )}
        </FormControl>
      </Form>
    </div>
  );
}

export default CreateNewProduct;
