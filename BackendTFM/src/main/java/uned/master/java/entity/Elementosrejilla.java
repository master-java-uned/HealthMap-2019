package uned.master.java.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "elementosrejillas")
@IdClass(idElementosRejilla.class)
public class Elementosrejilla {
	@Id
	public int idelemento;
	@Id
	public int idrejilla;
	@NotNull
	public String nombreelemento;
	public String rolelemento;




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
