const object = [ 
    {
        "ProductID": 1,
        "ProductName": "Cheese",
        "Price": 100,
        "Quantity": 1
    },
    {
        "ProductID": 2,
        "ProductName": "Pen",
        "Price": 150,
        "Quantity": 2
    },
    {
        "ProductID": 3,
        "ProductName": "Butter",
        "Price": 100,
        "Quantity": 1
    },
    {
        "ProductID": 4,
        "ProductName": "Pencil",
        "Price": 10,
        "Quantity": 1
    }
   
]

// console.log(object[0])
var l = object.length;

function data(){

    var body = document.getElementsByTagName("body")[0];
  
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    tbl.setAttribute("id","tbl")
    var tblBody = document.createElement("tbody");
    var tblHead = document.createElement("thead");
    
    tbl.setAttribute("class","table table-striped")
    //row for table head
    var row = document.createElement("tr");

    //table head cells
    var headCell = document.createElement("th");
    var headCell1 = document.createElement("th");
    var headCell2 = document.createElement("th");
    var headCell3 = document.createElement("th");
    var headCell4 = document.createElement("th");

    //table head cell values
    var text = document.createTextNode("ProductID");
    var text1 = document.createTextNode("ProductName");
    var text2 = document.createTextNode("Price");
    var text3 = document.createTextNode("Quantity");
    var text4 = document.createTextNode("Add to Cart");

    //append head cell to row
    row.appendChild(headCell);
    row.appendChild(headCell1);
    row.appendChild(headCell2);
    row.appendChild(headCell3);
    row.appendChild(headCell4);

    //append text to head cell
    headCell.appendChild(text);
    headCell1.appendChild(text1);
    headCell2.appendChild(text2);
    headCell3.appendChild(text3);
    headCell4.appendChild(text4);


    var row2 = document.createElement("tr");
    var cellCart = document.createElement("td");
    var cartText = document.createTextNode("Cart Summary");
    cellCart.appendChild(cartText);
    row2.appendChild(cellCart);

    var clearCart = document.createElement("td");
    var clearText = document.createTextNode("Clear Cart");
    clearCart.appendChild(clearText);
    row2.appendChild(clearCart);


    cellCart.setAttribute("colspan","2.5");
    cellCart.setAttribute("id","cartDiv");
    cellCart.setAttribute("class","text-center");

    clearCart.setAttribute("colspan","2.5");
    clearCart.setAttribute("id","cartClr");
    clearCart.setAttribute("class","text-center");



    
    
    for(var i=0; i<l; i++){
        //row for table body
        var row1 = document.createElement("tr");
    
        //table cells for data td
        var cell = document.createElement("td");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        

        //text for table body cells
        var cellText = document.createTextNode (object[i].ProductID);
        var cellText1 = document.createTextNode(object[i].ProductName);
        var cellText2 = document.createTextNode(object[i].Price);
        var cellText3 = document.createTextNode(object[i].Quantity);
         
        
        //append ceell text to td cell
        cell.appendChild(cellText);
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        
        
        //append td cell to row1
        row1.appendChild(cell);
        row1.appendChild(cell1);
        row1.appendChild(cell2);
        row1.appendChild(cell3);
        
        
        //create one cell for add to cart 
        var add =document.createElement("td")

        //create button for add to cart
        const btn = document.createElement("button")
        btn.setAttribute("id","btn"+i)

        //append button to td cell
        add.appendChild(btn);

        //append add cell to row1
        row1.appendChild(add)

        var btnText = document.createTextNode("Add to cart");

        btn.appendChild(btnText);
        
        tblBody.appendChild(row1);
        tblBody.appendChild(row2);
        tblHead.appendChild(row);
            
    }
        
    tbl.appendChild(tblBody);
    tbl.appendChild(tblHead);
    tbl.setAttribute("border", "2")
    body.appendChild(tbl);
    
}
data();

document.getElementById("btn0").addEventListener("click",function(){
    localStorage.item1 = Object.values(object[0]);
    // console.log(object[0])
})

document.getElementById("btn1").addEventListener("click",function(){
    
    localStorage.item2 = Object.values(object[1]);
    
})

document.getElementById("btn2").addEventListener("click",function(){
    localStorage.item3 = Object.values(object[2]);

    // console.log(object[2])
})

document.getElementById("btn3").addEventListener("click",function(){
    localStorage.item4 = Object.values(object[3]);

    // console.log(object[3])
})

document.getElementById("cartDiv").addEventListener("click",cart);

function cart(){
    var cart1 = localStorage.getItem("item1");
    console.log(cart1);
    
    var cart2 = localStorage.getItem("item2");
    console.log(cart2);
    
    var cart3 = localStorage.getItem("item3");
    console.log(cart3);
    
    var cart4 = localStorage.getItem("item4");
    console.log(cart4);
}

document.getElementById("cartClr").addEventListener("click",clrCart)
function clrCart(){
    localStorage.clear();
}


