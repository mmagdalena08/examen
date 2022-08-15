import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { AnimalserviceService } from 'src/app/servicio/animalservice.service';
import { Router } from '@angular/router'
import { animal } from 'src/app/modelo/animal.interface';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  public _form = new FormGroup({
    nombre: new FormControl('',Validators.required),
    eliminado: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    id_tiposanimal: new FormControl('',Validators.required)
  })

  animal:any =[];
 tipo:any =[];
  button:boolean=true;
  constructor(public api:AnimalserviceService, private router:Router) { }

  ngOnInit(): void {
    this.animal= this.api.showanimales().subscribe(res=>this.animal=res);
    this.tipo= this.api.show().subscribe(res=>this.tipo=res);
  }

  registro(_form:any){
    this.api.regisanimaled(_form).subscribe(data=>(console.log(data)));
   }

   edit(_id:any){
    localStorage.setItem("id",_id);
    this.button=false
   this.api.editanimales(_id).subscribe(data=>{ 
         let t:any=data;
         this._form.setValue({
        'nombre':t.nombre,
        'eliminado':t.eliminado,
         'imagen':t.imagen,
         'id_tiposanimal':t.id_tiposanimal

           });
           (console.log(data))
    });
   }

  update(_form:any){
    let _id=localStorage.getItem("id")
    this.api.updateanimales(_form,_id).subscribe(data=>(console.log(data)));
   }

   destroy(_id:any){
    this.api.destroyanimales(_id).subscribe(data=>(console.log(data)));
   }

   cambio()
   {
     this.router.navigate(['tiposanimal']);
   }


}
