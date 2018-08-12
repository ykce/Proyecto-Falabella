@tag
Feature: Acciones LinkedIn
  como usuario quiero iniciar sesion, visualizar el perfil de uno de mis contactos, acceder a mi perfil y añadir una sección de experiencia laboral

   
 @tag1
  Scenario Outline: Inicio sesión y visualizo el perfil de uno de mis contacto
    Given el usuario está en la página de linkedIn
    When el usuario ingresa el "<usuario>" y "<contraseña>"
    And inicia sesion
    And ingresa a tus contactos y selecciona un contacto
    Then visualizas el perfil de tu contacto
		And cierro sesión
    

Examples: 
      | usuario                    | contraseña      |                                                                 
    	| xxxxxx@gmail.com 		       |  1234				   |	
    	
   @tag2
  Scenario Outline: Inicio sesión y visualizo el perfil de uno de mis contacto
   	Given el usuario está en la página de linkedIn
    When el usuario ingresa el "<usuario>" y "<contraseña>"
    And inicia sesion
    And accedo a mi perfil
    And añado una nueva experiencia con los siguientes datos: "<cargo>" "<compañia>" "<locación>" "<mes_inicio>" "<año_inicio>" "<descripción_posición>"
    Then Se actualiza el perfil con la nueva experiencia
    And cierro sesión
		
    

 Examples: 
      | usuario                    | contraseña      |      cargo   |       compañia       |       locación               |   mes_inicio  |  año_inicio  |descripción_posición      |       
    	|xxxxxx@gmail.com 		       |  1234			     |	Analista QA |Falabella Financiero  |Provincia de Santiago, Chile  |agosto					|				2018   |Desarrollo de proyectos web y mobile, análisis de requerimientos funcionales, pruebas manuales y automatizadas.|
    	
 