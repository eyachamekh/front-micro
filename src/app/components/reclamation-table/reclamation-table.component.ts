import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-reclamation-table',
  templateUrl: './reclamation-table.component.html',
  styleUrls: ['./reclamation-table.component.css']
})
export class ReclamationTableComponent implements OnInit {

  reclamations: any[] = [];
  displayedColumns: string[] = ['id', 'client_nom', 'message', 'produit', 'statut', 'file_name', 'phone_number', 'actions'];
  searchQuery: string = '';

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
    // You can implement the logic for updating reclamation here
    console.log('Updating reclamation', reclamation);
  }
}
