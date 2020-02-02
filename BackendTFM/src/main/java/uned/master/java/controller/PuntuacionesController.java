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
import uned.master.java.entity.Evaluacion;
import uned.master.java.entity.OrdenConstructos;
import uned.master.java.entity.Puntuaciones;
import uned.master.java.service.EvaluacionService;
import uned.master.java.service.PuntuacionesService;


@SuppressWarnings({ "rawtypes", "unchecked" })
@RestController
@RequestMapping(value = "/api", headers = "Accept=application/json")
@CrossOrigin(origins = "http://localhost:4200")
public class PuntuacionesController {
	
	@Autowired
	EvaluacionService evaluacionService;

	@Autowired
	PuntuacionesService puntuacionesService;


	/**
	 * Inserta una nueva evaluación
	 * 
	 * @param idRejilla
	 * @return
	 */
	@PostMapping("/insertEvaluacion")
	public ResponseEntity<?> insertEvaluacion(@RequestBody int idRejilla) {
		Evaluacion evaluacion = new Evaluacion(0, idRejilla, "", "");
		int idEvaluacion = evaluacionService.insertEvaluacion(evaluacion);
		
		return new ResponseEntity(idEvaluacion, HttpStatus.CREATED);
	}


	/**
	 * Recupera la lista de evaluciones por usuario
	 * 
	 * @param idRejilla
	 * @return
	 */
	@PostMapping("/getEvaluacionesUsuario")
	public ResponseEntity<?> getEvaluacionesUsuario(@RequestBody int idRejilla) {
		List<Evaluacion> evaluaciones = evaluacionService.getEvaluacionesUsuario(idRejilla);

		return new ResponseEntity(evaluaciones, HttpStatus.CREATED);
	}


	/**
	 * Inserta la puntuaciones introducidas por el usuario
	 * 
	 * @param puntuaciones
	 * @return
	 */
	@PostMapping("/insertPuntuaciones")
	public ResponseEntity<?> insertPuntuaciones(@RequestBody List<Puntuaciones> puntuaciones) {
		puntuacionesService.guardar(puntuaciones);
	
		return new ResponseEntity("Puntuaciones insertadas", HttpStatus.CREATED);
	}


	/**
	 * Inserta el orden de los constructos introducidos por el usuario
	 * 
	 * @param ordenConstructos
	 * @return
	 */
	@PostMapping("/insertOrdenConstructos")
	public ResponseEntity<?> insertOrdenConstructos(@RequestBody List<OrdenConstructos> ordenConstructos) {
		puntuacionesService.guardarOrdenConstructos(ordenConstructos);
		
		return new ResponseEntity("Orden Constructos", HttpStatus.CREATED);
	}


	/**
	 * Recupera las puntuaciones para una evaluación
	 * 
	 * @param idEvaluacion
	 * @return
	 */
	@PostMapping("/getPuntuaciones")
	public ResponseEntity<List<Puntuaciones>> getPuntuaciones(@RequestBody int idEvaluacion) {
		List<Puntuaciones> puntuaciones = puntuacionesService.getPuntuaciones(idEvaluacion);
		
		return new ResponseEntity(puntuaciones, HttpStatus.CREATED);

	}

	/**
	 * Recupera el orden de los constructos para una evaluación
	 * 
	 * @param idEvaluacion
	 * @return
	 */
	@PostMapping("/getOrden")
	public ResponseEntity<?> getOrden(@RequestBody int idEvaluacion) {
		List<OrdenConstructos> orden = puntuacionesService.getOrden(idEvaluacion);

		return new ResponseEntity(orden, HttpStatus.CREATED);
	}
}
