package com.bluesoft.bluesoftbank.service;

import com.bluesoft.bluesoftbank.model.Cuenta;
import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.repository.CuentaRepository;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
public class CuentaService {

    @Autowired
    private CuentaRepository cuentaRepository;

    @Autowired
    private TransaccionRepository transaccionRepository;

    public List<Cuenta> getCuentasByClienteId(Long clienteId) {
        return cuentaRepository.findByCliente_Id(clienteId);
    }

    public Cuenta getCuentaConSaldoMasAlto(Long clienteId) {
        return cuentaRepository.findTopByCliente_IdOrderBySaldoDesc(clienteId);
    }

    public BigDecimal consultarSaldoCuenta(Long cuentaId) {
        Cuenta cuenta = cuentaRepository.findById(cuentaId).orElse(null);
        if (cuenta != null) {
            BigDecimal saldo = cuenta.getSaldo();
            List<Transaccion> transacciones = transaccionRepository.findByCuenta_IdOrderByFechaDesc(cuentaId);

            for (Transaccion transaccion : transacciones) {
                if ("consignacion".equals(transaccion.getTipo())) {
                    saldo = saldo.add(transaccion.getMonto());
                } else if ("retiro".equals(transaccion.getTipo())) {
                    saldo = saldo.subtract(transaccion.getMonto());
                }
            }

            return saldo;
        }
        return null;
    }

    public List<Transaccion> consultarMovimientosMasRecientes(Long cuentaId, int cantidad) {
        return transaccionRepository.findByCuenta_IdOrderByFechaDesc(cuentaId).subList(0, cantidad);
    }


    //generación de extractos:

    public List<Transaccion> generarExtractoMensual(Long cuentaId, int mes) {
        // Obtener el primer y último día del mes
        Date fechaInicio = primerDiaDelMes(mes);
        Date fechaFin = ultimoDiaDelMes(mes);

        // Obtener las transacciones dentro del rango de fechas
        return transaccionRepository.findByCuenta_IdAndFechaBetweenOrderByFechaDesc(cuentaId, fechaInicio, fechaFin);
    }

    private Date primerDiaDelMes(int mes) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.MONTH, mes - 1); // Meses en Calendar van de 0 a 11
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        setTiempoInicioDia(calendar);
        return calendar.getTime();
    }

    private Date ultimoDiaDelMes(int mes) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.MONTH, mes - 1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        setTiempoFinDia(calendar);
        return calendar.getTime();
    }

    private void setTiempoInicioDia(Calendar calendar) {
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
    }

    private void setTiempoFinDia(Calendar calendar) {
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        calendar.set(Calendar.MILLISECOND, 999);
    }
}
