package com.bluesoft.bluesoftbank.repository;

import com.bluesoft.bluesoftbank.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    // Puedes agregar consultas personalizadas aquí si es necesario
    List<Cliente> findByCiudadOrigen(String ciudadOrigen);
}

