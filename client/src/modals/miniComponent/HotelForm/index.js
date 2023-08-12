import React, { useState } from "react";
import { Formik } from "formik";
import { create_hotel, update_hotel } from "../../../api/hotel";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../../store/global/globalReducer";
import { useSelector } from "react-redux";
import {getToken} from "../../../store/auth/authSelector"
import Loader from "../../../components/Loader"

import {
  TextField,
  Button,
  
 
} from "@mui/material";
import * as yup from "yup";
import "./hotelForm.css";

const HotelForm = (props) => {
  const { initialValues, modalType, getHotels, handleClose, rowData } = props;
  const[isLoading,setIsLoading] = useState(false)
  const token =useSelector(getToken)
  const[image,setImage] = useState("")
  const dispatch = useDispatch();
  const hotelSchema = yup.object().shape({
    hotelName: yup.string().required("required"),
    location: yup.string().required("required"),
    maxRoom: yup.number().required("required"),
    maxPerson: yup.number().required("required"),
    price: yup.number().required("required"),
   
  });

  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const  handleImageChange = async(e)=>{
 
    const file = e?.target?.files[0];
    const i = await base64(file);
    setImage(i)

  }

  const operationAdmin = async (row) => {
    try {
      console.log(row)
        setIsLoading(true)
      const response = modalType === "edit" ? await update_hotel(row,token) : await create_hotel(row,token);
      getHotels();
      handleClose();
      dispatch(
        setSnackbar({
          snackbar: {
            open: true,
            message: response?.data?.message,
            severity: "success",
          },
        })
        )
      } 
     catch (err) {
     

        dispatch(
          setSnackbar({
            snackbar: {
              open: true,
              message: err?.response?.data?.message,
              severity: "error",
            },
          })
          );
        
    }
    finally{
        setIsLoading(false)
    }
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    if (modalType === "add") {
      operationAdmin({...values,image});
     
    } else {
      operationAdmin({ ...values, _id: rowData?._id });
    }
    onSubmitProps.resetForm();
  };
  if(isLoading)
  {
    return <Loader/>
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={hotelSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="form-container">
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.hotelName}
            name="hotelName"
            error={Boolean(touched.hotelName) && Boolean(errors.hotelName)}
            helperText={touched.hotelName && errors.hotelName}
            required
            label="Hotel Name"
            className="form-textfield"
          />
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.location}
            name="location"
            error={Boolean(touched.location) && Boolean(errors.location)}
            helperText={touched.location && errors.location}
            required
            label="Location"
            className="form-textfield"

          />
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.maxRoom}
            name="maxRoom"
            error={Boolean(touched.maxRoom) && Boolean(errors.maxRoom)}
            helperText={touched.maxRoom && errors.maxRoom}
            required
            label="Maximum rooms"
            className="form-textfield"

          />
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.maxPerson}
            name="maxPerson"
            error={Boolean(touched.maxPerson) && Boolean(errors.maxPerson)}
            helperText={touched.maxPerson && errors.maxPerson}
            required
            label="Maximum Person In one Room"
            className="form-textfield"

          />
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.price}
            name="price"
            error={Boolean(touched.price) && Boolean(errors.price)}
            helperText={touched.price && errors.price}
            required
            label="Price"
            className="form-textfield"

          />
          <TextField
            
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.description}

            name="description"
            error={Boolean(touched.description) && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            required
            label="Description"
            className="form-textfield"

          />
          <input
            onBlur={handleBlur}
            onChange={handleImageChange}
           
            name="image"
            error={Boolean(touched.image) && Boolean(errors.image)}
            helperText={touched.image && errors.image}
            required
            
            type="file"
            className="form-textfield"

          />
        

          

          <Button type="submit" variant="contained">
            {modalType === "edit" ? "update" : "save"}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default HotelForm;
