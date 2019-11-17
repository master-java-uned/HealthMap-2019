package uned.master.java.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import uned.master.java.entity.Elemento;


public interface ElementosRepository extends JpaRepository<Elemento, Integer> {
	 Optional<Elemento> findById(Integer idElemento);
}
