package com.bluesoft.bluesoftbank.service;

import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.bluesoft.bluesoftbank.model.Cuenta;
import com.bluesoft.bluesoftbank.repository.CuentaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;

@Service
public class TransaccionService {

    @Autowired
    private TransaccionRepository transaccionRepository;

    @Autowired
    private CuentaRepository cuentaRepository;

    public List<Transaccion> getTransaccionesByCuentaId(Long cuentaId) {
        return transaccionRepository.findByCuenta_IdOrderByFechaDesc(cuentaId);
    }

    @Transactional
    public void realizarConsignacion(Long cuentaId, double monto) {
        Cuenta cuenta = cuentaRepository.findById(cuentaId).orElseThrow(() -> new RuntimeException("Cuenta no encontrada"));

        // Validar que el monto de la consignación sea positivo
        if (monto <= 0) {
            throw new RuntimeException("El monto de la consignación debe ser positivo");
        }

        // Crear la transacción de consignación
        Transaccion consignacion = new Transaccion();
        consignacion.setCuenta(cuenta);
        consignacion.setTipo("consignacion");
        consignacion.setMonto(BigDecimal.valueOf(monto));
        consignacion.setFecha(new Date());

        // Actualizar el saldo de la cuenta
        cuenta.setSaldo(cuenta.getSaldo().add(consignacion.getMonto()));

        // Guardar la transacción y actualizar la cuenta en una transacción única
        transaccionRepository.save(consignacion);
        cuentaRepository.save(cuenta);
    }

    @Transactional
    public void realizarRetiro(Long cuentaId, double monto) {
        Cuenta cuenta = cuentaRepository.findById(cuentaId).orElseThrow(() -> new RuntimeException("Cuenta no encontrada"));

        // Validar que el monto del retiro sea positivo y que la cuenta tenga saldo suficiente
        if (monto <= 0 || cuenta.getSaldo().compareTo(BigDecimal.valueOf(monto)) < 0) {
            throw new RuntimeException("Monto de retiro no válido o saldo insuficiente");
        }

        // Crear la transacción de retiro
        Transaccion retiro = new Transaccion();
        retiro.setCuenta(cuenta);
        retiro.setTipo("retiro");
        retiro.setMonto(BigDecimal.valueOf(monto));
        retiro.setFecha(new Date());

        // Actualizar el saldo de la cuenta
        cuenta.setSaldo(cuenta.getSaldo().subtract(retiro.getMonto()));

        // Guardar la transacción y actualizar la cuenta en una transacción única
        transaccionRepository.save(retiro);
        cuentaRepository.save(cuenta);
    }
}


