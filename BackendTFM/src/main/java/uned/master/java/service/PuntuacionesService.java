package uned.master.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.OrdenConstructos;
import uned.master.java.entity.Puntuaciones;
import uned.master.java.repository.OrdenConstructosRepository;
import uned.master.java.repository.PuntuacionesRepository;

@Service
@Transactional
public class PuntuacionesService {

	@Autowired
	PuntuacionesRepository puntuacionesRepository;

	@Autowired
	OrdenConstructosRepository ordenRepository;

	/**
	 * Inserta las puntuaciones en la base de datos
	 * 
	 * @param puntuaciones
	 */
	public void guardar(List<Puntuaciones> puntuaciones) {
		for (Puntuaciones puntuacion : puntuaciones) {
			puntuacionesRepository.save(puntuacion);
		}
	}

	/**
	 * Inserta el orden de los constructos en la base de datos
	 * 
	 * @param ordenConstructos
	 */
	public void guardarOrdenConstructos(List<OrdenConstructos> ordenConstructos) {
		for (OrdenConstructos orden : ordenConstructos) {
			ordenRepository.save(orden);
		}
	}

	/**
	 * Obtiene las puntuaciones a partir del id de evaluación
	 * 
	 * @param idEvaluacion
	 * @return
	 */
	public List<Puntuaciones> getPuntuaciones(int idEvaluacion) {
		return puntuacionesRepository.findById(idEvaluacion);
	}

	/**
	 * Obtiene el orden de los constructos a partir del id de evaluación
	 * 
	 * @param idEvaluacion
	 * @return
	 */
	public List<OrdenConstructos> getOrden(int idEvaluacion) {
		return ordenRepository.findById(idEvaluacion);
	}

}
