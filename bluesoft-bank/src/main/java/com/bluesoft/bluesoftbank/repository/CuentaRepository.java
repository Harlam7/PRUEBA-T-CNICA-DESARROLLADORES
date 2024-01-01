package com.bluesoft.bluesoftbank.repository;

import com.bluesoft.bluesoftbank.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CuentaRepository extends JpaRepository<Cuenta, Long> {
    List<Cuenta> findByCliente_Id(Long clienteId);
    Cuenta findTopByCliente_IdOrderBySaldoDesc(Long clienteId);
}

