#se parte del supuesto que el proceso aumentar cupo tarjeta de crédito se realiza teniendo en cuenta unos criterios según el tipo de cliente:
#cliente antiguo: capacidad de endeudamiento, capacidad de pago y comportamiento con respecto a los pagos
#cliente nuevo: se realiza teniendo en cuenta su capacidad de endeudamiento
#NOTA: para la capacidad de endeudamiento se le solicitan unos documentos para validar sus ingresos
#se tendrán en cuenta casos exitosos como casos fallidos, se probará sólo la funcionalidad de aumento de cupo, prtiendo del supuesta que 
#el login del usuario, funciona
#casos exitoso: realizar el escenario de manera completa de principio a fin con datos validos y no validos de tal manera que el resultado obtenido sea el esperado
# casos fallidos:no seleccionar tarjeta, de tal manera que no habilite la opción aumnetar cupo
# seleccionar la tarjeta, habilita opción aumentar cupo pero no seleccionar está para que no permita continuar el proceso
# no seleccionar cargar docuemntos, de tal manera que no habilite para el cargue de los mismos
# seleccionar cargar docuemntos, pero no cargarlos, de tal manera que no permita continuar el proceso
#cargar los documentos, de tal manera que habilite opción aumentar cupo, pero no seleccionar está, de tal manera que no permita continuar proceso
@tag
Feature: Aumento cupo Tarjeta de crédito
  como usuario quiero aumentar el cupo de la tareta de crédito para poder realizar más utilizaciones


  @tag2
  Scenario Outline: Aumento cupo Tarjeta crédito cliente nuevo
    Given el usuario está en la página del banco y selecciono cuenta 
    When ingreso rut "<rut>" y clave "<clave>"
    And presiono ingresar
    And selecciono la opción productos y consultar tarjetas
    And selecciono la tarjeta a la que aumentaré el cupo
    And selecciono opción solicitar aumento de cupo
    And selecciono los documentos solicitados
    And cargo los documentos solicitados
    And presiono solicitar aumento
    Then el usuario debería ver un mensaje "<mensaje>"

    Examples: 
      | rut      | clave | mensaje  |
      | 23456781 | 1234  | success  |
      | 2345678k | 2332  | Fail     |

        @tag3
  Scenario Outline: Aumento cupo Tarjeta crédito cliente antiguo
    Given el usuario está en la página del banco y selecciono cuenta 
    When ingreso rut "<rut>" y clave "<clave>"
    And presiono ingresar
    And selecciono la opción productos y consultar tarjetas
    And selecciono la tarjeta a la que aumentaré el cupo
    And selecciono opción solicitar aumento de cupo
    And presiono solicitar aumento
    Then el usuario debería ver un mensaje "<mensaje>"

    Examples: 
      | rut      | clave | mensaje  |
      | 26896781 | 1234  | success  |
      | 2207678k | 2332  | Fail     |