import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../Stylesheet/Home/home.module.css"
import { PaginationFunc } from "./PaginationFunc";

const Home = () => {
  const [data,setData] = useState([{}])
  const [totalPage, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/getData?limit=1&page="+currentPage)
      .then((item) => {
        console.log(item.data.searchResult)
        setData(item.data.searchResult);
        setTotalPages(item.data.totalPages.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
      PaginationFunc(currentPage,totalPage)
  }, [currentPage]);
  return (
    <>
     <div className={styles.Home}>
       {
         data.map((item,index)=>{
           return(
             <div className={styles["data"]}>
             <h1>{item.StoreName}</h1>
             <img src={item.ImageLink} />
             <h2>Category Name: {item.CategoryName}</h2>
             <h2>Store Name: {item.StoreName}</h2>
             <p>{item.Description}</p>
             </div>
           )
         })
       }
       <h1>{data.StoreName}</h1>
        <div className={styles["pagination-box"]}>
          {totalPage <= 5 ? (
            <ul>
              <li
                id="1"
                onClick={(e) => {
                  setCurrentPage(e.target.id);
                }}
              >
                1
              </li>
              <li
                id="2"
                onClick={(e) => {
                  setCurrentPage(e.target.id);
                }}
              >
                2
              </li>
              <li
                id="3"
                onClick={(e) => {
                  setCurrentPage(e.target.id);
                }}
              >
                3
              </li>
              <li
                id="4"
                onClick={(e) => {
                  setCurrentPage(e.target.id);
                }}
              >
                4
              </li>
              <li
                id="5"
                onClick={(e) => {
                  setCurrentPage(e.target.id);
                }}
              >
                5
              </li>
            </ul>
          ) : (
            <ul>
              <li
                id="1"
                name="index"
                value="1"
                onClick={(e) => {
                  setCurrentPage(e.target.innerHTML);
                }}
              >
                1
              </li>
              <li className={styles["dots"]} id="prevDate" style={{display: "none"}}>...</li>
              <li
                id="prev"
                name="index"
                value="2"
                onClick={(e) => {
                  setCurrentPage(e.target.innerHTML);
                }}
              >
                2
              </li>
              <li
                id="current"
                name="index"
                value="3"
                onClick={(e) => {
                  setCurrentPage(e.target.innerHTML);
                }}
              >
                3
              </li>
              <li
                id="next"
                name="index"
                value="4"
                onClick={(e) => {
                  setCurrentPage(e.target.innerHTML);
                }}
              >
                4
              </li>
              <li className={styles["dots"]} id="nextDate">...</li>
              <li
                id="lastElement"
                name="index"
                value="5"
                onClick={(e) => {
                  setCurrentPage(e.target.innerHTML);
                }}
              >
                {totalPage}
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
