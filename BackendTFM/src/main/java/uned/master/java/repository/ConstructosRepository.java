package uned.master.java.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import uned.master.java.entity.Constructo;


public interface ConstructosRepository extends JpaRepository<Constructo, Integer> {
	
	/**
	 * Obtiene los constructos a partir de su id 
	 */
	Optional<Constructo> findById(Integer idConstructo);
}
