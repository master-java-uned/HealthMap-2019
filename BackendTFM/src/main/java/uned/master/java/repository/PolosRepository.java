package uned.master.java.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Polos;

public interface PolosRepository extends JpaRepository<Polos, Integer> {

	/**
	 * Obtiene los polos a partir del id de rejilla
	 * 
	 * @param idrejilla
	 * @return
	 */
	@Query(value = "SELECT * from polos WHERE idrejilla =:idrejilla", nativeQuery = true)
	List<Polos> findByRejilla(Integer idrejilla);

}
