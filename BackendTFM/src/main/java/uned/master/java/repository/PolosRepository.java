package uned.master.java.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Polos;
import uned.master.java.entity.Rejilla;

public interface PolosRepository extends JpaRepository<Polos, Integer> {
	
	 @Query(value="SELECT * from polos WHERE idrejilla =:idrejilla", nativeQuery = true)
	 List<Polos> findByRejilla(Integer idrejilla);
	
}
