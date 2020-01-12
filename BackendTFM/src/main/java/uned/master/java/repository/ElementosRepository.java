package uned.master.java.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Elemento;
import uned.master.java.entity.ElementosRejilla;
import uned.master.java.entity.Polos;


public interface ElementosRepository extends JpaRepository<Elemento, Integer> {
	 Optional<Elemento> findById(Integer idElemento);
	 
	 @Query(value="SELECT * from elementosrejillas WHERE idrejilla =:idrejilla", nativeQuery = true)
	 List<ElementosRejilla> findByRejilla(Integer idrejilla);
}
