package uned.master.java.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Rol;
import uned.master.java.entity.RolNombre;
import uned.master.java.repository.RolRepository;

import java.util.Optional;

@Service
@Transactional
public class RolService {

	@Autowired
	RolRepository rolRepository;

	/**
	 * Obtiene el rol a partir de nombre
	 * 
	 * @param rolNombre
	 * @return
	 */
	public Optional<Rol> getByRolNombre(RolNombre rolNombre) {
		return rolRepository.findByRolNombre(rolNombre);
	}
}
