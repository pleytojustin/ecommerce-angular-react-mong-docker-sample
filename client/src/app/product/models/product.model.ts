export interface Product {
    _id: string;
    productName: string;
    imageUrl: string;
    price: number;
    description: string;
    quantity: number;
    variants: Array<string>;
}

// SAME Products Local First
// export const products: Product[] =[
//     {
//     "variants": [
//     "dog",
//     "cat",
//     "horse"
//     ],
//     "_id": "5e05c4fbbc5f394dce23dbc2",
//     "productName": "Basketball",
//     "imageUrl": "https://dks.scene7.com/is/image/GolfGalaxy/16WILUJTVLTNXXXXXBKB?wid=685&fmt=jpg",
//     "price": 350,
//     "description": "Some Desc",
//     "quantity": 3,
//     "createdAt": "2019-12-27T08:46:51.291Z",
//     "updatedAt": "2019-12-27T08:46:51.291Z",
//     "__v": 0
//     },
//     {
//     "variants": [
//     "horse"
//     ],
//     "_id": "5e05c8a10aeed24e3ee06aaa",
//     "productName": "Basketball",
//     "imageUrl": "https://dks.scene7.com/is/image/GolfGalaxy/16WILUJTVLTNXXXXXBKB?wid=685&fmt=jpg",
//     "price": 350,
//     "description": "Some Desc",
//     "quantity": 3,
//     "createdAt": "2019-12-27T09:02:25.010Z",
//     "updatedAt": "2019-12-27T09:02:25.010Z",
//     "__v": 0
//     },
//     {
//     "variants": [
//     "dog",
//     "cat",
//     "horse"
//     ],
//     "_id": "5e05cee8d17af44ef2083d85",
//     "productName": "Basketball5",
//     "imageUrl": "https://dks.scene7.com/is/image/GolfGalaxy/16WILUJTVLTNXXXXXBKB?wid=685&fmt=jpg",
//     "price": 350,
//     "description": "Some Desc",
//     "quantity": 3,
//     "createdAt": "2019-12-27T09:29:12.189Z",
//     "updatedAt": "2019-12-27T09:29:12.189Z",
//     "__v": 0
//     },
//     {
//     "variants": [
//     "cat",
//     "horse"
//     ],
//     "_id": "5e05cef6d17af44ef2083d86",
//     "productName": "Basketball7",
//     "imageUrl": "https://dks.scene7.com/is/image/GolfGalaxy/16WILUJTVLTNXXXXXBKB?wid=685&fmt=jpg",
//     "price": 350,
//     "description": "Some Desc",
//     "quantity": 5,
//     "createdAt": "2019-12-27T09:29:26.591Z",
//     "updatedAt": "2019-12-27T09:29:26.591Z",
//     "__v": 0
//     }
// ];
export const products: Product[] = []

// export const products: Product[] = [
//     {
//         "variants": [
//             "dog",
//             "cat",
//             "horse"
//         ],
//         "_id": "5e05c4fbbc5f394dce23dbc2",
//         "productName": "Basketball",
//         "imageUrl": "https://dks.scene7.com/is/image/GolfGalaxy/16WILUJTVLTNXXXXXBKB?wid=685&fmt=jpg",
//         "price": 350,
//         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//         "quantity": 3,
//         "createdAt": "2019-12-27T08:46:51.291Z",
//         "updatedAt": "2019-12-27T08:46:51.291Z",
//         "__v": 0
//     },
//     {
//         "variants": [
//             "horse"
//         ],
//         "_id": "5e05c8a10aeed24e3ee06aaa",
//         "productName": "Cap",
//         "imageUrl": "https://www.adidas.com.ph/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw6580b3b8/zoom/CG1781_04_standard.jpg?strip=false&sw=600",
//         "price": 150,
//         "description": "This cap is Awesome",
//         "quantity": 3,
//         "createdAt": "2019-12-27T09:02:25.010Z",
//         "updatedAt": "2019-12-27T09:02:25.010Z",
//         "__v": 0
//     },
//     {
//         "variants": [
//             "dog",
//             "cat",
//             "horse"
//         ],
//         "_id": "5e05cee8d17af44ef2083d85",
//         "productName": "Awesome T Shirt",
//         "imageUrl": "https://img.oshopping.com.ph/media/catalog/product/cache/1/image/960x/9df78eab33525d08d6e5fb8d27136e95/a/b/absaban_blue.jpg",
//         "price": 500,
//         "description": "Shirt is Awesome",
//         "quantity": 3,
//         "createdAt": "2019-12-27T09:29:12.189Z",
//         "updatedAt": "2019-12-27T09:29:12.189Z",
//         "__v": 0
//     },
//     {
//         "variants": [
//             "cat",
//             "horse"
//         ],
//         "_id": "5e05cef6d17af44ef2083d86",
//         "productName": "Air Max",
//         "imageUrl": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/sidjazy4gyskcn5d9vzw/air-max-270-react-pop-art-mens-shoes-bZ8t5l.jpg",
//         "price": 2299,
//         "description": "Nice Shoes",
//         "quantity": 5,
//         "createdAt": "2019-12-27T09:29:26.591Z",
//         "updatedAt": "2019-12-27T09:29:26.591Z",
//         "__v": 0
//     }
// ];