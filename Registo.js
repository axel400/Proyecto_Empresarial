function iniciarSesion(usuario,password){
    verificarUsuario=usuarioIS.includes(usuario);
    verificarPassword=passwordIS.includes(password);
    posicionUsuario=usuarioIS.indexOf(usuario);
    nombreMostrar=nombreRegistro[posicionUsuario];
    if(usuario == null || usuario == "" || verificarUsuario == false){
       alert("¡Usuario incorrecto!");
    }
    if(password == null || password == "" || verificarPassword == false){
       alert("¡Contraseña incorrecta!");
    }
    if(verificarUsuario == true && verificarPassword == true){
       alert("Bienvenid@ "+nombreMostrar);
       window.location="Inicio.html";
    }
    return false;
 }
 
 function formularioRegistro(nombre,apellido,usuarioRegistro,claveRegistro,sexo,fechaNacimiento,paisResidencia){
    if(nombre == '' || apellido == '' || usuarioRegistro == '' || claveRegistro == '' || sexo == '' || fechaNacimiento =='' || paisResidencia ==''){
       alert("¡Todos los datos deben estar ingresados!")
    }else{
       usuarioIS.push(usuarioRegistro);
       passwordIS.push(claveRegistro);
       nombreRegistro.push(nombre);
       apellidoRegistro.push(apellido);
       sexoRegistro.push(sexo);
       fechaNacimientoRegistro.push(fechaNacimiento);
       paisResidenciaRegistro.push(paisResidencia);
       console.log(usuarioIS);
       alert("¡Felicitades! Ya te encuentras registrad@");
    } 
    return false;  
 }
 function cerrarSesion(){
    alert("Gracias por tu visita, regresa pronto");
    window.location="index.html";
 }
 
 var usuarioIS=['usuario1','usuario2'];
 var passwordIS=['contraseña1','contraseña2'];
 var nombreRegistro=['nombre1','nombre2']; 
 var apellidoRegistro=['apellido1','apellido2'];
 var sexoRegistro=['sexo1','sexo2'];
 var fechaNacimientoRegistro=['1999-10-18','1996-05-09'];
 var paisResidenciaRegistro=['Ecuador','Ecuador'];
 function enviarComentario(comentario){
    guardarComentario.push(comentario);
    console.log(guardarComentario);
 }
 
 var guardarComentario=[];
 