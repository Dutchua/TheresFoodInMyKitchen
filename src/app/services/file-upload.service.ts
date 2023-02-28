import { Injectable } from '@angular/core';

import {FileUpload} from '../models/file-upload.model';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number|undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() =>
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          // this.saveFileData(fileUpload);
        })
      )).subscribe();
    return uploadTask.percentageChanges();
  }
}

