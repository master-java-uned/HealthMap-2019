package uned.master.java.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

import uned.master.java.entity.Evaluacion;
import uned.master.java.entity.OrdenConstructos;
import uned.master.java.entity.Polos;
import uned.master.java.entity.Puntuaciones;
import uned.master.java.service.EvaluacionService;
import uned.master.java.service.PolosService;
import uned.master.java.service.PuntuacionesService;

@RestController
@RequestMapping(value = "/api", headers="Accept=application/json") 
@CrossOrigin(origins = "http://localhost:4200")

public class PuntuacionesController {

	@Autowired  
	 EvaluacionService evaluacionService;
	
	@Autowired  
	 PuntuacionesService puntuacionesService;
	
	
	@PostMapping("/insertEvaluacion")
	public ResponseEntity<?> insertEvaluacion(@RequestBody int idRejilla) {
	Evaluacion evaluacion=new Evaluacion(0,idRejilla,"","");	
	int idEvaluacion=evaluacionService.insertEvaluacion(evaluacion);
	System.out.println("evaluacion"+idEvaluacion);
	return new ResponseEntity(idEvaluacion, HttpStatus.CREATED);
	}
	
	@PostMapping("/insertPuntuaciones")
	public ResponseEntity<?> insertPuntuaciones(@RequestBody List<Puntuaciones> puntuaciones) {
	puntuacionesService.guardar(puntuaciones);
	return new ResponseEntity("Puntuaciones insertadas", HttpStatus.CREATED);
	}
	
	@PostMapping("/insertOrdenConstructos")
	public ResponseEntity<?> insertOrdenConstructos(@RequestBody List<OrdenConstructos> ordenConstructos) {
	System.out.println("orden constructos"+ordenConstructos);
		puntuacionesService.guardarOrdenConstructos(ordenConstructos);
	return new ResponseEntity("Orden Constructos", HttpStatus.CREATED);
	}
	
}
