const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const prices = document.querySelectorAll(".price");
    let total = 0;
    prices.forEach((ele)=>{
        total += Number(ele.textContent)
    })
    const table = document.querySelector("table")
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = "Total is:- " +total;
    tr.append(td); 
    table.append(tr);
};  

getSumBtn.addEventListener("click", getSum);

