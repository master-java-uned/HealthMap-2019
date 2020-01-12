package uned.master.java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Puntuaciones;
import uned.master.java.entity.Rejilla;

public interface PuntuacionesRepository  extends JpaRepository<Puntuaciones, Integer>{
	@Query(value="SELECT * from puntuaciones WHERE idevaluacion =:idevaluacion", nativeQuery = true)
	List<Puntuaciones> findById(int idevaluacion);
}
