package uned.master.java.controller;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import uned.master.java.entity.Constructo;
import uned.master.java.entity.Elemento;
import uned.master.java.entity.ElementosRejilla;
import uned.master.java.entity.Polos;
import uned.master.java.entity.Rejilla;
import uned.master.java.entity.RejillaDatosFront;
import uned.master.java.service.ConstructosService;
import uned.master.java.service.ElementoService;
import uned.master.java.service.ElementosUsuarioService;
import uned.master.java.service.PolosService;
import uned.master.java.service.RejillaService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


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
	@Autowired
	ElementosUsuarioService elementosUsuarioService;


	/* Devuelve las rejillas de un usuario */
	@PostMapping("/getRejillasUser")
	public ResponseEntity<?> getRejillasUser(@RequestBody Long idUsuario) {
		System.out.println("YI-LOG - RejillaController-getRejillasUser - " + idUsuario);
		List<Rejilla> rejillas = rejillaService.getRejillaUser(idUsuario);
		return new ResponseEntity(rejillas, HttpStatus.CREATED);
	}


	/* Inserta una nueva rejilla */
	@PostMapping("/nueva")
	public ResponseEntity<?> nueva(@RequestBody Long idUsuario) {
		Rejilla nuevaRejilla = new Rejilla(0, idUsuario, new Timestamp(System.currentTimeMillis()), null, "", "");
		int newRejilla = rejillaService.guardar(nuevaRejilla);
		System.out.println("YI-LOG - RejillaController-nueva - " + newRejilla);
		return new ResponseEntity(newRejilla, HttpStatus.CREATED);
	}


	static String json = "...";


	/* Inserta una nueva rejilla (elementos y polos) */
	@PostMapping("/nuevaRejilla")
	public ResponseEntity<?> nuevaRejilla(@RequestBody RejillaDatosFront body) {
	//public ResponseEntity<?> nuevaRejilla(@RequestBody Map<String, Object> body) {
		//public ResponseEntity<?> nuevaRejilla(@RequestBody JsonObject body) {
		// public ResponseEntity<?> nuevaRejilla(@RequestBody Long idUsuario, @RequestBody List<ElementosRejilla> elementos, @RequestBody List<Polos> polos) {

		System.out.println("YI-LOG - RejillaController-nuevaRejilla_0 - " + body.toString());
		System.out.println("YI-LOG - RejillaController-nuevaRejilla_1 - " + body.getIdrejilla());
		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2 - " + body.getElementosUsuario());
		System.out.println("YI-LOG - RejillaController-nuevaRejilla_3 - " + body.getPolos());
		System.out.println("YI-LOG - RejillaController-nuevaRejilla_3 - " + body.getPolos().get(0));
		int newRejilla = 0;
		
		
//		List<ElementosRejilla> elementos = new ArrayList<>();

	
//		Integer idUsuarioAux = (Integer) body.get("idUsuario");
//		Long idUsuario = new Long(idUsuarioAux);
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_1 - " + idUsuario);
//		Rejilla nuevaRejilla = new Rejilla(0, idUsuario, new Timestamp(System.currentTimeMillis()), null, "", "");
//		newRejilla = rejillaService.guardar(nuevaRejilla);
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2 - " + newRejilla);
//	
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2A - " + body.get("elementos").toString());
//		ArrayList<String> elementosAux = (ArrayList<String>) body.get("elementos");
//		Iterator<String> it = elementosAux.iterator();
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2A - **");

		
		
//		// mientras al iterador queda proximo juego
//		while (it.hasNext()) {
//			LinkedHashMap<String, String> item = it.next();
//			
//			System.out.println(item);
//		}

//		for (Map.Entry<Integer, ArrayList<String>> entry : elementosAux.entrySet()) {
//			//String key2 = String.valueOf(entry.getKey());
//			Map<String, String> elementosAux2 = (Map<String, String>) entry.getValue();
//			int idElementoAux = Integer.parseInt(elementosAux2.get("idElemento").toString());
//			ElementosRejilla elemento = new ElementosRejilla(idElementoAux, newRejilla, elementosAux2.get("nombreElemento"), elementosAux2.get("rolElemento"));
//			elementos.add(elemento);
//		}
// 	System.out.println("YI-LOG - RejillaController-nuevaRejilla_2B - " + elementos.toString());

		// Collection collectionAux = elementosAux.values();
//		Iterator itrCollectionAux = collectionAux.iterator();
//		while (itrCollectionAux.hasNext()) {
//			ElementosRejilla elemento = new ElementosRejilla(newRejilla, elementoLinkedHashMap.getKey().toString(), elementoLinkedHashMap.getValue().toString());
//			System.out.println(elemento.toString());
//			elementos.add(elemento);
//		}		
//		List<String> keyList = new ArrayList<String>(elementosAux.keySet());
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2B - " + keyList.toString());
//		List<String> valueList = new ArrayList<String>(elementosAux.values());
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2C - " + valueList.toString());
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_2D - " + elementos.toString());

		
//	String name = body.get("idUsuario").toString();
//	System.out.println("YI-LOG - RejillaController-nuevaRejilla_1 - " + name);
//	//List<Planet> planetArtifacts = requestParams.getJSONArray("artifacts").toJavaList(Planet.Class);
	
		
//		elementosUsuarioService.insertElementosUsuario(elementos);
//		List<Polos> polos = (List<Polos>) body.get("polos");
//		System.out.println("YI-LOG - RejillaController-nuevaRejilla_3 - " + polos.toString());
//		polosService.insertConstructos(polos);
		
		
		return new ResponseEntity(newRejilla, HttpStatus.CREATED);
	}


	/* Obtiene los elementos que debe de rellenar el usuario */
	@PostMapping("/getElementos")
	public ResponseEntity<Elemento> getElementos() {
		Elemento elementos[] = new Elemento[12];
		for (int i = 0; i < 12; i++) {
			elementos[i] = elementoService.getElemento(i + 1).get();
		}
		System.out.println("YI-LOG - RejillaController-getElementos - " + ((Elemento) elementos[0]).getIdelemento() + ((Elemento) elementos[0]).getDescripcion());
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
