import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewHelloWorld';
  imgUrl="";
  Url="";
  userName:string="";
  nameError:string="";

  ngOnInit(): void{
    this.title="Hello from BridgeLabz";
    this.imgUrl="../assets/BL_Black_logo.png";
    this.Url="https://bridgelabz.com"
  }

  onClick($event: any){
    console.log("save button is clicked", $event);
    window.open(this.Url,"_blank");
  }

  onInput($event: any){
    console.log("Change event occurred",$event.data);
    const Regex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(Regex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Input valid name.";
  }
}
