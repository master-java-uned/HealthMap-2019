package uned.master.java.entity;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class Jwt {
	private String token;
	private String bearer = "Bearer";
	private String nombreUsuario;
	private Long idUsuario;
	private Collection<? extends GrantedAuthority> authorities;

	public Jwt(String token, Long idUsuario, String nombreUsuario, Collection<? extends GrantedAuthority> authorities) {
		this.token = token;
		this.idUsuario = idUsuario;
		this.nombreUsuario = nombreUsuario;
		this.authorities = authorities;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getBearer() {
		return bearer;
	}

	public void setBearer(String bearer) {
		this.bearer = bearer;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
}
