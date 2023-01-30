import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class topbooksPage implements OnInit {
  listTopBooks: any;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTopBooks().then((data:any) => {
      this.listTopBooks =  data 
      console.log(data)
    })
  }

}