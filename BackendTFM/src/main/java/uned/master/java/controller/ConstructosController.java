package uned.master.java.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

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
import com.fasterxml.jackson.databind.ObjectMapper;

import uned.master.java.entity.ElementosRejilla;
import uned.master.java.entity.Polos;

import uned.master.java.service.PolosService;

@RestController

@RequestMapping(value = "/api/constructos", headers = "Accept=application/json")
@CrossOrigin(origins = "http://localhost:4200")

public class ConstructosController {

	@Autowired
	PolosService polosService;
	
	/**
	 * Inserta los polos introducidos por el usuario en la base de datos
	 * @param polos
	 * @return
	 */
	@PostMapping("/insertPolos")
	public ResponseEntity<?> insertPolos(@RequestBody List<Polos> polos)
			 {
		polosService.insertConstructos(polos);
		return new ResponseEntity("polos insertados", HttpStatus.CREATED);
	}
	
	/**
	 * Recupera los polos introducidos en una rejilla concreta y devuelve su valor
	 * @param idrejilla
	 * @return
	 */
	@PostMapping("/getPolos")
	public ResponseEntity<?> getPolos(@RequestBody Integer idrejilla) {
		List<Polos> polos = polosService.findPolos(idrejilla);
		System.out.println("polos");
		for(Polos polo:polos) {
			System.out.println(polo.toString());
			
		}
		return new ResponseEntity(polos, HttpStatus.CREATED);
	}
	
	
	
}
