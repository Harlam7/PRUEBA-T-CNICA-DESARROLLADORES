package com.bluesoft.bluesoftbank.repository;

import com.bluesoft.bluesoftbank.model.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TransaccionRepository extends JpaRepository<Transaccion, Long> {
    List<Transaccion> findByCuenta_IdOrderByFechaDesc(Long cuentaId);
    List<Transaccion> findByFechaBetween(Date fechaInicio, Date fechaFin);
    List<Transaccion> findByCuenta_IdAndFechaBetweenOrderByFechaDesc(Long cuentaId, Date fechaInicio, Date fechaFin);


}

