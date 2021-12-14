import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Document {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-catalog-create',
  templateUrl: './catalog-create.component.html',
  styleUrls: ['./catalog-create.component.css']
})
export class CatalogCreateComponent implements OnInit {

  
  form: FormGroup;
  documents:Document[] =[
    {value: 'doc1', viewValue: 'Маъмурий низо'},
    {value: 'doc-2', viewValue: 'Биринчи инстанция'},
  ];

  documentControl = new FormControl(this.documents);

  constructor() {
    this.form = new FormGroup({
      document: this.documentControl,  
    });
  }
  
  ngOnInit(): void {
  
  }


}
