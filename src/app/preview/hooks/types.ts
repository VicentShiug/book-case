interface IGetBook { 
  id: String;
  setBook: Function;
}

interface IRemoveBook { 
  from?: String;
  id?: String;
}

interface IBook {
  id: String;
  title: String;
  authors: String;
  description: String;
  imageLinks: Object;
  shelf: String;
}

interface IImageLinks { 
  extraLarge: String;
  large: String;
  medium: String;
  small: String;
  thumbnail: String;
  smallThumbnail: String;
}