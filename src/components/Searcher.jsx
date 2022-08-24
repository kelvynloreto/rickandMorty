import React from "react";
import { useForm } from "react-hook-form";


const Searcher = ({ setChangelocation,setCurrentPage }) => {
    const { register, handleSubmit } = useForm();


  const sumit= data =>{
    setChangelocation(data.search)
    setCurrentPage(1)
   }


  return (
    <form  onSubmit={handleSubmit(sumit)}>
      <input
        type="text"
        placeholder="Type a location id"
        className="text_area"
        {...register('search')}
      />
      <button className="input_icon">
          <box-icon
          name="search"
          animation="tada"
          color="#42b4ca"
          ></box-icon>
      </button>
    </form>
  );
};

export default Searcher;
