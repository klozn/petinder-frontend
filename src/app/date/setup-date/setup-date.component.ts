import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../../model/pet";
import {PetService} from "../../service/pet.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  sendTextForm = this.formBuilder.group({
    name: ''
  });
  private _pet: Pet | undefined;

  constructor(private route: ActivatedRoute, private petService: PetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService.findByName(name).subscribe(pet => this._pet = pet);
  }

  get pet(): Pet {
    return <Pet>this._pet;
  }
}
