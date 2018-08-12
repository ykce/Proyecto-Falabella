
@tag
Feature: Compra productos a través del carrito
  como usuario quiero buscar un producto para añadirlo al carrito y realizar la compra

#prioridad 3: dado que no es una funcionalidad tan critica ni tan compleja
  
  #Escenario aplica para aquellos casos donde la busqueda se haga a través del buscador de la pagina retail
  @tag1
  Scenario Outline: busco un producto para seleccionarlo
    Given el usuario está en la página retail
    When ingresa el "<producto>" a buscar
    Then genera el resultado de la busqueda del producto

    Examples: 
     | producto              | 
     | camisa                | 
     | televisor             | 
      

#prioridad 2: dado que es una funcionalidad que requiere muchas validaciones en cuanto a verificar si las caracteristicas mostradas al seleccionar el producto son las mismas,
#verificaciones en BD según stock de productos, actualizaciones de BD 
#verificaciones en cuanto a la funcionalidad de agregar y ver bolsa del producto (botones)

# este escenario aplica para los casos donde el producto buscado sea tecnología o juguete para bebe (dado que sólo solicita ingresar la cantidad a solicitar)
  @tag2
  Scenario Outline: selecciono un producto para añadir al carrito
     Given el usuario visualiza el resultado de la busqueda
    When selecciona el producto deseado
    And ingresa la "<cantidad>" a solicitar del producto
    And Añade el producto al carrito
    And visualiza la bolsa de compra
    Then visualiza el resumen de la orden de compra

    Examples: 
       | cantidad | 
       |       1  |
      
      
 #prioridad 1: dado que es una funcionalidad critica para el negocio en cuanto a temas de seguridad de información, dado que si se tiene vulnerabilidades podría acarrear pérdidas de dinero, imagen, clientes
 # debe verificar con cada una de las alternativas de pago, ya que sus caracteristicas son diferentes
 # validaciones de campos en cuanto formatos válidos y permitidos

#este escenario aplica para los casos donde se seleccione como medio de pago tarjeta de crédito
 @tag3
  Scenario Outline: realizo pago para la compra del producto con medio de pago tarjeta de crédito
    Given el usuario visualiza el resumen compra
    When selecciona comprar el producto
    And selecciona  pagar de producto
    And selecciona medio de pago del producto
    And ingresa "<nombre>" pagador
    And ingresa "<apellido>" pagador
    And ingresa "<identificacion>" pagador
    And ingresa "<número tarjeta>" pagador
    And ingresa "<mes vencimiento tarjeta>" pagador
     And ingresa "<año vencimiento tarjeta>" pagador
   	And selecciona ingresar orden de compra
    Then el usuario deberia visualizar el "<mensaje>" del resultado de la compra

    Examples: 
    | nombre | apellido   |identificacion |número de tarjeta |mes vencimiento tarjeta|año vencimiento tarjeta | mensaje                                    |
    | karina | cardenas   |2728765493     |4356678904563216  |         09            |      22                |su orden ha sido registrada exitosamente.   |
     
     