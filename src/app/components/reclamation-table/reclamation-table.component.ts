import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-reclamation-table',
  templateUrl: './reclamation-table.component.html',
  styleUrls: ['./reclamation-table.component.css']
})
export class ReclamationTableComponent implements OnInit {

  reclamations: any[] = [];
  searchQuery: string = '';
  isFormVisible: boolean = false;
  newReclamation = {
    clientNom: '',
    message: '',
    produit: '',
    statut: '',
    fileName: '',
    phoneNumber: ''
  };

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    if (this.searchQuery) {
      this.reclamationService.searchReclamations(this.searchQuery).subscribe(data => {
        this.reclamations = data;
      });
    } else {
      this.reclamationService.getReclamations().subscribe(data => {
        this.reclamations = data;
      });
    }
  }

  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(() => {
      this.loadReclamations(); // Reload data after deletion
    });
  }

  updateReclamation(reclamation: any): void {
    // Add logic for editing a reclamation here (e.g., show a form to edit)
    console.log('Update reclamation:', reclamation);
  }

  openAddReclamationForm(): void {
    this.isFormVisible = true; // Show the popup form
  }

  closeForm(): void {
    this.isFormVisible = false; // Hide the popup form
  }

  submitReclamation(): void {
    this.reclamationService.addReclamation(this.newReclamation).subscribe(response => {
      console.log('Reclamation added:', response);
      this.loadReclamations(); // Reload data after adding
      this.closeForm(); // Close the form
    });
  }
}
