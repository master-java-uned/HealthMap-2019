package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "elementosrejillas")
public class ElementosRejilla {

	@Id
	private int idelemento;
	
	private int idrejilla;
	
	@NotNull
	private String nombreElemento;
	
	private String rolElemento;
}
