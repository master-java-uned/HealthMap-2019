package uned.master.java.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Usuario;
import uned.master.java.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Optional<Usuario> getByNombreUsuario(String nu){
        return usuarioRepository.findByNombreUsuario(nu);
    }
    
    public List<Usuario> getUsuarios(){
    	Integer rol=2;
    	Long rolId=rol.longValue();
    	return usuarioRepository.findByRol(rolId);
    }

}
