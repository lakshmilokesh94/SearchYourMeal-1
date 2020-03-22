import { Component } from "@angular/core";
import { SearchService } from "./search.service";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  constructor(private svc: SearchService) {}
  state: any = { searchValue: "", meals: [] };
  handleSearch() {
    console.log(this.state.searchValue);
    this.svc.getSearchResults(this.state.searchValue).then(response => {
      console.log(response);
      this.state.meals = response["meals"];
    });
  }

  handleRandom() {
    this.svc.getSearchResults().then(response => {
      console.log(response);
      this.state.meals = response["meals"];
    });
  }
}
