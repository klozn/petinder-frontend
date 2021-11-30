import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {PetService} from "../service/pet.service";
import {Pet} from "../model/pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private _pets: Pet[] = [];
  private _selectedPet: Pet | undefined;
  private _searchText: string = '';
  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: 0
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getPets();
  }

  private getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  public selectPet(pet: Pet): void {
    this._selectedPet = pet;
  }

  get pets(): Pet[] {
    return this._pets;
  }

  get selectedPet(): Pet {
    return <Pet>this._selectedPet;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  get searchText(): string {
    return this._searchText;
  }

  public deletePet() {
    this.petService.deleteById(this.selectedPet.id).subscribe(() => this.getPets());
    console.warn('The pet has been deleted', this.selectedPet);
    this._selectedPet = undefined;
  }

  onSubmit(): void {
    this.petService.addPet(this.addPetForm.value).subscribe(() => this.getPets());
    console.warn('Your pet has been submitted', this.addPetForm.value);
    this.addPetForm.reset();
  }
}
