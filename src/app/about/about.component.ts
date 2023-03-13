import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  
  
  ngOnInit() {
    
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 85,
    });
   
    
   
typewriter
.pauseFor(400)
.typeString('<span style="font-size: 32px;">Hello!<br></span>')
.pauseFor(500)
.typeString('<span style="font-size: 30px; margin-left:15px; display:inline-block;">I am Roland, a very passionate software engineer, proficient in</span>')
.pauseFor(300)
.typeString('<span style="font-size: 30px; margin-left:5px; display: inline-block;color:#1e6694; "><strong>Angular</strong></span> ')
.pauseFor(300)
.deleteChars(8)
.typeString('<span style="font-size: 30px; margin-left:0px;display: inline-block; color:#23a845;"><strong>Typescript</strong></span> ')
.pauseFor(300)
.deleteChars(11)
.typeString('<span style="font-size: 30px;margin-left:0px;display: inline-block;color:#872f74;"><strong>Python</strong></span> ')
. pauseFor(300)
.deleteChars(7)
.typeString('<span style="font-size: 30px;margin-left:0px;display: inline-block; color:#7a061b;"><strong>CSS</strong></span> ')
. pauseFor(300)
.deleteChars(4)
.typeString('<span style="font-size: 30px;margin-left:0px;display: inline-block;"><strong>HTML</strong></span> ')
. pauseFor(300)
.deleteChars(5)
.typeString('<span style="font-size: 30px;margin-left:5px; display: inline-block; color:#7a061b;"><strong>Frontend Web Development.</strong></span> ')
. pauseFor(300)
.start();

      
      
  }
  downloadCV(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/pdf/cvENG.pdf');
    link.setAttribute('download', `cvENG.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}

