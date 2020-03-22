import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private httpClientObj: HttpClient) {}

  getUrl(searchValue) {
    if (!searchValue) {
      return "https://www.themealdb.com/api/json/v1/1/random.php";
    }
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  }

  getSearchResults(searchValue?: string) {
    const url = this.getUrl(searchValue);
    console.log(url);
    return this.httpClientObj.get(url).toPromise();
  }
}
