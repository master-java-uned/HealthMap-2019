package uned.master.java.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uned.master.java.entity.Elementosrejilla;
import uned.master.java.service.ElementoService;

@SuppressWarnings({ "rawtypes", "unchecked" })
@RestController
@RequestMapping(value = "/api/elementos", headers = "Accept=application/json")
@CrossOrigin(origins = "http://localhost:4200")
public class ElementosController {

	@Autowired
	ElementoService elementosRejillaService;

	/**
	 * Obtiene los elementos correspondientes a una rejilla
	 * 
	 * @param idrejilla
	 * @return
	 */

	@PostMapping("/getElementosUsuario")
	public ResponseEntity<?> getElementosUsuario(@RequestBody Integer idrejilla) {
		List<Elementosrejilla> elementosUsuario = elementosRejillaService.getElementosUsuario(idrejilla);
	
		return new ResponseEntity(elementosUsuario, HttpStatus.CREATED);
	}
}
