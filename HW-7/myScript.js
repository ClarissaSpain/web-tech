var random;
var catCardI;


function update(){
  let catCard1 = new ViewCard("images/mf_cat.jpg", "Hey Ma, there's a weeeird lookin' Cat out here", "Boston Man", "a Weeeeeeeeeeeeeird Lookin' Cat, stay in the house Lucy", "2015");
  let catCard2 = new ViewCard("images/polite_cat.jpg", "Thanks, I hate it", "Zoomers", "A very polite cat", "2079");
  let catCard3 = new ViewCard("images/sadcat.jpg", "Spilled Milk", "Zoomers", "A cat crying over spilled milk", "1801");
  let catCard4 = new ViewCard("images/smidge_cat.jpg", "Smidge","Zoomers", "a cat who would like to speak to his lawyer before these accusations fly", "3010");
  let catCard5 = new ViewCard("images/smug_cat.jpg", "Smug", "Zoomers", "the smuggest of all cats", "2019");
  let catCard6 = new ViewCard("images/snickering_cat.jpg", "😬", "Zoomers", "😬", "2020");

  var catCards = [catcard1, catCard2, catCard3, catCard4, catCard5, catCard6];

  while(random === catCardI){
    random = Math.floor(Math.random() * 6);
    console.log(random);
  }

catCardI= random;

document.getElementById("image").src = catCards[catcardI].createImage();
document.getElementById("title").innerHTML = catCards[catcardI].imageTitle();
document.getElementById("author").innerHTML = catCards[catCardI].authorName();
document.getElementById("description").innerHTML = catCards[catCardI].imageDesc();
document.getElementById("year").innherHTML = catCards[catCardI].imageYear();

}


// var pictureContainer = document.getElementById("picture-info");
// var myCatPicture = document.getElementById("catPicture");
// var btn = document.getElementById("btn");
// // document.getElementById("someImage").src = jsonObject.Images;
// btn.addEventListener("click", function() {
//   // console.log(myPictures[0])
//   renderHTML(myPictures);
// })
//
// function renderHTML(data) {
//   var htmlString = "";
//
//   for (i = 0; i < data.length; i++) {
//
//     htmlString += "<p>" + "Title: " + data[i].Title + " it is " + data[i].Description + ".</p>"
//     htmlString += "<p>" + " Author: " + data[i].Author + " Year: " + data[i].Year + ".</p>"
//     // myCatPicture += myPictures[i].Image
//   }
//
//   pictureContainer.insertAdjacentHTML('beforeend', htmlString);
//
// }
// function renderImage(data) {
//       document.getElementById("mainImage").src += myPictures[i].Image
//
// }
//
// // var myPictures = new myPictures[];
// class MyFavPicture {
//   constructor(Title, Image, Description, Author, Year) {
//     this.Title = Title;
//     this.Image = Image;
//     this.Description = Description;
//     this.Author = Author;
//     this.Year = Year;
//
//   }
//   toString() {
//     let str;
//     str = ''
//   }
// }
// //My array
// var myPictures = [{
//     "Title": " ' Hey Ma, there's a weeeird lookin' Cat out here' ",
//     "Image": "../Images/mf_cat.jpg",
//     "Description": " a Weeeeeeeeeeeeeird Lookin' Cat, stay in the house Lucy",
//     "Author": "Boston Man",
//     "Year": "2015"
//   },
//   {
//     "Title": "' Thanks, I hate it' ",
//     "Image": "../Images/polite_Cat.jpg",
//     "Description": "a very polite cat",
//     "Author": "Zoomers",
//     "Year": "2019"
//   },
//   {
//     "Title": "Spilled milk",
//     "Image": "../Images/sadcat.jpg",
//     "Description": "a Cat crying over spilled milk",
//     "Author": "Zoomer",
//     "Year": "2079"
//   },
//   {
//     "Title": "Smidge",
//     "Image": "../Images/smidge_cat.jpg",
//     "Description": " a cat who would like to speak to his lawyer before these accusations fly",
//     "Author": "Zoomers",
//     "Year": "1801"
//   },
//   {
//     "Title": "Smug",
//     "Image": "../Images/smug_cat.jpg",
//     "Description": "the smuggest of all cats",
//     "Author": "Zoomers",
//     "Year": "2018"
//   },
//   {
//     "Title": "😬",
//     "Image": "../Images/snickering_cat.jpg",
//     "Description": "😬",
//     "Author": "Zoomers",
//     "Year": "2020"
//   }
// ]
//
// // myPicture.onload = function(){
// //
// // }
