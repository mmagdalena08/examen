import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { AnimalserviceService } from 'src/app/servicio/animalservice.service';
import { Router } from '@angular/router'
import { tipo } from 'src/app/modelo/tipo.interface';

@Component({
  selector: 'app-tiposanimal',
  templateUrl: './tiposanimal.component.html',
  styleUrls: ['./tiposanimal.component.css']
})
export class TiposanimalComponent implements OnInit {

  
  public _form = new FormGroup({
    tipo: new FormControl('',Validators.required),
    eliminado: new FormControl('',Validators.required),
    
  })
  Tipo:any =[];
  button:boolean=true;
  constructor(public api:AnimalserviceService, private router:Router) { }
   

  ngOnInit()
  {
   this.Tipo= this.api.show().subscribe(res=>this.Tipo=res);
  }

  registro(_form:tipo){
    this.api.registipo(_form).subscribe(data=>(console.log(data)));
   }

   edit(_id:any){
    localStorage.setItem("id",_id);
    this.button=false
   this.api.edittipo(_id).subscribe(data=>{ 
         let t:tipo=data;
         this._form.setValue({
        'tipo':t.tipo,
        'eliminado':t.eliminado,
           });
           (console.log(data))
    });
   }

  update(_form:tipo){
    let _id=localStorage.getItem("id")
    this.api.updateEquipo(_form,_id).subscribe(data=>(console.log(data)));
   }

   destroy(_id:any){
    this.api.destroyEquipo(_id).subscribe(data=>(console.log(data)));
   }

   cambio()
   {
     this.router.navigate(['animales']);
   }

}
