package uned.master.java.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "elementosrejillas")
@IdClass(idElementosRejilla.class)
public class ElementosRejilla {
	@Id
	private int idelemento;
	@Id
	private int idrejilla;
	@NotNull
	private String nombreelemento;
	private String rolelemento;


	public ElementosRejilla() {
	}


	public ElementosRejilla(int idelemento, int idrejilla, @NotNull String nombreelemento, String rolelemento) {
		super();
		this.idelemento = idelemento;
		this.idrejilla = idrejilla;
		this.nombreelemento = nombreelemento;
		this.rolelemento = rolelemento;
	}


	public ElementosRejilla(int idrejilla, @NotNull String nombreelemento, String rolelemento) {
		super();
		this.idrejilla = idrejilla;
		this.nombreelemento = nombreelemento;
		this.rolelemento = rolelemento;
	}


	public ElementosRejilla(@NotNull String nombreelemento, String rolelemento) {
		super();
		this.nombreelemento = nombreelemento;
		this.rolelemento = rolelemento;
	}


	public int getIdelemento() {
		return idelemento;
	}


	public void setIdelemento(int idelemento) {
		this.idelemento = idelemento;
	}


	public int getIdrejilla() {
		return idrejilla;
	}


	public void setIdrejilla(int idrejilla) {
		this.idrejilla = idrejilla;
	}


	public String getNombreelemento() {
		return nombreelemento;
	}


	public void setNombreelemento(String nombreelemento) {
		this.nombreelemento = nombreelemento;
	}


	public String getRolelemento() {
		return rolelemento;
	}


	public void setRolelemento(String rolelemento) {
		this.rolelemento = rolelemento;
	}
}
