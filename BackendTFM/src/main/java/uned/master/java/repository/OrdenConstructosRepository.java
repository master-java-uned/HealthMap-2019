package uned.master.java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.OrdenConstructos;
import uned.master.java.entity.Puntuaciones;

public interface OrdenConstructosRepository  extends JpaRepository<OrdenConstructos, Integer>{
	@Query(value="SELECT * from ordenaciones WHERE idevaluacion =:idevaluacion", nativeQuery = true)
	List<OrdenConstructos> findById(int idevaluacion);
}
