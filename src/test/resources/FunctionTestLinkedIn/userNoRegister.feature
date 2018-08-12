@tag
Feature: Logueo usuario no registrado en LinkedIn
  yo quiero loguarme con un correo no registrado en linkedin

 @tag1
  Scenario Outline: Logueo usuario no registrado
    Given el usuario está en la página de linkedIn
    When el usuario ingresa el "<usuario>" y "<contraseña>"
    And inicia sesion
    Then el usuario debería ver el mensaje "<mensaje>"
    

 Examples: 
      | usuario                              | contraseña      |    mensaje  |                                                                   
    #	|hector12@gmail.com										 |karina123456	 	 |Lo sentimos, necesitas restablecer tu contraseña como medida de precaución.|
    	| mariajose1@gmail.com								 |karina123456     |Vaya, no reconocemos esa dirección de correo electrónico. Vuelve a intentarlo.			 |
    