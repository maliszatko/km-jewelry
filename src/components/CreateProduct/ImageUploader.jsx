import React from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "./StyledComponents";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@material-ui/core/";

export function ImageUploader(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    props.list(imageList);
  };

  const iconStyle = {
      width: "30px",
      height: "30px",
  }

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <Button onClick={onImageUpload} {...dragProps} type="button">
              <AddIcon style={iconStyle}/>
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll} type="button">
              <DeleteIcon style={iconStyle}/>
            </Button>
            <Grid style={{ textAlign: "center" }} container>
              {imageList.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                  <div
                    key={index}
                    className="image-item"
                    style={{ margin: "3% 5%"}}
                  >
                    <img
                      src={image["data_url"]}
                      alt=""
                      width="100"
                      height="100"
                      style={{border: "solid 1px black"}}
                    />
                    <div className="image-item__btn-wrapper">
                      <Button onClick={() => onImageUpdate(index)}>
                        Zmień
                      </Button>
                      <Button onClick={() => onImageRemove(index)}>Usuń</Button>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUploader;
