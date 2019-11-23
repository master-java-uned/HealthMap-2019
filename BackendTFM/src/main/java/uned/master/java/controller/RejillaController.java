package uned.master.java.controller;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uned.master.java.entity.Constructo;
import uned.master.java.entity.Elemento;
import uned.master.java.entity.Rejilla;
import uned.master.java.repository.RejillaRepository;
import uned.master.java.service.ConstructosService;
import uned.master.java.service.ElementoService;
import uned.master.java.service.RejillaService;


@RestController
@RequestMapping("/api/rejilla")
@CrossOrigin(origins = "http://localhost:4200")
public class RejillaController {

	  @Autowired  
	  RejillaService rejillaService;
	 
	  @Autowired  
	  ElementoService elementoService;
	  
	  @Autowired  
	  ConstructosService constructosService;
	
	 @PostMapping("/nueva")
		public ResponseEntity<?> nueva(@RequestBody Long idUsuario) {
		 Rejilla nuevaRejilla = new Rejilla(0,idUsuario,new Timestamp(System.currentTimeMillis()),"","");
		int newRejilla=rejillaService.guardar(nuevaRejilla);
		//Redirige a la página datos_insercion.html
		return new ResponseEntity(newRejilla, HttpStatus.CREATED);
		}
	 
	 @PostMapping("/getElementos")
		public ResponseEntity<Elemento> getElementos() {
		Elemento elementos[]=new Elemento[12];
			for(int i=0;i<12;i++) {
			elementos[i] = elementoService.getElemento(i+1).get();
		}
		//Redirige a la página datos_insercion.html
		return new ResponseEntity(elementos, HttpStatus.CREATED);
		}
	 
	 @PostMapping("/getConstructos")
		public ResponseEntity<Constructo> getConstructos() {
		Constructo constructos[]=new Constructo[14];
			for(int i=0;i<14;i++) {
			constructos[i] = constructosService.getConstructos(i+1).get();
		}
		//Redirige a la página datos_insercion.html
		return new ResponseEntity(constructos, HttpStatus.CREATED);
		}
	 
	
	
	
}
