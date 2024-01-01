package com.bluesoft.bluesoftbank.controller;

import com.bluesoft.bluesoftbank.model.Cuenta;
import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.service.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/cuentas")
public class CuentaController {

    @Autowired
    private CuentaService cuentaService;

    @GetMapping("/cliente/{clienteId}")
    public List<Cuenta> getCuentasByClienteId(@PathVariable Long clienteId) {
        return cuentaService.getCuentasByClienteId(clienteId);
    }

    @GetMapping("/cliente/{clienteId}/saldo-mas-alto")
    public Cuenta getCuentaConSaldoMasAlto(@PathVariable Long clienteId) {
        return cuentaService.getCuentaConSaldoMasAlto(clienteId);
    }

    @GetMapping("/{cuentaId}/saldo")
    public BigDecimal consultarSaldoCuenta(@PathVariable Long cuentaId) {
        return cuentaService.consultarSaldoCuenta(cuentaId);
    }

    @GetMapping("/{cuentaId}/movimientos-recientes")
    public List<Transaccion> consultarMovimientosMasRecientes(@PathVariable Long cuentaId, @RequestParam int cantidad) {
        return cuentaService.consultarMovimientosMasRecientes(cuentaId, cantidad);
    }
}

