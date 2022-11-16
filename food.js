let breakfastlist = [{
    idMeal: 1,
    mealName: 'ผัดกะเพรา'
},
{
    idMeal: 2,
    mealName: 'ผัดพริกแกง',
},
{
    idMeal: 3,
    mealName: 'ทอดกระเทียม / กระเทียมพริกไทย',
},
{
    idMeal: 4,
    mealName: 'ไข่เจียว (หมูสับ, กุ้งสับ, ปลากระป๋อง, ฯลฯ)',
},
{
    idMeal: 5,
    mealName: 'ผัดพริกเผา',
},
{
    idMeal: 6,
    mealName: 'ไข่ขยี้ / ไข่ข้น',
},
{
    idMeal: 7,
    mealName: 'แกงจืด ต้มจืด',
},
{
    idMeal: 8,
    mealName: 'ราดหน้า',
},
{
    idMeal: 9,
    mealName: 'ผัดซีอิ๊ว',
},
{
    idMeal: 10,
    mealName: 'ข้าวผัด',
},
{
    idMeal: 11,
    mealName: 'ผัดมักกะโรนี',
},
{
    idMeal: 12,
    mealName: 'มาม่าผัด',
},
{
    idMeal: 13,
    mealName: 'สุกี้น้ำ/แห้ง',
},
{
    idMeal: 14,
    mealName: 'ก๋วยเตี๋ยวคั่ว',
},
{
    idMeal: 15,
    mealName: 'ข้าวผัดต้มยำ',
},
{
    idMeal: 16,
    mealName: 'สปาเกตตี้ผัดขี้เมา',
},


];

function GetValue() {
    var number = Math.floor(Math.random()*breakfastlist.length);  //random number
    var random = breakfastlist[number];
    document.getElementById("message").innerHTML=random.mealName + "<br>";
    var randomImage = new Array();  
      
    //insert the URL of images in array  
    randomImage[0] = "https://cms.dmpcdn.com/food/2022/06/10/fa99ea60-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดกะเพรา
    randomImage[1] = "https://cms.dmpcdn.com/food/2022/06/10/fb1004c0-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดพริกแกง
    randomImage[2] = "https://cms.dmpcdn.com/food/2020/06/23/86fc8e20-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ทอดกระเทียม / กระเทียมพริกไทย
    randomImage[3] = "https://cms.dmpcdn.com/food/2022/06/10/fa06d220-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ไข่เจียว (หมูสับ, กุ้งสับ, ปลากระป๋อง, ฯลฯ)
    randomImage[4] = "https://cms.dmpcdn.com/food/2022/06/10/fb102bd0-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดพริกเผา
    randomImage[5] = "https://cms.dmpcdn.com/food/2022/06/10/fc078420-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //ไข่ขยี้ / ไข่ข้น
    randomImage[6] = "https://cms.dmpcdn.com/food/2022/06/10/fc908a40-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //แกงจืด ต้มจืด
    randomImage[7] = "https://cms.dmpcdn.com/food/2022/06/10/fb7fb680-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ราดหน้า
    randomImage[8] = "https://cms.dmpcdn.com/food/2020/06/23/86f7ac20-b4ff-11ea-b61c-7dd99cb3fb2c_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดซีอิ๊ว
    randomImage[9] = "https://cms.dmpcdn.com/food/2022/06/10/233ee240-e8ae-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ข้าวผัด
    randomImage[10] = "https://cms.dmpcdn.com/food/2022/06/10/fa818060-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//ผัดมักกะโรนี
    randomImage[11] = "https://cms.dmpcdn.com/food/2022/06/10/fc089590-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//มาม่าผัด
    randomImage[12] = "https://cms.dmpcdn.com/food/2020/06/23/86a26030-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //สุกี้น้ำ/แห้ง
    randomImage[13] = "https://cms.dmpcdn.com/food/2022/06/10/fa29ea80-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//ก๋วยเตี๋ยวคั่ว
    randomImage[14] = "https://cms.dmpcdn.com/food/2022/06/10/f99c0260-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //ข้าวผัดต้มยำ
    randomImage[15] = "https://cms.dmpcdn.com/food/2022/06/10/fb949e10-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//สปาเกตตี้ผัดขี้เมา

    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" style="width:100%"/>';  
    
}

function allMeal() {
    var randomImage = new Array()
    randomImage[0] = "https://cms.dmpcdn.com/food/2022/06/10/fa99ea60-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดกะเพรา
    randomImage[1] = "https://cms.dmpcdn.com/food/2022/06/10/fb1004c0-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดพริกแกง
    randomImage[2] = "https://cms.dmpcdn.com/food/2020/06/23/86fc8e20-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ทอดกระเทียม / กระเทียมพริกไทย
    randomImage[3] = "https://cms.dmpcdn.com/food/2022/06/10/fa06d220-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ไข่เจียว (หมูสับ, กุ้งสับ, ปลากระป๋อง, ฯลฯ)
    randomImage[4] = "https://cms.dmpcdn.com/food/2022/06/10/fb102bd0-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดพริกเผา
    randomImage[5] = "https://cms.dmpcdn.com/food/2022/06/10/fc078420-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //ไข่ขยี้ / ไข่ข้น
    randomImage[6] = "https://cms.dmpcdn.com/food/2022/06/10/fc908a40-e8ad-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //แกงจืด ต้มจืด
    randomImage[7] = "https://cms.dmpcdn.com/food/2022/06/10/fb7fb680-e8ad-11ec-9f2b-43b7f8004c41_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ราดหน้า
    randomImage[8] = "https://cms.dmpcdn.com/food/2020/06/23/86f7ac20-b4ff-11ea-b61c-7dd99cb3fb2c_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ผัดซีอิ๊ว
    randomImage[9] = "https://cms.dmpcdn.com/food/2022/06/10/233ee240-e8ae-11ec-854a-c573e9d8dee8_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";  //ข้าวผัด
    randomImage[10] = "https://cms.dmpcdn.com/food/2022/06/10/fa818060-e8ad-11ec-8cdd-d1a6d7d6d5e3_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//ผัดมักกะโรนี
    randomImage[11] = "https://cms.dmpcdn.com/food/2022/06/10/fc089590-e8ad-11ec-a02d-53fb25d1ae1a_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//มาม่าผัด
    randomImage[12] = "https://cms.dmpcdn.com/food/2020/06/23/86a26030-b4ff-11ea-8fac-236a281cd6c5_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //สุกี้น้ำ/แห้ง
    randomImage[13] = "https://cms.dmpcdn.com/food/2022/06/10/fa29ea80-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//ก๋วยเตี๋ยวคั่ว
    randomImage[14] = "https://cms.dmpcdn.com/food/2022/06/10/f99c0260-e8ad-11ec-aae3-7b8340e29fcf_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //ข้าวผัดต้มยำ
    randomImage[15] = "https://cms.dmpcdn.com/food/2022/06/10/fb949e10-e8ad-11ec-9052-410227a56ee0_original.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";//สปาเกตตี้ผัดขี้เมา
    for(let i = 0; i < breakfastlist.length; i++) {
        var namemeal = breakfastlist[i];
        document.getElementById("allMeal").innerHTML += (i+1) +"."+namemeal.mealName + "<br>" + '<img src="'+randomImage[i]+'" style="width:100%"/>'+ "<br>";

    }
    
}
