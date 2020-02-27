var pictureContainer = document.getElementById("picture-info");
var btn = document.getElementById("btn");
// document.getElementById("someImage").src = jsonObject.Images;
btn.addEventListener("click", function() {
  // console.log(myPictures[0])
  renderHTML(myPictures);
})

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {

    htmlString += "<p>" + "Title: " + data[i].Title + " it is " + data[i].Description + ".</p>"
    htmlString += "<p>" + " Author: " + data[i].Author + " Year: " + data[i].Year + ".</p>"
  }

  pictureContainer.insertAdjacentHTML('beforeend', htmlString);

}

// var myPictures = new myPictures[];
class MyFavPicture {
  constructor(Title, Image, Description, Author, Year) {
    this.Title = Title;
    this.Image = Image;
    this.Description = Description;
    this.Author = Author;
    this.Year = Year;

  }
  toString() {
    let str;
    str = ''
  }
}
//My array
var myPictures = [{
    "Title": " ' Hey Ma, there's a weeeird lookin' Cat out here' ",
    "Image": "../Images/mf_cat.jpg",
    "Description": " a Weeeeeeeeeeeeeird Lookin' Cat, stay in the house Lucy",
    "Author": "Boston Man",
    "Year": "2015"
  },
  {
    "Title": "' Thanks, I hate it' ",
    "Image": "../Images/polite_Cat.jpg",
    "Description": "a very polite cat",
    "Author": "Zoomers",
    "Year": "2019"
  },
  {
    "Title": "Spilled milk",
    "Image": "../Images/sadcat.jpg",
    "Description": "a Cat crying over spilled milk",
    "Author": "Zoomer",
    "Year": "2079"
  },
  {
    "Title": "Smidge",
    "Image": "../Images/smidge_cat.jpg",
    "Description": " a cat who would like to speak to his lawyer before these accusations fly",
    "Author": "Zoomers",
    "Year": "1801"
  },
  {
    "Title": "Smug",
    "Image": "../Images/smug_cat.jpg",
    "Description": "the smuggest of all cats",
    "Author": "Zoomers",
    "Year": "2018"
  },
  {
    "Title": "😬",
    "Image": "../Images/snickering_cat.jpg",
    "Description": "😬",
    "Author": "Zoomers",
    "Year": "2020"
  }
]

// myPicture.onload = function(){
//
// }
