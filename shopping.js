//Get the ui elements
let cart = document.querySelectorAll('input');

//Item Class
class Item{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}

//UI class
class UI{
    static addItemList(item){
        let list = document.querySelector('#itemlist');
        const row = document.createElement('tr');
        
        for(let i=0;i<list.children.length;i++){
            if(list.children[i].children[0].textContent.toString() == item.name.toString()){
                list.children[i].remove();
            }
        }
        console.log(item.quantity);
        //list.innerHTML='';
        
        row.innerHTML = `<td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price * item.quantity}</td>
        <td><a href='#' class='delete'>X</a></td>`;
        list.appendChild(row);
        //console.log(list.children[0]);
        
    }
}

//Defining Functions
for(let i=0;i<cart.length;i++){
    let button = cart[i];
    count=0;
    button.addEventListener('click', function(e){
        let product_name= e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        let product_price= e.target.parentElement.previousElementSibling.textContent;
        count +=1;
        let product_quantity = count;
        
        let item = new Item(product_name,product_price,product_quantity);
        UI.addItemList(item);
        e.preventDefault();

    })
}


