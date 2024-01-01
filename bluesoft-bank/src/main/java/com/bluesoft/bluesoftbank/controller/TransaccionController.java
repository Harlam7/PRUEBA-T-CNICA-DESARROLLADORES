package com.bluesoft.bluesoftbank.controller;

import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.service.TransaccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/transacciones")
public class TransaccionController {

    @Autowired
    private TransaccionService transaccionService;

    @GetMapping("/cuenta/{cuentaId}")
    public List<Transaccion> getTransaccionesByCuentaId(@PathVariable Long cuentaId) {
        return transaccionService.getTransaccionesByCuentaId(cuentaId);
    }

    @PostMapping("/consignacion")
    public void realizarConsignacion(@RequestParam Long cuentaId, @RequestParam double monto) {
        transaccionService.realizarConsignacion(cuentaId, monto);
    }

    @PostMapping("/retiro")
    public void realizarRetiro(@RequestParam Long cuentaId, @RequestParam double monto) {
        transaccionService.realizarRetiro(cuentaId, monto);
    }
}
