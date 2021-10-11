import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../Stylesheet/AddData/adddata.module.css";
const AddData = () => {
  const [length, setLength] = useState(1);
  const [data, setData] = useState([{}]);
//   const [submitData,setSubmitData] = useState([{}]);
  useEffect(() => {
    data.push({});
  }, [length]);
  const submit = () => {
      let submitData = []
      for(let i=1;i<=length;i++)
      {
        submitData.push({
            CategoryName : document.getElementById("category"+i).value,
            StoreName : document.getElementById("Store"+i).value,
            SerialNumber : document.getElementById("Serial"+i).value,
            ImageLink : document.getElementById("Image"+i).value,
            MetaKeywords : document.getElementById("Keywords"+i).value,
            Metadescription : document.getElementById("description"+i).value,
            Headline : document.getElementById("Headline"+i).value,
            Description : document.getElementById("Description"+i).value
        })
      }
      axios.post("http://localhost:3001/v1/dataUpload",submitData)
      .then((item)=>{
          alert("Item Submitted Succesfully");
      }).catch((error)=>{
          alert("error occurred")
          console.log(error);
      })
  }
  return (
    <>
      <div className={styles.AddData}>
        <div className={styles["add-data-section"]}>
          <h1>Add Data</h1>
        </div>
        <div className={styles["add-card"]}>
          {data.map((item, index) => {
            return (
              <>
                <h2>Item #{index+1}</h2>
                <form>
                  <label>Category Name</label>
                  <input type="text" id={"category"+(index+1)}/>
                  <label>Store Name</label>
                  <input type="text" id={"Store"+(index+1)}/>
                  <label>Serial Number</label>
                  <input type="text" id={"Serial"+(index+1)}/>
                  <label>Image Link</label>
                  <input type="text" id={"Image"+(index+1)}/>
                  <label>Meta Keywords</label>
                  <input type="text" id={"Keywords"+(index+1)}/>
                  <label>Meta description</label>
                  <input type="text" id={"description"+(index+1)}/>
                  <label>Headline</label>
                  <input type="text" id={"Headline"+(index+1)}/>
                  <label>Description</label>
                  <input type="text" id={"Description"+(index+1)}/>
                </form>
              </>
            );
          })}
        </div>
        <h2
          className={styles["new-item-heading"]}
          onClick={() => {
            setLength(length + 1);
          }}
        >
          + Add New Item
        </h2>
        <div className={styles["submit-btn-box"]}>
        <button className={styles["submit-btn"]} onClick={submit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default AddData;
