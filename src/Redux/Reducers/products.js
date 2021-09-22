var initialState = [{
    id : 1,
    name : "Iphone 11",
    image :"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsceHRTanWB7ZMMp0O_0z5g5jq49JvGibeqKJRlYCC2XJd77RLNQ&usqp=CAc",
    description : "Made by Apple",
    rating : 4,
    price : 500,
    inventory : 10,
    showRating : []
},
{
    id : 2,
    name : "Samsung 11",
    image :"https://cdn.mediamart.vn/Product/dien-thoai-samsung-galaxy-a11-sma115f-black-6zBcqZ.png",
    description : "Made by Samsung",
    price : 400,
    inventory : 20,
    rating : 3,
    showRating : []
},{
    id : 3,
    name : "Oppo 11s",
    image :"https://didongthongminh.vn/upload_images/2019/11/oppo-a11.jpg",
    description : "Made by Oppo",
    price : 300,
    inventory : 20,
    rating : 4,
    showRating : []

}];
for (var i = 0; i < initialState.length; i++){
    for(let j = 0; j< initialState[i].rating; j++){
        initialState[i].showRating.push(<li key={j}>
                                            <i className="fa fa-star"></i>
                                        </li>)
    }
    for(let k = 0; k < 5- initialState[i].rating; k++){
        initialState[i].showRating.push(<li key={5-k}>
                                            <i className="fa fa-star-o"></i>
                                        </li>)
    }
}


const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state]
    }
}

export default products
