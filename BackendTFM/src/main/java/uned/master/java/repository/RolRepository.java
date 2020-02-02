package uned.master.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uned.master.java.entity.Rol;
import uned.master.java.entity.RolNombre;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long> {
	/**
	 * Obtiene el Rol a partir de nombre
	 * 
	 * @param rolNombre
	 * @return
	 */
	Optional<Rol> findByRolNombre(RolNombre rolNombre);
}