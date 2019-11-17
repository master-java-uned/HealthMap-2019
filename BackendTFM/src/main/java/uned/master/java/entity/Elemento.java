package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "elementos")
public class Elemento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idelemento;
	
	@NotNull
	private String descripcion;
	
	public Elemento() {}

	public Elemento(int idelemento, @NotNull String descripcion) {
		super();
		this.idelemento = idelemento;
		this.descripcion = descripcion;
	}

	public int getIdelemento() {
		return idelemento;
	}

	public void setIdelemento(int idelemento) {
		this.idelemento = idelemento;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
	
}
