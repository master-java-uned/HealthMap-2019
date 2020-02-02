package uned.master.java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Elementosrejilla;

public interface ElementosUsuarioRepository extends JpaRepository<Elementosrejilla, Integer> {

	/**
	 * Obtiene los elementos a partir del id de rejilla
	 * 
	 * @param idrejilla
	 * @return
	 */
	@Query(value = "SELECT * from elementosrejillas WHERE idrejilla =:idrejilla", nativeQuery = true)
	List<Elementosrejilla> findByRejilla(Integer idrejilla);
}
