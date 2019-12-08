package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ordenaciones")
public class OrdenConstructos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	
	public int idevaluacion;
	
	public int idconstructo;
	
	public int ordenconstructo;

	public OrdenConstructos() {}
	
	
	public OrdenConstructos(int id, int idevaluacion, int idconstructo, int ordenconstructo) {
		super();
		this.id = id;
		this.idevaluacion = idevaluacion;
		this.idconstructo = idconstructo;
		this.ordenconstructo = ordenconstructo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdevaluacion() {
		return idevaluacion;
	}

	public void setIdevaluacion(int idevaluacion) {
		this.idevaluacion = idevaluacion;
	}

	public int getIdconstructo() {
		return idconstructo;
	}

	public void setIdconstructo(int idconstructo) {
		this.idconstructo = idconstructo;
	}

	public int getOrdenconstructo() {
		return ordenconstructo;
	}

	public void setOrdenconstructo(int ordenconstructo) {
		this.ordenconstructo = ordenconstructo;
	}
	
	
}
