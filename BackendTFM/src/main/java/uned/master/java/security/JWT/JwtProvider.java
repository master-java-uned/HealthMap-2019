package uned.master.java.security.JWT;

import io.jsonwebtoken.*;
import uned.master.java.security.UsuarioPrincipal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * 
 * Clase donde se crea el token, se valida y se extrae el nombre del usuario.
 */
@Component
public class JwtProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.expiration}")
	private int expiration;

	private Long idUsuario;

	/**
	 * Genera el token
	 * 
	 * @param authentication
	 * @return
	 */
	public String generateToken(Authentication authentication) {
		UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
		setIdUsuario(usuarioPrincipal.getId());
		return Jwts.builder().setSubject(usuarioPrincipal.getUsername()).setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime() + expiration * 1000))
				.signWith(SignatureAlgorithm.HS512, secret).compact();
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombreUsuarioFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
	}

	/**
	 * Valida el token
	 * 
	 * @param token
	 * @return
	 * @throws Exception
	 */
	public boolean validateToken(String token) throws Exception {
		try {
			Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			logger.error("Se ha producido un error en el token " + e.getMessage());
		}
		return false;
	}
}