import { Component } from '@angular/core';
interface productt{
  imgpath:string;
}
@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent {
products:productt[]=[
{imgpath:"./assets/poert1 (1).png"},
{imgpath:"./assets/port2 (1).png"},
{imgpath:"./assets/port3 (1).png"},
{imgpath:"./assets/poert1 (1).png"},
{imgpath:"./assets/port2 (1).png"},
{imgpath:"./assets/port3 (1).png"}
]





}
