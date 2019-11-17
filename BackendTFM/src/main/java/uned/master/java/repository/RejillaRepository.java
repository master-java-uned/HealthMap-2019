package uned.master.java.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import uned.master.java.entity.Rejilla;


public interface RejillaRepository extends JpaRepository<Rejilla, Integer> {
	 Optional<Rejilla> findById(Integer idRejilla);
}
