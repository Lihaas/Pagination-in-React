import styles from "../../Stylesheet/Home/home.module.css"

export function PaginationFunc(currentPage,totalPage) {
    if (totalPage <= 5) {
        for (let i = 1; i <= 5; i++) {
          if (i == currentPage) {
            document.getElementById(i).className = styles["active"]
          } else {
            document.getElementById(i).className = styles["numb"];
          }
        }
      }else if(totalPage > 5 && currentPage === 1)
      {
          document.getElementById("1").className=styles["active"]
          document.getElementById("nextDate").style.display="block"
          document.getElementById("prevDate").style.display="none"
      }else if (totalPage > 5 && currentPage <= 3) {
          document.getElementById("nextDate").style.display="block"
          document.getElementById("prevDate").style.display="none"
          let length = 1
          for(let i=0;i<4;i++)
          {
              document.getElementsByName("index")[i].innerHTML=length;
              length++;
          }
        for (let i = 0; i < 5; i++) {      
          if(document.getElementsByName("index")[i].innerHTML===currentPage)
          {
              document.getElementsByName("index")[i].className=styles["active"]
          }else{
              document.getElementsByName("index")[i].className=styles["numb"]
          }
        }
      }else if(totalPage > 5 && currentPage >= totalPage-2)
      {
          document.getElementById("nextDate").style.display="none"
          document.getElementById("prevDate").style.display="block"
          let length=totalPage-3;
          for(let i=1;i<5;i++)
          {
              document.getElementsByName("index")[i].innerHTML=length;
              length++;
          }
          for(let i=0;i<5;i++)
          {
                  if(document.getElementsByName("index")[i].innerHTML===currentPage)
                  {
                      document.getElementsByName("index")[i].className=styles["active"]
                  }else{
                      document.getElementsByName("index")[i].className=styles["numb"]
                  }
          }
      }else{
          document.getElementById("nextDate").style.display="block"
          document.getElementById("prevDate").style.display="block"
          document.getElementById("prev").innerHTML=Number(currentPage)-1
          document.getElementById("next").innerHTML=Number(currentPage)+1
          document.getElementById("current").innerHTML=Number(currentPage)
      }
}