package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Usuario;



@Repository

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{

}
