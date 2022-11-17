let breakfastlist = [{
    idMeal: 1,
    mealName: 'ผัดกะเพรา',
    img: "https://cms.dmpcdn.com/food/2022/06/10/fa99ea60-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 2,
    mealName: 'ผัดพริกแกง',
    img: "https://cms.dmpcdn.com/food/2022/06/10/fb1004c0-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 3,
    mealName: 'ทอดกระเทียม / กระเทียมพริกไทย',
    img:"https://cms.dmpcdn.com/food/2020/06/23/86fc8e20-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 4,
    mealName: 'ไข่เจียว (หมูสับ, กุ้งสับ, ปลากระป๋อง, ฯลฯ)',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fa06d220-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 5,
    mealName: 'ผัดพริกเผา',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fb102bd0-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 6,
    mealName: 'ไข่ขยี้ / ไข่ข้น',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fc078420-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 7,
    mealName: 'แกงจืด ต้มจืด',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fc908a40-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 8,
    mealName: 'ราดหน้า',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fb7fb680-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 9,
    mealName: 'ผัดซีอิ๊ว',
    img :"https://cms.dmpcdn.com/food/2020/06/23/86f7ac20-b4ff-11ea-b61c-7dd99cb3fb2c_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 10,
    mealName: 'ข้าวผัด',
    img : "https://cms.dmpcdn.com/food/2022/06/10/233ee240-e8ae-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 11,
    mealName: 'ผัดมักกะโรนี',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fa818060-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 12,
    mealName: 'มาม่าผัด',
    img : "https://cms.dmpcdn.com/food/2022/06/10/fc089590-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 13,
    mealName: 'สุกี้น้ำ/แห้ง',
    img :"https://cms.dmpcdn.com/food/2020/06/23/86a26030-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 14,
    mealName: 'ก๋วยเตี๋ยวคั่ว',
    img: "https://cms.dmpcdn.com/food/2022/06/10/fa29ea80-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 15,
    mealName: 'ข้าวผัดต้มยำ',
    img :"https://cms.dmpcdn.com/food/2022/06/10/f99c0260-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 16,
    mealName: 'สปาเกตตี้ผัดขี้เมา',
    img :"https://cms.dmpcdn.com/food/2022/06/10/fb949e10-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    idMeal: 17,
    mealName: 'สปาเกตตี้ผัดขี้เมา',
    img :"https://cms.dmpcdn.com/food/2022/06/10/fb949e10-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},


];

function GetValue() {
    var number = Math.floor(Math.random()*breakfastlist.length);  //random number
    var random = breakfastlist[number];
    document.getElementById("message").innerHTML=random.mealName + "<br>" + "<br>" + '<img src="'+random.img+'" style="width:75%"/>'; 
}

function allMeal() {
    for(let i = 0; i < breakfastlist.length; i++) {
        var meal = breakfastlist[i];
        //document.getElementById("allMeal").innerHTML += (i+1) + "." +namemeal.mealName + "<br>" + '<img src="'+randomImage[i]+'" style="width:75%"/>' + "<br>" + "<br>";
        document.getElementById("allMeal").innerHTML +=  meal.idMeal+"."+meal.mealName +"<br>"+"<br>"+'<img src="'+meal.img+'" style="width:75%"/>'+"<br>"+"<br>";
    }
}

function submit() {
    document.getElementById("m1").innerHTML = document.querySelector('#getName').value;
    document.getElementById("m2").innerHTML = document.querySelector('#getImage').value;
    imgUpload = document.querySelector('#getImage').value;
    document.getElementById("m2").innerHTML = '<img src="'+imgUpload+'" style="width:75%"/>'
}



//call firebase
    // db.collection('food').get().then(food =>{
    //     console.log(food);

    // });
