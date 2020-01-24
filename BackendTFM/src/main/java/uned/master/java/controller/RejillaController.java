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
import uned.master.java.entity.Elementosrejilla;
import uned.master.java.entity.Polos;
import uned.master.java.entity.Rejilla;
import uned.master.java.entity.RejillaDatosFront;
import uned.master.java.service.ConstructosService;
import uned.master.java.service.ElementoService;
import uned.master.java.service.PolosService;
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
	
	@Autowired
	PolosService polosService;
	
	

	/**
	 * Obtiene las rejillas de un usuario concreto
	 * 
	 * @param idUsuario
	 * @return
	 */
	@PostMapping("/getRejillasUser")
	public ResponseEntity<?> getRejillasUser(@RequestBody Long idUsuario) {
		List<Rejilla> rejillas = rejillaService.getRejillaUser(idUsuario);
		return new ResponseEntity(rejillas, HttpStatus.CREATED);
	}

	/**
	 * Inserta la rejilla en la base de datos y devuelve el id
	 * 
	 * @param idUsuario
	 * @return
	 */
	private int insertNuevaRejilla(Long idUsuario) {
		Rejilla nuevaRejilla = new Rejilla(0, idUsuario, new Timestamp(System.currentTimeMillis()), null, "", "");
		int newRejilla = rejillaService.guardar(nuevaRejilla);
		return newRejilla;
	}

	/**
	 * Inserta una nueva rejilla con sus respectivos elementos y polos
	 * 
	 * @param body
	 * @return
	 */
	@PostMapping("/nuevaRejilla")
	public ResponseEntity<?> nuevaRejilla(@RequestBody RejillaDatosFront body) {

		int idRejilla = insertNuevaRejilla(Long.valueOf(body.getIdusuario()));
		setIdRejilla(body.getElementosrejilla(), body.getPolos(), idRejilla);
		elementoService.insertElementos(body.getElementosrejilla());
		polosService.insertConstructos(body.getPolos());

		return new ResponseEntity(idRejilla, HttpStatus.CREATED);
	}

	/**
	 * Obtiene los elementos que debe de rellenar el usuario
	 * @return
	 */
	@PostMapping("/getElementos")
	public ResponseEntity<Elemento> getElementos() {
		List<Elemento> elementos =elementoService.getElementos();
		return new ResponseEntity(elementos, HttpStatus.CREATED);
	}

	/**
	 * Obtiene los constructos que debe de rellenar el usuario
	 * @return
	 */
	@PostMapping("/getConstructos")
	public ResponseEntity<Constructo> getConstructos() {
		Constructo constructos[] = new Constructo[14];
		for (int i = 0; i < 14; i++) {
			constructos[i] = constructosService.getConstructos(i + 1).get();
		}
		return new ResponseEntity(constructos, HttpStatus.CREATED);
	}
	/**
	 * Actualiza el valor de el id de la rejilla
	 * @param elementos
	 * @param polos
	 * @param idRejilla
	 */
	private void setIdRejilla(List<Elementosrejilla> elementos, List<Polos> polos, int idRejilla) {
		for (Elementosrejilla elemento : elementos) {
			elemento.setIdrejilla(idRejilla);
		}
		for (Polos polo : polos) {
			polo.setIdrejilla(idRejilla);
		}

	}
}
