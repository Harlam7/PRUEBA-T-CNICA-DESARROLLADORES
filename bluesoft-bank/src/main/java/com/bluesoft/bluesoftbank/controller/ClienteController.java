package com.bluesoft.bluesoftbank.controller;

import com.bluesoft.bluesoftbank.model.Cliente;
import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.service.ClienteService;
import com.bluesoft.bluesoftbank.utils.UtilidadesPruebas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private TransaccionRepository transaccionRepository;


    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @GetMapping("/mayor-numero-transacciones-mes")
    public List<Cliente> getClientesConMasTransaccionesEnMes(int mes) {
        try {
            // Obtener todas las transacciones del mes
            List<Transaccion> transaccionesDelMes = transaccionRepository.findByFechaBetween(
                    UtilidadesPruebas.primerDiaDelMes(mes),
                    UtilidadesPruebas.ultimoDiaDelMes(mes)
            );

            // Contar transacciones por cliente
            Map<Cliente, Long> transaccionesPorCliente = transaccionesDelMes.stream()
                    .collect(Collectors.groupingBy(
                            transaccion -> transaccion.getCuenta().getCliente(),
                            Collectors.counting()
                    ));

            // Ordenar clientes por número de transacciones en orden descendente
            return transaccionesPorCliente.entrySet().stream()
                    .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                    .map(Map.Entry::getKey)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            // Manejo de excepciones
            throw new RuntimeException("Error al obtener clientes con más transacciones en el mes", e);
        }
    }

}

