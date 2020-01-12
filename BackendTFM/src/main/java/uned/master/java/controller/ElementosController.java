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

import uned.master.java.entity.ElementosRejilla;
import uned.master.java.entity.Polos;
import uned.master.java.service.ElementoService;
import uned.master.java.service.ElementosUsuarioService;
import uned.master.java.service.PolosService;

@RestController

@RequestMapping(value = "/api/elementos", headers = "Accept=application/json")
@CrossOrigin(origins = "http://localhost:4200")
public class ElementosController {

	@Autowired
	ElementosUsuarioService elementosUsuarioService;
		
	/*Recupera los polos correspondientes a una rejilla*/
	@PostMapping("/getElementosUsuario")
	public ResponseEntity<?> getElementosUsuario(@RequestBody Integer idrejilla) {
		List<ElementosRejilla> elementosUsuario = elementosUsuarioService.getElementosUsuario(idrejilla);
		
		return new ResponseEntity(elementosUsuario, HttpStatus.CREATED);
	}
	
}
