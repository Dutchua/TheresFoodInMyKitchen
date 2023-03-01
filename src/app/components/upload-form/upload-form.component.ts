import {Component, OnInit} from '@angular/core';
import {FileUpload} from "../../models/file-upload.model";
import {FileUploadService} from "../../services/file-upload.service";
import {percentage} from "@angular/fire/storage";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit{
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private uploadService: FileUploadService) {}
  ngOnInit(): void{
  }


  upload(): void{
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0)
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }
}