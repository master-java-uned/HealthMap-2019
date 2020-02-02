package uned.master.java.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uned.master.java.entity.Elemento;
import uned.master.java.entity.Elementosrejilla;

public interface ElementosRepository extends JpaRepository<Elemento, Integer> {

	/**
	 * Obtiene los elementos a partir de su id
	 */
	Optional<Elemento> findById(Integer idElemento);

	/**
	 * Obtiene los elementos de la rejilla a partir del id de la rejilla
	 * 
	 * @param idrejilla
	 * @return
	 */
	@Query(value = "SELECT * from elementosrejillas WHERE idrejilla =:idrejilla", nativeQuery = true)
	List<Elementosrejilla> findByRejilla(Integer idrejilla);
}
