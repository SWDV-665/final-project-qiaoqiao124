import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
/*
  Generated class for the UploadServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UploadServiceProvider {
  userImg: any = '';
  base64Img = '';
  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true
  }

  gelleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    allowEdit: true
  }

  constructor(public http: HttpClient,
    public camera: Camera) {
      this.userImg = 'assets/imgs/logo.png';
      console.log('Hello UploadServiceProvider Provider');
  }

  

  openCamera() {
    console.log('open the camera!');
    this.camera.getPicture(this.cameraOptions).then((imgData) => {

      console.log('image data =>  ', imgData);
      this.base64Img = 'data:image/jpeg;base64,' + imgData;
      this.userImg = this.base64Img;
    }, (err) => {
      console.log(err);
    })
  }

  openImgGallery() {
    console.log('open the gallery!');
    this.camera.getPicture(this.gelleryOptions).then((imgData) => {
     console.log('image data =>  ', imgData);
     this.base64Img = 'data:image/jpeg;base64,' + imgData;
     this.userImg = this.base64Img;
     }, (err) => {
     console.log(err);
     })
  }

  
}
