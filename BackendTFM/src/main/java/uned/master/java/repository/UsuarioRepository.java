package uned.master.java.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import uned.master.java.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByNombreUsuario(String nu);
    
    @Query(value="SELECT * from usuario WHERE id IN (SELECT usuario_id FROM usuario_rol WHERE  rol_id=:rolId)", nativeQuery = true)
    List<Usuario> findByRol(Long rolId);
    
}