package uned.master.java.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "constructos")
public class Constructo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idconstructo;
	private String txtpregunta;
	private int idelemento1;
	private int idelemento2;
	private String tipopregunta;


	public Constructo() {
	}


	public Constructo(int idconstructo, String txtpregunta, int idelemento1, int idelemento2, String tipopregunta) {
		super();
		this.idconstructo = idconstructo;
		this.txtpregunta = txtpregunta;
		this.idelemento1 = idelemento1;
		this.idelemento2 = idelemento2;
		this.tipopregunta = tipopregunta;
	}


	public int getIdConstructo() {
		return idconstructo;
	}


	public void setIdConstructo(int idConstructo) {
		this.idconstructo = idConstructo;
	}


	public String getTxtpregunta() {
		return txtpregunta;
	}


	public void setTxtpregunta(String txtpregunta) {
		this.txtpregunta = txtpregunta;
	}


	public int getIdelemento1() {
		return idelemento1;
	}


	public void setIdelemento1(int idelemento1) {
		this.idelemento1 = idelemento1;
	}


	public int getIdelemento2() {
		return idelemento2;
	}


	public void setIdelemento2(int idelemento2) {
		this.idelemento2 = idelemento2;
	}


	public String getTipopregunta() {
		return tipopregunta;
	}


	public void setTipopregunta(String tipopregunta) {
		this.tipopregunta = tipopregunta;
	}

}
