package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
}
