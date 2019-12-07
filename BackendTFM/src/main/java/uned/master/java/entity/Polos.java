package uned.master.java.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "polos")
public class Polos {



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	
	public int idrejilla;
	
	public int idconstructo;
	
	public String txtpoloizq;
	
	public String txtpoloder;
	public Polos() {}
	

	public int getIdrejilla() {
		return idrejilla;
	}

	public void setIdrejilla(int idrejilla) {
		this.idrejilla = idrejilla;
	}

	public int getIdconstructo() {
		return idconstructo;
	}

	public void setIdconstructo(int idconstructo) {
		this.idconstructo = idconstructo;
	}

	public String getTxtpoloizquierdo() {
		return txtpoloizq;
	}

	public void setTxtpoloizquierdo(String txtpoloizquierdo) {
		this.txtpoloizq = txtpoloizquierdo;
	}

	public String getTxtpoloderecho() {
		return txtpoloder;
	}

	public void setTxtpoloderecho(String txtpoloderecho) {
		this.txtpoloder = txtpoloderecho;
	}

	
	
	
}
