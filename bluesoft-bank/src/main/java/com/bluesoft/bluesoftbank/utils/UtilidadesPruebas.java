package com.bluesoft.bluesoftbank.utils;


import java.util.Calendar;
import java.util.Date;

public class UtilidadesPruebas {

    public static Date primerDiaDelMes(int mes) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.MONTH, mes - 1); // Calendar.MONTH es base 0, por eso restamos 1
        cal.set(Calendar.DAY_OF_MONTH, 1);
        return cal.getTime();
    }

    public static Date ultimoDiaDelMes(int mes) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.MONTH, mes - 1);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
        return cal.getTime();
    }
}
