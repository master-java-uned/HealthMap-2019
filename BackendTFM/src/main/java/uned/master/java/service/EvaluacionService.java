package uned.master.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Evaluacion;
import uned.master.java.repository.EvaluacionesRepository;


@Service
@Transactional
public class EvaluacionService {

	@Autowired
	EvaluacionesRepository evaluacionRepository;

	/**
	 * Inserta la evaluacion en la base de datos y devuelve el id
	 * 
	 * @param evaluacion
	 * @return
	 */
	public int insertEvaluacion(Evaluacion evaluacion) {
		Evaluacion newEvaluacion = evaluacionRepository.save(evaluacion);

		return newEvaluacion.getIdevaluacion();
	}

	/**
	 * Recupera las evaluaciones para un id de rejilla y devuelve una lista con
	 * todas ellas
	 * 
	 * @param idRejilla
	 * @return
	 */
	public List<Evaluacion> getEvaluacionesUsuario(int idRejilla) {

		return evaluacionRepository.findByIdRejilla(idRejilla);
	}
}
