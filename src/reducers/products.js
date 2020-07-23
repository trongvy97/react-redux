var initialState = [
  {
    id : 1,
    name:  'I Phon 11 ProMax',
    image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_iphone-11-64gb-xtmobile.jpg',
    description : 'san pham do apple san xuat',
    price : 20_000_000,
    inventory : 10,
    rating : 4
  },
  {
    id : 2,
    name:  'Samsung galaxy note 10',
    image: 'https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg',
    description : 'san pham do samsung san xuat',
    price : 11_000_000,
    inventory : 15,
    rating : 3
  },
  {
    id : 3,
    name:  'Iphone x',
    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
    description : 'san pham do China san xuat',
    price : 10_000_000,
    inventory : 5,
    rating : 5
  }
];
const product = (state = initialState, action) => {
   switch(action.type) {
     default : return [...state];
   }
}

export default product;