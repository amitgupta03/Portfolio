import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sample-code',
  templateUrl: './sample-code.component.html',
  styleUrls: ['./sample-code.component.scss'],
})
export class SampleCodeComponent implements OnInit {
  checkoutForm: FormGroup;
  show: any[] = [];
  imageUrl: any;
  img: any;
  previewImage: any;
  editField: boolean = false;
  editIdentityType: any = '';
  editIdentityNO: any = '';
  editValidUpto: any = '';
  editAttachment: any = '';
  filetype: any;
  previewPDF: any;
  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.checkoutForm = this.formBuilder.group({
      identityType: [''],
      identityNO: [''],
      validUpto: [''],
      attachment: [''],
    });
  }
  ngOnInit(): void {}
  onAdd() {
    this.checkoutForm.value.attachment = this.imageUrl;
    let fileType = this.checkoutForm.value.attachment.match(':(.*);')[1];
    if( !this.show.some(Id => Id.identityNO === this.checkoutForm.get('identityNO')?.value)) {
      this.show.push({
        imageName: this.img.name,
        editflag: false,
        filetype: fileType,
        ...this.checkoutForm.value,
      });
      this.checkoutForm.reset();
    } else {
      
    }
  }

  onEdit(data: any, i: number) {
    data.filetype = '';
    data.editflag = true;
   //data.attachment = '';
    this.imageUrl = '';
  }

  saveEdit(data: any, i: any) {
    if( this.show.some(Id => Id.identityNO !== data.identityNO)) {
      data.attachment = this.imageUrl ? this.imageUrl : data.attachment;
      data.filetype = data.attachment.match(':(.*);')[1];
      data.editflag = false;
      delete data.editflag;
    }
  }

  openModel(imgURL: any, fileType: string) {
    if (fileType == 'image/png' || fileType == 'image/jpeg') {
      this.previewPDF = null;
      this.previewImage = imgURL;
    } else {
      this.previewImage = null;
      this.previewPDF = imgURL;
    }
  }

  delete(row: any,index: any) {
    this.show.splice(index,1);
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewPDF);
  }

  download(data: any) {
    //data.map((d: any) => d.downloading = true)
    const linkSource = data.attachment;
    const downloadLink = document.createElement('a');
    const fileName = data.imageName;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  onFileChanged(event: any) {
    if (event) {
      this.img = event.target.files[0];
      // Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.img);
    } else {
      this.imageUrl = '';
    }
  }
}
