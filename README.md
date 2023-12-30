PRUEBA TÉCNICA DESARROLLADORES


Resuelva esta prueba con sus propios conocimientos, sin buscar respuesta en internet, no esperamos que todas las respuestas sean correctas, esto nos permite identificar mejor sus capacidades y plantear un plan de carrera 


1.	Explique en sus propias palabras y de un ejemplo de los siguientes conceptos / principios de software



| Concepto                     | Explicación                                               | Ejemplo                                                                                                              |
|----------------------------- |-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Bajo acoplamiento / Alta cohesión | Bajo acoplamiento / Alta cohesión, son principios del diseño de software, que em donde el bajo acoplamiento significa que los módulos de un sistema no deben depender mucho entre sí. La alta cohesión es donde los elementos dentro de un módulo si están relacionadas entre sí. | Un ejemplo que puede ser es el sistema de gestión para una biblioteca, dónde este tiene un módulo para la gestión de los libros y otro para los usuarios, el módulo de los libros no depende del módulo para usuarios, pero, las funciones dentro de módulo de los libros están cohesionadas con los del usuario. |
| Thread safety               | Thread safety cuando un programa o un componente, usa entornos de programación concurrentes, donde se usan varios para acceder y/o manipular datos compartidos. | Un ejemplo que se puede usar es el de un banco, donde varios usuarios están haciendo varias transacciones simultáneamente y se debe garantizar que cuando se actualiza las cuentas que se están usando se hagan de manera segura. |
| Acoplamiento                | El acoplamiento es el nivel de independencia entre los módulos del sistema.  | Un ejemplo es la gestión de inventarios, donde los informes del inventario no se afecta si se actualiza la información del inventario.  |
| Polimorfismo                | El polimorfismo es cuando se permite que los objetos de varios tipos puedan  responder a la misma interfaz de igual manera. | Un ejemplo puede ser con el gato y el perro. Ambos son dos clases distintas, y  pueden heredar una clase, Animal, lo que significa que comparte una misma interfaz.                                       |


2.	Escriba un fragmento de código que solucione el siguiente problema, puede utilizar cualquier lenguaje de programación

Problema:

rotar a la derecha m veces los elementos de un arreglo, donde m >= 0 y el arreglo tiene tamaño n, donde n >= 0. Note que no se pierden elementos en el arreglo.


| Ejemplo        | Valor de m | Resultado     |
|----------------|------------|---------------|
| arr[1,2,3,4]   | m = 1      | arr[4,1,2,3]  |
| arr[1,2,3,4]   | m = 2      | arr[3,4,1,2]  |
| arr[1,2,3,4]   | m = 3      | arr[2,3,4,1]  |
| arr[1,2,3,4]   | m = 4      | arr[1,2,3,4]  |


Solución:

    public class RotateArray {
    public static void main(String[] args) {
        // Ejemplos de uso
        int[] arr1 = {1, 2, 3, 4};
        rotateArray(arr1, 1);
        printArray(arr1);  // Salida: [4, 1, 2, 3]

        int[] arr2 = {1, 2, 3, 4};
        rotateArray(arr2, 2);
        printArray(arr2);  // Salida: [3, 4, 1, 2]

        int[] arr3 = {1, 2, 3, 4};
        rotateArray(arr3, 3);
        printArray(arr3);  // Salida: [2, 3, 4, 1]

        int[] arr4 = {1, 2, 3, 4};
        rotateArray(arr4, 4);
        printArray(arr4);  // Salida: [1, 2, 3, 4]
    }

    public static void rotateArray(int[] arr, int m) {
        int n = arr.length;
        
        // Asegurarse de que m no sea mayor que n
        m = m % n;
        
        // Realizar la rotación
        int[] rotatedArr = new int[n];
        System.arraycopy(arr, n - m, rotatedArr, 0, m);
        System.arraycopy(arr, 0, rotatedArr, m, n - m);
        
        // Copiar el resultado de vuelta al arreglo original
        System.arraycopy(rotatedArr, 0, arr, 0, n);
    }

    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
    }


3.	Caso Bluesoft Bank

Bluesoft Bank es un banco tradicional que se encarga de guardar el dinero de sus ahorradores, ofrece dos tipos de cuenta; ahorros para personas naturales y corrientes para empresas. Adicionalmente para cada cuenta se pueden hacer consignaciones y retiros.

Adicionalmente tiene que soportar algunos requerimientos para sus ahorradores:

-	Consultar el saldo de la cuenta
-	Consultar los movimientos más recientes
-	Generar extractos mensuales

Reglas de negocio:

-	Una cuenta no puede tener un saldo negativo.
-	El saldo de la cuenta siempre debe ser consistente frente a dos operaciones concurrentes (consignación, retiro)

También se deben generar reportes en tiempo real como:

-	Listado de clientes con el número de transacciones para un mes es particular, organizado descendentemente (primero el cliente con mayor # de transacciones en el mes)
-	Clientes que retiran dinero fuera de la ciudad de origen de la cuenta con el valor total de los retiros realizados superior a $1.000.000.

En base a lo anterior, por favor dar respuesta a los siguientes puntos:

-	Cree un diagrama de clases que modelo el problema, identifica los elementos principales y sus relaciones.
-	Qué arquitectura y tecnologías usaría para resolver el caso Bluesoft Bank
-	Subir la implementación del caso a un repositorio público y compartir enlace




