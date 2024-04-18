import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { IListItem } from './interfaces/IListItem';
import { NavigationBehaviorOptions, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private router: Router) { }

  list: IListItem[] = [];
  tableIsLoaded: boolean = false;

  ngOnInit(): void {
  }

  getProducts() {
    this.listService.getProjects().subscribe(
      (response: IListItem[]) => {
        this.list = response;
        this.buildTable();
        this.tableIsLoaded = true;
      }
    )
  }

  buildTable() {
    const idClient = localStorage.getItem('idClient');
    this.list = this.list.filter((listItem: IListItem) => listItem.idClient === idClient);
  }

  deleteProject(id: string = '') {
    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter((project: IListItem) => project.id != id);
        this.buildTable();
      }
    )
  }

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: string | undefined){
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    };

    this.router.navigate([`/${url}`], dataParams);
  }

}
