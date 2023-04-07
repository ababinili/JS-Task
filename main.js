var parrot = [
    {
        name:"amazon",
        Image:"",
        price:2500,
        sale_price :40,
        drive: true,
        sale: true,
        gift: true,

    },
    {
        name:"African Grey ",
        Image:"",
        price:5500,
        sale_price :40,
        drive: true,
        sale: true,
        gift: true,

    },
    {
        name:"Molukan",
        Image:"",
        price:4500,
        sale_price :40,
        drive: true,
        sale: true,
        gift: true,

    }
]



parrot.forEach(() => {
    if(parrot[0].sale==true){
        document.getElementById("sale").innerHTML="ფასდაკლება "+parrot[0].price/100*parrot[0].sale_price+" ლარი"
    }
    if(parrot[0].gift==true){
        document.getElementById("gift").innerHTML="საჩუქარი "+"გალია"
    }
  if(parrot[1].sale==true){
        document.getElementById("sale1").innerHTML="ფასდაკლება "+parrot[1].price/100*parrot[1].sale_price+" ლარი"
    }
    if(parrot[1].gift==true){
        document.getElementById("gift1").innerHTML="საჩუქარი "+"გალია"
    }


if(parrot[0].sale==true){
        document.getElementById("sale2").innerHTML="ფასდაკლება "+parrot[0].price/100*parrot[0].sale_price+" ლარი"
    }
    if(parrot[0].gift==true){
        document.getElementById("gift2").innerHTML="საჩუქარი "+"გალია"
    }
if(parrot[1].sale==true){
        document.getElementById("sale2").innerHTML="ფასდაკლება "+parrot[2].price/100*parrot[2].sale_price+" ლარი"
    }
    if(parrot[1].gift==true){
        document.getElementById("gift2").innerHTML="საჩუქარი "+"გალია"}


             
           document.getElementById("name").innerHTML="ამაზონი "+parrot[0].name
document.getElementById("price").innerHTML="ფასი "+parrot[0].price+"ლარი"
document.getElementById("sale_price").innerHTML="ფასდაკლება "+parrot[0].sale_price+"%"
document.getElementById("drive").innerHTML="მიწოდება "+parrot[0].drive

    document.getElementById("name1").innerHTML="აფრიკული ნაცრისფერი "+parrot[1].name
document.getElementById("price1").innerHTML="ფასი "+parrot[1].price+"ლარი"
document.getElementById("sale_price1").innerHTML="ფასდაკლება "+parrot[1].sale_price+"%"
document.getElementById("drive1").innerHTML="მიწოდება "+parrot[1].drive

   document.getElementById("name2").innerHTML="მოლუკანი "+parrot[2].name
document.getElementById("price2").innerHTML="ფასი "+parrot[2].price+"ლარი"
document.getElementById("sale_price2").innerHTML="ფასდაკლება "+parrot[2].sale_price+"%"
document.getElementById("drive2").innerHTML="მიწოდება "+parrot[2].drive
});





