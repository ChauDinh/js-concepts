class GoodBook {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and methods
}

class Persistence {
  public saveToFile(book: GoodBook): void {
    // some fs.write method to save book to file
  } 
}