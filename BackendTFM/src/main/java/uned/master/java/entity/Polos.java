package uned.master.java.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity
@Table(name = "polos")
@IdClass(idPolos.class)
public class Polos {
	@Id
	public int idrejilla;
	@Id
	public int idconstructo;
	public String txtpoloizq;
	public String txtpoloder;


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


	public String getTxtpoloizq() {
		return txtpoloizq;
	}


	public void setTxtpoloizq(String txtpoloizq) {
		this.txtpoloizq = txtpoloizq;
	}


	public String getTxtpoloder() {
		return txtpoloder;
	}


	public void setTxtpoloder(String txtpoloder) {
		this.txtpoloder = txtpoloder;
	}

}
