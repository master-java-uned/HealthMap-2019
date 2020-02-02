package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "ordenaciones")
@IdClass(idOrdenConstructos.class)
public class OrdenConstructos {

	@Id
	public int idevaluacion;

	@Id
	public int idconstructo;

	public int ordenconstructo;

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
