package uned.master.java.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import uned.master.java.entity.ElementosRejilla;

public interface ElementosUsuarioRepository extends JpaRepository<ElementosRejilla, Integer> {
 
	 @Query(value="SELECT * from elementosrejillas WHERE idrejilla =:idrejilla", nativeQuery = true)
	 List<ElementosRejilla> findByRejilla(Integer idrejilla);
}
