let userInp=document.querySelector("#date");
userInp.max=new Date().toISOString().split("T")[0];

let btn=document.querySelector("button");
let rest= document.querySelector("#result");

btn.onclick=
    (e)=>{
        let bDate = new Date(userInp.value);

        if (isNaN(bDate)) {
            console.error("Invalid date selected!");
            return;
        }
    
        let d1 = bDate.getDate();
        let m1 = bDate.getMonth() + 1;
        let y1 = bDate.getFullYear();
    
        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();
    
        let d3, m3, y3;
        y3 = y2 - y1;
    
        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }
    
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }
    
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
    rest.innerHTML= `Your Age is: <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days`;
    };


let getDaysInMonth=(y,m)=>{
 return new Date(y,m,0).getDate();
}