package uned.master.java.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import uned.master.java.DTO.JwtDTO;
import uned.master.java.DTO.LoginUsuario;
import uned.master.java.DTO.Mensaje;
import uned.master.java.entity.Usuario;
import uned.master.java.security.JWT.JwtProvider;
import uned.master.java.service.PolosService;
import uned.master.java.service.UsuarioService;

import java.util.List;

import javax.validation.Valid;

@SuppressWarnings({"rawtypes", "unchecked"})
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

	@Autowired
	UsuarioService usuarioService;
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtProvider jwtProvider;

    /**
     * Comprueba que el usuario y la contraseña coincidan con los datos de la base de datos
     * @param loginUsuario
     * @param bindingResult
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<JwtDTO> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("campos vacíos"), HttpStatus.BAD_REQUEST);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(), loginUsuario.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        Long idUsuario=jwtProvider.getIdUsuario();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        JwtDTO jwtDTO = new JwtDTO(jwt,idUsuario,userDetails.getUsername(), userDetails.getAuthorities());
        return new ResponseEntity<JwtDTO>(jwtDTO, HttpStatus.OK);
    }
    
    /**
     * Obtiene los datos de los pacientes
     * @return
     */
    @PostMapping("/getUsuarios")
    public ResponseEntity<List<Usuario>> getUsuarios(){
    	List<Usuario> usuarios=usuarioService.getUsuarios();
        return new ResponseEntity<List<Usuario>>(usuarios, HttpStatus.OK);
    }
    
}