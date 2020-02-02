package uned.master.java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Evaluacion;

public interface EvaluacionesRepository extends JpaRepository<Evaluacion, Integer> {

	/**
	 * Consulta las evaluaciones en función de un id de rejilla
	 * 
	 * @param idrejilla
	 * @return
	 */
	@Query(value = "SELECT * from evaluaciones WHERE idrejilla =:idrejilla", nativeQuery = true)
	List<Evaluacion> findByIdRejilla(Integer idrejilla);
}
