package uned.master.java.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uned.master.java.entity.Constructo;
import uned.master.java.entity.Elemento;
import uned.master.java.entity.Rejilla;
import uned.master.java.service.ConstructosService;
import uned.master.java.service.ElementoService;
import uned.master.java.service.RejillaService;

@SuppressWarnings({ "rawtypes", "unchecked" })
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

	/* Devuelve las rejillas de un usuario */
	@PostMapping("/getRejillasUser")
	public ResponseEntity<?> getRejillasUser(@RequestBody Long idUsuario) {

		List<Rejilla> rejillas = rejillaService.getRejillaUser(idUsuario);
		
		return new ResponseEntity(rejillas, HttpStatus.CREATED);
	}

	/* Inserta una nueva rejilla */
	@PostMapping("/nueva")
	public ResponseEntity<?> nueva(@RequestBody Long idUsuario) {
		Rejilla nuevaRejilla = new Rejilla(0, idUsuario, new Timestamp(System.currentTimeMillis()), null, "", "");
		int newRejilla = rejillaService.guardar(nuevaRejilla);

		return new ResponseEntity(newRejilla, HttpStatus.CREATED);
	}

	/* Obtiene los elementos que debe de rellenar el usuario */
	@PostMapping("/getElementos")
	public ResponseEntity<Elemento> getElementos() {
		Elemento elementos[] = new Elemento[12];
		for (int i = 0; i < 12; i++) {
			elementos[i] = elementoService.getElemento(i + 1).get();
		}

		return new ResponseEntity(elementos, HttpStatus.CREATED);
	}

	/* Obtiene los constructos que debe de rellenar el usuario */
	@PostMapping("/getConstructos")
	public ResponseEntity<Constructo> getConstructos() {
		Constructo constructos[] = new Constructo[14];
		for (int i = 0; i < 14; i++) {
			constructos[i] = constructosService.getConstructos(i + 1).get();
		}
		return new ResponseEntity(constructos, HttpStatus.CREATED);
	}

}
