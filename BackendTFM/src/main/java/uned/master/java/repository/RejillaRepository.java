package uned.master.java.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import uned.master.java.entity.Rejilla;


public interface RejillaRepository extends JpaRepository<Rejilla, Integer> {
	 Optional<Rejilla> findById(Integer idRejilla);
	 
	 @Query(value="SELECT * from rejillas WHERE idpaciente =:idUsuario", nativeQuery = true)
	 List<Rejilla> findByIdUsuario(Long idUsuario);
}
